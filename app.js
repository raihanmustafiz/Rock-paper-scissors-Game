let userScore = 0;
let compScore = 0;
const userChoiceDisplay = document.querySelector("#user-score");
const compChoiceDisplay = document.querySelector("#comp-score");

const msg = document.querySelector("#msg")

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const random = Math.random() * 3;
  const randomInt = Math.floor(random);
  return options[randomInt];
};

const drawGame = () => {
  msg.innerText = "Game Was Draw";
  msg.style.backgroundColor = "yellow";
  msg.style.color = "black";
}

const showWinner = (userWin,userChoice,compChoice) => {
  if (userWin) {
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor = "green";
    msg.style.color = "white";
    userScore++;
    userChoiceDisplay.innerText = userScore;
  } else {
    msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
    compScore++;
    compChoiceDisplay.innerText = compScore;
  }
}

const playGame = (userChoice) => {
  const compChoice = genCompChoice();


  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    } showWinner(userWin,userChoice,compChoice)
  }
};


choices.forEach((choice) => {
  const userChoice = choice.getAttribute("id");
  choice.addEventListener("click", () => {
    playGame(userChoice);
  });
});
