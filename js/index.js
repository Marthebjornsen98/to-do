import listToArray from "./libs/listToArray.js";
import { validateInputLength } from "./libs/validateInputLength.js";

const searchBar = document.querySelector(".to-do__add");
const button = document.querySelector(".to-do__btn");
const items = document.querySelectorAll(".to-do__list");

let listItems = [];

button.onclick = function () {
  if (validateInputLength(searchBar.value, 3)) {
    items.innerHTML = "";
    listItems.push(searchBar.value);

    listToArray(listItems, items);

    console.log("Pass");
  } else {
    console.log("Fail");
  }
};
