pizzaJson.map((item, index) => {
    //fazendo um clone do elemento pizza-item que está dentro da div models no html para a pizza-area
    let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true)
    document.querySelector('.pizza-area').append(pizzaItem)

    //preenchendo os dados do item (pizza)
    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`

    //pizza clicada
    pizzaItem.querySelector('.pizza-item a').addEventListener('click', (ev) => {
        ev.preventDefault()
        //abrir janela de adição
        document.querySelector('.pizzaWindowArea').style.display = 'flex'
        //preencher os dados da janela
        document.querySelector('.pizzaBig img').src = item.img
        document.querySelector('.pizzaInfo h1').innerHTML = item.name
        document.querySelector('.pizzaInfo--desc').innerHTML = item.description
        document.querySelector('.pizzaInfo--actualPrice').innerHTML = `R$ ${item.price.toFixed(2)}`

    })

    document.querySelector('.pizzaInfo--cancelButton').addEventListener('click', () => {
        document.querySelector('.pizzaWindowArea').style.display = 'none'
    })
    document.querySelector('.pizzaWindowArea').addEventListener('click', () => {
        document.querySelector('.pizzaWindowArea').style.display = 'none'
    })
})


// FUNÇÃO PARA O MENU
document.querySelector('.fa-solid').addEventListener('click', () => {
    const ul = document.getElementById('ul')
    const divHeader = document.getElementById('div-header')
    ul.style.right = '0'
    ul.style.zIndex = '3'
})