import { LitElement, html, css } from 'lit';
export class HeaderMain extends LitElement {

    static get styles() {
        return css`
         :host {
                display: block;
            }
        .header-navigation {
              display: block;
            }
        .nav-item {
          display: inline;
          margin-left: 20px;
        }
        `;
    }

    /**
      * Declared properties and their corresponding attributes
      */
    static get properties() {
        return {
            userType: { type: String}
        };
    }

    /**
      * Instance of the element is created/upgraded. Useful for initializing
      * state, set up event listeners, create shadow dom.
      * @constructor
      */
    constructor() {
        super();
        this.userType = 'admin';
    }

    render() {
        return html`
        <div class="header-navigation">
          <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
              <a class="nav-link active" href="#" @click="${() => {this.viewSelect('inicio')}}">Inicio</a>
            </li>
            ${this.optionsUser()}
          </ul>
      </div>
        `;
    }

    optionsUser(){
      console.log(this.userType);
      if (this.userType === 'admin') {
         return this.renderAdmin();
      } else if (this.userType === 'costumer'){
        return this.renderCostumer();
      }
    };

    renderAdmin() {
      return html`
      <li class="nav-item">
              <a class="nav-link active" href="#" @click="${() => {this.viewSelect('banner')}}">Configurar Banner</a>
        </li>
        <li class="nav-item">
              <a class="nav-link active" href="#" @click="${() => {this.viewSelect('banner')}}">Configurar Catalogo</a>
        </li>
      `;
    }

    renderCostumer() {
      return html`
      <li class="nav-item">
              <a class="nav-link" href="#" @click="${() => {this.viewSelect('catalogo')}}">Buscar</a>
            </li>
      `;
    }

    viewSelect(param) {
      let event = new CustomEvent('show-views', {
        detail: param,
        bubbles: true,
        composed: true
    });
    this.dispatchEvent(event);
    }
}
customElements.define('header-main', HeaderMain);