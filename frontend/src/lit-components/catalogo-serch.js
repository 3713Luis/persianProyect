import { LitElement, html, css } from 'lit';
export class CatalogoSerch extends LitElement {

    static get styles() {
        return css`
        :host {
            
        }
        .contenedor {
            background: orange;
            margin-left: 5%;
            margin-right: 5%;
        }
        .titulo: {
            color: red;
        }
    `
    }
    /**
      * Object describing property-related metadata used by Polymer features
      */
    static get properties() {
        return {
            titulo: { type: Object },
            additional: {
                type: String
            },
        };
    }

    /**
      * Instance of the element is created/upgraded. Useful for initializing
      * state, set up event listeners, create shadow dom.
      * @constructor
      */
    constructor() {
        super();
        this.titulo = {
            titulo: {
                texto: "Chompiras me la pelas",
                class: 'lol',
                hCustom: "",
                style: [
                    "color: black;",
                    "background: red;",
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
                            "background: yellow;",
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
                            "background: red;",
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
                            class: 'text-area',
                            text: [
                                'Background: red;',
                                "color: green;",
                            ]
                        }
                    },
                    {
                        text: '¿Cula no se que blalala?',
                        styleText: {
                            class: 'text-area',
                            text: [
                                'Background: blue;',
                                "color: brown;",
                            ]
                        }
                    }
                ],
                styleContainer: {
                    container: {
                        class: 'container-area',
                        containerTextArea: [
                            'Background: red;',
                            "color: yellow;",
                        ]
                    }
                },
            },
            formElement: {
                classContaine: '',
                container: [
                    'Background: red;',
                    "color: yellow;",
                ],
                classSubcontainer: '',
                subcontainer: [
                    'Background: red;',
                    "color: yellow;",
                ],
                item: [
                    {
                        label: {
                            style: [
                                'Background: red;',
                                "color: yellow;",
                            ],
                            class: '',
                            value: 'Ingresa tu nombre'
                        },
                        input: {
                            style: [
                                'Background: red;',
                                "color: blue;",
                            ],
                            class: '',
                            inputId: 'input-1',
                            name: 'inputName',
                        },
                        
                    },
                    {
                        label: {
                            style: [
                                'Background: red;',
                                "color: yellow;",
                            ],
                            class: '',
                            value: 'Ingresa tu nombre'
                        },
                        input: {
                            style: [
                                'Background: red;',
                                "color: black;",
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

        <formulario-generico .objElements="${this.titulo}"></formulario-generico>
        <!-- <div class="contenedor">
                            Chompis me la pelas
                        </div> -->
       
        `;
    }
}
customElements.define('catalogo-serch', CatalogoSerch);
