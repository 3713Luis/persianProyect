import { LitElement, html, css } from 'lit';

export class BannerMain extends LitElement {

    static get styles() {
        return css`
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
        console.log('banner-main');
        this.arrayData = [];
        this.commonUrl = 'http://localhost:3050/';
        this.objectData = {};
    }

    

    render() {
        return html`
    <!-- <div  class="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    ¿Qué es Lorem Ipsum?
    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum
                    </div>
                    <div class="carousel-item">
                    ¿Qué es Lorem Ipsum?
    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum                </div>
                    <div class="carousel-item">
                    ¿Qué es Lorem Ipsum?
    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum                </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div> -->
    <div class="carousel">
    </div>
    <button @click="${this.changeImage}" class="carousel-control-prev" type="button"
        data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button @click="${this.convertImage}" class="carousel-control-prev" type="button">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Convirtiendo</span>
    </button>
    ${this.objectData.view === true ? this.arrayData.map(element => {
    return html`
    <img class="img" src="${this.getUrlImage(element)}">`
    }) : html `<p>No hay nada que mostrar por el momento</p>`}
    `;}

    changeImage() {
        console.log("cambiando imagen");
    }

    getUrlImage(element) {
        debugger;
        return this.commonUrl + element.urlName;
    }
}
customElements.define('banner-main', BannerMain);
