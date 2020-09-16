import css from "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

class FooterPage extends HTMLElement {
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

    <footer class="page-footer red">
      <div class="footer-copyright">
        <div class="container">
          <div class="row">
            <div class="col s12 m12">
            Made by <a class="pink-text text-lighten-3" href="#">N Rani S</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    `;
  }
}

customElements.define("footer-page", FooterPage);
