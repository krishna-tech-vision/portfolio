const searchInput = document.getElementById("search");
const searbar = document.querySelector(".searbar");
const searchBtn = document.getElementById("searchBtn");

function AddInput() {
    searchInput.classList.toggle("active");
    searbar.classList.toggle("color");
    searchBtn.classList.toggle("color")
}

 const menuOption = document.querySelector(".menuOption")
function openMenuOpiton() {
    menuOption.classList.add("close")
}

function closeMenuOption() {
    menuOption.classList.remove("close")
}