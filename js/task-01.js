const ulListEl = document.querySelectorAll('.item')
console.log(`В списке ${ulListEl.length} категории.`);

ulListEl.forEach(element =>{
    const ulEl = element.querySelector('h2')
    const liEl = element.querySelectorAll('li')
    console.log(`Категория : ${ulEl.textContent}`);
    console.log(`Количество элементов: ${liEl.length}`);
})
