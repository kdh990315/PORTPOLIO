document.addEventListener('DOMContentLoaded', function () {

	//**********배경 js**********

	const starBox = document.getElementsByClassName('stars-bg');

	const CreateStar = (j) => {

		
		const el = document.createElement('div');
		el.classList.add('stars');
		//별의 위치를 랜덤으로 조정

		// el.style.top =  Math.floor(Math.random() * window.innerHeight) + 'px';
		// el.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';

		const starstop = Math.floor(Math.random() * window.innerHeight);
		const starsleft = Math.floor(Math.random() * window.innerWidth);

		el.style.setProperty('--randomstarstop', starstop + 'px');
		el.style.setProperty('--randomstarsleft', starsleft + 'px');


		//별의 크기를 랜덤으로 조절
		const randomsize = Math.floor(Math.random() * (4 - 1) + 1);

		el.style.width = `${randomsize}px`
		el.style.height = `${randomsize}px`

		//별의 깜빡이는 시간을 조절
		const randomtransition = Math.floor(Math.random() * (7 - 3) + 3);

		//별의 깜빡이는 시간 값을 css변수 값으로 전달
		el.style.setProperty('--randomtransition', randomtransition + 's');

		starBox[j].appendChild(el);

	}

	const stars = document.getElementsByClassName('stars');
	
	//별을 생성

	for(let j = 0; j < starBox.length; j++) {
		for(let i=0; i < 200; i++) {
			CreateStar(j);
		}
	}

	// **********배경 js**********

	// **********사이드메뉴 js**********

	let sideMenu = document.querySelector('.side-menu'),
		sideBtn = document.querySelector('.menu-btn'),
		MenuBoolean = 0; // 시작 값은 1

		sideBtn.addEventListener('click', (e) => {
			if(MenuBoolean === 0) {
				sideBtn.classList.add('btn-on');
				sideMenu.classList.add('side-on');
				MenuBoolean = 1;
			} else if(MenuBoolean === 1) {
				sideBtn.classList.remove('btn-on');
				sideMenu.classList.remove('side-on');
				MenuBoolean = 0;
			}
			e.preventDefault;
		})













	// **********사이드메뉴 js**********

	class CardFilpOnScroll {
		constructor(wrapper, sticky) {
			this.wrapper = wrapper
			this.sticky = sticky
			this.cards = sticky.querySelectorAll('.card')
			this.length = this.cards.length

			this.start = 0
			this.end = 0
			this. step = 0
		}

		init() {
			this.start = this.wrapper.offsetTop
			this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight * 1.2
			this.step = (this.end - this.start) / (this.length * 2)
		}

		animate() {
			this.cards.forEach((card, i) => {
				const s = this.start + this.step * i
				const e = s + this.step * (this.length + 1)
				console.log(s)

				if(scrollY <= this.start) {
					card.style.transform = `
					perspective(100vw)
					translateX(100vw)
					rotateY(180deg)
					`
				} else if (scrollY > s && scrollY <= e - this.step) {
					card.style.transform = `
					perspective(100vw)
					translateX(${100 - (scrollY - s) / (e - s) * 100}vw)
					rotateY(180deg)
					`
				} else if (scrollY > e- this.step && scrollY <= e) {
					card.style.transform = `
					perspective(100vw)
					translateX(${100 - (scrollY - s) / (e - s) * 100}vw)
					rotateY(${180 -  -(scrollY - (e - this.step)) / this.step * 180}deg)
					`
				} else if (scrollY > e) {
					card.style.transform = `
					perspective(100vw)
					translateX(0vw)
					rotateY(0deg)
					`
				}
			});
		}
	}

	const aboutMe1 = document.querySelector('.about-me1')
	const sticky = document.querySelector('.sticky')
	const cardFilpOnScroll = new CardFilpOnScroll(aboutMe1, sticky)
	cardFilpOnScroll.init()

	window.addEventListener('scroll', () => {
		cardFilpOnScroll.animate()
	})

	window.addEventListener('resize', () => {
		cardFilpOnScroll.init()
	})
});