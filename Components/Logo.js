class Logo extends HTMLElement {
    constructor () {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `
            <img src="${this.getAttribute('logo-src')}" alt="Company Logo">
            <style>
                img {
                    width: 100%;
                }
            </style>
        `
    }
}

customElements.define('my-logo', Logo);