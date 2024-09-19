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
const btnSearch = document.getElementById('btn-search')

btnSearch.addEventListener('click', function() {
    search.classList.toggle("translate-y-0")
})

 function closeSearch() {
    search.classList.add("-translate-y-full");
    search.classList.remove("translate-y-0")
}

const checkout = document.getElementById("checkout");
const btnOpenCheckout = document.getElementById("btn-checkout");
const btnCloseCheckout = document.getElementById("close-checkout");
const layout = document.getElementById("layout");

btnOpenCheckout.addEventListener("click", function() {
    checkout.classList.add("translate-x-0");
    checkout.classList.remove("translate-x-full");
    layout.classList.remove("hidden")

})
btnCloseCheckout.addEventListener("click", function() {
    checkout.classList.add("translate-x-full");
    checkout.classList.remove("translate-x-0");
    layout.classList.add("hidden")
})











