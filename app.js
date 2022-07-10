"use strict";
//page reload data stay
window.onload = function () {
  let nameS = localStorage.getItem("name");
  if (nameS !== null) $("#name").val(nameS);

  let emailS = localStorage.getItem("email");
  if (emailS !== null) $("#email").val(emailS);

  let phoneS = localStorage.getItem("phone");
  if (phoneS !== null) $("#phone").val(phoneS);

  let dateS = localStorage.getItem("date_of_birth");
  if (dateS !== null) $("#date").val(dateS);

  let expS = localStorage.getItem("experience_level");
  if (expS !== null) $("#exp").val(expS);

  let charS = localStorage.getItem("character");
  if (charS !== null) $("#char").val(charS);

  let partS = localStorage.getItem("already_participated");
  if (partS == true) $("#yes").checked == true;
};

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
let phoneno = /^\d{9}$/;
// Get started button
$(".start-btn").on("click", function () {
  location.href = "create.html";
});
// second page back button
$(".back-btn").on("click", function () {
  location.href = "index.html";
});
//third page back button
$(".back-btn-third").on("click", function () {
  location.href = "create.html";
});
// box number 1
$("input").on("click", function () {
  $(".box-1").css("background", "#E9FAF1");
  $(".box-1").css("border", "none");
});

//checking inputs
$("#submit").on("click", function (e) {
  e.preventDefault();
  check1();
  check2();
  check3();
  check4();

  if (
    checker1.style.display === "block" &&
    checker2.style.display === "block" &&
    checker3.style.display === "block" &&
    checker4.style.display === "block"
  ) {
    $(".box-num1").text("");
    $(".box-num1").addClass("done");
    location.href = "exp.html";
  }
});

//name input check
function check1() {
  // name checker
  if (names.value.length > 1) {
    checker1.style.display = "block";
    error1.style.display = "none";
    $("#name").css("background", "#fff");
    localStorage.setItem("name", $("#name").val());
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
//email input check
function check2() {
  // email checker
  if (email.value.match(regExp)) {
    checker2.style.display = "block";
    error2.style.display = "none";
    $("#email").css("background", "#Fff");
    localStorage.setItem("email", $("#email").val());
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

//phone input check
function check3() {
  // phone checker
  if (phone.value.match(phoneno)) {
    checker3.style.display = "block";
    error3.style.display = "none";
    $("#phone").css("background", "#Fff");
    localStorage.setItem("phone", $("#phone").val());
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
//date input check
function check4() {
  if (checker3.style.display === "none") {
    checker4.style.display = "none";
    error4.style.display = "none";
    $("#date").css("background", "#Fff");
  } else if (date.value) {
    checker4.style.display = "block";
    localStorage.setItem("date_of_birth", $("#date").val());
    error4.style.display = "none";
  } else if (!date.value) {
    error4.style.display = "block";
    $("#date").css("background", "#FFEFEF");
  }
}
//close pop ups
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

$(".close4").on("click", function () {
  error4.style.display = "none";
  $("#date").css("background", "#Fff");
});

//level of knowledge dropdown
function show(anything) {
  document.querySelector(".textBox").value = anything;
  localStorage.setItem("experience_level", $(".textBox").val());
}

//choose your character dropdown
function show2(anything) {
  document.querySelector(".textBox2").value = anything;
  localStorage.setItem("character", $(".textBox2").val());
  if ($(".textBox2").val() === "Nona Gaphrindashvili") {
    localStorage.setItem("character_id", 1);
  } else if ($(".textBox2").val() === "Mikhail Tal") {
    localStorage.setItem("character_id", 2);
  } else if ($(".textBox2").val() === "Bobby Fisher") {
    localStorage.setItem("character_id", 3);
  } else if ($(".textBox2").val() === "Magnus Carlsen") {
    localStorage.setItem("character_id", 4);
  }
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
var yes = true;
var no = false;
//question
function see() {
  if (document.getElementById("yes").checked == true) {
    localStorage.setItem("already_participated", true);
  }
  if (document.getElementById("no").checked == true) {
    localStorage.setItem("already_participated", false);
  }
}

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

fetch("https://chess-tournament-api.devtest.ge/api/register", {
  method: "POST",
  body: JSON.stringify({
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
    phone: localStorage.getItem("phone"),
    date_of_birth: localStorage.getItem("date_of_birth"),
    experience_level: localStorage.getItem("experience_level"),
    already_participated: localStorage.getItem("already_participated"),
    character_id: localStorage.getItem("character_id"),
  }),
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
})
  .then(function (response) {
    return response.text();
  })
  .then(function (text) {
    console.log(text);
  })
  .catch(function (error) {});
