const container = document.getElementById('grid-container');
const slider = document.getElementById('grid-slider');
const sliderVal = document.getElementById('slider-val');
const gridSubVal = document.getElementById('grid-sub-val');
const brushColor = document.getElementById('brush-color');
const colorHexText = document.getElementById('color-hex-text');
const clearBtn = document.getElementById('clear-btn');
const rainbowBtn = document.getElementById('rainbow-btn');

let isRainbowMode = false;
let isMouseDown = false;

// Track whether the left mouse button is pressed to allow click-and-drag drawing
window.addEventListener('mousedown', () => (isMouseDown = true));
window.addEventListener('mouseup', () => (isMouseDown = false));

// Paint a single cell 
function paintCell(cell) {
  if (isRainbowMode) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  } else {
    cell.style.backgroundColor = brushColor.value;
  }
}

// Build the canvas squares using Flexbox dimensions
function generateGrid(size) {
  container.innerHTML = '';

  const totalSquares = size * size;
  const cellSize = 600 / size;

  for (let i = 0; i < totalSquares; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;

    // Draw on hover (if dragging) or direct click
    cell.addEventListener('mouseenter', () => {
      if (isMouseDown) paintCell(cell);
    });

    cell.addEventListener('mousedown', () => paintCell(cell));

    container.appendChild(cell);
  }
}

// Slider live input label updates
slider.addEventListener('input', (e) => {
  const size = e.target.value;
  sliderVal.textContent = `${size} x ${size}`;
  gridSubVal.textContent = `${size}x${size} Grid`;
});

// Redraw canvas only when slider handle is released
slider.addEventListener('change', (e) => {
  generateGrid(parseInt(e.target.value));
});

// Color picker updates label
brushColor.addEventListener('input', (e) => {
  colorHexText.textContent = e.target.value.toUpperCase();
  isRainbowMode = false;
  rainbowBtn.classList.remove('active');
});

// Clear canvas without resizing
clearBtn.addEventListener('click', () => {
  const cells = container.querySelectorAll('.cell');
  cells.forEach((cell) => (cell.style.backgroundColor = '#ffffff'));
});

// Toggle Rainbow Mode
rainbowBtn.addEventListener('click', () => {
  isRainbowMode = !isRainbowMode;
  rainbowBtn.classList.toggle('active', isRainbowMode);
});

// Prevent image drag behavior interrupting drawings
container.addEventListener('dragstart', (e) => e.preventDefault());

// Initialize 64x64 grid to match the reference UI
generateGrid(64);