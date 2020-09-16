import css from "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

class AppBar extends HTMLElement {
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

    <div class="navbar-fixed">
      <nav class="red darken-1" role="navigation">
        <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">Ensiklopedia Batik</a>
          <ul class="right hide-on-med-and-down">
            <li><a href="#">Navbar Link</a></li>
          </ul>

          <ul id="nav-mobile" class="sidenav">
            <li><a href="#">Navbar Link</a></li>
          </ul>
          <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        </div>
      </nav>
    </div>
    `;
  }
}

customElements.define("app-bar", AppBar);
