function validateForm() {
    const email = document.getElementById("email").value;
    const batch = document.getElementById("batch").value;
    const hobby = document.getElementById("hobby").value;
    const pass = document.getElementById("pass").value;
    const confirmPass = document.getElementById("confirmPass").value;


    const emailRegex = /^[a-zA-Z]+[0-9]{2}-[0-9]{4}@diu\.edu\.bd$/;

    const batchRegex = /^[0-9]{2}_[A-Za-z]+$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*#)(?=.*&).{6,}$/;


    if (!emailRegex.test(email)) {
        alert("Email must be in the format: usernameDD-DDDD@diu.edu.bd");
        return false;
    }

    if (!batchRegex.test(batch)) {
        alert("Batch format should be like 61_J");
        return false;
    }


    const hobbies = hobby.split(',').map(h => h.trim().toLowerCase());
    if (!hobbies.includes("painting")) {
        alert("Hobbies must include 'painting'");
        return false;
    }
    if (hobbies.length < 5) {
        alert("You must enter at least 5 hobbies");
        return false;
    }


    if (!passRegex.test(pass)) {
        alert("Password must contain uppercase, lowercase, &, and #");
        return false;
    }

    if (pass !== confirmPass) {
        alert("Passwords do not match");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}