let mainPage = document.querySelector("#main");
let title = document.querySelector("#title");
document.body.style.backgroundImage = "url(./img/register.jpeg)";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
mainPage.style.backgroundColor = "rgba(200,230,225,0.7)";
mainPage.style.width = "400px";
mainPage.style.height = "auto";
mainPage.style.paddingTop = "20px";
mainPage.style.textAlign = "center";
mainPage.style.margin = "auto";
mainPage.style.marginTop = "100px";
mainPage.style.borderRadius = "6px";
title.style.textAlign = "center";
title.style.color = "#f8d49a";
title.style.fontSize = "70px";

let form = document.querySelector("#screen");
form.style.backgroundColor = "cabc9d";

let students = [];

function pushInfo() {
  let user = {
    name: " ",
    job: " ",
    score: " ",
    car: { brand: " ", year: " ", color: " " },
  };

  user.name = document.querySelector("#name").value;
  document.querySelector("#name").value = "";
  user.job = document.querySelector("#ocupation").value;
  document.querySelector("#ocupation").value = "";
  user.score = document.querySelector("#score").value;
  document.querySelector("#score").value = "";
  user.car.brand = document.querySelector("#brand").value;
  document.querySelector("#brand").value = "";
  user.car.year = document.querySelector("#year").value;
  document.querySelector("#year").value = "";
  user.car.color = document.querySelector("#color").value;
  document.querySelector("#color").value = "";

  students.push(user);
}

function showStudents() {
  if ((deleter = true)) {
    document.querySelector("#screen").innerHTML = "";
  }

  for (user of students) {
    document.querySelector("#screen").innerHTML += "<ul>";
    document.querySelector("#screen").innerHTML +=
      "<li> name:" + user.name + "</li>";
    document.querySelector("#screen").innerHTML +=
      "<li> ocupation:" + user.job + "</li>";
    document.querySelector("#screen").innerHTML +=
      "<li> Age:" + user.score + "</li>";
    document.querySelector("#screen").innerHTML +=
      "<li> car brand:" + user.car.brand + "</li>";
    document.querySelector("#screen").innerHTML +=
      "<li> car year:" + user.car.year + "</li>";
    document.querySelector("#screen").innerHTML +=
      "<li> car color:" + user.car.color + "</li>";
    document.querySelector("#screen").innerHTML += "</ul>";

    let deleter = true;
  }
}
