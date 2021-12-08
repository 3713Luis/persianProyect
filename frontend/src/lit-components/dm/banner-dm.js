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
                },
                sendEvent: {
                    type: String
                },
                reload: {
                    type: Boolean
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
        console.log("Volvio a entrar");
        this.initShowViwes = {};
        this.showViewId = '';
        this.bannerSlider = false;
        this.bannerForm = false;
        this.arrayData = [];
        this.objectData = {};
        this.urlImage = "x"
        this.reload = false;
        this.getData();
    }

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('set-data-banner', this.handleResize);
        window.addEventListener('reload-data', () => {
            console.log('recargando');
            this.getData();
            this.reload = true;
        });

    }

    handleResize(event) {
        console.log(event.detail);
        let data = event.detail;
        if (data.img && data.select) {
            console.log("Mandando al Post");
            postImagesPromise(data.img);
        }
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