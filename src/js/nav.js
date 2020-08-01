const nav = (() => {
const nav = document.createElement('nav');
const navItems = document.createElement('ul');
navItems.classList.add('nav-items');
navItems.innerHTML = `
<li class="logo">Weather App</li>
<li class="dark-mode-switch">
        <label class="switch-label" for="dark-mode-switch">Dark mode</label>
        <label class="switch">
            <input type="checkbox" id="dark-mode-switch">
            <span class="slider round"></span>
</li>
`
nav.appendChild(navItems);
})();