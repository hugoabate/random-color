const colorBtn = document.querySelector("#colorBtn");
const copyBtn = document.querySelector("#copyBtn");
const colorDisplay = document.querySelector("#color-display");

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

colorBtn.addEventListener("click", () => {
  const randomColor = getRandomColor();

  colorDisplay.textContent = randomColor;

  document.body.style.backgroundColor = randomColor;

  colorBtn.style.backgroundColor = randomColor;
  copyBtn.style.backgroundColor = randomColor;
  colorDisplay.style.backgroundColor = randomColor;
});

copyBtn.addEventListener("click", () => {
  const tempInput = document.createElement("input");

  tempInput.value = colorDisplay.textContent;

  document.body.appendChild(tempInput);
  
  tempInput.select();
  
  document.execCommand("copy");
  
  document.body.removeChild(tempInput);
  
  copyBtn.textContent = "Copied!";
  
  setTimeout(() => {
    copyBtn.textContent = "Copy";
  }, 1000);
});
