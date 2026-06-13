// Show date & time (REQUIRED FEATURE)
document.getElementById("date").innerText = new Date();

// Simple button action
function scrollDown() {
    window.scrollTo({
        top: 500,
        behavior: "smooth"
    });
}

function validateForm() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let pickup = document.getElementById("pickup").value;
    let drop = document.getElementById("drop").value;
    let vehicle = document.getElementById("vehicle").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    let error = document.getElementById("error");

    // check empty fields
    if (name === "" || phone === "" || pickup === "" || drop === "" || vehicle === "" || date === "" || time === "") {
        error.innerText = "❌ Please fill all fields!";
        return false;
    }

    // phone validation (Sri Lanka basic check)
    if (phone.length !== 10) {
        error.innerText = "❌ Phone number must be 10 digits!";
        return false;
    }

    // success
    alert("✅ Booking Successful!");
    return true;
}