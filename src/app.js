/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const creditCardNum = document.querySelector("#card");
const CVC = document.querySelector("#cvc");
const money = document.querySelector("#amount");

const myName = document.querySelector("#user");
const lastName = document.querySelector("#userL");

const city = document.querySelector("#city");
const pc = document.querySelector("#postCode");

window.onload = function() {};

CVC.addEventListener("focusout", () => {
  if ((isTheNum(CVC.value) && CVC.value.length == 3) || CVC.value.length == 4) {
    isValid(CVC);
  } else {
    isInvalid(CVC);
  }
});

myName.addEventListener("focusout", () => {
  istheText(myName.value) ? isValid(myName) : isInvalid(myName);
});

lastName.addEventListener("focusout", () => {
  istheText(lastName.value) ? isValid(lastName) : isInvalid(lastName);
});

const istheText = text => {
  return /^[a-zA-Z]*$/.test(text);
};

const isTheNum = num => {
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

const isNumber = number => {
  console.log(number);
  return number % 1 == 0 && number >= 0;
};
