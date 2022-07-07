 const input = document.querySelector('input#validation-input')
input.addEventListener('blur',onInputBlur)
function onInputBlur(event){
    if(event.currentTarget.value.length > input.dataset.length){
        input.classList.add('invalid')
    }
    else{
        input.classList.add('valid')
    }
    
}