import DataSource from '../data/data-source.js';
import '../component/search-bar.js';
import '../component/batik-list.js';
// import '../component/app-bar.js';
// import '../component/header-parallax.js';
// import png from '/src/images/daimon.png';
// import jpg from '/src/images/batik.jpg';


const main =  () => {
    const searchElement = document.querySelector("search-bar");
    const batikListElement = document.querySelector("batik-list");
    // const fotoProfil = document.querySelector("profil");
    // const parallax = document.querySelector("parallax-header");
    // const profileBg = document.querySelector("profileBg");

    const onButtonSearchClicked = async () => {
      try {
        const result = await DataSource.searchBatik(searchElement.value);
        renderResult(result);
      }
      catch (message) {
        fallbackResult(message);
      }

    };

    const getAllBatik = async () => {
      try {
        const result = await DataSource.getAllBatik();
        renderResult(result);
      }
      catch (message) {
        fallbackResult(message);
      }
    };

    const renderResult = (results) => {
      batikListElement.batiks = results;
    };

    const fallbackResult = (message) => {
        batikListElement.renderError(message);
    };

    getAllBatik();
    searchElement.clickEvent = onButtonSearchClicked;
    // fotoProfil.src = png;
    // parallax.src = jpg;
    // profileBg.src = jpg;

};

export default main;
