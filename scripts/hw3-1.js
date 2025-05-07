document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("toggle-theme");
  const fontToggleButton = document.getElementById("toggle-font");

  const bodyElement = document.body;

  if (themeToggleButton) {
    themeToggleButton.addEventListener("click", () => {
      bodyElement.classList.toggle("dark");
    });
  }

  if (fontToggleButton) {
    fontToggleButton.addEventListener("click", () => {
      bodyElement.classList.toggle("alt-font");
    });
  }

  const projectCards = document.querySelectorAll(".project-card");
  const categoryButtons = document.querySelectorAll(
    ".controls button[data-category]"
  );
  const searchInput = document.getElementById("search-input");

  if (projectCards.length > 0 && categoryButtons.length > 0 && searchInput) {
    let currentCategory = "all";
    let currentSearchTerm = "";

    const filterAndDisplayProjects = () => {
      projectCards.forEach((card) => {
        const cardCategory = card.dataset.category
          ? card.dataset.category.toLowerCase()
          : "none";
        const cardTitle = card.dataset.title
          ? card.dataset.title.toLowerCase()
          : "";

        const categoryMatches =
          currentCategory === "all" || cardCategory === currentCategory;
        const searchMatches =
          currentSearchTerm === "" || cardTitle.includes(currentSearchTerm);

        if (categoryMatches && searchMatches) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    };

    categoryButtons.forEach((button) => {
      button.addEventListener("click", () => {
        currentCategory = button.dataset.category.toLowerCase();
        filterAndDisplayProjects();
      });
    });

    searchInput.addEventListener("input", () => {
      currentSearchTerm = searchInput.value.toLowerCase();
      filterAndDisplayProjects();
    });

    filterAndDisplayProjects();
  }

  const hitButton = document.getElementById("hit-btn");
  const cardImageElements = document.querySelectorAll(".cards img");
  const resultDisplay = document.querySelector(".result");

  if (hitButton && cardImageElements.length === 3 && resultDisplay) {
    const suits = ["H", "D", "C", "S"];
    const values = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "T",
      "J",
      "Q",
      "K",
    ];

    const getCardValue = (value) => {
      if (["K", "Q", "J", "T"].includes(value)) {
        return 10;
      }
      if (value === "A") {
        return 1;
      }
      return parseInt(value);
    };

    const getRandomCard = () => {
      const randomSuit = suits[Math.floor(Math.random() * suits.length)];
      const randomValue = values[Math.floor(Math.random() * values.length)];
      return {
        suit: randomSuit,
        value: randomValue,
        name: randomValue + randomSuit,
      };
    };

    const dealCards = () => {
      let currentHand = [];
      let totalValue = 0;

      for (let i = 0; i < 3; i++) {
        const card = getRandomCard();
        currentHand.push(card);
        totalValue += getCardValue(card.value);

        cardImageElements[i].src = `images/cards/${card.name}.png`;
        cardImageElements[i].alt = `Card ${i + 1}: ${card.value} of ${
          card.suit
        }`;
      }

      let message = `Total: ${totalValue} - `;
      if (totalValue > 21) {
        message += "You are Basted!";
      } else {
        message += "You are Not Busted!";
      }
      resultDisplay.textContent = message;
    };

    hitButton.addEventListener("click", dealCards);
  }
});
