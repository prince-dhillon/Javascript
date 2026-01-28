// Prompt the user to enter their full name. Generate a username for them based on the input.
// Start username with @, followed by their full name and ending with the fullname length.
x = prompt("Enter Your Full Name: ");
y = `@${x}${x.length}`;
console.log(y);