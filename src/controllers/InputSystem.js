import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import { sequences } from '../config/sequences/index.js';

export class InputSystem {
  constructor(camera, domElement, fireworkSystem = null) {
    this.controls = new PointerLockControls(camera, domElement);
    this.fireworkSystem = fireworkSystem;
    this.paused = false;
    this.selectedPresetKey = 'random';

    this.sequenceOptions = sequences;
    this.selectedSequenceKey = sequences.length > 0 ? sequences[0].key : null;

    // Movement state
    this.keys = {
      forward: false,
      backward: false,
      left: false,
      right: false
    };
    this.status = {
      moving: false,
      direction: 'idle',
      looking: false,
      firework: 'none',
      effect: 'none',
      diagnostics: {
        launched: 0,
        bursted: 0,
        shapeFallbacks: 0,
        effectFallbacks: 0,
        warnings: 0,
        lastWarning: 'none'
      }
    };

    this.presetOptions = this.fireworkSystem?.shellPresetFactory?.getPresetMenuEntries?.() ?? [
      { key: 'random', label: 'Random' }
    ];

    // Click to lock cursor disabled for fixed view angle
    // domElement.addEventListener('click', () => {
    //   if (!this.controls.isLocked && !this.paused) {
    //     this.controls.lock();
    //   }
    // });

    document.addEventListener('pointerlockchange', () => {
      if (document.pointerLockElement === domElement) {
        this.instructions.style.display = 'none';
        this.updateStatusOverlay();
      } else {
        this.instructions.style.display = '';
      }
    });

    document.addEventListener('mousemove', (event) => this.onMouseMove(event));
    document.addEventListener('keydown', (event) => this.onKeyDown(event));
    document.addEventListener('keyup', (event) => this.onKeyUp(event));

    window.addEventListener('firework:launch', (event) => {
      this.status.firework = event.detail.shellType;
      this.status.effect = event.detail.effectType;
      this.updateStatusOverlay();
    });

    window.addEventListener('firework:burst', (event) => {
      this.status.firework = event.detail.shellType;
      this.status.effect = event.detail.effectType;
      this.updateStatusOverlay();
    });

    window.addEventListener('firework:diagnostics', (event) => {
      this.status.diagnostics = event.detail;
      this.updateStatusOverlay();
    });

    // Instruction overlay
    this.setupInstructions();
    this.setupPauseMenu();
  }

  setupInstructions() {
    // Instructions and crosshair removed to keep presentation view 100% clean
    this.instructions = { style: {} };

    // statusOverlay removed to keep presentation view clean

    this.controls.addEventListener('lock', () => {
      this.instructions.style.display = 'none';
      this.status.looking = false;
      this.updateStatusOverlay();
    });
    this.controls.addEventListener('unlock', () => {
      this.instructions.style.display = this.paused ? 'none' : '';
      this.status.moving = false;
      this.status.direction = 'idle';
      if (this.paused) {
        this.showPauseMenu();
      }
      this.updateStatusOverlay();
    });
  }

  setupPauseMenu() {
    this.pauseOverlay = document.createElement('div');
    this.pauseOverlay.className = 'firework-pause-overlay';
    this.pauseOverlay.style.display = 'none';

    const panel = document.createElement('div');
    panel.className = 'firework-pause-panel';

    const title = document.createElement('div');
    title.className = 'firework-pause-title';
    title.textContent = 'Firework Selector';

    const description = document.createElement('div');
    description.className = 'firework-pause-description';
    description.textContent = 'Press ESC to resume, or choose a firework type before clicking to launch.';

    const label = document.createElement('label');
    label.className = 'firework-pause-label';
    label.textContent = 'Type';

    this.presetSelect = document.createElement('select');
    this.presetSelect.className = 'firework-pause-select';
    for (const option of this.presetOptions) {
      const optionElement = document.createElement('option');
      optionElement.value = option.key;
      optionElement.textContent = option.label;
      this.presetSelect.appendChild(optionElement);
    }
    this.presetSelect.value = this.selectedPresetKey;
    this.presetSelect.addEventListener('change', () => {
      this.selectedPresetKey = this.presetSelect.value;
      this.updateSelectedPresetHighlight();
      this.updateStatusOverlay();
    });

    this.selectedPresetHighlight = document.createElement('div');
    this.selectedPresetHighlight.className = 'firework-pause-selected';
    this.selectedPresetHighlight.innerHTML = '<span class="firework-pause-selected-label">Selected</span><span class="firework-pause-selected-value"></span>';

    this.sequenceSelect = document.createElement('select');
    this.sequenceSelect.className = 'firework-pause-select';
    for (const option of this.sequenceOptions) {
      const optionElement = document.createElement('option');
      optionElement.value = option.key;
      optionElement.textContent = option.label;
      this.sequenceSelect.appendChild(optionElement);
    }
    this.sequenceSelect.value = this.selectedSequenceKey;
    this.sequenceSelect.addEventListener('change', () => {
      this.selectedSequenceKey = this.sequenceSelect.value;
      this.updateStatusOverlay();
    });

    const seqLabel = document.createElement('label');
    seqLabel.className = 'firework-pause-label';
    seqLabel.textContent = 'Sequence (Press Enter to play)';
    seqLabel.appendChild(this.sequenceSelect);

    const buttonRow = document.createElement('div');
    buttonRow.className = 'firework-pause-actions';

    this.resumeButton = document.createElement('button');
    this.resumeButton.type = 'button';
    this.resumeButton.className = 'firework-pause-button';
    this.resumeButton.textContent = 'Resume';
    this.resumeButton.addEventListener('click', () => this.resume());

    buttonRow.appendChild(this.resumeButton);
    label.appendChild(this.presetSelect);
    panel.appendChild(this.selectedPresetHighlight);
    panel.appendChild(title);
    panel.appendChild(description);
    panel.appendChild(label);
    panel.appendChild(seqLabel);
    panel.appendChild(buttonRow);

    this.pauseOverlay.appendChild(panel);
    document.body.appendChild(this.pauseOverlay);
    this.updateSelectedPresetHighlight();
  }

  getSelectedPresetKey() {
    return this.selectedPresetKey;
  }

  getSelectedPreset() {
    if (!this.fireworkSystem?.shellPresetFactory) {
      return null;
    }

    return this.selectedPresetKey === 'random'
      ? null
      : this.fireworkSystem.shellPresetFactory.createPresetByKey(this.selectedPresetKey);
  }

  getSelectedPresetLabel() {
    return this.presetOptions.find(option => option.key === this.selectedPresetKey)?.label ?? 'Random';
  }

  isPaused() {
    return this.paused;
  }

  pause() {
    if (this.paused) {
      return;
    }

    this.paused = true;
    this.instructions.style.display = 'none';
    this.showPauseMenu();
    if (this.controls.isLocked) {
      this.controls.unlock();
    }
    this.updateStatusOverlay();
  }

  resume() {
    if (!this.paused) {
      return;
    }

    this.paused = false;
    this.hidePauseMenu();
    this.instructions.style.display = '';
    this.updateStatusOverlay();
  }

  togglePause() {
    if (this.paused) {
      this.resume();
    } else {
      this.pause();
    }
  }

  showPauseMenu() {
    if (!this.pauseOverlay) {
      return;
    }

    this.presetSelect.value = this.selectedPresetKey;
    if (this.sequenceSelect) {
      this.sequenceSelect.value = this.selectedSequenceKey;
    }
    this.updateSelectedPresetHighlight();
    this.pauseOverlay.style.display = 'flex';
  }

  hidePauseMenu() {
    if (!this.pauseOverlay) {
      return;
    }

    this.pauseOverlay.style.display = 'none';
  }

  updateSelectedPresetHighlight() {
    if (!this.selectedPresetHighlight) {
      return;
    }

    const label = this.getSelectedPresetLabel();
    this.selectedPresetHighlight.querySelector('.firework-pause-selected-value').textContent = label;
    this.selectedPresetHighlight.dataset.preset = this.selectedPresetKey;
  }

  updateStatusOverlay() {
    if (!this.statusOverlay) return;
    const locked = this.controls.isLocked ? 'Yes' : 'No';
    const moving = this.status.moving ? 'Yes' : 'No';
    const d = this.status.diagnostics;
    const warningText = d.lastWarning === 'none' ? 'none' : d.lastWarning;
    const pauseState = this.paused ? 'Paused' : 'Live';
    const selectedSeqLabel = this.sequenceOptions.find(o => o.key === this.selectedSequenceKey)?.label ?? 'None';
    this.statusOverlay.innerHTML = `Mode: ${pauseState}<br>Locked: ${locked}<br>Moving: ${moving} (${this.status.direction})<br>Looking: ${this.status.looking ? 'Yes' : 'No'}<br>Preset: ${this.getSelectedPresetLabel()}<br>Sequence: ${selectedSeqLabel}<br>Shell: ${this.status.firework}<br>Effect: ${this.status.effect}<br>Launch/Burst: ${d.launched}/${d.bursted}<br>Fallback S/E: ${d.shapeFallbacks}/${d.effectFallbacks}<br>Warnings: ${d.warnings}<br>Last Warn: ${warningText}`;
  }

  onMouseMove(event) {
    if (!this.controls.isLocked) return;
    this.status.looking = true;
    this.updateStatusOverlay();
    clearTimeout(this.lookTimer);
    this.lookTimer = setTimeout(() => {
      this.status.looking = false;
      this.updateStatusOverlay();
    }, 150);
  }

  onKeyDown(event) {
    if (event.code === 'Escape') {
      event.preventDefault();
      this.togglePause();
      return;
    }

    if (!this.controls.isLocked || this.paused) return;
    switch (event.code) {
      case 'ArrowUp':
      case 'KeyW':
        this.keys.forward = true;
        break;
      case 'ArrowLeft':
      case 'KeyA':
        this.keys.left = true;
        break;
      case 'ArrowDown':
      case 'KeyS':
        this.keys.backward = true;
        break;
      case 'ArrowRight':
      case 'KeyD':
        this.keys.right = true;
        break;
      case 'Space':
        if (this.fireworkSystem) {
          this.fireworkSystem.autoLaunchEnabled = !this.fireworkSystem.autoLaunchEnabled;
          console.log('Auto launch:', this.fireworkSystem.autoLaunchEnabled ? 'ON' : 'OFF');
        }
        break;
      case 'Enter':
        if (this.showDirector) {
          if (this.showDirector.isPlaying) {
            this.showDirector.stop();
            console.log('Show stopped.');
          } else {
            const selectedSeq = this.sequenceOptions.find(o => o.key === this.selectedSequenceKey);
            if (selectedSeq && selectedSeq.script) {
              this.showDirector.loadScript(selectedSeq.script);
              this.showDirector.play();
              console.log(`Started Sequence: ${selectedSeq.label}`);
            } else {
              console.warn('No valid sequence selected.');
            }
          }
        }
        break;
    }
  }

  onKeyUp(event) {
    switch (event.code) {
      case 'ArrowUp':
      case 'KeyW':
        this.keys.forward = false;
        break;
      case 'ArrowLeft':
      case 'KeyA':
        this.keys.left = false;
        break;
      case 'ArrowDown':
      case 'KeyS':
        this.keys.backward = false;
        break;
      case 'ArrowRight':
      case 'KeyD':
        this.keys.right = false;
        break;
    }
  }

  setMovementStatus(direction) {
    const moving = direction !== '' && direction !== 'idle';
    this.status.moving = moving;
    this.status.direction = moving ? direction : 'idle';
    this.updateStatusOverlay();
  }
}
