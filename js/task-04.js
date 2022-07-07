const decrementBthEl = document.querySelector('#counter [data-action = decrement')

const counterValue = document.querySelector('#value')

const incrementBthEl = document.querySelector('#counter [data-action = increment')
const clearBthEl = document.querySelector('#counter [data-action = clear')
const decrementFun = () => {
    counterValue.textContent -= 1
}

const incrementFun = () => {
    counterValue.textContent = counterValue.textContent -(-1)
}

const clearFun = () => {
    counterValue.textContent = 0
} 

decrementBthEl.addEventListener('click', decrementFun)
incrementBthEl.addEventListener('click', incrementFun)
clearBthEl.addEventListener('click', clearFun)