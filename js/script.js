var link = document.querySelector(".btn-form");
    var popup = document.querySelector(".modal-reservation");
	let plus = popup.querySelectorAll(".plus");
	let minus = popup.querySelectorAll(".minus");
	var form = popup.querySelector("form");


	let counter = 0;
	var showadults = popup.querySelector("label.number-of-adults");
	

   link.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.toggle('modal-show');
	});

	plus[0].addEventListener("click", function (evt) {
    evt.preventDefault();
});
	plus[1].addEventListener("click", function (evt) {
    evt.preventDefault();
});

	minus[0].addEventListener("click", function (evt) {
    evt.preventDefault();
	});
	minus[1].addEventListener("click", function (evt) {
    evt.preventDefault();
});