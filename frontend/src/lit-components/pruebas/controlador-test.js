import { LitElement, html } from 'lit';

export class ControladorTest extends LitElement {

    /**
      * Declared properties and their corresponding attributes
      */
    static get properties() {
        return {
            data: {
                type: Object
            }
        };
    }

    constructor() {
        super();
        this.data = {};
        console.log('inicialdo controlador');
        console.log(this.data);
    }

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('set-data', this._handleResize);
      }

      _handleResize(data) {
          console.log("_handleResize");
          console.log("Valor del input--->" + data.detail);
      }

    render() {
        return html``;
    }
}
customElements.define('controlador-test', ControladorTest);