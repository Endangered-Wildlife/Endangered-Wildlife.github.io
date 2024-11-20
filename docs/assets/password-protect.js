// // Check if the password is already set in localStorage
// if (!localStorage.getItem('authenticated')) {
//     const password = prompt("Enter password:");
//     if (password === "bio") {
//         // Store the state in localStorage if password is correct
//         localStorage.setItem('authenticated', 'true');
//         document.body.style.display = "block";  // Show content
//     } else {
//         document.body.innerHTML = "<h1>Access Denied</h1>";
//     }
// } else {
//     // Show content if already authenticated
//     document.body.style.display = "block";  // Show content
// }