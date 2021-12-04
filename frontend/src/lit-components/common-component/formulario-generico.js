import { LitElement, html, css } from 'lit';

export class FormularioGenerico extends LitElement {

    static get properties() {
        return {
            objElements: {
                type: Object
            },
            additional: {
                type: String
            },
            inputCount: {
                type: Number
            },
            method: {
                type: String
            },
            action: {
                type: String
            },
            inputVales: {
                type: Array
            }
        };
    }

    constructor() {
        super();
        this.objElements = {};
        this.additional = '';
        this.inputCount = 0;
        this.method = 'GET';
        this.action = '';
        this.inputVales = [];
    }

    static get styles() {
        return css`
        :host {
            
            display: block;
        }
        .container-image {
            width: 100%;
            height: auto;
        }
        .container-img {
            background: #ccc;
            width: 100%;
        }
        .image {
            width: 40%;
            height: auto;
            display: block;
            margin: auto;
        }
        .input-select {
            background: #8BFEEA;
            display: block;
            margin:auto;
        }
        .container-area {
            background: red;
        }
        .text-area {
            background: blue;
        }
        `
    }

    render() {
        return html`
            ${this.objElements.titulo ? this.buildTitle() : ''}
            ${this.objElements.ImagePreview ? this.buidPreViewImage(): ''}
            ${this.objElements.textArea ? this.buildLoremArea() : ''}
            ${this.objElements.formElement ? this.buildInput() : html`<p>no hay valores de input</p>`}
            ${this.buildButon()}       
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
            <div style="${this.getAdditionalStyles(this.objElements.ImagePreview.style.container.containerImage)}" class="${this.objElements.ImagePreview.style.container.class}">
                <div style="${this.getAdditionalStyles(this.objElements.ImagePreview.style.contenImage.containerImg)}" class="${this.objElements.ImagePreview.style.contenImage.class}">
                    <img style="${this.getAdditionalStyles(this.objElements.ImagePreview.style.image.imageStyle)}" class="${this.objElements.ImagePreview.style.image.class}" id="image"/>
                </div>
                <input style="${this.getAdditionalStyles(this.objElements.ImagePreview.style.inputSelect.inputStyle)}" class="${this.objElements.ImagePreview.style.inputSelect.class}" @change='${this.loadImage}' type="file" name="image">
            </div>
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
        this.additional = '';
        this.additional = elemento.map(element => {
            return this.additional = this.additional + element;
        });
        return this.additional;
    }

    buildLoremArea() {
        return html`
            <div style="${this.getAdditionalStyles(this.objElements.textArea.styleContainer.container.containerTextArea)}" class="${this.objElements.textArea.styleContainer.container.class}">
                ${this.objElements.textArea.textArray.map(element => {
                   return this.getArrayText(element)
                })}
            </div>
        `
    }

    getArrayText(element) {
        return html `<p style="${this.getAdditionalStyles(element.styleText.text)}" class="${element.styleText.class}">${element.text}</p>`
    }

    buildInput() {
        return html `
        <div style="${this.getAdditionalStyles(this.objElements.formElement.container)}" class="${this.objElements.formElement.classContaine}">
            <div style="${this.getAdditionalStyles(this.objElements.formElement.subcontainer)}" class="${this.objElements.formElement.classSubcontainer}">
              ${this.getStylesToArray()}
            </div>
        </div>
           
        `
    }

    getStylesToArray() {
        let templateArray = []
        this.objElements.formElement.item.map((element, index) => {
            this.inputCount = index;
            templateArray.push(
                html `
                    <label style="${this.getAdditionalStyles(element.label.style)}" class="${element.label.class}" for="${'input-' + index}">${element.label.value}</label>
                    <input style="${this.getAdditionalStyles(element.input.style)}" class="${element.input.class}" type="text" id="${element.input.inputId}" name="${'input-' + index}">
                `)
            this.inputVales.push({name: element.input.name, id:element.input.inputId});
          })
          return templateArray;
        
    }

    buildButon() {
        return html `
            <button type="button" @click="${this.getElements}">Enviar Formulario</button>
        `
    }

    getElements() {
        let valueElementsInput = this.inputVales.map(element => {
            let idName = this.shadowRoot.querySelector('#'+ element.id).value;
            return {name: element.name, value: idName}
        })
        let event = new CustomEvent('set-data-catalog', {
            detail: valueElementsInput,
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    }
    
}
customElements.define('formulario-generico', FormularioGenerico);
