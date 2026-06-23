class AuxComponent extends HTMLElement {
    constructor () {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <div class="aux-component">
                <button onclick="removeComponent('main-role')">
                    Remove Main Role (Aux Component)
                </button>
            </div>

            <style>
                .aux-component {
                    display: flex;
                    flex-direction: column;
                    border: 0.5rem solid #000000;
                    max-width: 36rem;
                    color: rgb(255, 255, 255);
                    font-family: monospace;
                }
            </style>
        `;
    }

}

customElements.define('aux-component', AuxComponent);