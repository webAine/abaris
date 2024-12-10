const header = document.querySelector("header");
const dropdown = document.querySelector(".dropdown");

//Burger
const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__menu");

burger.addEventListener("click", function () {
  menu.classList.toggle("active");
  burger.classList.toggle("active");

  if (menu.classList.contains("active")) {
    menu.style.maxHeight = "2000px";
    menu.style.paddingTop = "20px";
    header.style.height = "100%";
  } else {
    menu.style.maxHeight = "0";
    menu.style.paddingTop = "0";
    header.style.height = "auto";
  }
});

// Dropdown
const dropdownBtn = document.querySelector(".dropdown p");
const dropdownMenu = document.querySelector(".drop-menu");
const dropdownMenuTitle = document.querySelectorAll(".drop-menu__item-title");

dropdownBtn.addEventListener("click", function () {
  dropdownMenu.classList.toggle("active");
  dropdown.classList.toggle("active");

  if (dropdownMenu.classList.contains("active")) {
    dropdownMenu.style.height = "auto";
  } else {
    dropdownMenu.style.height = "0";
  }
});

// Dropdown sublist
dropdownMenuTitle.forEach((item) => {
  const arrow = item.querySelector("img");
  const dropdownList = item.nextElementSibling;

  if (window.innerWidth <= 720) {
    item.addEventListener("click", function () {
      arrow.classList.toggle("active");
      dropdownList.classList.toggle("visible");

      if (dropdownList.classList.contains("visible")) {
        dropdownList.style.height = "auto";
        dropdownList.style.marginBottom = "24px";
      } else {
        dropdownList.style.height = "0";
        dropdownList.style.marginBottom = "0";
      }
    });
  } else {
    item.addEventListener("click", function () {
      arrow.classList.toggle("active");
      dropdownList.classList.toggle("invisible");

      if (dropdownList.classList.contains("invisible")) {
        dropdownList.style.height = "0";
        dropdownList.style.marginBottom = "0";
      } else {
        dropdownList.style.height = "auto";
        dropdownList.style.marginBottom = "24px";
      }
    });
  }
});

//Move drop-menu
const dropMenu = document.querySelector(".drop-menu");

if (window.innerWidth <= 720) {
  if (!dropdown.contains(dropMenu)) {
    dropdown.appendChild(dropMenu);
  }
} else {
  const nav = document.querySelector(".header__nav");
  if (!nav.contains(dropMenu)) {
    nav.appendChild(dropMenu);
  }
}

//FAQ
const togglers = document.querySelectorAll("[data-toggle]");

if (togglers && togglers != undefined) {
  togglers.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const selector = e.currentTarget.dataset.toggle;
      const block = document.querySelector(selector);

      if (e.currentTarget.classList.contains("active")) {
        block.style.maxHeight = null;
        block.style.paddingTop = null;
        block.style.overflow = "hidden";
      } else {
        block.style.maxHeight = block.scrollHeight + "px";
        block.style.paddingTop = "16px";
        block.style.overflow = "visible";
      }

      e.currentTarget.classList.toggle("active");
    });
  });
}
