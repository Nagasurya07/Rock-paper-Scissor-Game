let userscore = 0;
let compscore = 0;

const userscorepara=document.querySelector("#user-score")
const compscorepara=document.querySelector("#comp-score")

const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

const drowgame = () => {
  console.log("its a tie");
  msg.innerHTML = "it's a draw/play again";
  msg.style.backgroundColor = "#ff9f1c";
};

const showinner = (userwin) => {
  if (userwin) {
    userscore++;
    userscorepara.innerHTML=userscore
    // console.log("you win!");
    msg.innerHTML = "You win";
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compscorepara.innerHTML= compscore
    // console.log("computer wins");
    msg.innerHTML = "You lose";
    msg.style.backgroundColor = "red";
  }
};

const gencompchoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randid = Math.floor(Math.random() * 3);
  return option[randid];
};

choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.id;
    playgame(userChoice);
  });
});

const playgame = (userChoice) => {
  // console.log("user choice", userChoice);
  const compChoice = gencompchoice();
  // console.log("computer choice", compChoice);

  if (userChoice === compChoice) {
    drowgame();
  } else {
    let userwin = true;
    if (userChoice === "rock" && compChoice === "paper") {
      userwin = false;
    } else if (userChoice === "scissor" && compChoice === "rock") {
      userwin = false;
    } else if (userChoice === "paper" && compChoice === "scissor") {
      userwin = false;
    }
    showinner(userwin);
  }
};

