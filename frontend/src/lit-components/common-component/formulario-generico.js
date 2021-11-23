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
        .image {
            width: 40%;
            height: auto;
            display: block;
            margin: auto;
        }
        .container-img {
            background: #ccc;
            width: 100%;
        }
        .container-image {
            width: 100%;
            height: auto;
        }
        .input-select {
            background: #8BFEEA;
            display: block;
            margin:auto;
        }
        #file-upload-button {
            background: red;
            display: block;
            margin:auto;
        }
        `
    }

    render() {
        return html`
        ${this.objElements.titulo ? this.buildTitle() : html`<p>no hay valores de titulo</p>`}
        ${this.buidPreViewImage()}
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
                return html`<p style="${this.getAdditionalStyles(this.objElements.titulo.style)}" class="${this.objElements.titulo.class}">${this.objElements.titulo.texto}</p>`
        }
    }

    buidPreViewImage() {
        return html`
            <di class="container-image">
            <div class="container-img"><img class="image" id="image" src=""/></div>
            <input class="input-select" @change='${(e) => {this.loadImage(e)}}' type="file" name="image" accept="image/jpeg,image/jpg,image/png">
            </di>
        `;
    }

    loadImage(event) {
        let read_img = new FileReader();
        read_img.readAsDataURL(event.target.files[0]);
        let image = this.shadowRoot.querySelector('#image');
        read_img.onload = () => {
            if (read_img.readyState == 2) {
                image.src = read_img.result;
            }
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
