const buyButton = document.querySelector('.buy-btn')

 buyButton.addEventListener('click', function () {
     const buyButtonValue = document.querySelector('.buy-btn span').innerHTML
     const cartButton = document.querySelector('.cart-btn span').innerHTML = buyButtonValue
    console.log(cartButton);
    console.log(buyButtonValue);
 })