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

                <slot name="hi-test">
                    <span style="color: rgb(0, 0, 255);">Hello Default</span>
                </slot>

                <slot name="bye-test">
                    <span style="color: rgb(0, 0, 255);">Bye Default</span>
                </slot>

                <button onclick="removeMainCard()">
                    Remove Card (Inside Card Component)
                </button>
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

    disconnectedCallback() {
        console.log('Card component has been disconnected from the DOM!');
    }

}

customElements.define('my-card', Card);