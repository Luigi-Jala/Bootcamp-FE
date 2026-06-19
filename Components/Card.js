class Card extends HTMLElement {
    constructor () {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <main class="card">
                <slot name="logo"></slot>
                <slot name="profile"></slot>
                <slot name="role"></slot>
            </main>

            <style>
                .card {
                    display: flex;
                    flex-direction: column;
                    border: 0.5rem solid #000000;
                    max-width: 36rem;
                    font-family: monospace;
                }
            </style>
        `;
    }

}

customElements.define('my-card', Card);