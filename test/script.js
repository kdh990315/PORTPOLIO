let slides = document.querySelector('.slides'),
	slide = document.querySelectorAll('.slides li'),
	currentIdx = 0,
	slideCount = slide.length,
	slideWidth = 200,
	slideMargin = 30,
	prevBtn = document.querySelector('.prev'),
	nextBtn = document.querySelector('.next');

createdClone();

function createdClone() {
	for(let i = 0; i < slideCount; i++) {
		//a.clondNode() 이건 요소만 복사함.
		//a.clondNode(true) 이건 요소의 자식요소까지 모두 복사함
		const cloneSlide = slide[i].cloneNode(true);
		cloneSlide.classList.add('clone');
		slides.appendChild(cloneSlide);
	}

	for(let i = slideCount-1; i>=0; i--) {
		const cloneSlide = slide[i].cloneNode(true);
		cloneSlide.classList.add('clone');
		slides.prepend(cloneSlide);
	}

	updateWidth();
	setInitialPos();
	setTimeout(() => {
		slides.classList.add('animated');
	}, 100);
	
}

function updateWidth() {
	const currentSlides = document.querySelectorAll('.slides li');
	const newSlideCount = currentSlides.length;

	const newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
	slides.style.width = newWidth;
}

function setInitialPos() {
	const initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
	slides.style.transform = 'translateX(' + initialTranslateValue+'px)';
	console.log(initialTranslateValue)
}

nextBtn.addEventListener('click', function () {
	moveSlide(currentIdx + 1);
})

prevBtn.addEventListener('click', function () {
	moveSlide(currentIdx - 1);
})


function moveSlide(NB) {
	slides.style.left = -NB * (slideWidth + slideMargin) + 'px';
	currentIdx = NB;
	console.log(currentIdx, slideCount);

	if(currentIdx == slideCount || currentIdx == -slideCount) {

		setTimeout(() => {
			slides.classList.remove('animated');
			slides.style.left = '0px';
			currentIdx = 0;
		}, 500);
		setTimeout(() => {
			slides.classList.add('animated');
		}, 600);
	}

}