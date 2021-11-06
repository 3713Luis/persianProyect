import { LitElement, html, css } from 'lit-element/lit-element.js';

export class BannerMain extends LitElement {

   static get styles() {
       return css`
       `
   }
    /**
      * Object describing property-related metadata used by Polymer features
      */
    static get properties() {
        return {
            
        };
    }

    render() {
        return html`
        <input type="file" id="fileInput"/>
        <h1>Blob to base64</h1>
        <button id="btnTo64">Converter to base64</button>
        <h1>B64 to Blob</h1>
        <button id="btnToBlob"> Converter to Blob</button>
        `;
    }
}
customElements.define('banner-main', BannerMain);