import { LitElement, html, css } from 'lit';

export class SliderGenerico extends LitElement {

    static get styles() {
        return css `
        :host {
          
            min-height: 100vh;
            background: red;
        }

        .container-slider {
            width: 100%;
            max-width: 100%;
            margin: auto;
            position: relative;
            overflow: hidden;
        }
        .slider {
            display: flex;
            width: 100%;
            height: 600px;
        }

        .slider-section {
            width: 100%;
        }

        .slider-img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .slider-arrow {
            position: absolute;
            width: 40px;
            height: 40px;
            background: rgba(255,255,255, 0.5);
            top: 50%;
            transform: translateY(-50%);
            font-size: 30px;
            font-weight: bold;
            text-align: center;
            border-radius: 50%;
            cursor: pointer;
        }

        .slider-arrow:hover {
            background: #FFFF;
        }

        .slider--left {
            left: 10px;
        }
        
        .slider--right {
            right: 10px;    
        }
        `
    }

    /**
     * Declared properties and their corresponding attributes
     */
    static get properties() {
            return {
                items: {
                    type: Array
                },
                url: {
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
        this.items = [];
        this.url = '';
    }

    render() {
        return html `
        ${this.renderSlider()}
        `;
    }

    renderImage(element) {
        return html `
                 <div class="slider-section" data-id="1">
                   <!-- <div class="slider-text">
                    <h2 class="subtitle">Hola mi nombre es Luis</h2>
                        <p class="Slider-review">
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500
                        </p>
                   </div> -->
                        <img src="${this.getUrlImage(element)}" class="slider-img" alt="">
                </div>
        `
    }

    renderSlider() {
            let countImage = 0;

            return html `
        <div class="container-slider">
            <div class="slider" id="slider">
                ${this.items.map(element => {
                    countImage++;
                   this.shadowRoot.querySelector('#slider').style.width = `${countImage * 100}%`;
                    return this.renderImage(element)
                })}

            </div>
                <img class="slider-arrow slider--left" id="before" @click="${() => {
                    this.changeMain('left');     
                }}" src="src/image/icosn/arrow-left.svg" alt="">
                <img class="slider-arrow slider--right" id="after" @click="${() => {
                    this.changeMain('rigth');
                }}" src="src/image/icosn/arrow-right.svg" alt="">

        </div>
        `;
    }

    getUrlImage(element) {
        return this.url + element.urlName;
    }

    changeMain(param) {
        const slider = this.shadowRoot.querySelector('#slider');
        let sliderSection = this.shadowRoot.querySelectorAll('.slider-section');
        let sliderSectionLast = sliderSection[sliderSection.length - 1];

        if (param === 'left') {
            slider.insertAdjacentElement('afterbegin', sliderSectionLast)

        } else if (param === 'rigth') {
            let sliderSectionFirst = this.shadowRoot.querySelectorAll('.slider-section')[0];
            slider.insertAdjacentElement('beforeend', sliderSectionFirst)
        }
    }
}
customElements.define('slider-generico', SliderGenerico);