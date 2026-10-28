var events = [];

function addEvent() {
    var eventBox = document.getElementById("event");
    var eventName = eventBox.value.trim();

    if (eventName === "") {
        alert("Please enter an event name.");
        return;
    }

    if (events.length >= 3) {
        alert("You can join a maximum of 3 events.");
        return;
    }

    events.push(eventName);
    eventBox.value = "";
    alert("Event Added");
    showEvents();
}

function showEvents() {
    var list = document.getElementById("eventList");
    list.innerHTML = "";

    for (var i = 0; i < events.length; i++) {
        var item = document.createElement("li");
        item.textContent = events[i];
        list.appendChild(item);
    }
}

function confirmRegistration() {
    var name = document.getElementById("studentName").value.trim();

    if (name === "" || events.length === 0) {
        alert("Please enter your name and add at least one event.");
        return;
    }

    localStorage.setItem("studentName", name);
    localStorage.setItem("events", JSON.stringify(events));
    window.location.href = "confirm.html";
}
