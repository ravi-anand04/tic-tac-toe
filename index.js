let ele1 = document.getElementById("block1");
let ele2 = document.getElementById("block2");
let ele3 = document.getElementById("block3");
let ele4 = document.getElementById("block4");
let ele5 = document.getElementById("block5");
let ele6 = document.getElementById("block6");
let ele7 = document.getElementById("block7");
let ele8 = document.getElementById("block8");
let ele9 = document.getElementById("block9");

function mark1() {
  ele1.value = "X";
}
function mark2() {
  ele2.value = "X";
}
function mark3() {
  ele3.value = "X";
}
function mark4() {
  ele4.value = "X";
}
function mark5() {
  ele5.value = "X";
}
function mark6() {
  ele6.value = "X";
}
function mark7() {
  ele7.value = "X";
}
function mark8() {
  ele8.value = "X";
}
function mark9() {
  ele9.value = "X";
}

const reset = () => {
  ele1.value = "";
  ele2.value = "";
  ele3.value = "";
  ele4.value = "";
  ele5.value = "";
  ele6.value = "";
  ele7.value = "";
  ele8.value = "";
  ele9.value = "";
};

var val1 = ele1.value;
var val2 = ele2.value;
var val3 = ele3.value;
var val4 = ele4.value;
var val5 = ele5.value;
var val6 = ele6.value;
var val7 = ele7.value;
var val8 = ele8.value;
var val9 = ele9.value;

if (val1 == "X") {
  alert("It is one");
}

function change1() {
  alert("Change is visible!");
}
