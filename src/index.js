import './styles/style.css';
import nav from './js/nav';
import form from './js/form';
import content from './js/content';

const container = document.querySelector('#container');
container.appendChild(nav);
container.appendChild(form);
container.appendChild(content);