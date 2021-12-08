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
                },
                bannerSlider: {
                    type: Boolean
                },
                bannerForm: {
                    type: Boolean
                },
                showViewId: {
                    type: String
                },
                initShowViwes: {
                    type: Object
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
        this.initShowViwes = {};
        this.showViewId = '';
        this.bannerSlider = false;
        this.bannerForm = false;
        this.arrayData = [];
        this.objectData = {};
        this.urlImage = "x"
        this.getData();
    }


    render() {
            return html `
        ${this.showViewId === 'slider' || this.initShowViwes.slider === 'slider' ? html `
            <banner-main .arrayData="${this.arrayData}" .objectData="${this.objectData}" .urlImage="${this.urlImage}"></banner-main>
        `: ''}
        ${this.showViewId === 'form' ? html `
            <form-banner></form-banner>
        `: ''}
        
        `;
    }

    async getData() {
        const data = await getImagesPromise();
        if (data) {
            this.objectData = {view: true};
            this.arrayData = data.data;
        } else {
            this.objectData = {view:data};
        }
      
    }
}
customElements.define('banner-dm', BannerDm);