import { useState } from "react";
import "./App.css";

function App() {
  const choices = ["Rock", "Paper", "Scissors"];
  const [playerChoice, setPlayerChoice] = useState();
  const [computerChoice, setComputerChoice] = useState();
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  function generateComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
  }

  function handlePlay(choice) {
    setPlayerChoice(choices[choice]);
    setComputerChoice(generateComputerChoice());
    if (playerChoice == "Rock" && computerChoice == "Scissors") {
      setPlayerScore(playerScore + 1);
    } else if (playerChoice == "Rock" && computerChoice == "Paper") {
      setComputerScore(computerScore + 1);
    } else if (playerChoice == "Paper" && computerChoice == "Rock") {
      setPlayerScore(playerScore + 1);
    } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
      setComputerScore(computerScore + 1);
    } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
      setPlayerScore(playerScore + 1);
    } else if (playerChoice == "Scissors" && computerChoice == "Rock") {
      setComputerScore(computerScore + 1);
    }
  }
  return (
    <>
      <h1>Welcome to Rock, Paper, Scissors game</h1>
      <button
        onClick={() => {
          handlePlay(0);
        }}
      >
        Rock
      </button>
      <button
        onClick={() => {
          handlePlay(1);
        }}
      >
        Paper
      </button>
      <button
        onClick={() => {
          handlePlay(2);
        }}
      >
        Scissors
      </button>
      <h4>Your Choice: {playerChoice}</h4>
      <h4>Computer's Choice: {computerChoice} </h4>
      <h2>
        Your Score:
        {playerScore}
      </h2>
      <h2>
        Computer Score:
        {computerScore}
      </h2>
    </>
  );
}

export default App;
