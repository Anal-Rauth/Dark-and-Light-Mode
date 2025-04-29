const fulldarkmode = document.querySelector('#full-dark-mode')
const containerdarkmode = document.querySelector('#contained-dark-mode')
const container = document.querySelector('.container-box')

fulldarkmode.addEventListener('change', () => {
    if (fulldarkmode.checked) {
        document.body.classList.add('dark')
        // localStorage.setItem('fulldarkmode',true)
    }
    else {
        document.body.classList.remove('dark')
        // localStorage.setItem('fulldarkmode', false)
    }
    containerdarkmode.checked = fulldarkmode.checked
    changeContainedDarkMode()
})

function changeContainedDarkMode(){
    if (containerdarkmode.checked) {
        container.classList.add('dark')
        // localStorage.setItem('changeContainedDarkMode', true)
    }
    else {
        container.classList.remove('dark')
        // localStorage.setItem('changeContainedDarkMode', false)
    }
}

containerdarkmode.addEventListener('change', changeContainedDarkMode)