const navChk = document.getElementById('navChk')

navChk.addEventListener('change', () => {
    if (navChk.checked) {
        document.body.style.overflowY = 'hidden'
    } else {
        document.body.style.overflowY = 'visible'
    }
})
