document.addEventListener('DOMContentLoaded', function () {

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
});