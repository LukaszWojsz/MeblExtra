import { CssSyntaxError } from "postcss";
import style from "./css/style.scss";
import "./rwdNav";

let clicked = false;

let glamourChair = document.getElementById("glamourChair");
let upholsteryChair = document.getElementById("upholsteryChair");
let woodenChair = document.getElementById("woodenChair");
let loftTable = document.getElementById("loftTable");
let woodenTable = document.getElementById("woodenTable");
let coffeeTable = document.getElementById("coffeeTable");

let chairsGlamourContainer = document.getElementById("chairsGlamour");
let chairsUpholsteryContainer = document.getElementById("chairsUpholstery");
let chairsWoodenContainer = document.getElementById("chairsWooden");
let tablesLoftContainer = document.getElementById("tablesLoft");
let tablesWoodenContainer = document.getElementById("tablesWooden");
let tableCoffeeContainer = document.getElementById("tableCoffee");

$("li.active").click(function () {
  $("li.active").css("transform", "scale(1)");
  $(this).css("transform", "scale(1.3)");
  $(this).css("transition", "0.5s");
});


upholsteryChair.addEventListener("click", () => {
  chairsUpholsteryContainer.style.display = "flex";
  chairsGlamourContainer.style.display = "none";
  chairsWoodenContainer.style.display = "none";
  tablesLoftContainer.style.display = "none";
  tablesWoodenContainer.style.display = "none";
  tableCoffeeContainer.style.display = "none";
});
glamourChair.addEventListener("click", () => {
  chairsGlamourContainer.style.display = "flex";
  chairsUpholsteryContainer.style.display = "none";
  chairsWoodenContainer.style.display = "none";
  tablesLoftContainer.style.display = "none";
  tablesWoodenContainer.style.display = "none";
  tableCoffeeContainer.style.display = "none";
});
woodenChair.addEventListener("click", () => {
  chairsWoodenContainer.style.display = "flex";
  chairsGlamourContainer.style.display = "none";
  chairsUpholsteryContainer.style.display = "none";
  tablesLoftContainer.style.display = "none";
  tablesWoodenContainer.style.display = "none";
  tableCoffeeContainer.style.display = "none";
});
loftTable.addEventListener("click", () => {
  tablesLoftContainer.style.display = "flex";
  chairsWoodenContainer.style.display = "none";
  chairsGlamourContainer.style.display = "none";
  chairsUpholsteryContainer.style.display = "none";
  tablesWoodenContainer.style.display = "none";
  tableCoffeeContainer.style.display = "none";
});
woodenTable.addEventListener("click", () => {
  tablesWoodenContainer.style.display = "flex";
  tablesLoftContainer.style.display = "none";
  chairsWoodenContainer.style.display = "none";
  chairsGlamourContainer.style.display = "none";
  chairsUpholsteryContainer.style.display = "none";
  tableCoffeeContainer.style.display = "none";
});
coffeeTable.addEventListener("click", () => {
  tableCoffeeContainer.style.display = "flex";
  tablesWoodenContainer.style.display = "none";
  tablesLoftContainer.style.display = "none";
  chairsWoodenContainer.style.display = "none";
  chairsGlamourContainer.style.display = "none";
  chairsUpholsteryContainer.style.display = "none";
});
