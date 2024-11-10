let usersData = {
    "test@example.com": "password123",
    "user@domain.com": "mysecurepassword"
};

function handleLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "";

    if (usersData[email]) {
        // Check if password matches
        if (usersData[email] === password) {
            errorMessage.textContent =`Logged in successfully as ${email}!`;
            errorMessage.style.color = "green";
            setTimeout(()=> {
                window.location.href = "afterlogin.html";
            },500);

            // Clear the form fields after successful login
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
        } else {
            errorMessage.textContent = "Incorrect password. Please try again.";
            errorMessage.style.color = "red";
        }
    } else {
        errorMessage.textContent = "Email not found. Please try again.";
        errorMessage.style.color = "red";
    }

    // Log current users data to the console
    console.log("Current Users Data (JSON):", JSON.stringify(usersData, null, 2));
}

function handleSignup() {
    const signupEmail = document.getElementById("signup-email").value;
    const signupPassword = document.getElementById("signup-password").value;
    const signupErrorMessage = document.getElementById("signup-error-message");
    

    signupErrorMessage.textContent = "";

    // Check if the email already exists
    if (usersData[signupEmail]) {
        signupErrorMessage.textContent = "Email already exists. Please log in.";
        signupErrorMessage.style.color = "red";
    } else if (signupEmail === "" || signupPassword === "") {
        signupErrorMessage.textContent = "Please fill in both fields.";
        signupErrorMessage.style.color = "red";
    } else {
        // Add new user to usersData
        usersData[signupEmail] = signupPassword;

        signupErrorMessage.textContent = `Account created successfully for ${signupEmail}!`;
        signupErrorMessage.style.color = "green";

        // Clear the form fields after successful signup
        document.getElementById("signup-email").value = "";
        document.getElementById("signup-password").value = "";
    }
    //Redirect
    // setTimeout(()=> {
    //     window.location.href = "afterlogin.html";
    // },2000);
    // Log updated users data to the console
    console.log("Updated Users Data (JSON):", JSON.stringify(usersData, null, 2));
}

function showSignup() {
    document.getElementById("auth-container").style.display = "none";
    document.getElementById("signup-container").style.display = "block";
}

function showLogin() {
    document.getElementById("signup-container").style.display = "none";
    document.getElementById("auth-container").style.display = "block";
}