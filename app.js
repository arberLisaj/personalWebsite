const menu = document.getElementById('menu')
const closeMenu = document.getElementById('close')
const ul = document.getElementById('ul')

menu.addEventListener('click', () => {
    ul.classList.add("open-nav")
})
closeMenu.addEventListener('click', () => {
    ul.classList.remove('open-nav')
    console.log('ckemi')
})


// gsap stuff overe here dont mind me 

gsap.from('#slogan', {
    x: 300,
    duration: 1,
})
