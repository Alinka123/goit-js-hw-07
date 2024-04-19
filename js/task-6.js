const controls = document.getElementById('controls');
const boxesContainer = document.getElementById('boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxSize = 30;
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${boxSize + i * 10}px`;
    box.style.height = `${boxSize + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

controls.addEventListener('click', (event) => {
  if (event.target.dataset.create) {
    const amount = Number(controls.querySelector('input').value);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      controls.querySelector('input').value = '';
    }
  } else if (event.target.dataset.destroy) {
    destroyBoxes();
  }
  
});