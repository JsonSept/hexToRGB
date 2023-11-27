function hexToRgb(hex) {
  let r = parseInt(hex.slice(1,3), 16);
  let g = parseInt(hex.slice(3,5), 16);
  let b = parseInt(hex.slice(5,7), 16);
  return `rgb(${r}, ${g}, ${b})`;
}

      let form = document.querySelector('form');
    form.addEventListener('submit', myfunction);

    function myfunction(event) {
        let hex = document.querySelector('#hex').value;
             let rgb = hexToRgb(hex);
             document.querySelector('#rgb').value = rgb;
             event.preventDefault();
    }
