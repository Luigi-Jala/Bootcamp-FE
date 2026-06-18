class Role extends HTMLElement {
    constructor () {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `
            <h2 class="role">
                ${this.getAttribute('role-name')}
            </h2>
            <style>
                .role {
                    font-size: 3rem;
                    background-color: rgb(231, 15, 15);
                    color: white;
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