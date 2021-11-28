// import displacejs from "displacejs";

class PokerCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: 125px;
        --height: 200px;

        display: block;
        width: var(--width);
        height: var(--height);
        background: white;
        border-radius: 10px;
        padding: 16px 8px;
        margin: 5px;
        font-size: 52px;
        user-select: none;
        transition: transform 0.2s ease;
        position: relative;
        border: 1px solid #bbb;
      }

      :host([suit="♥"]),
      :host([suit="♦"]) {
        color: red;
      }

      :host([card="1"]) {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 92px;
      }

      :host([card="2"]),
      :host([card="3"]) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      :host([card="4"]) {
        display: grid;
        grid-template-rows: repeat(2, 50%);
        grid-template-columns: repeat(2, 50%);
        place-items: center;
      }

      :host([card="5"]) {
        display: grid;
        grid-template-areas:  "a . b"
                              ". c ."
                              "d . e";
        place-items: center;
      }

      :host([card="5"]) .item:nth-of-type(1) { grid-area: a; }
      :host([card="5"]) .item:nth-of-type(2) { grid-area: b; }
      :host([card="5"]) .item:nth-of-type(3) { grid-area: c; }
      :host([card="5"]) .item:nth-of-type(4) { grid-area: d; }
      :host([card="5"]) .item:nth-of-type(5) { grid-area: e; }

      :host([card="6"]),
      :host([card="7"]),
      :host([card="8"]) {
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(2, 1fr);
        place-items: center;
      }

      :host([card="7"]),
      :host([card="8"]) {
        position: relative;
      }

      :host([card="7"]) .item:nth-of-type(1),
      :host([card="8"]) .item:nth-of-type(1) {
        position: absolute;
        top: 20%;
      }

      :host([card="8"]) .item:nth-of-type(8) {
        position: absolute;
        bottom: 20%;
      }

      :host([card="9"]),
      :host([card="10"]) {
        display: grid;
        grid-template-rows: repeat(4, 25%);
        grid-template-columns: 50% 50%;
        place-items: center;
        position: relative;
      }

      :host([card="9"]) .item:nth-of-type(1),
      :host([card="10"]) .item:nth-of-type(1) {
        position: absolute;
      }

      :host([card="10"]) .item:nth-of-type(1) {
        position: absolute;
        top: 15%;
      }

      :host([card="10"]) .item:nth-of-type(10) {
        position: absolute;
        bottom: 15%;
      }

      :host([card="11"]),
      :host([card="12"]),
      :host([card="13"]) {
        display: none;
      }

      :host([card="2"]) .item:nth-of-type(n+2),
      :host([card="3"]) .item:nth-of-type(n+3),
      :host([card="4"]) .item:nth-of-type(n+3),
      :host([card="5"]) .item:nth-of-type(n+4),
      :host([card="6"]) .item:nth-of-type(n+5),
      :host([card="7"]) .item:nth-of-type(n+6),
      :host([card="8"]) .item:nth-of-type(n+6),
      :host([card="9"]) .item:nth-of-type(n+6),
      :host([card="10"]) .item:nth-of-type(n+6) {
        transform: translateY(8px) scaleY(-1);
      }

      :host([card="11"]),
      :host([card="12"]),
      :host([card="13"]) {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      :host(:is(
          [card="11"],
          [card="12"],
          [card="13"])) .item {
        border: 1px solid #555;
        display: block;
        width: 80%;
        height: 88%;
      }

      /* Thumbs */
      :host::before,
      :host::after {
        content: attr(card) attr(suit);
        font-size: 17px;
        position: absolute;
        display: flex;
        flex-direction: column;

        writing-mode: tb;
        text-orientation: upright;
        letter-spacing: -6px;
      }

      :host([card="10"])::before,
      :host([card="10"])::after {
        content: "⒑" attr(suit);
      }

      :host([card="14"])::before,
      :host([card="14"])::after {
        content: attr(suit);
      }

      :host([card="11"]) .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      :host .item span:first-child {
        position: absolute;
        z-index: 5;
        top: 15px;
        right: 22px;
      }

      :host .item span:last-child {
        position: absolute;
        z-index: 5;
        bottom: 15px;
        left: 22px;
        transform: scaleY(-1);
      }

      :host(
        :is([card="11"],
            [card="12"],
            [card="13"])) .item::before,
      :host(
        :is([card="11"],
            [card="12"],
            [card="13"])) .item::after {
        content: "";
        width: 100%;
        height: 50%;
        display: block;
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: bottom;
        position: relative;
        transform: scale(-1);
      }

      :host([card="11"]) .item::before,
      :host([card="11"]) .item::after {
        background-image: url(images/11.png);
      }

      :host([card="12"]) .item::before,
      :host([card="12"]) .item::after {
        background-image: url(images/12.png);
      }

      :host([card="13"]) .item::before,
      :host([card="13"]) .item::after {
        background-image: url(images/13.png);
      }

      :host(:is([card="11"],
      [card="12"],
      [card="13"])) .item::before {
        transform: scale(1);
      }

      :host([card="11"])::before,
      :host([card="11"])::after {
        content: "J" attr(suit);
      }

      :host([card="12"])::before,
      :host([card="12"])::after {
        content: "Q" attr(suit);
      }

      :host([card="13"])::before,
      :host([card="13"])::after {
        content: "K" attr(suit);
      }

      :host::before {
        top: 4px;
        left: 4px;
      }

      :host::after {
        bottom: 4px;
        right: 4px;
        transform: rotate(180deg);
      }

      :host([card="14"]) {
        background-image: url(images/14.png);
        background-repeat: no-repeat;
        background-size: 75%;
        background-position: left 60% center;
      }
      :host([card="14"]) .item { display: none; }

      @media screen and (max-width:800px){
        :host::after,
        .item {
          display: none;
        }

        :host([card]) {
          width: 38px;
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        :host::before {
          position: static;
          font-size: 24px;
        }

        :host([card="11"]) .item,
        :host([card="12"]) .item,
        :host([card="13"]) .item,
        :host([card="14"]) .item {
          display: none;
        }

        :host([card="14"])::before,
        :host([card="14"])::after {
          display: none;
        }
      }

      :host(:hover) {
        box-shadow: 2px 8px 10px #0007;
        transform: translate(-1px, -6px);
        transition: transform 0.3s ease;
        will-change: transform;
        cursor: pointer;
      }

      :host(.flipped) {
        background:
          url(images/cover.png),
          repeating-linear-gradient(45deg, #222 0 30%, #FFFF00 30% 35%);
        background-repeat: no-repeat;
        background-size: 130%;
        background-position: left bottom;
        border-color: black;
      }

      :host(.flipped) *,
      :host(.flipped)::before,
      :host(.flipped)::after,
      :host(.flipped) .item {
        display: none;
      }

      :host-context(.cover-2):host(.flipped) {
        background: radial-gradient(#f23 80%, #a12 64%);
      }

      :host-context(.cover-3):host(.flipped) {
        background: conic-gradient(red,yellow,lime,aqua,blue,magenta,red);
      }
    `;
  }

  get isRoyal() {
    return this.card > 10;
  }

  sendToFront() {
    const event = new CustomEvent("SENDTOFRONT", { detail: { element: this }, composed: true, bubbles: true });
    this.dispatchEvent(event);
  }

  flipCard() {
    this.classList.toggle("flipped");
  }

  setInteractive() {
    // this.classList.add("flipped");
    this.addEventListener("mousedown", () => this.sendToFront());
    this.addEventListener("dblclick", () => this.flipCard());
    this.addEventListener("wheel", (ev) => {
      ev.preventDefault();
      this.style.transform = `rotate(${ev.deltaY / 10}deg)`;
    });
    // displacejs(this);
  }

  connectedCallback() {
    this.card = this.getAttribute("card") ?? 1;
    this.suit = this.getAttribute("suit") ?? "♠";
    this.render();
    this.setInteractive();
  }

  drawItems() {
    if (this.isRoyal) {
      const item = document.createElement("div");
      item.classList.add("item");
      item.innerHTML = `<span>${this.suit}</span><span>${this.suit}</span>`;
      this.shadowRoot.appendChild(item);
      return;
    }

    for (let j = 0; j < this.card; j++) {
      const item = document.createElement("div");
      item.classList.add("item");
      item.textContent = this.suit;
      this.shadowRoot.appendChild(item);
    }
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${PokerCard.styles}</style>
    `;
    this.drawItems();
  }
}

customElements.define("poker-card", PokerCard);
