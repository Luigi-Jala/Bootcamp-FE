class Card extends HTMLElement {
    constructor () {
        super();
        
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `
            <main class="card">
                <my-logo 
                    logo-src="${this.getAttribute('logo-src')}"
                ></my-logo>

                <my-profile 
                    name="${this.getAttribute('name')}" 
                    profile-src="${this.getAttribute('profile-src')}"
                ></my-profile>

                <my-role 
                    role-name="${this.getAttribute('role')}"
                ></my-role>
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