import { CssSyntaxError } from "postcss";
import style from "./css/style.scss";
import "./rwdNav";





let glamourChair = document.getElementById("glamourChair");
let upholsteryChair = document.getElementById("upholsteryChair");
let woodenChair = document.getElementById("woodenChair");
let loftTable = document.getElementById("loftTable");
let woodenTable = document.getElementById("woodenTable");
let coffeeTable = document.getElementById("coffeeTable");
let modernSet = document.getElementById("modernSet");
let classicSet = document.getElementById("classicSet");

let chairsGlamourContainer = document.getElementById("chairsGlamour");
let chairsUpholsteryContainer = document.getElementById("chairsUpholstery");
let chairsWoodenContainer = document.getElementById("chairsWooden");
let tablesLoftContainer = document.getElementById("tablesLoft");
let tablesWoodenContainer = document.getElementById("tablesWooden");
let tableCoffeeContainer = document.getElementById("tableCoffee");
let setsModernContainer = document.getElementById("setsModern");
let setsClassicContainer = document.getElementById("setsClassic");

$("li.active").click(function () {
  $("li.active").css("transform", "scale(1)");
  $(this).css("transform", "scale(1.1)");
  $(this).css("transition", "0.5s");
});

// function getPics() {} //just for this demo
const imgs = document.querySelectorAll('#catalog #productsContainer .product-panel img');
const fullPage = document.querySelector('#fullpage');
const bigpicture = document.querySelector('#bigPicture');

imgs.forEach(img => {
    img.addEventListener('click', function() {
    bigpicture.style.backgroundImage = 'url(' + img.src + ')';
    bigpicture.style.display = 'flex';
    fullPage.style.display = 'flex';
  });
});

// window.onload(chairsUpholsteryContainer.style.display = "flex");

upholsteryChair.addEventListener("click", () => {
  chairsUpholsteryContainer.style.display = "flex";
  chairsGlamourContainer.style.display = "none";
  chairsWoodenContainer.style.display = "none";
  tablesLoftContainer.style.display = "none";
  tablesWoodenContainer.style.display = "none";
  tableCoffeeContainer.style.display = "none";
  setsModernContainer.style.display = "none";
  setsClassicContainer.style.display = "none";
});
glamourChair.addEventListener("click", () => {
  chairsGlamourContainer.style.display = "flex";
  chairsUpholsteryContainer.style.display = "none";
  chairsWoodenContainer.style.display = "none";
  tablesLoftContainer.style.display = "none";
  tablesWoodenContainer.style.display = "none";
  tableCoffeeContainer.style.display = "none";
  setsModernContainer.style.display = "none";
  setsClassicContainer.style.display = "none";
});
woodenChair.addEventListener("click", () => {
  chairsWoodenContainer.style.display = "flex";
  chairsGlamourContainer.style.display = "none";
  chairsUpholsteryContainer.style.display = "none";
  tablesLoftContainer.style.display = "none";
  tablesWoodenContainer.style.display = "none";
  tableCoffeeContainer.style.display = "none";
  setsModernContainer.style.display = "none";
  setsClassicContainer.style.display = "none";
});
loftTable.addEventListener("click", () => {
  tablesLoftContainer.style.display = "flex";
  chairsWoodenContainer.style.display = "none";
  chairsGlamourContainer.style.display = "none";
  chairsUpholsteryContainer.style.display = "none";
  tablesWoodenContainer.style.display = "none";
  tableCoffeeContainer.style.display = "none";
  setsModernContainer.style.display = "none";
  setsClassicContainer.style.display = "none";
});
woodenTable.addEventListener("click", () => {
  tablesWoodenContainer.style.display = "flex";
  tablesLoftContainer.style.display = "none";
  chairsWoodenContainer.style.display = "none";
  chairsGlamourContainer.style.display = "none";
  chairsUpholsteryContainer.style.display = "none";
  tableCoffeeContainer.style.display = "none";
  setsModernContainer.style.display = "none";
  setsClassicContainer.style.display = "none";
});
coffeeTable.addEventListener("click", () => {
  tableCoffeeContainer.style.display = "flex";
  tablesWoodenContainer.style.display = "none";
  tablesLoftContainer.style.display = "none";
  chairsWoodenContainer.style.display = "none";
  chairsGlamourContainer.style.display = "none";
  chairsUpholsteryContainer.style.display = "none";
  setsModernContainer.style.display = "none";
  setsClassicContainer.style.display = "none";
});
modernSet.addEventListener("click", () => {
  setsModernContainer.style.display = "flex";
  tableCoffeeContainer.style.display = "none";
  tablesWoodenContainer.style.display = "none";
  tablesLoftContainer.style.display = "none";
  chairsWoodenContainer.style.display = "none";
  chairsGlamourContainer.style.display = "none";
  chairsUpholsteryContainer.style.display = "none";
  setsClassicContainer.style.display = "none";
});
classicSet.addEventListener("click", () => {
  setsClassicContainer.style.display = "flex";
  setsModernContainer.style.display = "none";
  tableCoffeeContainer.style.display = "none";
  tablesWoodenContainer.style.display = "none";
  tablesLoftContainer.style.display = "none";
  chairsWoodenContainer.style.display = "none";
  chairsGlamourContainer.style.display = "none";
  chairsUpholsteryContainer.style.display = "none";
});

