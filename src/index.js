import './fonts/fonts.scss';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import customSelect from 'custom-select';
import Accordion from 'accordion-js';
import tabs from 'tabs';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'accordion-js/dist/accordion.min.css';
import './scss/styles.scss';

document.addEventListener('DOMContentLoaded', function () {
	customSelect(".mySelect");

	if (document.querySelectorAll('.accordion-container').length > 0) {
		new Accordion('.accordion-container');
	}

	const mainBannerHeight = document.querySelector('.main-block').offsetHeight
	const headerHeight = document.querySelector('.header').offsetHeight
	const afterMains = document.querySelectorAll('.after-main')
	afterMains.forEach(item => {
		item.style.marginTop = mainBannerHeight - headerHeight + 'px'
	})

	window.addEventListener('resize', () => {
		const mainBannerHeight = document.querySelector('.main-block').offsetHeight
		const headerHeight = document.querySelector('.header').offsetHeight
		afterMains.forEach(item => {
			item.style.marginTop = mainBannerHeight - headerHeight + 'px'
		})
	})



	const swiper = new Swiper('.main-block__slider .swiper', {
		slidesPerView: 1,
		modules: [Pagination],
		pagination: {
			el: '.main-block__slider .swiper-pagination',
		},
	})

	const swiper2 = new Swiper('.main-slider__wrap--ready .swiper', {
		slidesPerView: 1,
		spaceBetween: 0,
		modules: [Navigation, Pagination],
		pagination: {
			el: '.main-slider__wrap--ready .swiper-pagination',
		},
		navigation: {
			prevEl: '.main-slider__wrap--ready .swiper-button-prev',
			nextEl: '.main-slider__wrap--ready .swiper-button-next',
		},
		breakpoints: {
			768: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 'auto',
				spaceBetween: 20,
			}
		}
	})

	const swiper21 = new Swiper('.main-slider__wrap--dev .swiper', {
		slidesPerView: 1,
		spaceBetween: 0,
		modules: [Navigation, Pagination],
		pagination: {
			el: '.main-slider__wrap--dev .swiper-pagination',
		},
		navigation: {
			prevEl: '.main-slider__wrap--dev .swiper-button-prev',
			nextEl: '.main-slider__wrap--dev .swiper-button-next',
		},
		breakpoints: {
			768: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 'auto',
				spaceBetween: 20,
			}
		}
	})

	const swiper3 = new Swiper('.news__slider', {
		slidesPerView: 'auto',
		spaceBetween: 48,
		modules: [Navigation],
		navigation: {
			prevEl: '.news__slider .swiper-button-prev',
			nextEl: '.news__slider .swiper-button-next',
		},
		breakpoints: {
			768: {
				spaceBetween: 48,
			},
			0: {
				spaceBetween: 20,
			}
		}
	})

	const enableSwiper4 = function () {
		const swiper4 = new Swiper('.places__slider .swiper', {
			slidesPerView: 1,
			modules: [Pagination],
			pagination: {
				el: '.places__slider .swiper-pagination',
			},
		})
	}

	if (window.innerWidth < 768) {
		enableSwiper4()
	}

	const swiper5 = new Swiper('.about__slider .swiper', {
		slidesPerView: 'auto',
		spaceBetween: 40,
		breakpoints: {
			768: {
				spaceBetween: 40,
			},
			0: {
				spaceBetween: 20,
			}
		},
		modules: [Navigation],
		navigation: {
			prevEl: '.about__slider .swiper-button-prev',
			nextEl: '.about__slider .swiper-button-next',
		},

	})

	const swiper6 = new Swiper('.residence__slider .swiper', {
		slidesPerView: 3,
		spaceBetween: 20,
		breakpoints: {
			768: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			0: {
				slidesPerView: 'auto',
				spaceBetween: 12,
			}
		},
		modules: [Navigation],
		navigation: {
			prevEl: '.residence__slider .swiper-button-prev',
			nextEl: '.residence__slider .swiper-button-next',
		},
	})

	const swiper7 = new Swiper('.team__slider .swiper', {
		slidesPrevView: 'auto',
		spaceBetween: 32,
		breakpoints: {
			768: {
				slidesPerView: 'auto',
				spaceBetween: 32,
			},
			0: {
				slidesPerView: 'auto',
				spaceBetween: 20,
			}
		},
		modules: [Navigation],
		navigation: {
			prevEl: '.team__slider .swiper-button-prev',
			nextEl: '.team__slider .swiper-button-next',
		},
	})

	const btnsShow = document.querySelectorAll('.showText')
	function showText() {
		btnsShow.forEach(btn => {
			btn.addEventListener('click', function (e) {
				e.preventDefault()
				this.previousElementSibling.classList.add('show')
				this.remove()
			})
		})
	}

	showText()

	if (window.innerWidth < 767) {
		function changeTextEl(name, text) {
			const el2 = document.querySelector(name)
			el2.innerHTML = text
		}

		changeTextEl('.benefits__items-btn', 'MORE')
	}

	const video = document.querySelector('#video')
	const btnPlay = document.querySelector('#playVideo')

	function playVideo() {
		if (video.paused) {
			video.play()
		}
	}

	btnPlay.addEventListener('click', function () {
		playVideo()
		btnPlay.remove()
	})

	var container = document.querySelector('.tab-container')
	tabs(container);

})
