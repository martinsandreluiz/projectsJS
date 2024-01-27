const decreaseBtn = document.getElementById("decrease-btn");
const increaseBtn = document.getElementById("increase-btn");
const resetBtn = document.getElementById("reset-btn");
const countLabel = document.querySelector("#count-label");
let count = 0;

//muda a classe do elemento countLabel(para 'increase', 'decrease', ou '') a depender do valor de count 
// necessário lançar essas duas classe no CSS e estilizá-las
function updateCountAndColor() {
	countLabel.textContent = count;
	countLabel.className = count > 0 ? 'increase' : (count < 0 ?'decrease' : '');
	
}

increaseBtn.onclick = function() {
	count++;
	// countLabel.textContent = count;
	updateCountAndColor();
}

decreaseBtn.onclick = function () {
	count--;
	// countLabel.textContent = count;
	updateCountAndColor();
}

resetBtn.onclick = function() {
	count = 0;
	// countLabel.textContent = count;
	updateCountAndColor();
}

// ************************ ROLL THE DICE ******************
const buttonRoll = document.querySelector("#btn-roll");
const label1Roll = document.getElementById("label1-roll");
const label2Roll = document.getElementById("label2-roll");
const label3Roll = document.getElementById("label3-roll");

const MIN = 1;
const MAX = 6;
let randomNum1;
let randomNum2;
let randomNum3;

buttonRoll.onclick = function () {
	randomNum1 = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
	randomNum2 = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
	randomNum3 = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

	label1Roll.textContent = randomNum1;
	label2Roll.textContent = randomNum2;
	label3Roll.textContent = randomNum3;
	
}
// *****************************chat gpt ************************************

// let counterValue = 0;
// const counterElement = document.getElementById('counter');

// function updateCounterColor() {
//     counterElement.className = counterValue > 0 ? 'increase' : (counterValue < 0 ? 'decrease' : '');
// }

// function increase() {
//     counterValue++;
//     updateCounter();
// }

// function decrease() {
//     counterValue--;
//     updateCounter();
// }

// function reset() {
//     counterValue = 0;
//     updateCounter();
// }

// function updateCounter() {
//     counterElement.textContent = counterValue;
//     updateCounterColor();
// }
