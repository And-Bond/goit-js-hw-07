const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
//   <li>Ингридиенты</li>
//   <li>Ингридиенты</li>
//   <li>Ингридиенты</li>
//   <li>Ингридиенты</li>
//   <li>Ингридиенты</li>
//   <li>Ингридиенты</li>

const makeListOfElements = ingredients =>{
    return ingredients.map(ingredient => {
    const liEl = document.createElement('li')
    liEl.textContent = ingredient
    return liEl
    })
}

const listEl = document.querySelector('#ingredients')
const elements = makeListOfElements(ingredients)
listEl.append(...elements)