import { LitElement, html, css } from 'lit';

export class FormBanner extends LitElement {

    static get styles() {
        return css`
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
                texto: "Chompiras me la pelas",
                class: 'lol',
                hCustom: "",
                style: [
                    "color: black;",
                    "font-size: 30px;"
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
                        ]
                    }

                },
            },
            textArea: {
                textArray: [
                    {
                        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
                        styleText: {
                            class: '',
                            text: [
                                // 'Background: red;',
                                // "color: green;",
                            ]
                        }
                    },
                    {
                        text: '¿Cula no se que blalala?',
                        styleText: {
                            class: 'text-area',
                            text: [
                                // 'Background: blue;',
                                // "color: brown;",
                            ]
                        }
                    }
                ],
                styleContainer: {
                    container: {
                        class: '',
                        containerTextArea: [
                            // 'Background: red;',
                            // "color: yellow;",
                        ]
                    }
                },
            },
            formElement: {
                classContaine: '',
                container: [
                    // 'Background: red;',
                    // "color: yellow;",
                ],
                classSubcontainer: '',
                subcontainer: [
                    // 'Background: red;',
                    // "color: yellow;",
                ],
                item: [
                    {
                        label: {
                            style: [
                                // 'Background: red;',
                                // "color: yellow;",
                            ],
                            class: '',
                            value: 'Ingresa tu nombre'
                        },
                        input: {
                            style: [
                                // 'Background: red;',
                                // "color: blue;",
                            ],
                            class: '',
                            inputId: 'input-1',
                            name: 'inputName',
                        },
                        
                    },
                    {
                        label: {
                            style: [
                                // 'Background: red;',
                                // "color: yellow;",
                            ],
                            class: '',
                            value: 'Ingresa tu nombre'
                        },
                        input: {
                            style: [
                                // 'Background: red;',
                                // "color: black;",
                            ],
                            class: '',
                            inputId: 'input-2',
                            name: 'inputName',
                        },
                    }
                ],
            }
        };
    }

    render() {
        return html`
            <formulario-generico .objElements="${this.dataForm}"></formulario-generico>

           <div>
               <input @change="${(e) => {this.onChange(e)}}" name="image" type="file"/>
               <button @click="${this.sendHandler}" type="button">Upload</button>
           </div>
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