function showSignup() {
    document.querySelector(".Login").style.display = "none";
    document.querySelector(".SignUp").style.display = "block";
}

function showLogin() {
    document.querySelector(".SignUp").style.display = "none";
    document.querySelector(".Login").style.display = "block";
}

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}


function AllUsers() {
    this.users = new Map();
}

AllUsers.prototype.addUser = function(user) {

    if (this.users.has(user.email)) {
        alert("Account already exists!");
        return;
    }

    this.users.set(user.email, user);
    alert("Account created successfully!");
};


AllUsers.prototype.loginUser = function(email, password) {

    if (!this.users.has(email)) {
        alert("No account found!");
        return;
    }

    let user = this.users.get(email);

    if (user.password === password) {
        alert("Welcome " + user.username);
    } else {
        alert("Incorrect password!");
    }
};


let myUsers = new AllUsers();

document.getElementById("SignUp").addEventListener("submit", function(e) {
    e.preventDefault();

    let inputs = this.querySelectorAll("input");

    let username = inputs[0].value;
    let email = inputs[1].value;
    let password = inputs[2].value;

    let user = new User(username, email, password);
    myUsers.addUser(user);

    this.reset();
});



