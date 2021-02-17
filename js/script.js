const link = document.querySelector(".btn-form");
const popup = document.querySelector(".modal-reservation");
const plusBtnAdults = popup.querySelector(".plus-btn-adults");
const minusBtnAdults = popup.querySelector(".minus-btn-adults");
const plusBtnChildren = popup.querySelector(".plus-btn-children");
const minusBtnChildren = popup.querySelector(".minus-btn-children");
const form = popup.querySelector("form");
const displayAdults = popup.querySelector("#number-of-adults");
const displayChildren = popup.querySelector("input.number-of-children");


//toggle popup
link.addEventListener('click', function (evt) {
	evt.preventDefault();
	popup.classList.toggle('modal-show');
});

window.addEventListener("keydown", function (evt) {
	if (evt === 27) {
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
		}
	}
});


//popup form 
plusBtnAdults.addEventListener("click", function (evt) {
	evt.preventDefault();
	plus();
});

minusBtnAdults.addEventListener("click", function (evt) {
	evt.preventDefault();
	minus();
});

plusBtnChildren.addEventListener("click", function (evt) {
	evt.preventDefault();
	plus();
});

minusBtnChildren.addEventListener("click", function (evt) {
	evt.preventDefault();
	minus();
});

let score = 0;
function plus() {
	score += 1;
	return displayAdults.value = score;
}

function minus() {
	if (displayAdults.value <= 0) {
		return displayAdults.value = 0;
	} else {
		score -= 1;
		return displayAdults.value = score;
	}
}