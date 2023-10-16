import { questions, punchlines } from "./jokes-data.js";

const allFullJokesButton = document.querySelector(".allFull");
const randomFullButton = document.querySelector(".randomFull");
const selectElement = document.querySelector(".chosenJoke");
const countButton = document.querySelector(".jokeCount");
const mixButton = document.querySelector(".mix");

function getAllJokes() {
  if (questions.length === punchlines.length) {
    const allJokes = questions.map((question, index) => {
      return `${question} ${punchlines[index]}`;
    });
    return allJokes;
  } else {
    console.error("Questions and punchlines have different length");
  }
}

allFullJokesButton.addEventListener("click", () => {
  const allJokes = getAllJokes();
  console.log(allJokes);
});

function getRandomJoke() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const joke = questions[randomIndex];
  const punchline = punchlines[randomIndex];
  return `${joke} ${punchline}`;
}

randomFullButton.addEventListener("click", () => {
  const randomJoke = getRandomJoke();
  console.log(randomJoke);
});

selectElement.innerHTML = questions
  .map((question, index) => {
    return `<option value="${index}">${index + 1}</option>`;
  })
  .join("");

selectElement.addEventListener("change", (event) => {
  const selectedIndex = event.target.value;
  if (selectedIndex >= 0) {
    console.log(`${questions[selectedIndex]} ${punchlines[selectedIndex]}`);
  } else {
    console.error("No jokes found");
  }
});

function getNumberOfJokes() {
  return questions.length;
}

countButton.addEventListener("click", () => {
  const jokesCount = getNumberOfJokes();
  console.log(jokesCount);
});

function getMixedJoke() {
  const randomQuestionIndex = Math.floor(Math.random() * questions.length);
  const randomPunchlineIndex = Math.floor(Math.random() * questions.length);
  const joke = questions[randomQuestionIndex];
  const punchline = punchlines[randomPunchlineIndex];
  return `${joke} ${punchline}`;
}

mixButton.addEventListener("click", () => {
  const mixedJoke = getMixedJoke();
  console.log(mixedJoke);
});
