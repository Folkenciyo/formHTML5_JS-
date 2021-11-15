/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const CardNum = document.querySelector("#card");
const CVC = document.querySelector("#cvc");
const money = document.querySelector("#amount");

const myName = document.querySelector("#user");
const lastName = document.querySelector("#userL");

const city = document.querySelector("#city");
const state = document.querySelector("#state");
const pc = document.querySelector("#postCode");

const message = document.querySelector("#msg");

window.onload = function() {};

//CARD CVC AMOUNT
CardNum.addEventListener.validateCreditCard("focusout", () => {
  if (
    isTheNum(CardNum.value) &&
    CardNum.value.length >= 12 &&
    CardNum.value.length <= 14
  ) {
    isValid(CardNum);
  } else {
    isInvalid(CardNum);
  }
});

CVC.addEventListener("focusout", () => {
  if (isTheNum(CVC.value) && CVC.value.length >= 3 && CVC.value.length <= 4) {
    isValid(CVC);
  } else {
    isInvalid(CVC);
  }
});

money.addEventListener("focusout", () => {
  if (isTheNum(money.value)) {
    isValid(money);
  } else {
    isInvalid(money);
  }
});

//First NAME - Sure NAME
myName.addEventListener("focusout", () => {
  istheText(myName.value) ? isValid(myName) : isInvalid(myName);
});

lastName.addEventListener("focusout", () => {
  istheText(lastName.value) ? isValid(lastName) : isInvalid(lastName);
});

//City + P.C.
city.addEventListener("focusout", () => {
  istheText(city.value) ? isValid(city) : isInvalid(city);
});

state.addEventListener("focusout", () => {
  state.value.length != 0 ? isValid(state) : isInvalid(state);
});

pc.addEventListener("focusout", () => {
  if (isTheNum(pc.value) && pc.value.length == 5) {
    isValid(pc);
  } else {
    isInvalid(pc);
  }
});
//Message
message.addEventListener("focusout", () => {
  message.value.length != 0 ? isValid(message) : isInvalid(message);
});

//Functions

const istheText = text => {
  //this is just for Text
  return /^[a-záéíóúñüàèA-ZÑÁÉÍÓÚ]*$/.test(text);
};

const isTheNum = num => {
  //This one is for just Numbers
  return /^[0-9]/.test(num);
};

const isValid = input => {
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");
};

const isInvalid = input => {
  input.classList.remove("is-valid");
  input.classList.add("is-invalid");
};

/* const isNumber = number => {
  console.log(number);
  return number % 1 == 0 && number >= 0;
};
 */
