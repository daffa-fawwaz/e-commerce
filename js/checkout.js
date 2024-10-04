      const btnSize = document.querySelectorAll(".btn-size");
      const boxSize = document.querySelectorAll(".box-size");
      const checkbox = document.querySelectorAll(".peer");

      for (let i = 0; i < checkbox.length; i++) {
        for (let x = 0; x < btnSize.length; x++) {
          for (let y = 0; y < boxSize.length; y++) {
            checkbox[i].addEventListener("change", function () {
              if (checkbox[i].checked) {
                btnSize[x].classList.add("text-white");
                btnSize[x].innerHTML = "Purchase Now";
                btnSize[x].classList.remove("text-slate-600");
                boxSize[y].classList.add("bg-black");
                boxSize[y].classList.remove("bg-gray-200");
              } else {
                btnSize[x].classList.remove("text-white");
                btnSize[x].innerHTML = "Choose Size";
                btnSize[x].classList.add("text-slate-600");
                boxSize[y].classList.remove("bg-black");
                boxSize[y].classList.add("bg-gray-200");
              }
            });
          }
        }
      }

      const openPopup = document.getElementById("open-popup");
      const closePopUp = document.getElementById("close-popup");
      const warnMessage = document.getElementById("warn-message");

      for (let i = 0; i < checkbox.length; i++) {
        for (let y = 0; y < boxSize.length; y++) {
          boxSize[y].addEventListener("click", function () {
            if (checkbox[i].checked) {
              getPopUp();
            }
          });
        }
      }
      closePopUp.addEventListener("click", function () {
        openPopup.classList.add("opacity-0");
        openPopup.classList.remove("opacity-100");
        openPopup.classList.remove("z-50");
      });

      function getPopUp() {
        openPopup.classList.add("opacity-100");
        openPopup.classList.add("z-50");
        openPopup.classList.remove("opacity-0");
      }