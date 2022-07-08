"use strict";
// Get started button
$(".start-btn").on("click", function () {
  location.href = "create.html";
});

//second page back button
$(".back-btn").on("click", function () {
  location.href = "index.html";
});
// third page back button
$(".back-btn-third").on("click", function () {
  location.href = "create.html";
});
// box number 1
$("input").on("click", function () {
  $(".box-1").css("background", "#E9FAF1");
  $(".box-1").css("border", "none");
});

const email = document.querySelector("#email");
const names = document.querySelector("#name");
const phone = document.querySelector("#phone");
const date = document.querySelector("#date");
const checker1 = document.querySelector(".check1");
const checker2 = document.querySelector(".check2");
const checker3 = document.querySelector(".check3");
const checker4 = document.querySelector(".check4");
const error1 = document.querySelector(".error1-box");
const error2 = document.querySelector(".error2-box");
const error3 = document.querySelector(".error3-box");

let regExp = /@redberry\.ge/;

$(".next-btn").on("click", function (e) {
  e.preventDefault();
  check1();
  check2();
  check3();

  if (
    checker1.style.display === "block" &&
    checker2.style.display === "block" &&
    checker3.style.display === "block"
  ) {
    $(".box-num1").text("");
    $(".box-num1").addClass("done");
  }
});

function check1() {
  // name checker
  if (names.value.length > 1) {
    checker1.style.display = "block";
    error1.style.display = "none";
    $("#name").css("background", "#fff");
  } else {
    checker1.style.display = "none";
    error1.style.display = "block";
    $("#name").css("background", "#Ffefef");
  }
  if (names.value === "") {
    checker1.style.display = "none";
    error1.style.display = "none";
    $("#name").css("background", "#Fff");
  }
}

function check2() {
  // email checker
  if (email.value.match(regExp)) {
    checker2.style.display = "block";
    error2.style.display = "none";
    $("#email").css("background", "#Fff");
  } else {
    checker2.style.display = "none";
    error2.style.display = "block";
    $("#email").css("background", "#FFEFEF");
  }
  if (email.value === "") {
    checker2.style.display = "none";
    error2.style.display = "none";
    $("#email").css("background", "#Fff");
  }
}

function check3() {
  if (phone.value.length === 9) {
    checker3.style.display = "block";
    error3.style.display = "none";
    $("#phone").css("background", "#Fff");
  } else {
    checker3.style.display = "none";
    error3.style.display = "block";
    $("#phone").css("background", "#FFEFEF");
  }
  if (phone.value === "") {
    checker3.style.display = "none";
    error3.style.display = "none";
    $("#phone").css("background", "#Fff");
  }
}

// invalid data close

$(".close1").on("click", function () {
  error1.style.display = "none";
});

$(".close2").on("click", function () {
  error2.style.display = "none";
});

$(".close3").on("click", function () {
  error3.style.display = "none";
});

// function formatPhoneNumber(value) {
//   if (!value) return value;
//   const phoneNumber = value.replace(/[^\d]/g, "");
//   const phoneNumberLength = phoneNumber.length;
//   if (phoneNumberLength < 4) return phoneNumber;
//   if (phoneNumverLength < 7) {
//     return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
//   }
//   return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
//     3,
//     6
//   )}-${phoneNumber.slice(6, 9)}`;
// }

// function phoneNumberFormatter() {
//   const inputField = document.getElementById("phone");
//   const formattedInputValue = formatPhoneNumber(inputField.value);
//   inputField.value = formattedInputValue;
// }

function show(anything) {
  document.querySelector(".textBox").value = anything;
}

let dropdown = document.querySelector(".dropdown");
dropdown.onclick = function () {
  dropdown.classList.toggle("active");
};

// var staticUrl = "https://chess-tournament-api.devtest.ge/api/grandmasters";

// $(document).ready(function () {
//   function load_json_data(id, parent_id) {
//     var html_code = "";
//     $.getJSON(staticUrl, function (data) {
//       html_code += $.each(data, function (key, value) {});
//     });
//   }
// });
