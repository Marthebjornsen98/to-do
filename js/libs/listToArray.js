export default function listToArray(array, domElm) {
  let html = "";
  array.forEach((element) => {
    domElm.innerHTML += `
        <li class="to-do__item">${element}</li>
        `;
  });

  domElm.innerHTML += html;
}
