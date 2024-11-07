const password = prompt("Enter password:");
if (password !== "bio") {
    document.body.innerHTML = "<h1>Access Denied</h1>";
}