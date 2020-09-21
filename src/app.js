import "regenerator-runtime";
import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-social/materialize-social.css';
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import './css/style.css';
import './js/component/app-bar.js';
import './js/component/header-parallax.js';
import './js/component/footer-page.js';
import main from './js/view/main.js';
import './js/init.js';
import './images/batik.png';
import './images/daimon.png';

document.addEventListener("DOMContentLoaded", main);
