console.log("Hello World!");

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});
/*
let votesInteresting = 23;
let votesMindlowing = 5;
const text = "Lisbon is the capital of Portugal";

votesInteresting = votesInteresting + 1;
votesInteresting++;
console.log(votesInteresting);

let totalUpvotes = votesInteresting + votesMindlowing;
console.log("Upvotes:", totalUpvotes);

let votesFalse = 40;
const isCorrect = votesFalse < totalUpvotes;
console.log(isCorrect);

console.log(parseInt("24.533cc"));
*/
function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  return age;
}

const age1 = calcFactAge(2015);
console.log(age1);
console.log(calcFactAge(2020));
console.log(calcFactAge(1990));

let votesInteresting = 20;
let votesMindlowing = 20;
