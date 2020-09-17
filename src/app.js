import "regenerator-runtime";
import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-social/materialize-social.css';
import './js/init.js';
import './css/style.css';
import './js/component/app-bar.js';
import './js/component/header-parallax.js';
import './js/component/footer-page.js';
import main from './js/view/main.js';

document.addEventListener("DOMContentLoaded", main);
