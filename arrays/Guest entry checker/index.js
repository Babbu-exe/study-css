var guest =["umar","babbu","ahmed","khan","nigga"];
var name = prompt("enter your name");
if (guest.includes(name)) {
    alert("Welcome, " + name);
} else {
    alert("You are not invited.");
}