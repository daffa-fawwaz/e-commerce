
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

btnSearch.addEventListener("click", function() {
    search.classList.toggle("translate-y-0")
})

 function closeSearch() {
    search.classList.add("-translate-y-full");
    search.classList.remove("translate-y-0")
}

const navbarHeight = document.getElementById("navbar-height")
const shop = document.getElementById("shop");
const story = document.getElementById("story");
const collab = document.getElementById("collaboration");

shop.addEventListener("mouseenter", function() {
  navbarHeight.classList.add("h-[380px]")
})

story.addEventListener("mouseenter", function() {
  navbarHeight.classList.remove("h-[380px]")
})

collab.addEventListener("mouseenter", function() {
  navbarHeight.classList.remove("h-[380px]")
})


navbarHeight.addEventListener("mouseleave", function() {
  navbarHeight.classList.remove("h-[380px]")
})


// container1.addEventListener("mouseleave", function() {
//   navbarHeight.classList.remove("h-[380px]")
// })

const checkout = document.getElementById("checkout");
const btnOpenCheckout = document.getElementById("btn-checkout");
const btnCloseCheckout = document.getElementById("close-checkout");
const layout = document.getElementById("layout");

btnOpenCheckout.addEventListener("click", function() {
    checkout.classList.add("translate-x-0");
    checkout.classList.remove("translate-x-full");
    layout.classList.remove("hidden")

      const addBtn = document.getElementById("add");
      const minBtn = document.getElementById("min");
      const order = document.getElementById("order1");
      const total = document.getElementById("total");
      const nomHarga = 408000
      const overTotal = document.getElementById("over-total");

      addBtn.addEventListener("click", function() {
        let hasil = parseInt(order.value);
        order.value = hasil + 1; 

        if (hasil >= 10) {
            overTotal.classList.remove("hidden")
        } 

        updateTotal()
      });

      minBtn.addEventListener("click", function() {
        let hasil = parseInt(order.value);
        if (hasil > 1) {
          order.value = hasil - 1;
          if (hasil > 10) {
            overTotal.classList.add("hidden") 
        }

          updateTotal()
        }
      });

      function updateTotal() {
        var hitungHasil = parseInt(order.value);
        var jumlahHasil = nomHarga * hitungHasil

        total.textContent = `IDR ${jumlahHasil.toLocaleString()}`
      }


})
btnCloseCheckout.addEventListener("click", function() {
    checkout.classList.add("translate-x-full");
    checkout.classList.remove("translate-x-0");
    layout.classList.add("hidden")
})










    






















