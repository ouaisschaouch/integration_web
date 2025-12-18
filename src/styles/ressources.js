document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".resource-card");

  input.addEventListener("input", () => {
    const value = input.value.toLowerCase();

    cards.forEach(card => {
      const title = card.dataset.title.toLowerCase();
      card.style.display = title.includes(value) ? "block" : "none";
    });
  });
});
