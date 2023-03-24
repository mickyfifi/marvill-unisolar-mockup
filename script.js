function toggleVisibilityElement(id, display) {
    let element = document.getElementById(id);
    let currentStyle = getComputedStyle(element);
    if (currentStyle.getPropertyValue('display') != 'none') {
        display = 'none';
    }
    element.setAttribute('style', `display: ${display} !important`);
}

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

let floatingButtonUp = document.getElementById("floatingButtonUp");

window.onscroll = event => {
    if (document.documentElement.scrollTop > 0) {
        floatingButtonUp.style.display = "inline-block";
    } else {
        floatingButtonUp.style.display = "none";
    }
};

floatingButtonUp.addEventListener("click", event => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});