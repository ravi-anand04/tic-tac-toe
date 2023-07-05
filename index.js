var counter = 0;
var turn = "X";

let ele1 = document.getElementById("block1");
let ele2 = document.getElementById("block2");
let ele3 = document.getElementById("block3");
let ele4 = document.getElementById("block4");
let ele5 = document.getElementById("block5");
let ele6 = document.getElementById("block6");
let ele7 = document.getElementById("block7");
let ele8 = document.getElementById("block8");
let ele9 = document.getElementById("block9");

var val1 = ele1.value;
var val2 = ele2.value;
var val3 = ele3.value;
var val4 = ele4.value;
var val5 = ele5.value;
var val6 = ele6.value;
var val7 = ele7.value;
var val8 = ele8.value;
var val9 = ele9.value;

function mark1() {
  val1 = ele1.value = turn;
  turn = turn == "X" ? "O" : "X";
  counter++;
  change();
}
function mark2() {
  val2 = ele2.value = turn;
  turn = turn == "X" ? "O" : "X";
  counter++;
  change();
}
function mark3() {
  val3 = ele3.value = turn;
  turn = turn == "X" ? "O" : "X";
  counter++;
  change();
}
function mark4() {
  val4 = ele4.value = turn;
  turn = turn == "X" ? "O" : "X";
  counter++;
  change();
}
function mark5() {
  val5 = ele5.value = turn;
  turn = turn == "X" ? "O" : "X";
  counter++;
  change();
}
function mark6() {
  val6 = ele6.value = turn;
  turn = turn == "X" ? "O" : "X";
  counter++;
  change();
}
function mark7() {
  val7 = ele7.value = turn;
  turn = turn == "X" ? "O" : "X";
  counter++;
  change();
}
function mark8() {
  val8 = ele8.value = turn;
  turn = turn == "X" ? "O" : "X";
  counter++;
  change();
}
function mark9() {
  val9 = ele9.value = turn;
  turn = turn == "X" ? "O" : "X";
  counter++;
  change();
}

const reset = () => {
  val1 = ele1.value = "";
  val2 = ele2.value = "";
  val3 = ele3.value = "";
  val4 = ele4.value = "";
  val5 = ele5.value = "";
  val6 = ele6.value = "";
  val7 = ele7.value = "";
  val8 = ele8.value = "";
  val9 = ele9.value = "";
  counter = 0;
  turn = "X";
};

function change() {
  const isTrue =
    (val1 === "X" && val2 === "X" && val3 === "X") ||
    (val3 === "X" && val6 === "X" && val9 === "X") ||
    (val1 === "X" && val4 === "X" && val7 === "X") ||
    (val7 === "X" && val8 === "X" && val9 === "X") ||
    (val1 === "X" && val5 === "X" && val9 === "X") ||
    (val3 === "X" && val5 === "X" && val7 === "X") ||
    (val2 === "X" && val5 === "X" && val8 === "X") ||
    (val4 === "X" && val5 === "X" && val6 === "X") ||
    (val1 === "O" && val2 === "O" && val3 === "O") ||
    (val3 === "O" && val6 === "O" && val9 === "O") ||
    (val1 === "O" && val4 === "O" && val7 === "O") ||
    (val7 === "O" && val8 === "O" && val9 === "O") ||
    (val1 === "O" && val5 === "O" && val9 === "O") ||
    (val3 === "O" && val5 === "O" && val7 === "O") ||
    (val2 === "O" && val5 === "O" && val8 === "O") ||
    (val4 === "O" && val5 === "O" && val6 === "O");

  if (isTrue) {
    if (counter % 2 == 1) {
      alert("Player 1 won");
      reset();
    } else {
      alert("Player 2 won");
      reset();
    }
  }

  console.log(val1, val2, val3, val4, val5, val6, val7, val8, val9);
}
