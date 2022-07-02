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
    x: 500,
    duration: .6,
})
gsap.from('#mini-slogan', {
    x: 500,
    duration: 1,
},
    '=-.5')


gsap.to('#button', {
    duration: .5,
    opacity: 1,
},
    '=-.3')

gsap.from('.self-portrait', {
    duration: 1,
    y: -499,
},
    '=--3')