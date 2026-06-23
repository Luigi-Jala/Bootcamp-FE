class Role extends HTMLElement {
    constructor () {
        super();
        this.attachShadow({mode: 'open'});
    }

    static observedAttributes = ['role-color'];

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <div class="role">
                <h2> ${this.getAttribute('role-name')} </h2>

                <button onclick="removeComponent('main-card')">
                    Remove Role (Inside Role Component)
                </button>

                <button onclick="removeComponent('main-role')">
                    Remove Card (Inside Role Component)
                </button>
            </div>

            <style>
                .role {
                    font-size: 3rem;
                    background-color: ${this.getAttribute('role-color') || 'rgb(231, 15, 15)'};
                    margin: 0;
                    padding: 2rem;
                    font-weight: bold;
                    text-align: center;
                }
            </style>
        `
    }

    disconnectedCallback() {
        console.log('Role component has been disconnected from the DOM!');
    }
}

customElements.define('my-role', Role);