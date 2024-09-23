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

const btnSize = document.getElementById("btn-size");
const boxSize = document.getElementById("box-size");
const checkbox = [ document.getElementById("check-1"),
                document.getElementById("check-2"),
                document.getElementById("check-3"),
                document.getElementById("check-4"),
                document.getElementById("check-5"),
                document.getElementById("check-6"),
                document.getElementById("check-7"),
                document.getElementById("check-8"),
];

for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener("change", function() {       
 if (checkbox[i].checked) {
    
        btnSize.classList.add("text-white")
        btnSize.innerHTML = 'Add to Bag';
        btnSize.classList.remove("text-slate-600")
        boxSize.classList.add("bg-black");
        boxSize.classList.remove("bg-gray-200");
    } else {
        btnSize.classList.remove("text-white")
        btnSize.innerHTML = 'Choose Size';
        btnSize.classList.add("text-slate-600")
        boxSize.classList.remove("bg-black");
        boxSize.classList.add("bg-gray-200");
    }
    })
} 

    






















