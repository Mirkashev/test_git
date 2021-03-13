const hiddenMenu = document.getElementById('hidden')
const buttonMenu = document.getElementById('menu')

buttonMenu.onclick = () => {
    if(hiddenMenu.style.display === 'none') {
        hiddenMenu.style.display = 'flex'
    }
    else {
        hiddenMenu.style.display = 'none'
    }
    
}

// test.style.display = 'block';

// console.log(test)



