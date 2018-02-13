console.log('ready');


var setColor = document.querySelector('.input_color_button');

setColor.addEventListener('click', function(event) {
console.log('test');
  event.preventDefault();
  var inputValue = document.querySelector('.input_color').value;
  console.log(inputValue);
  document.querySelector('.brush').style.backgroundColor = inputValue;
});
