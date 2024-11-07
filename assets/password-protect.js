const password = prompt("Enter password:");
if (password !== "bio")  {
    document.body.style.display = "block";  // Show content
} else {
    document.body.innerHTML = "<h1>Access Denied</h1>";
}