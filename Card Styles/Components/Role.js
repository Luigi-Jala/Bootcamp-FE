class Role extends HTMLElement {
    constructor () {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <h2 class="role">
                ${this.getAttribute('role-name')}
            </h2>

            <style>
                .role {
                    font-size: 3rem;
                    background-color: rgb(231, 15, 15);
                    margin: 0;
                    padding: 2rem;
                    font-weight: bold;
                    text-align: center;
                }
            </style>
        `
    }
}

customElements.define('my-role', Role);