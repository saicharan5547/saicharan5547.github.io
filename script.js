document.getElementById("login").addEventListener("click", function(event) {
    event.preventDefault();

    // Get the email and password entered by the user
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Check if email and password match the credentials
    if (email === "sai@gmail.com" && password === "password") {
        alert("Login successful");
        console.log("Redirecting to demo.html...");
        // Redirect to demo.html
        window.location.href = "demo.html";
    } else {
        alert("Invalid email or password");
    }
});

function processWaste(type) {
    var trashItems = document.getElementById('trash-items');
    var plasticCategory = document.getElementById('plastic-items');
    var metalCategory = document.getElementById('metal-items');

    // Iterate through trash items and move them to respective categories
    for (var i = 0; i < trashItems.children.length; i++) {
        var item = trashItems.children[i];
        if (item.textContent.includes('Plastic') && type === 'plastic') {
            plasticCategory.appendChild(item);
        } else if (item.textContent.includes('Metal') && type === 'metal') {
            metalCategory.appendChild(item);
        }
    }
}