import { LitElement, html, css } from 'lit';
export class HeaderMain extends LitElement {

    static get styles() {
        return css `
         :host {
                display: block;
            }
        .header-navigation {
              padding-top: 20px;
              display: block;
              background: #a0a1e9;
              height: 50px;
            }
        .nav-item {
          display: inline;
          margin-left: 20px;
        }
        .disabled {
          cursor: not-allowed;
          pointer-events: none;
        }
        .contenUl {
          margin: 0;
        }
        `;
    }

    /**
     * Declared properties and their corresponding attributes
     */
    static get properties() {
        return {
            userType: { type: String },
            classIndicators: {
                type: Object
            },
            currentView: {
                type: String
            }
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
        this.classIndicator = {
            bannerLink: '',
            catalogoLink: '',
            inicio: 'disabled'
        }
        this.currentView = '';
    }

    render() {
        return html `
        <div class="header-navigation">
          <ul class="contenUl">
          ${this.disabledLinks()}
          <li class="nav-item">
              <a class="${this.classIndicator.inicio}" href="#" @click="${() => {this.viewSelect('inicio')}}">Inicio</a>
            </li>
            ${this.optionsUser()}
          </ul>
      </div>
        `;
    }

    optionsUser() {
        if (this.userType === 'admin') {
            return this.renderAdmin();
        } else if (this.userType === 'costumer') {
            return this.renderCostumer();
        }
    };

    renderAdmin() {
        return html `
      <li class="nav-item">
              <a id="bannerLink" class="${this.classIndicator.bannerLink}" href="#" @click="${() => {this.viewSelect('form')}}" >Configurar Banner</a>
        </li>
        <li class="nav-item">
              <a class="${this.classIndicator.catalogoLink}" href="#" @click="${() => {this.viewSelect('formCatalog')}}">Configurar Catalogo</a>
        </li>
      `;
    }

    disabledLinks() {
        this.resetLinks();
        if (this.currentView === 'form') {
            this.classIndicator = {
                bannerLink: 'disabled'
            }
        } else if (this.currentView === 'formCatalog') {
            this.classIndicator = {
                catalogoLink: 'disabled'
            }
        } else if (this.currentView === 'inicio') {
            this.resetLinks();
        }
    }

    resetLinks() {
        this.classIndicator.bannerLink = '';
        this.classIndicator.catalogoLink = '';
        this.classIndicator.inicio = 'disabled';
    }

    renderCostumer() {
        return html `
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