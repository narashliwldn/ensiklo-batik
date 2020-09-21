import css from "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

class HeaderParallax extends HTMLElement {
  constructor() {
    super();

  }

  connectedCallback(){
    this.render();
  }

  render(){
    this.innerHTML = `
    <style>
      ${css}
    </style>

    <div class="parallax-container">
      <div class="parallax">
        <img src="./images/batik.jpg" alt="webpack-parallax">
      </div>
    </div>
    `;
  }
}

customElements.define("header-parallax", HeaderParallax);
