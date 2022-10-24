window.onload = () => {
	assignItems();
	document.querySelector('.header__burger').onclick = openMenu;
	resizeHandler();
	document.querySelector('.fullscreen-1__scroll-img').onclick = scrollDown;
	document.querySelector('.aux').addEventListener("mouseenter", (e) => {
		console.log("Mouseenter");
		document.querySelector('.header').classList.remove("header_invisible");
	})
}

function assignItems() {
	let headerNavItems = document.querySelectorAll('.header__nav-item');

	for (let item of headerNavItems) {
		item.onclick = makeActive;
	}

	function makeActive({ target }) {

		for (let item of headerNavItems) {
			item.classList.remove('header__nav-item_active');
		}

		target.closest('.header__nav-item').classList.add('header__nav-item_active');
		closeMenu();
	}
}

function openMenu() {
	document.querySelector('.header__menu').classList.add('header__menu_expanded');
	let burger = document.querySelector('.header__burger');
	burger.classList.add('burger-menu_active');
	burger.onclick = closeMenu;
}

function closeMenu() {
	document.querySelector('.header__menu').classList.remove('header__menu_expanded');
	let burger = document.querySelector('.header__burger');
	burger.classList.remove('burger-menu_active');
	burger.onclick = openMenu;
}

function wrapper() {
	let lastScroll = 0;

	return () => {
		if (document.documentElement.scrollTop > 0) {
			document.querySelector('.header').classList.add('header_scroll');
		}
		else {
			document.querySelector('.header').classList.remove('header_scroll');
		}

		if(lastScroll < document.documentElement.scrollTop) {
			document.querySelector('.header').classList.add('header_invisible');
		}
		else {
			document.querySelector('.header').classList.remove('header_invisible');
		}

		lastScroll = window.scrollY;
	}
}

window.onscroll = wrapper();

window.onresize = resizeHandler;

function resizeHandler() {
	if (window.innerWidth < 1280 && 
	document.querySelector('.fullscreen-4__cards').classList.contains('cards_horizontal')) {

		let images = document.querySelectorAll('.fullscreen-4__card-img');
		let titles = document.querySelectorAll('.fullscreen-4__card-title');
		let texts = document.querySelectorAll('.fullscreen-4__card-text');
		let cards = document.querySelector('.fullscreen-4__cards');

		cards.classList.remove('cards_horizontal');
		cards.innerHTML = '';

		for (let i = 0; i < titles.length; i++) {
			let cardsItem = document.createElement('div');
			cardsItem.classList.add('cards__item');
			cardsItem.classList.add('fullscreen-4__cards-item');
			cardsItem.append(images[i]);
			cardsItem.append(titles[i]);
			cardsItem.append(texts[i]);
			cards.append(cardsItem);
		}
	}

	if(window.innerWidth >= 1280 &&
	!document.querySelector('.fullscreen-4__cards').classList.contains('cards_horizontal')) {
		
		let images = document.querySelectorAll('.fullscreen-4__card-img');
		let titles = document.querySelectorAll('.fullscreen-4__card-title');
		let texts = document.querySelectorAll('.fullscreen-4__card-text');
		let cards = document.querySelector('.fullscreen-4__cards');

		cards.innerHTML = '';
		cards.classList.add('cards_horizontal');

		for (let i = 0; i < 3; i++) {
			let cardsRow = document.createElement('div');
			cardsRow.classList.add('cards__row');
			cardsRow.classList.add('fullscreen-4__cards-row');

			if(i === 0) {
				for (let img of images) {
					cardsRow.append(img);
				}
			}

			if (i === 1) {
				for (let title of titles) {
					cardsRow.append(title);
				}
			}

			if (i === 2) {
				for (let text of texts) {
					cardsRow.append(text);
				}
			}

			cards.append(cardsRow);
		}
	}
}

function scrollDown() {
	window.scrollTo(0, window.innerHeight);
}