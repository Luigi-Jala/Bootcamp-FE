class Role extends HTMLElement {
    constructor () {
        super();
        this.attachShadow({mode: 'open'});
    }

    static observedAttributes = ['role-color'];

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <h2 class="role">
                ${this.getAttribute('role-name')}
            </h2>

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

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'role-color') {
            console.log(`Color changed from ${oldValue} to ${newValue}`);
            
            // Update with query:
            const roleElement = this.shadowRoot.querySelector('.role');
            if (roleElement) {
                roleElement.style.backgroundColor = newValue;
            }

            // Re-render component
            // this.connectedCallback();
        }
    }
}

customElements.define('my-role', Role);