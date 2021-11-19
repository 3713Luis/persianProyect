import { LitElement, html, css } from 'lit';

export class BannerDm extends LitElement {


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
        this.urlImage = "x"
        console.log("dm");
        this.getData();
        console.log(this.arrayData);
    }

    render() {
        return html`
        <banner-main .arrayData="${this.arrayData}"></banner-main>
        `;
    }

    async getData() {
        const data = await getImagesPromise();
        this.arrayData = data.data;
        this.objectData = data.data[0].base64_img;
        console.log(this.arrayData);

    }
}
customElements.define('banner-dm', BannerDm);