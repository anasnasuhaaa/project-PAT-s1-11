const navlinkEls = document.querySelectorAll(".nav-link");
const sectionEls = document.querySelectorAll(".section");

let currentSection = "home";
window.addEventListener("scroll", () => {
  sectionEls.forEach((sectionEl) => {
    if (window.scrollY >= sectionEl.offsetTop) {
      currentSection = sectionEl.id;
    }
  });
  navlinkEls.forEach((navlinkEl) => {
    if (navlinkEl.href.includes(currentSection)) {
      navlinkEl.classList.add("active");
    } else {
      navlinkEl.classList.remove("active");
    }
  });
});

// Dynamic Menu

// Fetch JSON
async function getMenuData() {
  const endpoint = await fetch("db/menu.json");
  const menuData = await endpoint.json();
  console.log(menuData.data);
  console.log(menuData.data.image);

  menuData.data.forEach((element) => {
    addMenuData(element.image, element.title);
    console.log(element.image);
  });
}

getMenuData()

const rowParrentMenu = document.getElementById("row-menu");
console.log(rowParrentMenu);

const addMenuData = (img, title) => {
  let get = ` <div class="col-sm-4 col-12">
    <div class="menu-card">
        <a href="">
            <div class="menu-icon"><img src="${img}" class="w-75"></div>
            <div class="menu-title">${title}</div>
        </a>
    </div>
</div>`;
  rowParrentMenu.innerHTML += get;
};
