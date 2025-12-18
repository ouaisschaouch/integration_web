document.addEventListener("DOMContentLoaded", () => {

  // ===================== DROPDOWNS =====================
  function setupDropdown(boxId, listId, valueId) {
    const box = document.getElementById(boxId);
    const list = document.getElementById(listId);
    const valueSpan = document.getElementById(valueId);

    box.addEventListener("click", (e) => {
      e.stopPropagation();
      list.classList.toggle("active");
    });

    list.querySelectorAll("div").forEach(item => {
      item.addEventListener("click", () => {
        valueSpan.textContent = item.textContent;
        list.classList.remove("active");
      });
    });

    document.addEventListener("click", () => {
      list.classList.remove("active");
    });
  }

  // Setup dropdowns
  setupDropdown("filiereBox", "filiereList", "filiereValue");
  setupDropdown("besoinBox", "besoinList", "besoinValue");
  setupDropdown("dispoBox", "dispoList", "dispoValue");

  // ===================== BOUTON SUBMIT =====================
  const submitBtn = document.getElementById("submitBtn");

  submitBtn.addEventListener("click", () => {
    const filiere = document.getElementById("filiereValue").textContent;
    const besoin = document.getElementById("besoinValue").textContent;
    const dispo = document.getElementById("dispoValue").textContent;

    if(filiere === "Votre filière" || besoin === "Votre besoin" || dispo === "Vos disponibilités") {
      alert("Veuillez compléter tous les champs avant de soumettre !");
      return;
    }

    alert(`Votre demande :\nFilière : ${filiere}\nBesoin : ${besoin}\nDisponibilité : ${dispo}`);
  });

  // ===================== BARRE DE RECHERCHE =====================
  const searchBar = document.querySelector(".search-bar input");
  const searchBtn = document.querySelector(".search-bar button");

  const data = [
    "Alice Dupont",
    "Bob Martin",
    "Charlie Nguyen",
    "David Smith",
    "Emma Johnson",
    "François Moreau",
    "Gina Lopez"
  ];

  const suggestionBox = document.createElement("div");
  suggestionBox.classList.add("suggestion-box");
  suggestionBox.style.position = "absolute";
  suggestionBox.style.background = "#fff";
  suggestionBox.style.border = "1px solid #ccc";
  suggestionBox.style.borderRadius = "8px";
  suggestionBox.style.width = searchBar.offsetWidth + "px";
  suggestionBox.style.maxHeight = "150px";
  suggestionBox.style.overflowY = "auto";
  suggestionBox.style.zIndex = "1000";
  suggestionBox.style.display = "none";

  searchBar.parentNode.appendChild(suggestionBox);

  function updateSuggestions(query) {
    suggestionBox.innerHTML = "";
    if(query === "") {
      suggestionBox.style.display = "none";
      return;
    }

    const filtered = data.filter(item => item.toLowerCase().includes(query.toLowerCase()));
    filtered.forEach(item => {
      const div = document.createElement("div");
      div.textContent = item;
      div.style.padding = "0.5rem";
      div.style.cursor = "pointer";
      div.addEventListener("click", () => {
        searchBar.value = item;
        suggestionBox.style.display = "none";
      });
      suggestionBox.appendChild(div);
    });

    suggestionBox.style.display = filtered.length ? "block" : "none";
  }

  searchBar.addEventListener("input", (e) => {
    updateSuggestions(e.target.value);
  });

  searchBar.addEventListener("keydown", (e) => {
    if(e.key === "Enter") searchBtn.click();
  });

  searchBtn.addEventListener("click", () => {
    const query = searchBar.value.trim();
    if(query === "") {
      alert("Veuillez entrer un mot clé pour la recherche.");
      return;
    }
    const results = data.filter(item => item.toLowerCase().includes(query.toLowerCase()));
    alert(`Résultats pour "${query}" :\n${results.length ? results.join("\n") : "Aucun résultat trouvé"}`);
    suggestionBox.style.display = "none";
    searchBar.value = "";
  });
  document.getElementById("submitBtn").addEventListener("click", function() {
window.location.href = "src/profil-parrain.html";
});


});
