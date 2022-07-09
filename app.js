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
const error4 = document.querySelector(".error4-box");

let regExp = /@redberry\.ge/;

$("#submit").on("click", function (e) {
  e.preventDefault();
  check1();
  check2();
  check3();
  check4();

  if (
    checker1.style.display === "block" &&
    checker2.style.display === "block" &&
    checker3.style.display === "block"
  ) {
    $(".box-num1").text("");
    $(".box-num1").addClass("done");
    location.href = "exp.html";
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
  // phone checker
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

function check4() {
  if (date.getAttribute("required") === "") {
    checker4.style.display = "block";
    error4.style.display = "none";
  }
}

$(".close1").on("click", function () {
  error1.style.display = "none";
  $("#name").css("background", "#Fff");
});

$(".close2").on("click", function () {
  error2.style.display = "none";
  $("#email").css("background", "#Fff");
});

$(".close3").on("click", function () {
  error3.style.display = "none";
  $("#phone").css("background", "#Fff");
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

//level of knowledge dropdown
function show(anything) {
  document.querySelector(".textBox").value = anything;
}

//choose your character dropdown
function show2(anything) {
  document.querySelector(".textBox2").value = anything;
}
// dropdown open
let dropdown = document.querySelector(".dropdown");
dropdown.onclick = function () {
  dropdown.classList.toggle("active");
  $(".box-2").addClass("reg");
};
//dropdown open
let dropdown2 = document.querySelector(".dropdown2");
dropdown2.onclick = function () {
  dropdown2.classList.toggle("active");
  $(".box-2").addClass("reg");
};

// Json data
const staticUrl = "https://chess-tournament-api.devtest.ge/api/grandmasters";
const option = document.getElementById("option");
fetch(staticUrl)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let output = "";

    data.forEach((player) => {
      output += `<div onclick="show2('${player.name}')" class="player"><div class="player-name">${player.name}</div><img   class="player-img" src=
      "https://chess-tournament-api.devtest.ge${player.image}" /></div>`;
    });
    option.innerHTML = output;
  })
  .catch((err) => {
    console.log(err);
  });

$(".done-btn").on("click", function () {
  location.href = "done.html";
});

//save data
$("#form").addEventListener("submit", function (e) {
  e.prevenetDefault();
  const formData = new FormData(this);
  const searchParamas = new URLSearchParams();

  for (const pair of formData) {
    searchParamas.append(pair[0], pair[1]);
  }

  fetch("login.php", {
    method: "post",
    body: formData,
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      console.log(text);
    })
    .catch(function (error) {
      console.error(error);
    });
});
