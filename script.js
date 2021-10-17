const body = document.querySelector('body')
const toggle = document.getElementById('toggle-slide')
const mode = document.querySelector('.switch p')

toggle.addEventListener('change', () => {
    if (toggle.checked == true){
        body.setAttribute('data-theme', 'light')
        mode.innerHTML='Light mode'
    }else{
        body.setAttribute('data-theme', 'dark')
        mode.innerHTML='Dark mode'
    }
})