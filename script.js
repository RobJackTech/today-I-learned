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
/*
function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) {
    return age;
  } else
    return `Impossible year. Year need to be less or equal ${currentYear}.`;
}

const age1 = calcFactAge(2015);
console.log(age1);
console.log(calcFactAge(2020));
console.log(calcFactAge(1990));
console.log(calcFACtAge(2037));

const calcFactAge2 = (year) =>
  year <= +new Date().getFullYear()
    ? new Date().getFullYear() - year 
    : `Impossible year. Year needs to be less or equal ${new Date().getFullYear()}.`
    : console.log(calcFactAge2(2015));
console.log(calcFactAge2(2037));

let votesInteresting = 20;
let votesMindlowing = 5;

if (votesInteresting === votesMindlowing) {
  alert("This fact is equally interesting and mindlowing");
} else if (votesInteresting > votesMindlowing) {
  console.log("Interesting fact!");

} else if (votesInteresting < votesMindlowing) {
  console.log("Mindblowing fact!!");
}

//falsy values: 0, '', null, undefined
//truthy value: everything else...
if (votesMindlowing) {
  console.log("MINDBLOWING FACT!!!");
} else {
  console.log("Not so special...");
}

let votesFalse = 77;
const totalUpvotes = votesInteresting + votesMindlowing;

const message =
  totalUpvotes > votesFalse
    ? "The fact is true"
    : "Might be false, check more sources...";

//alert(message);

const text = "Lisbon is the capital of Portugal";
const upperText = text.toUpperCase();
console.log(upperText);

const str = `The current fact is "${text}" it is ${calcFactAge(
  2015
)} years old. it is probably ${
  totalUpvotes > votesFalse ? "correct" : "not true"
}. `;
console.log(str);
*/

const fact = ["Lisbon is the capital of Portugal", 2015, true, "something"];
console.log(fact);
console.log(fact[2]);
console.log(fact.length);
console.log(fact[fact.length - 1]);

const [text, createdIn] = fact;
console.log(text);

const newFact = [...fact, "society"];
console.log(newFact);
