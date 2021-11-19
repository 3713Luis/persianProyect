import { LitElement, html, css } from 'lit';

export class FormularioGenerico extends LitElement {

    static get properties() {
        return {
            objElements: { type: Object },
        };
    }

    constructor() {
        super();
        console.log('entró');
        this.objElements = {
            titulo: {
                texto: "Chompiras me la pelas",
                class: "lol",
                hCustom: "1",
            }
        };
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
                    break;
            
                default:
                    break;
            }
    }
}
customElements.define('formulario-generico', FormularioGenerico);
