// Show date & time (REQUIRED FEATURE)
document.getElementById("date").innerText = new Date();

// Simple button action
function scrollDown() {
    window.scrollTo({
        top: 500,
        behavior: "smooth"
    });
}
