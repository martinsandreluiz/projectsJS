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
