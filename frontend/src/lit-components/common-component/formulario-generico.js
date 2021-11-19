import { LitElement, html, css } from 'lit';

export class FormularioGenerico extends LitElement {

    static get properties() {
        return {
            objElements: { 
                type: Object
            },
        };
    }

    constructor() {
        super();
        console.log('entró');
        this.objElements = {};
    }

    static get styles() {
        return css`
        .lol {
            color: green;
            
        }
        :host {
            
            display: block;
        }
        `
    }

    render() {
        return html`
        ${this.objElements.titulo ? this.buildTitle(): html`<p>no hay valores</p>`}
        `;
    }

    buildTitle() {
        console.log("entro switch");
            switch (this.objElements.titulo.hCustom) { 
                case "1":
                    return html `
                    <h1 class="${this.objElements.titulo.class}">${this.objElements.titulo.texto}</h1>
                    `;
                case "2":
                    return html `
                    <h2 class="${this.objElements.titulo.class}">${this.objElements.titulo.texto}</h2>
                    `;
                case "3":
                    return html `
                    <h3 class="${this.objElements.titulo.class}">${this.objElements.titulo.texto}</h3>
                    `;
                case "4":
                    return html `
                    <h4 class="${this.objElements.titulo.class}">${this.objElements.titulo.texto}</h4>
                    `;
                case "5":
                    return html `
                    <h5 class="${this.objElements.titulo.class}">${this.objElements.titulo.texto}</h5>
                    `;
                case "6":
                    return html `
                    <h6 class="${this.objElements.titulo.class}">${this.objElements.titulo.texto}</h6>
                    `;
                default:
                    break;
            }
    }
}
customElements.define('formulario-generico', FormularioGenerico);
