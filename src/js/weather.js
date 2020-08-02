import { weather } from '../index'
const celsiusToFahrenheit = (temperature) => (temperature * 9/5) + 32;

export const changeTemp = () => {
    const tempElement = document.querySelector('.temperature');
    tempElement.addEventListener("click", function(){
        if(weather.temperature.unit == "celsius"){
            let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
            fahrenheit = Math.floor(fahrenheit);
            
            tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
            weather.temperature.unit = "fahrenheit";
        }else{
            tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
            weather.temperature.unit = "celsius"
        }
    });
}