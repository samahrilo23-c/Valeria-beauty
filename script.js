// bouton
let btn=document.getElementById("btn");
btn.addEventListener("click", function(){
alert("Welcome to Valeria Beauty 💖");
});
// animation scroll simple
window.addEventListener("scroll", function(){
console.log("scrolling...");
});
window.addEventListener("load", function(){
document.body.style.opacity = "1";
});
let cards = document.querySelectorAll(".card");

window.addEventListener("scroll", function(){

cards.forEach(function(card){

let position = card.getBoundingClientRect().top;

let screen = window.innerHeight;

if(position < screen - 100){

card.classList.add("show");

}
});
});
// fonction panier simple
function addToCart(product){
alert(product + " added to cart  🛒");
}

let count = 0;
let buttons = document.querySelectorAll(".Add-to-cart");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    count++;
    document.getElementById("cart-count").innerText = count;
  });
});
console.log("samah");

// LA PARTIE DE HAIRCARE POUR FAIRE UN PANIER 
let cart = [];
let total = 0;

let buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    let card = button.parentElement;

    let name = card.querySelector("h4").innerText;
    let price = card.querySelector(".price").innerText.replace("$","");

    cart.push(name);
    total += parseInt(price);

    document.getElementById("cart-count").innerText = cart.length;

    let li = document.createElement("li");
    li.innerText = name + " - $" + price;
    document.getElementById("cart-items").appendChild(li);

    document.getElementById("total").innerText = total;
  });
});

function showCartMsg(){
let popup = document.querySelector(".cart-popup");
popup.classList.add("show");

setTimeout(()=>{
popup.classList.remove("show");
},2000);
}
let count = 0;

window.onload = function() {
let buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach(button => {
button.addEventListener("click", function() {
count++;
document.getElementById("cart-count").innerText = count;
});
});
};