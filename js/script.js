const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const errorMsg = document.querySelector(".error");
const countInfo = document.querySelector(".cost-info");
const cost = document.querySelector(".cost");
const countButton = document.querySelector(".count");

const count = () => {
	if (price.value == "" || people.value == "" || tip.value == "") {
		errorMsg.textContent = "Uzupełnij wszystkie pola!";
		countInfo.style.display = "none";
    } else {
		errorMsg.textContent = "";
		countBill();
	}
};

const countBill = () => {
	const newPrice = parseFloat(price.value);
	const newTip = parseFloat(tip.value);
	const newPeople = parseInt(people.value);

	const sum = (newPrice + newPrice * newTip) / newPeople;
	countInfo.style.display = "block";
	cost.textContent = sum.toFixed(2);
};
countButton.addEventListener("click", count);
