import "./components/PokerCard.js";

const JOKERS = 2;
const SUITS = ["♥", "♠", "♦", "♣"];
const container = document.querySelector(".container");

const createCard = (suit, i) => {
  const card = document.createElement("poker-card");
  card.setAttribute("card", i);
  card.setAttribute("suit", suit);
  container.appendChild(card);
};

const getMaxZIndex = () => {
  const allCards = Array.from(document.querySelectorAll("poker-card"));
  const maxZIndex = Math.max(...allCards.map(el => {
    const zIndex = window.getComputedStyle(el).getPropertyValue("z-index");
    return parseInt(zIndex) || 0;
  }));
  return maxZIndex;
};

container.addEventListener("SENDTOFRONT", (ev) => {
  const el = ev.detail.element;
  const max = getMaxZIndex();
  el.style.zIndex = max + 1;
});

for (let i = 0; i < JOKERS; i++) {
  createCard("JOKER", 14);
}

for (let s = 0; s < SUITS.length; s++) {
  const suit = SUITS[s];
  for (let i = 1; i < 14; i++) {
    createCard(suit, i);
  }
};
