import { LitElement, html } from 'lit';

export class VisualTest extends LitElement {

    /**
      * Declared properties and their corresponding attributes
      */
    static get properties() {
        return {
            inputText: {
                type: String
            },
            placeholderText: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this.placeholderText = "Escriba aquí";
        this.inputText = '';
    }
    render() {
        return html`
            <input type="text" id="text" name="text" value="${this.inputText}" placeholder="${this.placeholderText}"/>
            <button type="button" @click='${this.sendData}'>Enviar Datos</button>
        `;
    }

    sendData() {
        console.log(this.inputText);
        let event = new CustomEvent('set-data', {
                detail: this.inputText,
                bubbles: true,
                composed: true
            });
            this.dispatchEvent(event);
    console.log('Si entro');
    }
}
customElements.define('visual-test', VisualTest);