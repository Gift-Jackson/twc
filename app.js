const input = document.querySelector("#email");
const joinBtn = document.querySelector(".form-btn");
const errorMsg = document.querySelector(".errorMsg");

joinBtn.addEventListener("click", () => {
    if (input.value === "") {
        input.classList.add("error");
        errorMsg.style.opacity = "1";
        setTimeout(function () {
            input.classList.remove("error");
            errorMsg.style.opacity = "0";
        }, 2500);
    }
    else {
        // alert("ready");
    }
});

const toggle = document.querySelector(".toggle-box");
const toggleBar = document.querySelector(".toggle");
const menu = document.querySelector(".menu");


toggle.addEventListener("click", () => {
    toggleBar.classList.toggle("active");

    if (toggleBar.classList.contains("active")) {
        menu.classList.add("active");
    }
    else {
        menu.classList.remove("active");
    }
});