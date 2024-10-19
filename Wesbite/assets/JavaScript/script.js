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



const iconHover = document.querySelectorAll(".icon");

const hoverItem = document.querySelectorAll(".hover-item");


iconHover.forEach((icon) => {
  icon.addEventListener("mouseover", function () {
    const index = Array.from(iconHover).indexOf(icon);  // Get the index of the hovered icon
    hoverItem[index].style.display = "flex";  // Show the corresponding hover item
  });

  icon.addEventListener("mouseout", function () {
    const index = Array.from(iconHover).indexOf(icon);  // Get the index of the hovered icon
    hoverItem[index].style.display = "none";  // Hide the corresponding hover item
  });
});