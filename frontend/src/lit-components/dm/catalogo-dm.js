import { LitElement, html } from 'lit';

export class CatalogoDm extends LitElement {

    /**
      * Declared properties and their corresponding attributes
      */
    static get properties() {
        return {
            arrayData: {
                type: Array
            }
        };
    }

    constructor(){
        super();
        this.arrayData = [];
    }

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('set-data-catalog', this.handleResize);
      }

    
      handleResize(event) {
        this.arrayData = event.detail;
        InsertValue(this.arrayData)
      }

    render() {
        return html`
                     <catalogo-serch></catalogo-serch>
        `;
    }
}
customElements.define('catalogo-dm', CatalogoDm);