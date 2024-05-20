var modal = document.getElementById("myModal");
var nameInput = document.getElementById("nameInput");

function openPrompt() {
  modal.style.display = "block";
}

function closePrompt() {
  modal.style.display = "none";
}

function submitPrompt() {
  var name = nameInput.value;
  alert("Hello, " + name + "!");
  closePrompt();
}
