const btnForm = document.querySelector(".btn-form");
const popup = document.querySelector(".popup");
const plusBtnAdults = popup.querySelector(".plus-btn-adults");
const minusBtnAdults = popup.querySelector(".minus-btn-adults");
const plusBtnChildren = popup.querySelector(".plus-btn-children");
const minusBtnChildren = popup.querySelector(".minus-btn-children");
const displayAdults = popup.querySelector("#number-of-adults");
const displayChildren = popup.querySelector("input.number-of-children");


//toggle popup
btnForm.addEventListener('click', function (evt) {
	evt.preventDefault();
	popup.classList.toggle('popup-show');
});

window.addEventListener("keydown", function (evt) {
	if (evt === 27) {
		if (popup.classList.contains("popup-show")) {
			popup.classList.remove("popup-show");
		}
	}
});


//popup form 

plusBtnAdults.addEventListener("click", function (evt) {
	evt.preventDefault();
	plusAdults();
});

minusBtnAdults.addEventListener("click", function (evt) {
	evt.preventDefault();
	minusAdults();
});

plusBtnChildren.addEventListener("click", function (evt) {
	evt.preventDefault();
	plusChildren();
});

minusBtnChildren.addEventListener("click", function (evt) {
	evt.preventDefault();
	minusChildren();
});

let scoreAdults = 0;

function plusAdults() {
	scoreAdults += 1;
	return displayAdults.value = scoreAdults;
}

function minusAdults() {
	if (displayAdults.value <= 0) {
		return displayAdults.value = 0;
	} else {
		scoreAdults -= 1;
		return displayAdults.value = scoreAdults;
	}
}

let scoreChildren = 0;

function plusChildren() {
	scoreChildren += 1;
	return displayChildren.value = scoreChildren;
}

function minusChildren() {
	if (displayChildren.value <= 0) {
		return displayChildren.value = 0;
	} else {
		scoreChildren -= 1;
		return displayChildren.value = scoreChildren;
	}
}