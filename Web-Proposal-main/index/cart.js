let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: 'D1-black.jpg',
        price: 120000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: 'D2-latte.jpg',
        price: 120000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: 'D3-cappuccino.jpg',
        price: 220000
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: 'D4-americano.jpg',
        price: 123000
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: 'D5-espresso.jpg',
        price: 320000
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: 'D6-doppio.jpg',
        price: 120000
    },
    {
        id: 7,
        name: 'PRODUCT NAME 7',
        image: 'D7-cortado.jpg',
        price: 120000
    },
    {
        id: 8,
        name: 'PRODUCT NAME 8',
        image: 'D8-redeye.jpg',
        price: 120000
    },
    {
        id: 9,
        name: 'PRODUCT NAME 9',
        image: 'D9-galao.jpg',
        price: 120000
    },
    {
        id: 10,
        name: 'PRODUCT NAME 10',
        image: 'D10-lungo.jpg',
        price: 120000
    },
    {
        id: 11,
        name: 'PRODUCT NAME 11',
        image: 'D11-macchiato.jpg',
        price: 120000
    },
    {
        id: 12,
        name: 'PRODUCT NAME 6',
        image: 'D12-mocha.jpg',
        price: 120000
    },
    {
        id: 13,
        name: 'PRODUCT NAME 6',
        image: 'D13-ristretto.jpg',
        price: 120000
    },
    {
        id: 14,
        name: 'PRODUCT NAME 6',
        image: 'D14-flatwhite.jpg',
        price: 120000
    },
    {
        id: 15,
        name: 'PRODUCT NAME 6',
        image: 'D15-affogato.jpg',
        price: 120000
    },
    {
        id: 16,
        name: 'PRODUCT NAME 6',
        image: 'D16-cafe au lait.jpg',
        price: 120000
    },
    {
        id: 17,
        name: 'PRODUCT NAME 6',
        image: 'D17-irish.jpg',
        price: 120000
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/drink/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/drink/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}