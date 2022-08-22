import { CssSyntaxError } from "postcss";
import style from "./css/style.scss";
import "./rwdNav.js";
import "./catalog.js";



$(document).ready(function () {
  $("#checkoutBtn").click(function () {
    $("#about").scrollTo();
  });
});
