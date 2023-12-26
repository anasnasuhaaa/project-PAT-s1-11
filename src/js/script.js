const navlinkEls = document.querySelectorAll('.nav-link');
const sectionEls = document.querySelectorAll('.section');

let currentSection = 'home';
window.addEventListener('scroll', () => {
	sectionEls.forEach((sectionEl) => {
		if (window.scrollY >= sectionEl.offsetTop) {
			currentSection = sectionEl.id;
		}
	});
	navlinkEls.forEach((navlinkEl) => {
		if (navlinkEl.href.includes(currentSection)) {
			navlinkEl.classList.add('active');
		} else {
			navlinkEl.classList.remove('active');
		}
	});
});

// Dynamic Menu

// Fetch JSON
async function getMenuData() {
	const endpoint = await fetch('db/menu.json');
	const menuData = await endpoint.json();
	console.log(menuData.data);
	console.log(menuData.data.image);

	menuData.data.forEach((element) => {
		addMenuData(element.image, element.title);
		console.log(element.image);
	});
}

getMenuData();

const rowParrentMenu = document.getElementById('row-menu');
console.log(rowParrentMenu);

const addMenuData = (img, title) => {
	let get = ` <div class="col-sm-4 col-12 d-flex justify-content-center align-items-center">
    <div class="menu-card animate__animated">
        <a href="guru.html">
            <div class="menu-icon"><img src="${img}" class="w-75"></div>
            <div class="menu-title">${title}</div>
        </a>
    </div>
</div>`;

	rowParrentMenu.innerHTML += get;
};

fetch('db/selfdevelopment.json')
	.then((res) => res.json())
	.then((selfDev) => {
		selfDev.forEach((element) => {
			getSelfDev(element.img, element.icon, element.title, element.description);
		});
	});

const selfDevRow = document.getElementById('sd-row');
const getSelfDev = (img, icon, title, desc) => {
	let selfDevCol = `
    <div class="col-12 col-sm-6 col-md-4 ">
                    <div class="sd-card bg-light rounded-3 d-flex flex-column justify-content-between">
                        <img src="${img}" class="self-development-img rounded-3" alt="">
                        <div class="header-card-sd d-flex justify-content-start align-items-center mb-3 mt-3">
                            <img src="${icon}" alt="" class="self-development-icon">
                            <h5 class="m-0 fw-semibold">${title}</h5>
                        </div>
                        <p>${desc}</p>
                        <button class="btn btn-primary w-100">Selengkapnya</button>
                    </div>
                </div>
    `;

	selfDevRow.innerHTML += selfDevCol;
};

fetch('db/inspirasi.json')
	.then((res) => res.json())
	.then((inspiration) => {
		inspiration.forEach((element) => {
			getInspiration(
				element.img,
				element.icon,
				element.title,
				element.description
			);
		});
	});

const inspirationRow = document.getElementById('sd-row-inspiration');
const getInspiration = (img, icon, title, desc) => {
	let inspirationCol = `   <div class="col-12 col-sm-6 col-md-4 ">
    <div class="sd-card bg-light rounded-3 d-flex flex-column justify-content-between">
        <img src="${img}" class="self-development-img rounded-3" alt="">
        <div class="header-card-sd d-flex justify-content-start align-items-center mb-3 mt-3">
            <img src="${icon}" alt="" class="self-development-icon">
            <h5 class="m-0 fw-semibold">${title}</h5>
        </div>
        <p>${desc}</p>
        <button class="btn btn-primary w-100">Selengkapnya</button>
    </div>
</div>
`;

	inspirationRow.innerHTML += inspirationCol;
};

fetch('db/mengajar.json')
	.then((res) => res.json())
	.then((mengajar) => {
		mengajar.forEach((element) => {
			getMengajar(
				element.img,
				element.icon,
				element.title,
				element.description
			);
		});
	});

const mengajarRow = document.getElementById('sd-row-mengajar');
const getMengajar = (img, icon, title, desc) => {
	let mengajarCol = `   <div class="col-12 col-sm-6 col-md-4 ">
    <div class="sd-card bg-light rounded-3 d-flex flex-column justify-content-between">
        <img src="${img}" class="self-development-img rounded-3" alt="">
        <div class="header-card-sd d-flex justify-content-start align-items-center mb-3 mt-3">
            <img src="${icon}" alt="" class="self-development-icon">
            <h5 class="m-0 fw-semibold">${title}</h5>
        </div>
        <p>${desc}</p>
        <button class="btn btn-primary w-100">Selengkapnya</button>
    </div>
</div>
`;

	mengajarRow.innerHTML += mengajarCol;
};
