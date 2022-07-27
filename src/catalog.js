import { CssSyntaxError } from "postcss";
import style from "./css/style.scss";
import "./rwdNav";


let glamourChair = document.getElementById("glamourChair");
let upholsteryChair = document.getElementById("upholsteryChair");
let woodenChair = document.getElementById("woodenChair");
let loftTable = document.getElementById("loftTable");

let chairsGlamourContainer = document.getElementById("chairsGlamour");
let chairsUpholsteryContainer = document.getElementById("chairsUpholstery");
let chairsWoodenContainer = document.getElementById("chairsWooden");
let tablesLoftContainer = document.getElementById("tablesLoft");


upholsteryChair.addEventListener('click', ()=>{
    chairsUpholsteryContainer.style.display = "flex";
    chairsGlamourContainer.style.display = "none";
    chairsWoodenContainer.style.display = "none"
    tablesLoftContainer.style.display = "none";
    
});
glamourChair.addEventListener('click',()=>{
    chairsGlamourContainer.style.display = "flex";
    chairsUpholsteryContainer.style.display = "none";
    chairsWoodenContainer.style.display = "none";
    tablesLoftContainer.style.display = "none";
});
woodenChair.addEventListener('click',()=>{
    chairsWoodenContainer.style.display = "flex";
    chairsGlamourContainer.style.display = "none";
    chairsUpholsteryContainer.style.display = "none";
    tablesLoftContainer.style.display = "none";
});
loftTable.addEventListener('click', ()=>{
    tablesLoftContainer.style.display = "flex";
    chairsWoodenContainer.style.display = "none";
    chairsGlamourContainer.style.display = "none";
    chairsUpholsteryContainer.style.display = "none";
    
})


