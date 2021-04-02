

// add 'toggle'/'navigation button & query a class using querySelector & assign class 'toggle'/navigation to it. 

const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')


// add event listener to the buttons 'toggle' & 'navigation' & call the function
//  'toggle'/'navigation' on click event & add 'active' class on toggle.

toggle.addEventListener('click', () => { 
    toggle.classList.toggle('active')      
    navigation.classList.toggle('active')
})

// toggle() is a function