import './styles/style.scss';
import nav from './js/nav';
import form from './js/form';
import content from './js/content';


const Skycons = require('skycons')(window);

const container = document.querySelector('#container');
container.appendChild(nav);
container.appendChild(form);
container.appendChild(content);

const key = '3c8e19a35c7b3df5adebf12517690280';

const weather = {};

weather.temperature = {
  unit: 'celsius',
};

const darkModeSwitch = document.querySelector('#dark-mode-switch');
const input = document.querySelector('.form__input');
const formElement = document.querySelector('.form');
const weatherContainer = document.querySelector('.weather-info');
const loader = document.querySelector('.loader');
const icon = new Skycons({ color: '#21268b' });
icon.set('icon', 'clear_day');
icon.play();

const celsiusToFahrenheit = (temperature) => temperature * (9 / 5) + 32;

const changeTemp = () => {
  const covertButton = document.querySelector('.convert');
  const tempElement = document.querySelector('.temperature');
  covertButton.addEventListener('click', () => {
    if (weather.temperature.unit === 'celsius') {
      let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
      fahrenheit = Math.floor(fahrenheit);

      tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
      weather.temperature.unit = 'fahrenheit';
      covertButton.textContent = 'To Celsius';
    } else {
      tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
      weather.temperature.unit = 'celsius';
      covertButton.textContent = 'To Fahrenheit';
    }
  });
};

const displayWeather = (data) => {
  weatherContainer.style.display = 'block';
  weatherContainer.innerHTML = `
        <h3 class="temperature">${weather.temperature.value}<span>°C</span></h3>
        <h5 class="description">${weather.description}</h5>
        <p class="city">${weather.city}, ${weather.country}</p>
        <button class= 'convert'>To Fahrenheit</button>
        `;
  changeTemp();
  if (data.weather[0].main === 'Clouds') {
    icon.set('icon', 'cloudy');
    icon.play();
  } else if (data.weather[0].main === 'Rain') {
    icon.set('icon', 'rain');
    icon.play();
  } else if (data.weather[0].icon === '01n') {
    icon.set('icon', 'clear_night');
    icon.play();
  } else if (data.weather[0].icon === '01d') {
    icon.set('icon', 'clear_day');
    icon.play();
  } else if (data.weather[0].main === 'Snow') {
    icon.set('icon', 'snow');
    icon.play();
  } else if (data.weather[0].icon === 'Wind') {
    icon.set('icon', 'wind');
    icon.play();
  } else {
    icon.set('icon', 'clear_day');
    icon.play();
  }
};

async function getWeather(api) {
  try {
    const response = await fetch(api);
    if (response === 404) {
      loader.style.display = 'none';
    }
    const result = await response.json();
    loader.style.display = 'none';
    const data = result;
    weather.temperature.value = Math.floor(data.main.temp);
    weather.description = data.weather[0].description;
    weather.iconId = data.weather[0].icon;
    weather.city = data.name;
    weather.country = data.sys.country;
    displayWeather(data);
  } catch (error) {
    weatherContainer.style.display = 'block';
    weatherContainer.innerHTML = 'Please enter a valid city 🙄';
  }
}


formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const { value } = input;
  if (!value) return;
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${key}&units=metric`;
  loader.style.display = 'block';
  getWeather(api);
  formElement.reset();
  weatherContainer.innerHTML = '';
  weatherContainer.style.display = 'none';
});

const darkmode = JSON.parse(localStorage.getItem('jstabs-darkmode'));
darkModeSwitch.addEventListener('change', () => {
  document.querySelector('body').classList.toggle('darkmode');
  localStorage.setItem('jstabs-darkmode', JSON.stringify(darkmode));
});

if (darkmode) {
  document.querySelector('body').classList.add('darkmode');
  document.querySelector('#dark-mode-switch').checked = 'checked';
}
