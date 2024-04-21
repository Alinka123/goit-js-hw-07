function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const input = document.querySelector("#controls input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  const amount = input.value;

  if (amount < 1 || amount > 100) {
    return;
  }

  createBoxes(amount);
  input.value = "";
});

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const initialSize = 30;
  boxesDiv.innerHTML = "";
  const boxes = []

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = initialSize + i * 10;

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box)
}
    boxesDiv.append(...boxes);
  
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}