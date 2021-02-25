var btn_submit = document.getElementById("submit");
var btn_getData = document.getElementById("getData");

function coloredButton(color) {
  var element = document.getElementById("submit");

  if (color == "green") {
    element.classList.remove("red");
    element.classList.add("green");
  } else {
    element.classList.remove("green");
    element.classList.add("red");
  }
}
function clearTable() {
  document.getElementById("btn_show").disabled = false;
  document.getElementById("b_table").classList.add("hidden");
  document.getElementById("input_one").value = "";
  document.getElementById("input_two").value = "";
  document.querySelector("tbody").innerHTML = "";
  document.getElementById("submit").className = "";
}
function generateTable(data) {
  var tbody = document.querySelector("tbody");
  document.getElementById("b_table").classList.remove("hidden");

  for (i in data) {
    var tr = document.createElement("tr");
    tr.innerHTML =
      "<td>" + data[i].One + "</td>" + "<td>" + data[i].Two + "</td>";
    tbody.appendChild(tr);
  }
}
function sendRequest() {
  let url = "http://localhost:80/send";
  let request_data = {
    one: document.getElementById("input_one").value,
    two: document.getElementById("input_two").value,
  };
  fetch(url, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "http://localhost",
      "Content-type": "application/json",
    },
    body: JSON.stringify(request_data),
  })
    .then((response) => response.json())
    .then((res) => {
      console.log(res.message);
      if (res.message == "accepted") {
        coloredButton("green");
      } else {
        coloredButton("red");
      }
    })
    .catch(function (err) {
      coloredButton("red");
    });
}
function getAllData() {
  var url = "http://localhost:80/getdata";

  fetch(url, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "http://localhost",
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((res) => {
      document.getElementById("btn_show").disabled = true;
      generateTable(res);
    })
    .catch(function (err) {
      //
    });
}
