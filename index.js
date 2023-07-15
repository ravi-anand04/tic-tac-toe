var counter = 0;
let turn = "X";

const grid = document.querySelector(".grid");

let markedBlocks = Array(9).fill(null);

grid.addEventListener("click", handleBlockClick);
function handleBlockClick(event) {
  const block = event.target;
  let index = block.dataset.index;
  block.innerText = counter % 2 == 0 ? "X" : "O";
  if (markedBlocks[index] === null) {
    markedBlocks[index] = turn;
    turn = turn === "X" ? "O" : "X";
    counter++;
    change();
    console.log(markedBlocks);
  }
}

const reset = () => {
  markedBlocks = Array(9).fill(null);
  turn = "X";
  const blocks = document.getElementsByClassName("block");
  [...blocks].forEach((block) => {
    // Array.from() is also there
    block.innerText = "";
  });
  counter = 0;
  // console.log(turn);
};

function change() {
  if (isWinner("X")) {
    // reset();
    alert("Player X wins");
  } else if (isWinner("O")) {
    // reset();
    alert("Player O wins");
  } else if (counter === 9) {
    // reset();
    alert("It's a draw!");
  }
}

function isWinner(player) {
  const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return winningCombo.some((combination) => {
    return combination.every((index) => markedBlocks[index] === player);
  });
}

const resetEvent = document.querySelector(".reset");

resetEvent.addEventListener("click", reset);
