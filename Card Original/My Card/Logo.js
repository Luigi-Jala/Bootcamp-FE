class Logo extends HTMLElement {
    constructor () {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <img src="${this.getAttribute('logo-src')}" alt="Company Logo">
            <style>
                img {
                    width: 100%;
                }
            </style>
        `;
    }
}

customElements.define('my-logo', Logo);