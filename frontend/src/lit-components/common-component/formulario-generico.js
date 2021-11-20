import { LitElement, html, css } from 'lit';

export class FormularioGenerico extends LitElement {

    static get properties() {
        return {
            objElements: {
                type: Object
            },
            additional: {
                type: String
            }
        };
    }

    constructor() {
        super();
        console.log('entró');
        this.objElements = {};
        this.additional = '';
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
        ${this.objElements.titulo ? this.buildTitle() : html`<p>no hay valores de titulo</p>`}
        ${this.objElements.input ? this.buildInput() : html`<p>no hay valores de input</p>`}
        `;
    }

    buildTitle() {
        switch (this.objElements.titulo.hCustom) {
            case "1":
                return html`
                    <h1 style="${this.getAdditionalStyles(this.objElements.titulo.style)}" class="${this.objElements.titulo.class}">${this.objElements.titulo.texto}</h1>
                    `;
            case "2":
                return html`
                    <h2 style="${this.getAdditionalStyles(this.objElements.titulo.style)}" class="${this.objElements.titulo.class}">${this.objElements.titulo.texto}</h2>
                    `;
            case "3":
                return html`
                    <h3 style="${this.getAdditionalStyles(this.objElements.titulo.style)}" class="${this.objElements.titulo.class}">${this.objElements.titulo.texto}</h3>
                    `;
            case "4":
                return html`
                    <h4 style="${this.getAdditionalStyles(this.objElements.titulo.style)}" class="${this.objElements.titulo.class}">${this.objElements.titulo.texto}</h4>
                    `;
            case "5":
                return html`
                    <h5 style="${this.getAdditionalStyles(this.objElements.titulo.style)}" class="${this.objElements.titulo.class}">${this.objElements.titulo.texto}</h5>
                    `;
            case "6":
                return html`
                    <h6 style="${this.getAdditionalStyles(this.objElements.titulo.style)}" class="${this.objElements.titulo.class}">${this.objElements.titulo.texto}</h6>
                    `;
            default:
                break;
        }
    }

    getAdditionalStyles(elemento) {
        this.additional = elemento.map(element => {
            return this.additional = this.additional + element;
        });
        return this.additional;
    }

    buildInput() {
        console.log("Input");
    }
}
customElements.define('formulario-generico', FormularioGenerico);
