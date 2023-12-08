const navlinkEls = document.querySelectorAll('.nav-link')
const sectionEls = document.querySelectorAll('.section')


let currentSection = 'home'
window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        if (window.scrollY >= sectionEl.offsetTop) {
            currentSection = sectionEl.id
        }
    });
    navlinkEls.forEach(navlinkEl => {
        if (navlinkEl.href.includes(currentSection)) {
            navlinkEl.classList.add('active')
        } else {
            navlinkEl.classList.remove('active')
        }
    })
})

// Dynamic Menu

// Fetch JSON
async function getMenuData() {
    const endpoint = await fetch('/db/menu.json')
    const menuData = endpoint.json
    console.log(menuData);
}





const rowParrentMenu = document.getElementById('row-menu')
const menuWrapper = document.createElement('div')
menuWrapper.classList.add('col-sm-4', 'col-12')
menuWrapper.appendChild(menuCard)

const menuCard = document.createElement('div')
menuCard.classList.add('menu-card')
menuCard.appendChild(menuLink)

const menuLink = document.createElement('a')
menuLink.appendChild(menuIcon)
menuLink.appendChild(menuTitle)


let menuIcon = document.createElement('div')
menuIcon.classList.add('menu-icon')
menuIcon.appendChild(menuIconImg)

let menuIconImg = document.createElement('img')
menuIconImg.href = img

let menuTitle = document.createElement('div')
menuTitle.textContent = menuTitle