import { Clock } from './core/Clock.js';
import { CameraManager } from './core/CameraManager.js';
import { SceneManager } from './core/SceneManager.js';
import { Renderer } from './core/Renderer.js';
import { PostProcessingPipeline } from './core/PostProcessingPipeline.js';
import { InputSystem } from './controllers/InputSystem.js';
import { MovementSystem } from './systems/MovementSystem.js';
import { FireworkSystem } from './systems/FireworkSystem.js';
import { TrailSystem } from './systems/TrailSystem.js';
import { CometSystem } from './systems/CometSystem.js';
import { SkyLightReactionSystem } from './systems/SkyLightReactionSystem.js';
import { SmokeSystem } from './systems/SmokeSystem.js';
import { AudioSystem } from './systems/AudioSystem.js';
import { FireworkSequencer } from './directors/FireworkSequencer.js';
import { ShowDirector } from './directors/ShowDirector.js';
import { DroneSystem } from './systems/DroneSystem.js';
import { DroneShowSequencer } from './directors/DroneShowSequencer.js';
import { TimelineEditor } from './ui/TimelineEditor.js';
import { renderingConfig } from './config/rendering.js';
import './style.css';

// Initialize Core ECS Boilerplate
const clock = new Clock();
const renderer = new Renderer();
const cameraManager = new CameraManager();
const sceneManager = new SceneManager();
const trailSystem = new TrailSystem(sceneManager.instance);
const fireworkSystem = new FireworkSystem(sceneManager.instance, trailSystem);
const smokeSystem = new SmokeSystem(sceneManager);
const skyLightReactionSystem = new SkyLightReactionSystem(sceneManager);
const cometSystem = new CometSystem(sceneManager.instance, trailSystem, smokeSystem);
// const audioSystem = new AudioSystem(cameraManager);
// audioSystem.preload();
const audioSystem = null;
const postProcessing = renderingConfig.post.enabled
  ? new PostProcessingPipeline(renderer.instance, sceneManager.instance, cameraManager.instance, renderingConfig)
  : null;

if (postProcessing) {
  renderer.addResizeListener((width, height, pixelRatio) => {
    postProcessing.setSize(width, height, pixelRatio);
  });
}


// Initialize Systems
const inputSystem = new InputSystem(cameraManager.instance, renderer.instance.domElement, fireworkSystem);
const movementSystem = new MovementSystem(inputSystem, cameraManager.instance);

const droneSystem = new DroneSystem(sceneManager);
const droneSequencer = new DroneShowSequencer(droneSystem);
// Note: We no longer auto-play demo sequence because ShowDirector manages it


const fireworkSequencer = new FireworkSequencer(fireworkSystem, cometSystem);
const showDirector = new ShowDirector(fireworkSequencer, fireworkSystem);
showDirector.droneSequencer = droneSequencer;
const timelineEditor = new TimelineEditor(showDirector);

// The show script loading is now handled in InputSystem

// Expose to input system or global for triggering
inputSystem.showDirector = showDirector;
inputSystem.timelineEditor = timelineEditor;

// Document-wide first-click audio resume
document.addEventListener('click', () => {
  if (audioSystem) audioSystem.resume();
}, { once: true });

// Canvas click triggers fireworks (bubbles up from pointer-events: none empty spaces on overlay)
renderer.instance.domElement.addEventListener('click', () => {
  if (audioSystem) audioSystem.resume();
  if (!inputSystem.isPaused()) {
    const preset = inputSystem.getSelectedPreset();
    if (preset && preset.type === 'comet_cluster') {
      cometSystem.launchRandom(preset, { effectOverrides: { instantBurst: false } });
    } else {
      fireworkSystem.launchRandom(preset, { effectOverrides: { instantBurst: false } });
    }
  }
});

// --- Enterprise UI & Zen Mode Interactive Controllers ---
const enterpriseUI = document.getElementById('enterprise-ui');
const btnZenMode = document.getElementById('btn-zen-mode');
const btnZenClose = document.getElementById('btn-zen-close');

if (btnZenMode && btnZenClose && enterpriseUI) {
  // Activate Zen Mode (Hide corporate overlay to see full fireworks screen)
  btnZenMode.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent launching a firework on the click point
    enterpriseUI.classList.add('zen-active');
    btnZenClose.style.display = 'block';
  });

  // Deactivate Zen Mode (Restore corporate landing page overlay)
  btnZenClose.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent launching a firework
    enterpriseUI.classList.remove('zen-active');
    btnZenClose.style.display = 'none';
  });
}

// Card hover glowing light coordinates tracker (for subtle premium UX)
const cards = document.querySelectorAll('.product-card');
cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});



function animate() {
  requestAnimationFrame(animate);

  clock.update();
  
  // Systems update
  if (!inputSystem.isPaused()) {
    movementSystem.update(clock.deltaTime);
    showDirector.update(clock.deltaTime);
    fireworkSequencer.update(clock.deltaTime);
    droneSequencer.update(clock.deltaTime);
    droneSystem.update(clock.deltaTime);
    fireworkSystem.update(clock.deltaTime);
    cometSystem.update(clock.deltaTime);
    trailSystem.update(clock.deltaTime);
    skyLightReactionSystem.update(clock.deltaTime);
    smokeSystem.update(clock.deltaTime);
  } else {
    droneSequencer.update(clock.deltaTime);
    droneSystem.update(clock.deltaTime);
    skyLightReactionSystem.update(clock.deltaTime);
    smokeSystem.update(clock.deltaTime);
  }

  // Render loop
  if (postProcessing) {
    postProcessing.render();
  } else {
    renderer.render(sceneManager.instance, cameraManager.instance);
  }
}

// Start simulation
animate();

// --- Smoothly Dismiss Premium Page Preloader ---
function hidePreloader() {
  const loader = document.getElementById('app-loader');
  if (loader) {
    const progressFill = loader.querySelector('.loader-progress-fill');
    if (progressFill) {
      // Instantly top off progress bar to indicate completed status
      progressFill.style.animation = 'none';
      progressFill.style.width = '100%';
    }
    
    const statusText = loader.querySelector('.loader-status');
    if (statusText) {
      statusText.textContent = 'Systems Online!';
      statusText.style.color = '#00f5ff';
      statusText.style.textShadow = '0 0 8px rgba(0, 245, 255, 0.5)';
    }

    // Trigger fading transitions
    setTimeout(() => {
      loader.classList.add('fade-out');
      
      // Cleanup DOM node to release memory after fade transition completes
      setTimeout(() => {
        loader.remove();
      }, 600);
    }, 450);
  }
}

// Wait for full load to avoid premature dismissal of loading screen
if (document.readyState === 'complete') {
  hidePreloader();
} else {
  window.addEventListener('load', hidePreloader);
}