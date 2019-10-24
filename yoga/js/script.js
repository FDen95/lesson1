'use strict';
window.addEventListener('DOMContentLoaded', function () {

	let tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function (event) {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});


	// Timer

	let deadline = '2019-09-21';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			hours = Math.floor((t / 1000 / 60 / 60)),
			days = Math.floor((t / 1000 / 60 / 60 / 24));

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			let t = getTimeRemaining(endtime);
			hours.textContent = t.hours.toString().padStart(2, '0');
			minutes.textContent = t.minutes.toString().padStart(2, '0');
			seconds.textContent = t.seconds.toString().padStart(2, '0');

			if (t.total <= 0) {
				clearInterval(timeInterval);
				hours.textContent = "0";
				minutes.textContent = "00";
				seconds.textContent = "00";
			}
		}
	}

	setClock('timer', deadline);

	// Modal

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		descriptionButton = document.querySelectorAll('.description-btn');

	more.addEventListener('click', showModal);
	close.addEventListener('click', hideModal);

	descriptionButton.forEach(function(element) {
		element.addEventListener('click', showModal);
	});

	function showModal() {
		overlay.style.display = 'block';
		this.classList.add('more-splash');
		document.body.style.overflow = 'hidden';
	}

	function hideModal() {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		descriptionButton.forEach(function(element) {
			element.classList.remove('more-splash');
		});
		document.body.style.overflow = '';
	}

	class Options {
		constructor(height, width, bg, fontSize, textAlign) {
			this.height = height;
			this.width = width;
			this.bg = bg;
			this.fontSize = fontSize;
			this.textAlign = textAlign;
		}
		createDiv() {
			let contacts = document.getElementById('about');
			let div = document.createElement('div');
			div.textContent = "12345";
			div.className = "timer-title";
			contacts.append(div);
		}
	}

	let options = new Options();
	options.createDiv();	

	// Form

	let message = {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро мы с вами свяжемся',
		failure: 'Что-то пошло не так'
	};

	let formMain = document.querySelector('.main-form'),
		form = document.getElementById('form'),
		input = form.getElementsByTagName('input'),
		statusMessage = document.createElement('div');
		statusMessage.classList.add('status');
	
	// Даём имена input'ам
	input[0].name = 'email';
	input[1].name = 'tel';

	requestForm(formMain);
	requestForm(form);
	
	// Функция
	function requestForm (form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			
			input = form.getElementsByTagName('input');
			form.appendChild(statusMessage);
	
			let req = new XMLHttpRequest();
			req.open('POST', 'server.php');
			req.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
	
			let obj = {};
			let formData = new FormData(form);
			formData.forEach((value, key) => {
				obj[key] = value;
			});
			let json = JSON.stringify(obj);
	
			req.send(json);
			req.addEventListener('readystatechange', () => {
				if (req.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				} else if (req.readyState === 4 && req.status == 200) {
					statusMessage.innerHTML = message.success;
				} else {
					statusMessage.innerHTML = message.failure;
				}
			});
	
			for (let i = 0; i < input.length; i++) {
				input[i].value = '';
			}
		});
	}

});