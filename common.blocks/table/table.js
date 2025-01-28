// import "../../js/core.js";

const array = document.getElementsByClassName("table__handler-holder");

for (let i = 0; i < array.length; i++) {
  array[i].children[0].addEventListener("click", () => {
    selectValue(array[i].children[1].textContent);
  });
}

function selectValue(value) {
  if ("softwareReliability") {
    console.log(value);
  }
}
