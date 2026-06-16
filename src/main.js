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

let isInDocsView = false;
let docRenderFramesRemaining = 0;

// Canvas click triggers fireworks (bubbles up from pointer-events: none empty spaces on overlay)
renderer.instance.domElement.addEventListener('click', () => {
  if (isInDocsView) return; // Prevent firework firing during docs reading
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
  if (isInDocsView) {
    if (docRenderFramesRemaining > 0) {
      docRenderFramesRemaining--;
      // Stop automated director/sequencer, but keep updating active particles
      // so in-flight fireworks detonate and fade away cleanly.
      fireworkSystem.update(clock.deltaTime);
      if (cometSystem) cometSystem.update(clock.deltaTime);
      if (trailSystem) trailSystem.update(clock.deltaTime);
      smokeSystem.update(clock.deltaTime);
      skyLightReactionSystem.update(clock.deltaTime);

      // Render loop
      if (postProcessing) {
        postProcessing.render();
      } else {
        renderer.render(sceneManager.instance, cameraManager.instance);
      }
    }
  } else {
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
}

// Redraw if resized during documentation view to prevent distortion
window.addEventListener('resize', () => {
  if (isInDocsView) {
    docRenderFramesRemaining = 5;
  }
});

// Start simulation
animate();

// --- Documentation Feature (Dynamic Scan, Parser, Routing & State) ---

// 1. Definition of categories for Vietnamese styling
const CATEGORY_LABELS = {
  'root': 'Tổng quan',
  'animated-editor': 'Animation formation editor (Ctr + 2)',
  'show-viewer': 'Show viewer (Ctr + 1)',
  'static-formation': 'Static formation editor (Ctr + 3)'
};

// 2. Scan markdown files dynamically at runtime (moved from Vite build-time glob import)

// State variables
let currentDocPath = '';
let searchQuery = '';
const parsedDocs = []; // List of all parsed docs (flat array for pagination)

// Elements
const sidebarNav = document.getElementById('docs-sidebar-nav');
const docsContainer = document.getElementById('docs-container');
const docTitleDisplay = document.getElementById('doc-title-display');
const docsBody = document.getElementById('docs-body');
const navDocsBtn = document.getElementById('nav-docs');
const btnDocsClose = document.getElementById('btn-docs-close');
const btnDocPrev = document.getElementById('btn-doc-prev');
const btnDocNext = document.getElementById('btn-doc-next');
const docProgressText = document.getElementById('doc-progress-text');

// Helper to extract title from content
function extractDocTitle(content, filename) {
  // Try Frontmatter: "title: ... "
  const fmMatch = content.match(/^(?:---\r?\n[\s\S]*?\btitle:\s*([^\r\n]+)[\s\S]*?---)/i);
  if (fmMatch && fmMatch[1]) {
    return fmMatch[1].trim();
  }
  // Try H1 heading: "# ... "
  const h1Match = content.match(/^#\s+([^\r\n]+)/m);
  if (h1Match && h1Match[1]) {
    return h1Match[1].trim();
  }
  // Fallback: capitalize filename
  const cleanName = filename.replace(/\.md$/, '').replace(/-/g, ' ');
  return cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
}

// Fetch and build internal docs database dynamically
async function loadDocs() {
  try {
    const response = await fetch('/content/manifest.json');
    if (!response.ok) {
      throw new Error(`Failed to load manifest.json: ${response.statusText}`);
    }
    const paths = await response.json();

    const promises = paths.map(async (path) => {
      try {
        const docRes = await fetch(`/content/${path}`);
        if (!docRes.ok) {
          throw new Error(`Failed to load ${path}: ${docRes.statusText}`);
        }
        const rawContent = await docRes.text();

        let category = 'root';
        if (path.includes('/')) {
          category = path.split('/')[0];
        }

        const filename = path.substring(path.lastIndexOf('/') + 1);
        const title = extractDocTitle(rawContent, filename);

        return {
          path,
          category,
          filename,
          title,
          content: rawContent
        };
      } catch (err) {
        console.error(`Error loading document ${path}:`, err);
        return null;
      }
    });

    const loadedDocs = await Promise.all(promises);
    const validDocs = loadedDocs.filter(doc => doc !== null);

    parsedDocs.length = 0;
    parsedDocs.push(...validDocs);

    // Sort documents: README.md first in category, then alphabetical
    parsedDocs.sort((a, b) => {
      if (a.category !== b.category) {
        const categoriesOrder = ['root', 'show-viewer', 'static-formation', 'animated-editor'];
        return categoriesOrder.indexOf(a.category) - categoriesOrder.indexOf(b.category);
      }

      if (a.filename === 'README.md') return -1;
      if (b.filename === 'README.md') return 1;

      return a.filename.localeCompare(b.filename);
    });

    // Render sidebar
    renderSidebar();

    // Trigger hash routing now that the data is loaded
    handleHashChange();
  } catch (error) {
    console.error("Error loading docs manifest:", error);
  }
}

// Render sidebar navigation HTML
function renderSidebar() {
  if (!sidebarNav) return;
  sidebarNav.innerHTML = '';

  // Filter docs by search query (checks both title and raw markdown content)
  const filteredDocs = searchQuery.trim()
    ? parsedDocs.filter(doc =>
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.content.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : parsedDocs;

  if (filteredDocs.length === 0) {
    const emptyMsg = document.createElement('div');
    emptyMsg.className = 'docs-search-empty';
    emptyMsg.textContent = 'Không tìm thấy kết quả phù hợp';
    sidebarNav.appendChild(emptyMsg);
    return;
  }

  // Group by category
  const grouped = {};
  filteredDocs.forEach(doc => {
    if (!grouped[doc.category]) {
      grouped[doc.category] = [];
    }
    grouped[doc.category].push(doc);
  });

  // Render
  const categoriesOrder = ['root', 'show-viewer', 'static-formation', 'animated-editor'];
  categoriesOrder.forEach(cat => {
    if (!grouped[cat]) return;

    const catDiv = document.createElement('div');
    catDiv.className = 'docs-category';

    const catTitle = document.createElement('div');
    catTitle.className = 'docs-category-title';
    catTitle.textContent = CATEGORY_LABELS[cat] || cat;
    catDiv.appendChild(catTitle);

    const list = document.createElement('ul');
    list.className = 'docs-category-list';

    grouped[cat].forEach(doc => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = `#docs/${doc.path}`;
      link.className = `docs-item-link ${currentDocPath === doc.path ? 'active' : ''}`;
      link.dataset.path = doc.path;
      link.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
        <span>${doc.title}</span>
      `;

      link.addEventListener('click', (e) => {
        e.preventDefault();
        navigateToDoc(doc.path);
      });

      li.appendChild(link);
      list.appendChild(li);
    });

    catDiv.appendChild(list);
    sidebarNav.appendChild(catDiv);
  });
}

// Basic markdown to HTML converter with block-level safety
function parseMarkdown(md) {
  // Strip frontmatter if present
  let cleanMd = md.replace(/^---[\s\S]*?---\r?\n/, '');

  // 1. Temporarily extract code blocks to protect them from word-wrapping/paragraph tags
  const codeBlocks = [];
  cleanMd = cleanMd.replace(/```([\s\S]*?)```/g, (match, code) => {
    const placeholder = `<!--__CODE_BLOCK_${codeBlocks.length}__-->`;

    const lines = code.split('\n');
    let lang = '';
    if (lines[0] && !lines[0].includes(' ') && lines[0].length < 15) {
      lang = lines.shift().trim();
    }
    const cleanCode = lines.join('\n').trim();

    // Convert HTML entities inside code block
    const safeCode = cleanCode
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    codeBlocks.push(`<pre><code class="language-${lang}">${safeCode}</code></pre>`);
    return placeholder;
  });

  // 2. Inline formatting helper
  function parseInlineMarkdown(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/\[(.*?)\]\((.*?)\)/g, (match, label, href) => {
        if (href.endsWith('.md')) {
          let targetPath = '';
          if (href.startsWith('./') || !href.startsWith('../')) {
            const currentDir = currentDocPath.includes('/') ? currentDocPath.substring(0, currentDocPath.lastIndexOf('/')) : '';
            const normalizedHref = href.replace(/^\.\//, '');
            targetPath = currentDir ? `${currentDir}/${normalizedHref}` : normalizedHref;
          } else if (href.startsWith('../')) {
            targetPath = href.replace(/^\.\.\//, '');
          }
          return `<a href="#" class="docs-internal-link" data-doc-path="${targetPath}">${label}</a>`;
        }
        return `<a href="${href}" target="_blank">${label}</a>`;
      });
  }

  // 3. Process line by line, grouping lists, tables, and paragraphs
  const lines = cleanMd.split(/\r?\n/);
  const processedBlocks = [];

  let inTable = false;
  let tableHTML = '';
  const listStack = []; // Stack of { indent }

  function closeAllLists() {
    while (listStack.length > 0) {
      listStack.pop();
      processedBlocks.push('</ul>');
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Handle Table
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      closeAllLists();

      if (!inTable) {
        inTable = true;
        tableHTML = '<table>';
      }

      const cells = trimmed.split('|').slice(1, -1).map(c => c.trim());
      const isSeparator = cells.every(c => /^:?-+:?$/.test(c));
      if (isSeparator) {
        continue;
      }

      const isHeader = (tableHTML === '<table>');
      tableHTML += '<tr>';
      cells.forEach(cell => {
        const parsedCell = parseInlineMarkdown(cell);
        tableHTML += isHeader ? `<th>${parsedCell}</th>` : `<td>${parsedCell}</td>`;
      });
      tableHTML += '</tr>';
      continue;
    } else {
      if (inTable) {
        tableHTML += '</table>';
        processedBlocks.push(tableHTML);
        inTable = false;
        tableHTML = '';
      }
    }

    if (trimmed === '') {
      closeAllLists();
      continue;
    }

    // Handle Code Block Placeholder
    if (trimmed.startsWith('<!--__CODE_BLOCK_') && trimmed.endsWith('__-->')) {
      closeAllLists();
      processedBlocks.push(trimmed);
      continue;
    }

    // Handle Headers
    if (trimmed.startsWith('#') && (trimmed.startsWith('#### ') || trimmed.startsWith('### ') || trimmed.startsWith('## ') || trimmed.startsWith('# '))) {
      closeAllLists();
      if (trimmed.startsWith('#### ')) {
        processedBlocks.push(`<h4>${parseInlineMarkdown(trimmed.substring(5))}</h4>`);
      } else if (trimmed.startsWith('### ')) {
        processedBlocks.push(`<h3>${parseInlineMarkdown(trimmed.substring(4))}</h3>`);
      } else if (trimmed.startsWith('## ')) {
        processedBlocks.push(`<h2>${parseInlineMarkdown(trimmed.substring(3))}</h2>`);
      } else if (trimmed.startsWith('# ')) {
        if (processedBlocks.length > 0) {
          processedBlocks.push(`<h1>${parseInlineMarkdown(trimmed.substring(2))}</h1>`);
        }
      }
      continue;
    }

    if (trimmed === '---') {
      closeAllLists();
      processedBlocks.push('<hr>');
      continue;
    }

    // Calculate line indentation
    const leadingSpaces = line.match(/^\s*/)[0].length;
    const isBulletList = trimmed.startsWith('- ') || trimmed.startsWith('* ') || trimmed.startsWith('+ ');

    if (isBulletList) {
      const itemText = trimmed.replace(/^[-*+]\s+/, '');
      const parsedText = parseInlineMarkdown(itemText);

      if (listStack.length === 0) {
        listStack.push({ indent: leadingSpaces });
        processedBlocks.push('<ul>');
      } else {
        let currentTop = listStack[listStack.length - 1];
        if (leadingSpaces > currentTop.indent) {
          listStack.push({ indent: leadingSpaces });
          processedBlocks.push('<ul>');
        } else {
          while (listStack.length > 0 && listStack[listStack.length - 1].indent > leadingSpaces) {
            listStack.pop();
            processedBlocks.push('</ul>');
          }
          if (listStack.length === 0) {
            listStack.push({ indent: leadingSpaces });
            processedBlocks.push('<ul>');
          }
        }
      }

      processedBlocks.push(`<li>${parsedText}`);
      continue;
    }

    // Handle text inside lists or normal paragraphs
    if (listStack.length > 0 && leadingSpaces > listStack[listStack.length - 1].indent) {
      const cleanText = trimmed.replace(/<br\/?>$/i, '').trim();
      const parsedText = parseInlineMarkdown(cleanText);
      const nbspIndent = '&nbsp;'.repeat(leadingSpaces);

      let targetIdx = -1;
      for (let j = processedBlocks.length - 1; j >= 0; j--) {
        if (processedBlocks[j].includes('<li>')) {
          targetIdx = j;
          break;
        }
      }

      if (targetIdx !== -1) {
        processedBlocks[targetIdx] += `<br>${nbspIndent}${parsedText}`;
      } else {
        processedBlocks.push(`${nbspIndent}${parsedText}`);
      }
    } else {
      closeAllLists();
      
      const cleanText = trimmed.replace(/<br\/?>$/i, '').trim();
      const parsedText = parseInlineMarkdown(cleanText);

      const lastIdx = processedBlocks.length - 1;
      const prevLine = lines[i - 1];
      const prevHasLineBreak = prevLine && (prevLine.endsWith('  ') || prevLine.endsWith('\\') || prevLine.toLowerCase().endsWith('<br>') || prevLine.toLowerCase().endsWith('<br/>'));

      if (lastIdx >= 0 && processedBlocks[lastIdx].startsWith('<p>') && processedBlocks[lastIdx].endsWith('</p>')) {
        const prevContent = processedBlocks[lastIdx].slice(3, -4);
        const separator = prevHasLineBreak ? '<br>' : ' ';
        processedBlocks[lastIdx] = `<p>${prevContent}${separator}${parsedText}</p>`;
      } else {
        processedBlocks.push(`<p>${parsedText}</p>`);
      }
    }
  }

  closeAllLists();

  let finalHTML = processedBlocks.join('\n');

  // 4. Restore the code blocks
  codeBlocks.forEach((codeBlockHTML, idx) => {
    finalHTML = finalHTML.replace(`<!--__CODE_BLOCK_${idx}__-->`, codeBlockHTML);
  });

  return finalHTML;
}

// Generate Table of Contents (TOC) dynamically
function generateTOC() {
  const tocNav = document.getElementById('docs-toc-nav');
  if (!tocNav) return;
  tocNav.innerHTML = '';

  const headings = docsBody.querySelectorAll('h2, h3');
  if (headings.length === 0) {
    const emptyMsg = document.createElement('div');
    emptyMsg.className = 'docs-search-empty';
    emptyMsg.style.padding = '12px 0';
    emptyMsg.style.textAlign = 'left';
    emptyMsg.textContent = 'Không có mục lục';
    tocNav.appendChild(emptyMsg);
    return;
  }

  headings.forEach((heading, index) => {
    // Generate safe and unique ID based on heading content
    let id = heading.id;
    if (!id) {
      const cleanText = heading.textContent
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd').replace(/Đ/g, 'd')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-');
      id = `${cleanText || 'section'}-${index}`;
      heading.id = id;
    }

    const link = document.createElement('a');
    link.href = `#${id}`;
    link.className = `toc-item-link ${heading.tagName.toLowerCase()}`;
    link.textContent = heading.textContent;
    link.dataset.targetId = id;

    link.addEventListener('click', (e) => {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -120;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });

        // Update URL hash without scroll jumping
        const cleanHash = window.location.hash.split('#')[0] + '#' + id;
        history.pushState(null, null, cleanHash);

        // Update active class
        document.querySelectorAll('.toc-item-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });

    tocNav.appendChild(link);
  });

  // Set initial active state
  updateActiveTOCItem();
}

// Update active TOC item based on scroll position (ScrollSpy)
function updateActiveTOCItem() {
  const headings = docsBody.querySelectorAll('h2, h3');
  const tocLinks = document.querySelectorAll('.toc-item-link');
  if (headings.length === 0 || tocLinks.length === 0) return;

  let activeId = '';
  const scrollPosition = window.scrollY + 140;

  for (let i = 0; i < headings.length; i++) {
    const heading = headings[i];
    const headingTop = heading.getBoundingClientRect().top + window.pageYOffset;
    if (headingTop <= scrollPosition) {
      activeId = heading.id;
    } else {
      break;
    }
  }

  if (!activeId && headings.length > 0) {
    activeId = headings[0].id;
  }

  tocLinks.forEach(link => {
    if (link.dataset.targetId === activeId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Bind scroll listener for TOC ScrollSpy
window.addEventListener('scroll', updateActiveTOCItem);

// Navigate to a specific document path
function navigateToDoc(path) {
  const doc = parsedDocs.find(d => d.path === path);
  if (!doc) return;

  currentDocPath = path;
  if (!window.location.hash.startsWith(`#docs/${path}`)) {
    window.location.hash = `#docs/${path}`;
  }

  // Render content
  docTitleDisplay.textContent = doc.title;
  docsBody.innerHTML = parseMarkdown(doc.content);

  // Generate Table of Contents
  generateTOC();

  // Highlight active item in sidebar
  document.querySelectorAll('.docs-item-link').forEach(link => {
    if (link.dataset.path === path) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Bind events to new internal links in markdown content
  docsBody.querySelectorAll('.docs-internal-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetPath = link.dataset.docPath;
      navigateToDoc(targetPath);
    });
  });

  // Scroll window to top instantly to prevent layout & rendering stutter
  window.scrollTo(0, 0);

  // Update pagination UI
  const currentIndex = parsedDocs.findIndex(d => d.path === path);
  docProgressText.textContent = `${currentIndex + 1} / ${parsedDocs.length}`;

  // Prev button
  if (currentIndex > 0) {
    btnDocPrev.disabled = false;
    btnDocPrev.style.opacity = 1;
    btnDocPrev.onclick = () => navigateToDoc(parsedDocs[currentIndex - 1].path);
  } else {
    btnDocPrev.disabled = true;
    btnDocPrev.style.opacity = 0.4;
  }

  // Next button
  if (currentIndex < parsedDocs.length - 1) {
    btnDocNext.disabled = false;
    btnDocNext.style.opacity = 1;
    btnDocNext.onclick = () => navigateToDoc(parsedDocs[currentIndex + 1].path);
  } else {
    btnDocNext.disabled = true;
    btnDocNext.style.opacity = 0.4;
  }
}

// Toggle Docs view
function setDocsViewActive(active) {
  isInDocsView = active;
  const enterpriseUI = document.getElementById('enterprise-ui');
  const docsContainer = document.getElementById('docs-container');

  if (active) {
    // Render for 45 frames (~750ms) to allow burst animations to settle down and fade out
    docRenderFramesRemaining = 45;

    if (fireworkSystem) {
      // Turn off autolaunch in docs view
      fireworkSystem.autoLaunchEnabled = false;

      // Force detonate all currently flying fireworks instantly when entering docs view
      if (typeof fireworkSystem.burstAll === 'function') {
        fireworkSystem.burstAll();
      }
    }
    if (enterpriseUI) enterpriseUI.classList.add('docs-active');
    if (docsContainer) docsContainer.style.display = 'grid';
    // Select first doc if none selected
    if (!currentDocPath && parsedDocs.length > 0) {
      currentDocPath = parsedDocs[0].path;
    }
    navigateToDoc(currentDocPath);
    renderSidebar();
  } else {
    // Main page always has autolaunch enabled
    if (fireworkSystem) {
      fireworkSystem.autoLaunchEnabled = true;
    }
    if (enterpriseUI) enterpriseUI.classList.remove('docs-active');
    if (docsContainer) docsContainer.style.display = 'none';
    window.location.hash = '';
  }
}

// Nav clicks
if (navDocsBtn) {
  navDocsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    setDocsViewActive(true);
  });
}

if (btnDocsClose) {
  btnDocsClose.addEventListener('click', (e) => {
    e.preventDefault();
    setDocsViewActive(false);
  });
}

// Search functionality event binding
const searchInput = document.getElementById('docs-search-input');
const searchClearBtn = document.getElementById('docs-search-clear');

function performSearch() {
  if (!searchInput) return;
  searchQuery = searchInput.value;

  if (searchClearBtn) {
    searchClearBtn.style.display = searchQuery ? 'block' : 'none';
  }

  renderSidebar();
}

if (searchInput) {
  // Trigger search on keyboard Enter
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      performSearch();
    }
  });

  // Restore list instantly if input is cleared out (Ctrl+A -> Backspace, etc.)
  searchInput.addEventListener('input', () => {
    if (searchInput.value === '') {
      performSearch();
    }
  });
}

if (searchClearBtn && searchInput) {
  searchClearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchInput.value = '';
    performSearch();
    searchInput.focus();
  });
}

// Check initial hash on load
function handleHashChange() {
  const hash = window.location.hash;
  if (hash.startsWith('#docs/')) {
    const fullPath = hash.replace('#docs/', '');
    const parts = fullPath.split('#');
    const path = parts[0];
    const headingId = parts[1] || '';

    setDocsViewActive(true);
    navigateToDoc(path);

    if (headingId) {
      setTimeout(() => {
        const element = document.getElementById(headingId);
        if (element) {
          const yOffset = -120;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 150); // Small delay to let rendering complete
    }
  } else if (hash === '#docs') {
    setDocsViewActive(true);
  } else {
    if (isInDocsView) {
      setDocsViewActive(false);
    }
  }
}

window.addEventListener('hashchange', handleHashChange);
// Run on load
loadDocs();

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