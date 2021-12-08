import { LitElement, html, css } from 'lit';

export class FormBanner extends LitElement {

    static get styles() {
            return css `
        `
        }
        /**
         * Declared properties and their corresponding attributes
         */
    static get properties() {
        return {
            files: {
                type: Object
            },
            dataForm: {
                type: Object
            }
        };
    }
    constructor() {
        super();
        this.dataForm = {
            titulo: {
                texto: "Configuración de Banner",
                class: '',
                hCustom: "1",
                style: [

                ],
                styleContent: [
                    "text-align: center;",
                    "margin-bottom: 20px;"
                ]

            },
            ImagePreview: {
                style: {
                    container: {
                        class: 'container-image',
                        containerImage: [
                            "width: 100%;",
                            "height: 100%;",
                        ]
                    },
                    contenImage: {
                        class: 'container-img',
                        containerImg: [
                            "width: 100%;"
                        ]
                    },
                    image: {
                        class: 'image',
                        imageStyle: [
                            "width: 20%;",
                            "height: auto;",
                            "display: block;",
                            "margin: auto;",
                        ]
                    },
                    inputSelect: {
                        class: 'input-select',
                        inputStyle: [
                            "display: block;",
                            "margin:auto;",
                            "background: #1aa0b1;",
                            "margin-bottom: 30px;"
                        ]
                    }

                },
            },
            select: {
                selectData: [{
                        value: "Selecciona",
                        styles: [
                            "background:red;"
                        ]
                    }, {
                        value: "Activo",
                        styles: [
                            "background:red;"
                        ]
                    },
                    {
                        value: "Inactivo",
                        styles: [
                            "background:blue;"
                        ]
                    },
                ],
                styles: [
                    "margin-bottom: 20px"
                ],
                styleContent: [
                    "text-align: center;",
                ]
            },
            button: {
                styleContent: [
                    "text-align: center;"
                ],
                text: 'Enviar Formulario',
                style: [
                    "margin-bottom: 20px;"
                ]
            }

        };
    }

    render() {
        return html `
            <formulario-generico .objElements="${this.dataForm}"></formulario-generico>
        `;
    }

    onChange(e) {
        this.files = e.target.files[0];
    }

    sendHandler() {
        if (this.files) {
            const formDta = new FormData();
            formDta.append('image', this.files);
            formDta.set('estado', 'Activo');
            formDta.set('nombre_img', this.files.name);
            this.postData(formDta);
        }
    }

    postData(formData) {
        postImagesPromise(formData);
    }
}
customElements.define('form-banner', FormBanner);