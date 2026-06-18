class Profile extends HTMLElement {
    constructor () {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `
            <figure class="profile">
                <img src="${this.getAttribute('profile-src')}" alt="Profile Picture">
                <figcaption class="name">${this.getAttribute('name')}</figcaption>
            </figure>
            <style>
                .profile {
                    background-color: rgb(47, 40, 40);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 0;
                }
                .name {
                    color: #ffffff;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 1.5rem;
                    font-size: 4rem;
                }
                img {
                    border-radius: 25%;
                    width: 80%;
                    margin: 2rem;
                }
            </style>
        `;
    }
}

customElements.define('my-profile', Profile);