const toggleBtn = document.getElementById("toggleBtn"); 
// getElementById()     = Select by ID
toggleBtn.addEventListener("click", () => { // addEventListener() = Handle events
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.innerText = "☀️ Light Mode"; // innerText = Change text
    } else {
        toggleBtn.innerText = "🌙 Dark Mode";
    }
});
