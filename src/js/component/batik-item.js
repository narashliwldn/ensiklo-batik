import css from "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

class BatikItem extends HTMLElement {

   constructor() {
       super();
   }

   set batik(batik) {
       this._batik = batik;
       this.render();
   }

   get batik(){
     return this.querySelector();
   }

   render() {
       this.innerHTML = `
       <style>
        ${css}
       </style>

       <div class="card horizontal">
         <div class="card-image">
           <img src="${this._batik.link_image}">
         </div>
         <div class="card-stacked">
           <div class="card-content">
             <table>
               <tr>
                 <th>Nama: </th>
                 <td>${this._batik.nama_batik}</td>
               </tr>
               <tr>
                 <th>Arti: </th>
                 <td>${this._batik.makna_batik}</td>
               </tr>
             </table>
           </div>
           <div class="card-action">
             <a href="#">This is a link</a>
           </div>
         </div>
       </div>`;
   }
}

customElements.define("batik-item", BatikItem);
