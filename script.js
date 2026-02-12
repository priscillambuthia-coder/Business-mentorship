

const button = document.getElementById("loginBtn");

button.addEventListener("click", function () {
    console.log("Button clicked");
    login();
});
// Login user
function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const validUser = users.find(
        user => user.email === email && user.password === password
    );

    if (!validUser) {
        return showMessage("Invalid email or password");
    }

    window.location.href = "login.html";
}

// Display messages
function showMessage(text) {
    document.getElementById("message").innerText = text;
}

