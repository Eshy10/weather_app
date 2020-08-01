const content = (() => {
const contentElement = document.createElement('div');
contentElement.classList.add('tabcontent');
const iconElement = document.createElement('div');
const canvasElement = document.createElement('canvas');
canvasElement.setAttribute('id', 'icon');
canvasElement.setAttribute('width', '100');
canvasElement.setAttribute('height', '100');
iconElement.appendChild(canvasElement);
const weatherInfo = document.createElement('div');
weatherInfo.classList.add('weather-info');
contentElement.appendChild(iconElement);
contentElement.appendChild(weatherInfo);
return contentElement;
})();

export default content;