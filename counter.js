// Counter functionality
let counterValue = 0;
const counterDisplay = document.getElementById("counter-value");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

increaseBtn.addEventListener("click", () => {
    counterValue++;
    counterDisplay.textContent = counterValue;
});

decreaseBtn.addEventListener("click", () => {
    counterValue--;
    counterDisplay.textContent = counterValue;
});

resetBtn.addEventListener("click", () => {
    counterValue = 0;
    counterDisplay.textContent = counterValue;
});

// Generate a random number between 0 and 2 (inclusive)
let randomIndex = Math.floor(Math.random() * 3);

let a = "Value of A";
let b = "Value of B";
let c = "Value of C";

let randomVariable;

// Choose variable based on randomIndex
if (randomIndex === 0) {
    randomVariable = a;
} else if (randomIndex === 1) {
    randomVariable = b;
} else {
    randomVariable = c;
}

console.log(randomVariable);
