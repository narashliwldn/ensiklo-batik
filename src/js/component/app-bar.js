import css from "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import "materialize-social/materialize-social.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";

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
    <ul id="nav-mobile" class="sidenav">
      <li>
        <div class="user-view">
          <div class="background">
            <img src="./images/batik.jpg">
          </div>
          <a href="#"><img class="circle" src="./images/daimon.png"></a>
          <a href="#"><span class="white-text name">N Rani S</span></a>
          <a href="#"><span class="white-text name">Belajar Fundamental Front-End Web Development</span></a>
        </div>
      </li>
      <li><a href="https://github.com/narashliwldn/ensiklo-batik" class="social-icon github"><i class="fab fa-github"></i>Link untuk project ini</a></li>
    </ul>
    <div class="navbar-fixed">
      <nav class="red darken-1" role="navigation">
        <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">Ensiklopedia Batik</a>
          <ul class="right hide-on-med-and-down">
            <li><a href="https://github.com/narashliwldn/ensiklo-batik">Link Project</a></li>
          </ul>

          <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        </div>
      </nav>
    </div>
    `;
  }
}

customElements.define("app-bar", AppBar);
