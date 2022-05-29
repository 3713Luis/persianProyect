import { LitElement, html, css } from 'lit';

export class BannerMain extends LitElement {

    static get styles() {
            return css `
       :host {
        display: block;
    }
       .carousel {
           background: purple;
       }
       `
        }
        /**
         * Object describing property-related metadata used by Polymer features
         */
    static get properties() {
        return {
            arrayData: {
                type: Array
            },
            objectData: {
                type: Object
            },
            urlImage: {
                type: String
            },
            commonUrl: {
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
        this.arrayData = [];
        this.commonUrl = 'http://localhost:3050/';
        this.objectData = {};
    }



    render() {
        return html `
                <slider-generico .items="${this.arrayData}" .url="${this.commonUrl}"></slider-generico>
        `;
    }

    changeImage() {
        console.log("cambiando imagen");
    }

    getUrlImage(element) {
        return this.commonUrl + element.urlName;
    }
}
customElements.define('banner-main', BannerMain);