pizzaJson.map((item, index) => {
  //fazendo um clone do elemento pizza-item que está dentro da div models no html para a pizza-area
  let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
  document.querySelector('.pizza-area').append(pizzaItem);

  //preenchendo os dados do item (pizza)
  pizzaItem.querySelector('.pizza-item--img img').src = item.img;
  pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
  pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
  pizzaItem.querySelector(
    '.pizza-item--price',
  ).innerHTML = `R$ ${item.price.toFixed(2)}`;

  //pizza clicada
  pizzaItem.querySelector('.pizza-item a').addEventListener('click', (ev) => {
    ev.preventDefault();
    //abrir janela de adição
    document.querySelector('.pizzaWindowArea').style.display = 'flex';
    //preencher os dados da janela
    document.querySelector('.pizzaBig img').src = item.img;
    document.querySelector('.pizzaInfo h1').innerHTML = item.name;
    document.querySelector('.pizzaInfo--desc').innerHTML = item.description;
    document.querySelector(
      '.pizzaInfo--actualPrice',
    ).innerHTML = `R$ ${item.price.toFixed(2)}`;
  });

  document
    .querySelector('.pizzaInfo--cancelButton')
    .addEventListener('click', () => {
      document.querySelector('.pizzaWindowArea').style.display = 'none';
    });
});

// FUNÇÃO PARA O MENU
document.querySelector('.fa-solid').addEventListener('click', () => {
  const ul = document.getElementById('ul');
  const btn = document.querySelector('.fa-bars');
  const x = document.querySelector('.fa-xmark');
  ul.classList.toggle('activeClass');
  btn.classList.toggle('active');
  x.classList.toggle('active');
});

//AUMENTAR QUANTIDADE DE PIZZAS
const pizzaQtd = document.querySelector('.pizzaInfo--qt');
const qtdMenos = document.querySelector('.pizzaInfo--qtmenos');
const qtdMais = document.querySelector('.pizzaInfo--qtmais');
const qtd = 0;

pizzaQtd.innerHTML = qtd;

qtdMais.addEventListener('click', () => {
  pizzaQtd.innerHTML = qtd + 1;
});
