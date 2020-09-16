import DataSource from '../data/data-source.js';
import '../component/search-bar.js';
import '../component/batik-list.js';

const main =  () => {
    const searchElement = document.querySelector("search-bar");
    const batikListElement = document.querySelector("batik-list");

    const onButtonSearchClicked = async () => {
      try {
        const result = await DataSource.searchBatik(searchElement.value);
        renderResult(result);
      } catch (message) {
        fallbackResult(message);
      }

    };

    const renderResult = (results) => {
      batikListElement.batiks = results;
    };

    const fallbackResult = (message) => {
        batikListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
