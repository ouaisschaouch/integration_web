document.addEventListener("DOMContentLoaded", () => {

  const btnDemander = document.getElementById("btnDemander");
  const btnAvis = document.getElementById("btnAvis");

  btnDemander.addEventListener("click", () => {
    alert("Votre demande a été envoyée au parrain ✅");
  });

  btnAvis.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Redirection vers la page d'avis 📝");
  });

});
