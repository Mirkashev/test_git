const hiddenMenu = document.getElementById('hiddenMenu');
const buttonUnhide = document.getElementById('unhide');
const toHide = document.getElementById('tohide');
const navAnimation = document.querySelectorAll('.nav_animation');

//mobile navigation panel
buttonUnhide.onclick = () => {
    if(hiddenMenu.style.display === 'none') {
        hiddenMenu.style.display = 'flex';
        toHide.style.display = 'none';
        buttonUnhide.style.border = 'none';
        buttonUnhide.style.width = '22px';
        buttonUnhide.style.height = '22px';
        buttonUnhide.style.backgroundImage = 'url(../portfolio-2021/files/images/mark.svg)';
        setTimeout(() => {
            for(let i = 0; i < navAnimation.length; i++ ) {
                navAnimation[i].style.paddingBottom = '26px';
                navAnimation[i].style.opacity = '1';
            }
        }, 200);
    }
    else {
        hiddenMenu.style.display = 'none';
        toHide.style.display = 'block';
        buttonUnhide.style.borderTop = '2px solid #373745';
        buttonUnhide.style.borderBottom = '2px solid #373745';
        buttonUnhide.style.width = '46px';
        buttonUnhide.style.height = '10px';
        buttonUnhide.style.backgroundImage = 'none';
        for(let i = 0; i < navAnimation.length; i++ ) {
            navAnimation[i].style.paddingBottom = '13px';
            navAnimation[i].style.opacity = '0';
        }
    }
}