const input = document.querySelector('div#controls input')
const btnDesroy = document.querySelector('[data-action = destroy]')
const btnRender = document.querySelector('[data-action = render]')
const divBoxes = document.querySelector('#boxes')
btnRender.addEventListener('click', crtBoxs)
btnDesroy.addEventListener('click', dstBoxs)
function crtBoxs(){
    let widthChanger = 0
    let heightChanger = 0
    let staticWidth = '30px'
    let staticHeight = '30px'
    const div = document.createElement('div')
    for(let i = 0;i < input.value; i += 1){
    const div_clone = div.cloneNode(true)
    div_clone.style.width = staticWidth
    div_clone.style.height = staticHeight
    div_clone.style.backgroundColor = 'red'
    divBoxes.append(div_clone)
    }
    console.log(input.value);
    console.log(div_clone);
}