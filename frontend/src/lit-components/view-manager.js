import { LitElement, html, css } from 'lit';

export class ViewManager extends LitElement {

    static get styles() {
        return css`
        .banner {
        }.
        .catalogo {
            display: none;
        }
        `
    }

   /**
     * Declared properties and their corresponding attributes
     */
   static get properties() {
       return {
        bannerSlider: {
            type: Boolean
        },
        bannerForm: {
            type: Boolean
        },
        catalogoView: {
            type: Boolean
        }
       };
   }

   constructor() {
       super();
       this.bannerSlider = false;
       this.bannerForm = false;
       this.catalogoView = false;
   }

   connectedCallback() {
    super.connectedCallback();
    this.addEventListener('show-views', this.selectedView);
  }

  selectedView(event) {
      this.reset();
    if (event.detail === 'banner') {
        this.bannerForm = true;
    }else if(event.detail === 'catalogo') {
        this.catalogoView = true;
    }
  }

  reset() {
    this.bannerSlider = false;
    this.bannerForm = false;
    this.catalogoView = false;
  }

    render() {
        return html`
            <div class="header">
                <header-main></header-main>
            </div>
            <div class="banner">
                <banner-dm .bannerView="${this.bannerSlider}" .bannerForm="${this.bannerForm}"></banner-dm>
            </div>
            <div class="catalogo">
                <catalogo-dm .catalogView="${this.catalogoView}"></catalogo-dm>
            </div>
            <div class="footer">
                footer  </div>
        `;
    }
}
customElements.define('view-manager', ViewManager);