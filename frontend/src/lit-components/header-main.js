import { LitElement, html, css } from 'lit';
export class HeaderMain extends LitElement {

    static get styles() {
        return css`
         :host {
                display: block;
            }
        `;
    }

    /**
      * Declared properties and their corresponding attributes
      */
    static get properties() {
        return {
            import: { type: String}
        };
    }

    /**
      * Instance of the element is created/upgraded. Useful for initializing
      * state, set up event listeners, create shadow dom.
      * @constructor
      */
    constructor() {
        super();
         

    }
    render() {
        return html`
            <div class="card text-center">
        <div class="card-header">
          <ul class="nav nav-pills card-header-pills">
            <li class="nav-item">
              <a class="nav-link active" href="#">Categorias</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Promociones</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">perfil</a>
            </li>
          </ul>
        </div>
      </div>
        `;
    }
}
customElements.define('header-main', HeaderMain);