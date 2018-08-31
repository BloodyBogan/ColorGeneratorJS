// Grabbing the h1, the generate button and select
var button = document.getElementById('generateBtn');
var display = document.getElementById('colorTxt');
var select = document.getElementById('select');

// Color value generating function
var colorGenerator = function() {
   // 000000 is added to avoid missing 0s... Also, it converts the string to uppercase for styling purposes
   generatedHex = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);

   // Generating random RGB value
   red = Math.floor(Math.random() * 256);
   green = Math.floor(Math.random() * 256);
   blue = Math.floor(Math.random() * 256);
   generatedRgb = 'rgb(' + red  + ', ' + green + ', ' + blue + ')'


}

// Grabbing what's selected
function getOption() {
   var option = document.getElementById('select').value;

   return option;
}

// Running the colorGenerator function when the button is clicked
button.addEventListener('click', function() {

      // Adding either hex or rgb to a variable
      optionVal = getOption();

      // Displays value according to user's selection
      if (optionVal == 'hex') {
         colorGenerator();

         display.innerHTML = generatedHex;
         document.body.style.background = generatedHex;
         button.style.color = generatedHex;
         select.style.color = generatedHex;
      } else {
         colorGenerator();

         display.innerHTML = generatedRgb;
         document.body.style.background = generatedRgb;
         button.style.color = generatedRgb;
         select.style.color = generatedRgb;
      }

})
