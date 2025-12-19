document.addEventListener("DOMContentLoaded", () => {

  const contactBtn = document.querySelector(".btn-primary");
  const backBtn = document.querySelector(".btn-secondary");

  contactBtn.addEventListener("click", () => {
    alert("Redirection vers la messagerie du parrain...");
  });

  backBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });

});
