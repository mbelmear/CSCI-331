window.addEventListener("DOMContentLoaded", domLoaded);
// When the DOM has finished loading, add the event listeners.

function domLoaded() {
   // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#add_a_simple_listener
   const cinput = document.getElementById('C_in');
   const finput = document.getElementById('F_in');
   const convertButton = document.getElementById('convertButton');
   const weatherIcon = document.getElementById('weatherIcon');

   //this function registers a click event handler for the convert button
   convertButton.addEventListener('click', function () {
      //these if else statements check to see that there is a value being input and depending on what is input, do some logic
      if(cinput.value == '' && finput.value == ''){
         let text = document.getElementById('message');
         text.innerHTML = "Enter a temperature to convert";
         weatherIcon.src = "images/C-F.png";
      }
      else if(cinput.value != ''){
         //this converts celsius to fahrenheit via the CtoF function and displays the value in the input field
         const c = parseFloat(cinput.value);
         const f = convertCtoF(c);
         finput.value = f.toFixed(2);
         setWeatherIcon(f, weatherIcon);
         let text = document.getElementById('message');
         text.innerHTML = "";
      }
      else if(finput.value != ''){
         //this converts fahrenheit to celsius via the FtoC function and displays the value in the input field 
         const f = parseFloat(finput.value);
         const c = convertFtoC(f);
         cinput.value = c.toFixed(2);
         setWeatherIcon(finput.value, weatherIcon);
         let text = document.getElementById('message');
         text.innerHTML = "";
      }
   });

   //the following two event listeners handle clearing the other input field that was not clicked
   cinput.addEventListener('input', function() {
      finput.value = '';
   });

   finput.addEventListener('input', function() {
      cinput.value = '';
   });
}

function convertCtoF(C) {
   //Returns temp in °F. 
   //°F = °C * 9/5 + 32
   let F = C * 9/5 + 32;
   return F;
}

function convertFtoC(F) {
   //Returns temp in °C. 
   //°C = (°F - 32) * 5/9
   let C = (F - 32) * 5/9;
   return C;
}

//this function is called in the domLoaded() function and determines the correct weather icon to be displayed based on the temperature in fahrenheit
function setWeatherIcon(temperature, iconElement) {
   if(temperature <= -200 || temperature >= 200){
      iconElement.src = 'images/dead.png';
   }
   else if(temperature <= 32 && temperature > -200){
      iconElement.src = 'images/cold.png';
   }
   else if(temperature >= 90 && temperature < 200){
      iconElement.src = 'images/hot.png';
   }
   else if(temperature > 32 && temperature < 90){
      iconElement.src = 'images/cool.png';
   }
   else{
      iconElement.src = 'images/C-F.png';
   }
}