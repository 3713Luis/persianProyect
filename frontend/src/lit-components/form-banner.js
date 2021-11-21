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
            }
        };
    }

    render() {
        return html`
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