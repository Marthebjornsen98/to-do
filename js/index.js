import listToArray from "./libs/listToArray.js";
import { validateInputLength } from "./libs/validateInputLength.js";

let listItems = [];

const searchBar = document.querySelector(".to-do__add");
const searchButton = document.querySelector(".to-do__btn");
const items = document.querySelector(".to-do__list");

searchButton.onclick = function () {
  if (!validateInputLength(searchBar.value, 3)) {
    console.log("Fail");

    return;
  } else {
    items.innerHTML = "";

    listItems.push(searchBar.value);
    listToArray(listItems, items);

    let toggleList = document.querySelectorAll(".to-do__item");

    toggleList.forEach((element) => {
      element.onclick = () => {
        element.classList.toggle("toggle");
      };
    });

    console.log("Pass");
  }
};
