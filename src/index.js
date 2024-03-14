import './fonts/fonts.scss';
// import Swiper from 'swiper';
import intlTelInput from 'intl-tel-input';
import { Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper/bundle';
import customSelect from 'custom-select';
import Accordion from 'accordion-js';
import tabs from 'tabs';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'accordion-js/dist/accordion.min.css';
import 'intl-tel-input/build/css/intlTelInput.css';
import './scss/styles.scss';
import fslightbox from 'fslightbox';

document.addEventListener('DOMContentLoaded', function () {
	customSelect(".mySelect");

	if (document.querySelectorAll('.accordion-container').length > 0) {
		new Accordion('.accordion-container');
	}

	if (document.querySelectorAll('.main-block').length > 0) {
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
	}

	if (document.querySelectorAll('.banner').length > 0) {
		const mainBannerHeight = document.querySelector('.banner').offsetHeight
		const headerHeight = document.querySelector('.header').offsetHeight
		const afterMains = document.querySelectorAll('.after-main')
		afterMains.forEach(item => {
			item.style.marginTop = mainBannerHeight - headerHeight + 'px'
		})

		window.addEventListener('resize', () => {
			const mainBannerHeight = document.querySelector('.banner').offsetHeight
			const headerHeight = document.querySelector('.header').offsetHeight
			afterMains.forEach(item => {
				item.style.marginTop = mainBannerHeight - headerHeight + 'px'
			})
		})
	}



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
	if (window.innerWidth < 768) {
		swiper2.on('slideChange', function () {
			document.querySelector('.main-slider__wrap--ready .swiper-button-next').classList.add('hidden')
		});
	}

	if (window.innerWidth < 768) {
		swiper21.on('slideChange', function () {
			document.querySelector('.main-slider__wrap--dev .swiper-button-next').classList.add('hidden')
		});
	}

	const swiper3 = new Swiper('#news-slider', {
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

	if (window.innerWidth > 767) {
		const swiper31 = new Swiper('#news-slider-2', {
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
	}



	if (window.innerWidth < 768) {
		swiper3.on('slideChange', function () {
			document.querySelector('.news__slider .swiper-button-next').classList.add('hidden')
		});
	}

	const enableSwiper4 = function () {
		const swiper4 = new Swiper('.places__slider .swiper', {
			slidesPerView: 3,
			modules: [Pagination, Navigation],
			pagination: {
				el: '.places__slider .swiper-pagination',
			},
			navigation: {
				prevEl: '.places__slider .swiper-button-prev',
				nextEl: '.places__slider .swiper-button-next',
			},
			breakpoints: {
				767: {
					slidesPerView: 3,
				},
				0: {
					slidesPerView: 1,
				}
			},
		})
		if (window.innerWidth < 768) {
			swiper4.on('slideChange', function () {
				document.querySelector('.places__slider .swiper-button-next').classList.add('hidden')
			});
		}
	}

	if (window.innerWidth < 1441) {
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

	if (window.innerWidth < 768) {
		swiper5.on('slideChange', function () {
			document.querySelector('.about__slider .swiper-button-next').classList.add('hidden')
		});
	}

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
	if (window.innerWidth < 768) {
		swiper6.on('slideChange', function () {
			document.querySelector('.residence__slider .swiper-button-next').classList.add('hidden')
		});
	}

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

	if (window.innerWidth < 768) {
		swiper7.on('slideChange', function () {
			document.querySelector('.team__slider .swiper-button-next').classList.add('hidden')
		});
	}

	const swiper8 = new Swiper('.banner-slider', {
		slidesPerView: 1,
		autoplay: {
			delay: 3000,
		},
	})

	const swiper = new Swiper('.main-block__slider .swiper', {
		slidesPerView: 1,
		autoplay: {
			delay: 3000,
		},
		modules: [Pagination],
		pagination: {
			el: '.main-block__slider .swiper-pagination',

		},
	})

	const slidesCountLength = document.querySelectorAll('.banner-slider .swiper-slide').length

	swiper.on('slideChange', function (slidesCountLength) {
		swiper8.slideTo(swiper.activeIndex)
	});

	swiper8.on('slideChange', function (slidesCountLength) {
		swiper.slideTo(swiper8.activeIndex)
	});

	const swiper9 = new Swiper('.catalog__slider-1 .swiper', {
		slidesPerView: 1,
		modules: [Navigation, Pagination],
		autoplay: true,
		loop: true,
		pagination: {
			el: '.catalog__slider-1 .swiper-pagination',
		},
		navigation: {
			prevEl: '.catalog__slider-1 .swiper-button-prev',
			nextEl: '.catalog__slider-1 .swiper-button-next',
		},
	})
	const swiper10 = new Swiper('.catalog__slider-2 .swiper', {
		slidesPerView: 1,
		modules: [Navigation, Pagination],
		autoplay: true,
		loop: true,
		pagination: {
			el: '.catalog__slider-2 .swiper-pagination',
		},
		navigation: {
			prevEl: '.catalog__slider-2 .swiper-button-prev',
			nextEl: '.catalog__slider-2 .swiper-button-next',
		},
	})
	const swiper11 = new Swiper('.catalog__slider-3 .swiper', {
		slidesPerView: 1,
		modules: [Navigation, Pagination],
		autoplay: true,
		loop: true,
		pagination: {
			el: '.catalog__slider-3 .swiper-pagination',
		},
		navigation: {
			prevEl: '.catalog__slider-3 .swiper-button-prev',
			nextEl: '.catalog__slider-3 .swiper-button-next',
		},
	})
	const swiper12 = new Swiper('.catalog__slider-4 .swiper', {
		slidesPerView: 1,
		modules: [Navigation, Pagination],
		autoplay: true,
		loop: true,
		pagination: {
			el: '.catalog__slider-4 .swiper-pagination',
		},
		navigation: {
			prevEl: '.catalog__slider-4 .swiper-button-prev',
			nextEl: '.catalog__slider-4 .swiper-button-next',
		},
	})
	const swiper13 = new Swiper('.catalog__slider-5 .swiper', {
		slidesPerView: 1,
		modules: [Navigation, Pagination],
		autoplay: true,
		loop: true,
		pagination: {
			el: '.catalog__slider-5 .swiper-pagination',
		},
		navigation: {
			prevEl: '.catalog__slider-5 .swiper-button-prev',
			nextEl: '.catalog__slider-5 .swiper-button-next',
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

	if (document.querySelectorAll('.showText').length > 0) {
		showText()
	}

	if (window.innerWidth < 767 && document.querySelectorAll('.benefits__items-btn').length > 0) {
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

	// btnPlay.addEventListener('click', function () {
	// 	playVideo()
	// 	btnPlay.remove()
	// })

	if (document.querySelectorAll('.tab-container').length > 0) {
		var container = document.querySelector('.tab-container')
		tabs(container);
	}



	const grids = document.querySelectorAll('.grid-item')
	grids.forEach((grid, index) => {
		grid.classList.add(`ga${index}`)
	})

	function showBlocks() {
		const blocks = document.querySelectorAll('.requisites__block')
		const btn = document.querySelector('.requisites__more')
		blocks.forEach((block, index) => {
			if (index > 5) {
				block.classList.add('hidden')
			}
		})
		btn.addEventListener('click', function () {
			blocks.forEach(block => {
				block.classList.remove('hidden')
			})
			this.remove()
		})
	}

	if (document.querySelectorAll('.requisites__block').length > 0) {
		showBlocks()
	}


	function calcHeightError() {
		const heighFooter = document.querySelector('.footer').offsetHeight
		const el = document.querySelector('.banner-error')
		el.style.height = `calc(100% - ${heighFooter}px)`
	}
	if (document.querySelectorAll('.banner-error').length > 0) {
		calcHeightError()
	}

	if (document.querySelectorAll('.phone').length > 0) {
		const input = document.querySelector(".phone");
		intlTelInput(input, {
			// onlyCountries: ["de", "us", "fr", "es", "it", "ch", "nl", "at", "dk"],
			utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.19/build/js/utils.js",
		});
	}
	if (document.querySelectorAll('.phone2').length > 0) {
		const input2 = document.querySelector(".phone2");
		intlTelInput(input2, {
			// onlyCountries: ["de", "us", "fr", "es", "it", "ch", "nl", "at", "dk"],
			utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.19/build/js/utils.js",
		});
	}


	if (window.innerWidth > 767 && document.querySelectorAll('.share').length > 0) {
		function openShare() {
			const btns = document.querySelectorAll('.shareShow')
			btns.forEach(btn => {
				btn.addEventListener('click', (e) => {
					btn.closest('div').querySelector('.share').classList.toggle('show')
					if (btn.closest('.swiper-slide')) {
						btn.closest('.swiper-slide').style.zIndex = "1"
					}
				})
			})
		}
		openShare()

		function closeShare() {
			const btns = document.querySelectorAll('.share__close')
			const blocks = document.querySelectorAll('.share')
			btns.forEach(btn => {
				btn.addEventListener('click', function () {
					this.closest('.share').classList.remove('show')
					if (btn.closest('.swiper-slide')) {
						btn.closest('.swiper-slide').style.zIndex = "0"
					}
				})
			})
			document.addEventListener('click', function (e) {
				const target = e.target
				if (target.closest('.btn-share')) {
					document.querySelectorAll('.swiper-slide').forEach(slide => {
						slide.style.zIndex = '0'
					})
					blocks.forEach(share => {
						share.classList.remove('show')
					})
					target.closest('div').querySelector('.share').classList.add('show')
					if (target.closest('.swiper-slide')) {
						target.closest('.swiper-slide').style.zIndex = "1"
					}
				}
				if (target.closest('.share') || target.closest('.btn-share')) {

				} else {
					blocks.forEach(share => {
						share.classList.remove('show')
					})
					// document.querySelectorAll('.swiper-slide').forEach(slide => {
					// 	slide.style.zIndex = "0"
					// })
				}
			})
		}
		closeShare()
	}

	if (document.querySelectorAll('.btn-heart').length > 0) {
		const hearts = document.querySelectorAll('.btn-heart')
		hearts.forEach(heart => {
			let count = 0;
			heart.addEventListener('click', function () {
				count = this.dataset.count = count + 1;
				this.classList.add('active')
			})
		})
	}

	const burger = document.querySelector('.header__burger')
	const mobileMenu = document.querySelector('.header__main')
	const menuClose = document.querySelector('.menu-close')
	burger.addEventListener('click', function () {
		mobileMenu.classList.add('show')
		disablePageScroll()
	})
	menuClose.addEventListener('click', function () {
		mobileMenu.classList.remove('show')
		enablePageScroll()
	})


	// const popup = document.querySelector('.popup')
	// const scrollLock = require('scroll-lock');
	// function showPopup() {
	// 	const btns = document.querySelectorAll('.show-popup')
	// 	btns.forEach(btn => {
	// 		btn.addEventListener('click', (e) => {
	// 			e.preventDefault()
	// 			popup.classList.add('show')
	// 			scrollLock.disablePageScroll();
	// 		})
	// 	})
	// }
	// showPopup()

	// function closepopup() {
	// 	const btn = document.querySelector('.popup__close')
	// 	btn.addEventListener('click', () => {
	// 		btn.closest('.popup').classList.remove('show')
	// 		scrollLock.enablePageScroll();
	// 	})
	// }

	// if (document.querySelectorAll('.popup').length > 0) {
	// 	closepopup()
	// 	popup.addEventListener('click', function (e) {
	// 		const target = e.target
	// 		if (e.target.classList.contains('popup')) {
	// 			popup.classList.remove('show')
	// 			scrollLock.enablePageScroll();
	// 		}
	// 	})
	// }



	function open(openBtn, wrapBlock) {
		const btns = document.querySelectorAll(openBtn)
		const wrap = document.querySelector(wrapBlock)
		btns.forEach(btn => {
			btn.addEventListener('click', function () {
				wrap.classList.add('show')
				disablePageScroll()
			})
		})
	}

	open('.showForm', '.popup-form-wrap')
	open('.show-popup', '.popupMore')

	function close(closeBtn, wrapBlock) {
		const btns = document.querySelectorAll(closeBtn)
		btns.forEach(btn => {
			btn.addEventListener('click', function () {
				btn.closest(wrapBlock).classList.remove('show')
				enablePageScroll()
			})
		})

	}
	close('.close', '.popup')

	close()
	if (document.querySelectorAll('.popupMore').length > 0) {
		document.querySelector('.popupMore').addEventListener('click', function (e) {
			const target = e.target
			if (e.target.classList.contains('popup')) {
				document.querySelector('.popupMore').classList.remove('show')
				enablePageScroll();
			}
		})
	}


	document.querySelector('.popup-form-wrap').addEventListener('click', function (e) {
		const target = e.target
		if (e.target.classList.contains('popup')) {
			document.querySelector('.popup-form-wrap').classList.remove('show')
			enablePageScroll();
		}
	})

	if (document.querySelectorAll('.card-footer').length > 0) {
		document.addEventListener('scroll', function () {
			const heightBlock = document.querySelector('.char').offsetHeight
			const top = document.querySelector('.char').getBoundingClientRect().top
			if (top + heightBlock < 0) {
				document.querySelector('.card-footer').classList.add('show')
			} else {
				document.querySelector('.card-footer').classList.remove('show')
			}
		})
	}

	if (document.querySelectorAll('.article').length > 0 && window.innerWidth < 768) {
		document.addEventListener('scroll', function () {
			const heightBlock = document.querySelector('.article').offsetHeight
			const top = document.querySelector('.article').getBoundingClientRect().top
			if (top + heightBlock < 0) {
				document.querySelector('.article__content-btns').classList.remove('show')
			} else {
				document.querySelector('.article__content-btns').classList.add('show')
			}
		})
	}

	if (document.querySelectorAll('.share').length > 0) {
		// const url = window.location.href
		const linkFb = document.querySelectorAll('.fb-share')
		const linkX = document.querySelectorAll('.x-share')
		const linkIn = document.querySelectorAll('.in-share')
		linkFb.forEach(item => {
			const url = item.closest('.preview-block').querySelector('.preview-link').getAttribute('href')
			item.setAttribute('href', `https://www.facebook.com/sharer/sharer.php?u=${url}`)
		})
		linkX.forEach(item => {
			const url = item.closest('.preview-block').querySelector('.preview-link').getAttribute('href')
			item.setAttribute('href', `https://twitter.com/intent/tweet?text=${url}`)
		})
		linkIn.forEach(item => {
			const url = item.closest('.preview-block').querySelector('.preview-link').getAttribute('href')
			item.setAttribute('href', `https://www.linkedin.com/shareArticle?mini=true&url=${url}`)
		})
	}

	if (document.querySelectorAll('.copy').length > 0) {
		const btns = document.querySelectorAll('.copy')
		btns.forEach(btn => {
			btn.addEventListener('click', e => {
				if (btn.closest('.preview-block') && btn.closest('.preview-block').querySelector('.preview-link') !== null) {
					const copyLink = btn.closest('.preview-block').querySelector('.preview-link').getAttribute('href')
					navigator.clipboard.writeText(copyLink)
						.then(() => console.log(`Ссылка: ${copyLink}, скопирована в буфер`))
						.catch(err => console.error(err))
					btn.innerHTML = 'copied!'
				} else {
					const copyLink = window.location.href
					navigator.clipboard.writeText(copyLink)
						.then(() => console.log(`Ссылка: ${copyLink}, скопирована в буфер`))
						.catch(err => console.error(err))
				}
			})
		})
	}

	function validatePopup() {
		const wrap = document.querySelector('.popup-form__content')
		const name = wrap.querySelector('input[type="text"]')
		const phone = wrap.querySelector('input[type="tel"]')
		const btn = wrap.querySelector('input[type="submit"]')

		name.addEventListener('input', () => {
			validate()
			console.log('1')
		})
		phone.addEventListener('input', () => {
			validate()
			console.log('2')
		})

		const validate = () => {
			if (name.value.length > 0 && phone.value.length > 0) {
				btn.classList.add('valid')
			} else {
				btn.classList.remove('valid')
			}
		}

	}
	validatePopup()

	if (document.querySelectorAll('.map__view').length > 0) {
		document.querySelector('.map__view').addEventListener('touchmove', function () {
			document.querySelector('.map__dot').classList.add('hidden')
		})
	}

	function changeTegs() {
		const tegs = document.querySelectorAll('.blog__filter-btn')
		tegs.forEach(teg=> {
			teg.addEventListener('click', function(e) {
				e.preventDefault()
				this.classList.toggle('active')
			})
		})
	}

	if (document.querySelectorAll('.blog__filter-btn').length > 0) {
		changeTegs()
	}

	function langChange() {
		const wraps = document.querySelectorAll('.lang')
		wraps.forEach(wrap => {
			const current = wrap.querySelector('.lang__current')
			const items = wrap.querySelectorAll('.lang__item')
			const list = wrap.querySelector('.lang__list')
			current.addEventListener('click', function () {
				this.nextElementSibling.classList.toggle('show')
				this.classList.toggle('active')
			})

			items.forEach((item, i) => {
				if (i === 0) {
					item.classList.add('active')
				}
				item.addEventListener('click', function () {
					items.forEach(el => {
						el.classList.remove('active')
					})
					this.classList.add('active')
					current.innerHTML = `${item.querySelector('span').textContent}`
					list.classList.remove('show')
				})
			})
		})
	}

	langChange()

	function changeMobileLang() {
		const wrap = document.querySelector('.language-mobile')
		const els = wrap.querySelectorAll('li')
		els.forEach((li, i)=> {
			if (i == 0) {
				li.classList.add('active')
			}
			li.addEventListener('click', function() {
				els.forEach(item=> {
					item.classList.remove('active')
				})
				this.classList.add('active')
			})
		})
	}
	changeMobileLang()

})