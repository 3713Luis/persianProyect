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
            },
            sendEvent: {
                type: String
            },
            reset: {
                type: Boolean
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
        this.sendEvent = '';
        this.reset = false;
    }

    static get styles() {
        return css `
        :host {
            
            display: block;
        }
        .container-image {
            width: 100%;
            height: auto;
        }
        .container-img {
            width: 100%;
        }
        .image {
            width: 40%;
            height: auto;
            display: block;
            margin: auto;
        }
        .input-select {
            display: block;
            margin:auto;
        }
        .container-area {
        }
        .text-area {
        }
        .containerTitle {
            background: red;
            margin: auto;
        }
        `
    }

    render() {
        return html `
            ${this.objElements.eventName ?  this.getEvent(): ''}
            ${this.objElements.titulo ? this.buildTitle() : ''}
            ${this.objElements.ImagePreview ? this.buidPreViewImage(): ''}
            ${this.objElements.select ? this.buildSelect(): ''}
            ${this.objElements.textArea ? this.buildLoremArea() : ''}
            ${this.objElements.formElement ? this.buildInput() : ''}
            ${this.objElements.button ? this.buildButon(): ''}       
        `;
    }

    getEvent() {
        this.sendEvent = this.objElements.eventName;
    }

    buildSelect() {
            return html `
        <div style="${this.objElements.select.styleContent}">
        <select id="selectId" style="${this.getAdditionalStyles(this.objElements.select.styles)}">
                ${this.objElements.select.selectData.map((element) => {
                  return  html `
                        <option value="${element.value}">${element.value}</option>
                    `
                })}
            </select>
        </div>
        `
    }

    buildTitle() {
        switch (this.objElements.titulo.hCustom) {
            case "1":
                return html`
                   <div style="${this.getAdditionalStyles(this.objElements.titulo.styleContent)}">
                   <h1 style="${this.getAdditionalStyles(this.objElements.titulo.style)}" class="${this.objElements.titulo.class}">${this.objElements.titulo.texto}</h1>
                   </div> 
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
        this.files = event.target.files[0];
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
           <div style="${this.getAdditionalStyles(this.objElements.button.styleContent)}">
                <button style="${this.getAdditionalStyles(this.objElements.button.style)}" type="button" @click="${this.getElements}">${this.objElements.button.text}</button>
           </div> 
        `
    }

    sendHandler() {
        if (this.files) {
            const formDta = new FormData();
            formDta.append('image', this.files);
            formDta.set('estado', this.shadowRoot.querySelector('#selectId').value);
            formDta.set('nombre_img', this.files.name);
            return formDta;
        }
    }

    getElements() {
        let valueElementsInput = this.inputVales.map(element => {
            let idName = this.shadowRoot.querySelector('#'+ element.id).value;
            return {name: element.name, value: idName}
        })

        let data = {
            img: this.sendHandler(),
            select: this.shadowRoot.querySelector('#selectId').value,
            input: valueElementsInput
        };
        let event = new CustomEvent(this.sendEvent, {
            detail: data,
            bubbles: true,
            composed: true
        });
        this.resetElements();
        this.dispatchEvent(event);
    }

    resetElements() {
        this.reset = true;
    }
    
}
customElements.define('formulario-generico', FormularioGenerico);