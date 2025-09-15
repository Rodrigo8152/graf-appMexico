document.addEventListener('DOMContentLoaded', () => {
  const greenRange = document.getElementById('greenRange');
  const greenBox   = document.getElementById('greenBox');
  const greenHex   = document.getElementById('greenHex');

  const redRange = document.getElementById('redRange');
  const redBox   = document.getElementById('redBox');
  const redHex   = document.getElementById('redHex');

  const toHex2 = v => v.toString(16).padStart(2,'0').toUpperCase();

  function updateGreen(){
    const g = parseInt(greenRange.value,10);
    greenBox.style.backgroundColor = `rgb(0, ${g}, 0)`;
    greenHex.textContent = `#00${toHex2(g)}00`;
  }

  function updateRed(){
    const r = parseInt(redRange.value,10);
    redBox.style.backgroundColor = `rgb(${r}, 0, 0)`;
    redHex.textContent = `#${toHex2(r)}0000`;
  }

  greenRange.addEventListener('input', updateGreen);
  redRange.addEventListener('input', updateRed);

  updateGreen();
  updateRed();
});
