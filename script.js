function toggleVisibilityElement(id, display) {
    let element = document.getElementById(id);
    let currentStyle = getComputedStyle(element);
    console.log(currentStyle.getPropertyValue('display'));
    if (currentStyle.getPropertyValue('display') != 'none') {
        display = 'none';
    }
    element.setAttribute('style', `display: ${display} !important`);
}

console.log(window.screen.width);

if (window.screen.width <= 1200) {
    document.querySelectorAll('.nav-item-with-sub').forEach(element => {
        element.removeAttribute("href");
    });

    let itemWithSubMenu = [{'item' : 'about-item', 'subMenu' : 'about-sub-menu'}, {'item' : 'updates-item', 'subMenu' : 'updates-sub-menu'}];
    itemWithSubMenu.forEach(item => {
        document.getElementById(item['item']).addEventListener('click', () => {
            toggleVisibilityElement(item['subMenu'], 'flex');
        })
    });
}