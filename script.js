document.getElementById("loginForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let username = document.getElementById("username").value;

    let password = document.getElementById("password").value;

    if (username === "student" && password === "1234") {

        window.location.href = "idcard.html";

    } else {

        document.getElementById("message").textContent =
            "Incorrect username or password!";

    }

});


// DISPLAY STUDENT NAME

const studentName = document.getElementById("studentName");

if (studentName) {

    const savedName = sessionStorage.getItem("studentName");

    if (savedName === null) {

        window.location.href = "index.html";

    } else {

        studentName.textContent = savedName;

    }

}


// LOGOUT BUTTON

function logout() {

    sessionStorage.removeItem("loggedIn");

    sessionStorage.removeItem("studentName");

    window.location.replace("index.html");

    window.location.href = "index.html";

}

// LOGIN BUTTON

function login() {
    window.location.href = "idcard.html";
}

function goHome() {
    window.location.href = "index.html";
}

function goAbout() {
    window.location.href = "about.html";
}

function goProject() {
    window.location.href = "project.html";
}

function goContact() {
    window.location.href = "contact.html";
}
function logout() {
    window.location.href = "index.html";
}
 