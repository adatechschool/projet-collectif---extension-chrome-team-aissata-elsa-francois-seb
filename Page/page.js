const popup = document.getElementById("popup");
const form = document.getElementById("options-form");
const submitBtn = document.getElementById("submit-btn");
const cancelBtn = document.getElementById("cancel-btn");

// Masque la pop-up lorsque l'utilisateur clique sur le bouton "Valider"
form.addEventListener("submit", (e) => {
  e.preventDefault();
  popup.style.display = "none";
});

// Masque la pop-up lorsque l'utilisateur clique sur le bouton "Annuler"
cancelBtn.addEventListener("click", () => {
  popup.style.display = "none";
});