var name = localStorage.getItem("studentName");
var events = JSON.parse(localStorage.getItem("events")) || [];
var summary = document.getElementById("summary");

var output = "Name: " + (name || "") + "<br>Events:<br>";

for (var i = 0; i < events.length; i++) {
    output += events[i] + "<br>";
}

output += "Total Fee: " + (events.length * 150) + " Taka";
summary.innerHTML = output;

function goBack() {
    window.location.href = "index.html";
}
