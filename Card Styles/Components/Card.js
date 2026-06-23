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

                <slot name="test-1">
                    <span style="color: rgb(0, 0, 255);">Test-1 Default</span>
                </slot>

                <slot name="test-2">
                    <span style="color: rgb(0, 0, 255);">Test-2 Default</span>
                </slot>

                <slot name="test-3" style="color: rgb(0, 255, 0);">
                </slot>

                <slot name="test-4" style="color: rgb(0, 255, 0);">
                </slot>

            </main>

            <style>
                .card {
                    display: flex;
                    flex-direction: column;
                    border: 0.5rem solid #000000;
                    max-width: 36rem;
                    color: rgb(0,255,0);
                    font-family: monospace;
                }
            </style>
        `;
    }
}

customElements.define('my-card', Card);