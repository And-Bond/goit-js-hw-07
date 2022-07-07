const inputName = document.querySelector('input#name-input')
const spanName = document.querySelector('span#name-output')
inputName.addEventListener('input',onInputText)
inputName.addEventListener('blur',onBlur)
function onInputText(event){
    spanName.textContent = event.currentTarget.value;           
    if(event.currentTarget.value === ''){
        spanName.textContent === 'незнакомец'
    }

}
function onBlur(event){
    if(event.currentTarget.value === ''){
        spanName.textContent += 'незнакомец'
    }
}