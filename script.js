const input = document.getElementById("number");
const checkButton = document.getElementById("convert-btn");
const result = document.getElementById("output");

//check the validity of input, if not correct notify user
//if input is correct convert to roman Numeral
const checkInputOrConvert = () => {
  const inputInt = parseInt(input.value);
  if (!input.value || isNaN(inputInt)) {
    result.innerText = "Please enter a valid number";
    result.style.color = "red";
  }
  else if (input.value <= 0) {
    result.innerText = "Please enter a number greater than or equal to 1";
    result.style.color = "red";
  }
  else if (input.value >= 4000) {
    result.innerText = "Please enter a number less than or equal to 3999";
    result.style.color = "red";
  } else {
    result.innerText = convertToRomanNumeral(inputInt);
    result.style.color = "black";
  }
};

const convertToRomanNumeral = (number) => {
  const digits = String(+number).split("");
  const key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  let roman = "";
  let i = 3;

  while (i--)
    roman = (key[+digits.pop() + (i * 10)] || "") + roman;

  return Array(+digits.join("") + 1).join("M") + roman;
};

//check for convert button click or keyboard key:enter pressed to start coversion
checkButton.addEventListener("click", checkInputOrConvert);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkInputOrConvert();
  }
});