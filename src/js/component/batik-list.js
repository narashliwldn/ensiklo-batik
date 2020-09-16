import './batik-item.js';

class BatikList extends HTMLElement {

   set batiks(batiks) {
       this._batiks = batiks;
       this.render();
   }

   render() {
       this.innerHTML = "";
       this._batiks.forEach(batik => {
           const batikItemElement = document.createElement("batik-item");
           batikItemElement.batik = batik;
           this.appendChild(batikItemElement);
       });
   }

   renderError(message) {
       this.innerHTML = "";
       this.innerHTML +=
       `
       <h2 class="placeholder">${message}</h2>
       `;
   }

}

customElements.define("batik-list", BatikList);
