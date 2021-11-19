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

    render() {
        return html`

        <formulario-generico>

        </formulario-generico>
        <div class="contenedor">
            Chompis me la pelas
        </div>
       
        `;
    }
}
customElements.define('catalogo-serch', CatalogoSerch);
