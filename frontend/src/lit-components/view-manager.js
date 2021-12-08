import { LitElement, html, css } from 'lit';

export class ViewManager extends LitElement {

    static get styles() {
        return css `
        :host {
            position: relative;
            width:100%;
            min-height: 100vh;
            background: #cfcced;
        }
        .banner {
        }.
        .catalogo {
            display: none;
        }
        .footer {
            bottom: 0;
            background: #495da5;
            width: 100%;
            height: 100px;
        }
        .contenBody {
            background: orange;
            padding: 10px;
            margin-bottom: 10px;
            min-height: 80vh;

        }
        `
    }

    /**
     * Declared properties and their corresponding attributes
     */
    static get properties() {
        return {
            showViewId: {
                type: String
            },
            initShowViwes: {
                type: Object
            },
            currentView: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this.showViewId = 'inicio';
        this.currentView = 'inicio';
        this.initShowViwes = {
            slider: 'slider',
            catalogo: 'catalogo',
        }
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('show-views', this.selectedView);
    }

    selectedView(event) {
        this.reset();
        this.showViewId = event.detail;
        if (this.showViewId != 'inicio') {
            if (this.currentView != 'inicio') {
                let flag = this.showMessage();
                if (flag === false) {
                    this.showViewId = this.currentView;
                }
            }
            this.changeView();
        } else if (this.showViewId === 'inicio') {
            let flag = this.showMessage();
            if (flag) {
                this.reset();
                this.currentView = 'inicio';
            } else {
                this.initShowViwes = {};
                this.showViewId = event.detail;
                this.showViewId = this.currentView;
                this.changeView();
            }
        }
    }



    showMessage() {
        return confirm('Seguro que desea salir?... Se borrara tu progreso');
    }
    changeView() {
        this.currentView = this.showViewId;
        this.initShowViwes = {};
    }

    reset() {
        this.initShowViwes = {
            slider: 'slider',
            catalogo: 'catalogo',
        };
    }

    render() {
        return html `
            <div class="header">
                <header-main .currentView="${this.currentView}"></header-main>
            </div>
         <div class="contenBody">
                <div class="banner">
                    <banner-dm  .initShowViwes="${this.initShowViwes}" .showViewId="${this.showViewId}"></banner-dm>
                </div>
                <div class="catalogo">
                    <catalogo-dm .initShowViwes="${this.initShowViwes}" .showViewId="${this.showViewId}"></catalogo-dm>
                </div>
         </div>   
           
            <div class="footer">
                footer  
            </div>
        `;
    }
}
customElements.define('view-manager', ViewManager);