//Login form validation

let loginForm = document.querySelector(".login-form");
let loginFields = loginForm.querySelectorAll(".login-field");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  removeValidation(loginForm);

  checkFieldsPresence(loginFields);
});

//Register form validation

let registerForm = document.querySelector(".register-form");
let registerFields = registerForm.querySelectorAll(".register-field");
let registerName = registerForm.querySelector(".register-name");
let registerPassword = registerForm.querySelector(".register-password");
let registerEmail = registerForm.querySelector(".register-email");

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  removeValidation(registerForm);

  checkFieldsPresence(registerFields);

  checkEmail(registerEmail);

  checkPassword(registerPassword);
  checkName(registerName);
  //addIcon(register)


});

//Form validation functions

let isError = false;
/*let mark = isError ? "<i class="fa fa-exclamation" aria-hidden="true"></i>" : "<i class="fa fa-check" aria-hidden="true"></i>"*/


let generateError = function (text) {
  let error = document.createElement("div");
  error.className = "error";
  error.style.color = "red";
  error.innerHTML = text;
  let isError = true;
  return error;
};

console.log(isError);

function addIcon(field, flag = false) {

  let iconWrap = document.createElement("div");
  iconWrap.className = "form__input-icon";
  let mark = flag ? '<i class="fa fa-exclamation" aria-hidden="true"></i>' : '<i class="fa fa-check" aria-hidden="true"></i>';
  iconWrap.innerHTML = mark;
  //console.log(isError);
  field.parentElement.insertBefore(iconWrap, field);
}

let removeValidation = function (form) {
  let errors = form.querySelectorAll(".error");

  for (let i = 0; i < errors.length; i++) {
    errors[i].remove();
  }
};

let checkFieldsPresence = function (fields) {
  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      let error = generateError("Can't be blank");
      fields[i].parentElement.insertBefore(error, fields[i]);
      fields[i].style.border = "1px solid red";
      addIcon(fields[i], true);
    } else {
      
      //addIcon(fields[1]);
    } 
  }
};

function insertError(error, field) {
  field.parentElement.insertBefore(error, field);
  /*field.style.border = "1px solid red";*/
  addIcon(field, true);
}

function checkEmail(elem) {
  let isError;
  const EMAIL_REG = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!EMAIL_REG.test(elem.value) && elem.value !== "") {
    let error = generateError("Not a valid email");
    insertError(error, elem);
    //addIcon(field, true);
  } else {
    addIcon(elem);
  }
}

function checkPassword(elem) {
  let isError;
  const PASSW_REG = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  if (!PASSW_REG.test(elem.value) && elem.value !== "") {
    let error = generateError(
      "Password must be from 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"
    );
    insertError(error, elem);
    //addIcon(field, true);
  } else {
    addIcon(elem);
  }

}

function checkName(elem) {
  if (elem.value.length < 6 && elem.value !== "") {
    console.log(elem.value.length);
    let error = generateError("Name must be 6 or more characters");
    insertError(error, elem);
    addIcon(elem, true);
  } else {
    addIcon(elem);
  }
}

