import css from "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

class SearchBar extends HTMLElement {

   constructor() {
       super();
   }

   connectedCallback(){
       this.render();
   }

   set clickEvent(event) {
       this._clickEvent = event;
       this.render();
   }

   get value() {
       return this.querySelector("#search-button").value;
   }

   render() {
       this.innerHTML = `
       <script>
        ${css}

        .search-box {

          background-color: white;
          border-radius: 25px;
          padding: 16px;
        }

       </script>
       <div class="search-bar">
        <div class="search-box" id="search-box">
          <input type="search" placeholder="silahkan ketik batik apa yang ingin dicari" id="searchElement">
        </div>
        <a class="red darken-1 waves-effect waves-light btn" id="search-button"><i class="material-icons left">search</i>Cari</a>
      </div>
       `;

       this.querySelector("#search-button").addEventListener("click", this._clickEvent);
   }
}

customElements.define("search-bar", SearchBar);
