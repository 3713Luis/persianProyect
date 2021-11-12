import { LitElement, html, css } from 'lit';

export class TemplateMain extends LitElement {

   static get styles() {
       return css`
       :host {
       }
       .header {
           background: red;
           height: 60px;
           margin-bottom: 2px;
       }
       .banner {
           background: green;
           height: 400px;
           margin-bottom: 2px;
       }
       .catalogo {
           background: yellow;
           height: 600px;
           margin-left: 5%;
           margin-right: 5%;
       }
       .footer {
           height: 300px;
           background: blue;
       }
       `
   }

    render() {
        return html`

        <div class="header">
           <header-main></header-main>
        </div>
        <div class="banner">
            <banner-main></banner-main>
        </div>
        <div class="catalogo">
            <catalogo-serch></catalogo-serch>
        </div>
        <div class="footer">
            footer
        </div>
        
        `;
    }
}
customElements.define('template-main', TemplateMain);