const input = document.getElementById('userInput');
const display = document.getElementById('display');

input.addEventListener('input', () => {
  const text = input.value;
  display.textContent = text;

  if (text.length > 20) {
    display.classList.add('long-text');
  } else {
    display.classList.remove('long-text');
  }
});