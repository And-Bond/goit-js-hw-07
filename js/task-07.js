const inputRange = document.querySelector('input#font-size-control')
const spanText = document.querySelector('span#text')
inputRange.addEventListener('input', onInputRangeInput)
function onInputRangeInput(event){
    const curValue = event.currentTarget.value
    console.log(curValue);
    spanText.style.fontSize = curValue + 'px'
}