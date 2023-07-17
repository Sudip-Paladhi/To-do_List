const inputBox = document.getElementById("input");
const containerList = document.getElementById("container");

function addTask() {
    if (inputBox.value === '') {
        alert("First you wright somethings")
    }

    else {
        let item_input = document.createElement("li");
        item_input.innerHTML = inputBox.value;
        containerList.appendChild(item_input);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        item_input.appendChild(span);
    }
    inputBox.value = '';
    saveData()
}

containerList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData() {
    localStorage.setItem("data", containerList.innerHTML)
}

function showTask() {
    containerList.innerHTML = localStorage.getItem("data");
}

showTask();