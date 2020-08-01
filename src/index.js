import './styles/style.scss';
import nav from './js/nav';
import form from './js/form';
import content from './js/content';

const container = document.querySelector('#container');
container.appendChild(nav);
container.appendChild(form);
container.appendChild(content);

const darkModeSwitch = document.querySelector('#dark-mode-switch');

darkModeSwitch.addEventListener('change', () => {
    document.querySelector('body').classList.toggle('darkmode')
    localStorage.setItem('jstabs-darkmode', JSON.stringify(darkmode))
})

// Retrieve stored data
let darkmode = JSON.parse(localStorage.getItem('jstabs-darkmode'))

// and..... Action!
if (darkmode) {
    document.querySelector('body').classList.add('darkmode')
    document.querySelector('#dark-mode-switch').checked = 'checked'
}
