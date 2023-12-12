const searchGroup = document.querySelector('.search-group')
const search = document.querySelector('.search-group input')
const searchIcon = document.querySelector('.search-group i')
const searchSpan = document.querySelector('.search-span')


searchIcon.addEventListener('mouseover', () => {
    search.classList.remove('d-none')
    searchGroup.style.width = '90%'
    searchSpan.style.display = 'none'
})



const guruCardTemplate = document.querySelector("[data-guru-template]")
const guruCardContainer = document.querySelector("[guru-card-container]")

const searchInput = document.querySelector('.search-input')
console.log(searchInput);

let filterList;

async function getData() {
    const endpoint = await fetch('db/guru.json')
    let data = await endpoint.json()
    data.dataGuru.forEach(user => {
        getGuruData(user.fotoProfile, user.name, user.mapel)
        filterList = () => {
            const filter = searchInput.value.toLowerCase()
            console.log(filter);
            const listItems = user.name || user.mapel
            console.log(listItems);
        }
    });
}
getData()
searchInput.addEventListener('input', filterList)


let card;
const getGuruData = (img, name, mapel) => {
    card = `
                    <div class="guru-card">
            <img class="guru-img" guru-img src="${img}" alt="">
            <div class="guru-name" guru-name>
                <h5>${name}</h5>
                <p class="m-0">${mapel}</p>
            </div>
            <button type="button" class="btn btn-outline-primary">Upload Rpp</button>
        </div>`

    guruCardContainer.innerHTML += card
}