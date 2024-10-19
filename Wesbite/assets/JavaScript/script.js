const buyButton = document.querySelector(".buy-btn");

buyButton.addEventListener("click", function () {
  const buyButtonValue = document.querySelector(".buy-btn span").innerHTML;
  const cartButton = (document.querySelector(".cart-btn span").innerHTML =
    buyButtonValue);
});

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

nextBtn.addEventListener("click", function () {
  let products = document.querySelectorAll(".product");
  document.querySelector(".product-content").appendChild(products[0]);
});

prevBtn.addEventListener("click", function () {
  let products = document.querySelectorAll(".product");
  document
    .querySelector(".product-content")
    .prepend(products[products.length - 1]);
});

// const icon_1 = document.querySelector('.icon-1');

// const hoverItem = document.querySelector('.hover-item')

// icon_1.addEventListener('mouseover', function () {
//     hoverItem.style.display = "flex"
// })

// icon_1.addEventListener('mouseout', function () {
//    hoverItem.style.display = "none"
// })

const icon = document.querySelector("icon-2");
const hoverItem = document.querySelector(".hover-item");

icon.addEventListener('mouseover', function () {
    hoverItem.style.display = "flex"
})


icon.addEventListener('mouseout', function () {
    hoverItem.style.display = "none"
})