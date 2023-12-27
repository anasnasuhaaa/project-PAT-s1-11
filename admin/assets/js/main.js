// add hovered class to selected list item
let list = document.querySelectorAll('.navigation li');

function activeLink() {
	list.forEach((item) => {
		item.classList.remove('hovered');
	});
	this.classList.add('hovered');
}

list.forEach((item) => item.addEventListener('mouseover', activeLink));

// Menu Toggle
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.onclick = function () {
	navigation.classList.toggle('active');
	main.classList.toggle('active');
};

// Daftar Guru
async function getMenuData() {
	const endpoint = await fetch('../db/guru.json');
	const menuData = await endpoint.json();
	console.log(menuData.dataGuru);

	menuData.dataGuru.forEach((element) => {
		addMenuData(element.fotoProfile, element.name, element.asal);
	});
}

getMenuData();

const parrent = document.getElementById('table');
console.log(parrent);

const addMenuData = (img, name, origin) => {
	let get = ` 
  <tr>
    <td width="60px">
									<div class="imgBx">
										<img src="${img}" alt="" />
									</div>
								</td>
								<td>
									<h4>
										${name} <br />
										<span>${origin}</span>
									</h4>
								</td>
                  </tr>`;

	parrent.innerHTML += get;
};
