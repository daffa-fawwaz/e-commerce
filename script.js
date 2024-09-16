// NAVBAR

const nav = document.getElementById('nav');
function openNavbar() {
    nav.classList.add("translate-x-0");
    nav.classList.remove("-translate-x-full")
}
function closeNavbar() {
    nav.classList.add("-translate-x-full");
    nav.classList.remove("translate-x-0")
}

const search = document.getElementById('search');

 function openSearch() {
    search.classList.add("translate-y-0");
    search.classList.remove("-translate-y-full")
}

 function closeSearch() {
    search.classList.add("-translate-y-full");
    search.classList.remove("translate-y-0")
}







