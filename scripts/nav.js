const navChk = document.getElementById('navChk')
const nav = document.getElementById('nav')
const navbarItems = document.querySelectorAll('.nav-bar__item')

navChk.addEventListener('change', () => {
    if (navChk.checked) {
        document.body.style.overflowY = 'hidden'
        nav.style.transform = 'translateX(0)'
    } else {
        document.body.style.overflowY = 'visible'

        nav.style.transform = 'translateX(100%)'
    }
})

navbarItems.forEach((item) => {
    item.addEventListener('click', () => {
        nav.style.transform = 'translateX(100%)'
        document.body.style.overflowY = 'visible'
        navChk.checked = false
    })
})
