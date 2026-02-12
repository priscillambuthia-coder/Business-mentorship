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


const button = document.getElementById("login");

button.addEventListener("click", function (e) {
    e.preventDefault();

    let form = document.getElementById("Login");
    let inputs = form.querySelectorAll("input");

    let email = inputs[0].value;
    let password = inputs[1].value;

    login(email, password);
});

function login(email, password) {

    if (!myUsers.users.has(email)) {
        alert("No account");
        return;
    }

    const user = myUsers.users.get(email);

    if (user.password === password) {
        alert("Welcome " + user.username);
        ocument.getElementById("message").innerHTML =
        "Welcome" ;
         document.getElementById("msgName").innerHTML = 
          user.name;
        
         document.getElementById("name").innerHTML = user.name;

        window.location.href = "login.html";
    } else {
        alert("Invalid email or password");
    }
}


 
       


