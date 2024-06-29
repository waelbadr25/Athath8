function toggleNavbar() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const navList = document.getElementById('nav-list');
    const links = navList.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function () {
            const current = document.getElementsByClassName('active');
            if (current.length > 0) {
                current[0].classList.remove('active');
            }
            this.parentElement.classList.add('active');
        });
    }
});
