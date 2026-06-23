function removeMainCard() {
    const card = document.getElementById("main-card");
    if (card) card.remove();
}

function removeSecondaryRoleComponent(){
    const role = document.getElementById("card-role");
    console.log(role)
    if (role) role.remove();
}

function changeRoleColor() {
    const role = document.getElementById("card-role");
    if (role) {
        const colors = ['rgb(231, 15, 15)', 'rgb(0, 0, 255)', 'rgb(255, 255, 0)', 'rgb(255, 0, 255)'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        role.setAttribute('role-color', randomColor);
    }
}