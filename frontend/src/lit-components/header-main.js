import { LitElement, html, css } from 'lit-element/lit-element.js';

export class HeaderMain extends LitElement {

    static get styles() {
        return css`
         :host {
                display: block;
                background: red;
            }
        `;
    }
    render() {
        return html`
        <h1>Hey tu</h1>
        `;
    }
}
customElements.define('header-main', HeaderMain);