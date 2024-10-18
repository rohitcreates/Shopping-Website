const buyButton = document.querySelector('.buy-btn')

 buyButton.addEventListener('click', function () {
     const buyButtonValue = document.querySelector('.buy-btn span').innerHTML
     const cartButton = document.querySelector('.cart-btn span').innerHTML = buyButtonValue
 })


const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')

nextBtn.addEventListener('click', function () {
    let products = document.querySelectorAll('.product')
    document.querySelector('.product-content').appendChild(products[0])
})

prevBtn.addEventListener('click', function () {
    let products = document.querySelectorAll('.product')
    document.querySelector('.product-content').prepend(products[products.length - 1])
})