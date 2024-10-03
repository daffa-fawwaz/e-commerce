
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

shop.addEventListener("mouseenter", function() {
  navbarHeight.classList.add("h-[380px]")
})

navbarHeight.addEventListener("mouseleave", function() {
  navbarHeight.classList.remove("h-[380px]")
})

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



const btnSize = document.querySelectorAll(".btn-size");
const boxSize = document.querySelectorAll(".box-size");
const checkbox = document.querySelectorAll(".peer")


for (let i = 0; i < checkbox.length; i++) {
    for (let x = 0; x < btnSize.length; x++) {
      for (let y = 0; y < boxSize.length; y++) {
        checkbox[i].addEventListener("change", function() {       
 if (checkbox[i].checked) {

        btnSize[x].classList.add("text-white")
        btnSize[x].innerHTML = 'Purchase Now';
        btnSize[x].classList.remove("text-slate-600")
  
        boxSize[y].classList.add("bg-black");
        boxSize[y].classList.remove("bg-gray-200");
    } else {
        btnSize[x].classList.remove("text-white")
        btnSize[x].innerHTML = 'Choose Size';
        btnSize[x].classList.add("text-slate-600")
        boxSize[y].classList.remove("bg-black");
        boxSize[y].classList.add("bg-gray-200");
    }
    })
        
    }
} 
}

    const openPopup = document.getElementById("open-popup");
    const closePopUp = document.getElementById("close-popup")
    const warnMessage = document.getElementById("warn-message")

    for (let i = 0; i < checkbox.length; i++) {
      for (let y = 0; y < boxSize.length; y++) {
        boxSize[y].addEventListener("click", function () {
          if(checkbox[i].checked) {
            getPopUp()
          } 
        });
      }
      }
      closePopUp.addEventListener("click", function() {
        openPopup.classList.add("opacity-0")
        openPopup.classList.remove("opacity-100");
        openPopup.classList.remove("z-50");
      })

      function getPopUp() {
            openPopup.classList.add("opacity-100");
            openPopup.classList.add("z-50");
            openPopup.classList.remove("opacity-0");
      }







    






















