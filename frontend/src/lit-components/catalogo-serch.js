import { LitElement, html, css} from 'lit';
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
    `
}
/**
  * Object describing property-related metadata used by Polymer features
  */
 static get properties() {
    return {
        titulo: {type: Object}
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
            class: "lol",
            hCustom: "1",
        },
        size: {
            size: ''
        }
    };
    console.log(this.title);
}


    render() {
        return html`

        <formulario-generico .objElements="${this.titulo}"></formulario-generico>
        <div class="contenedor">
            Chompis me la pelas
        </div>
       
        `;
    }
}
customElements.define('catalogo-serch', CatalogoSerch);
