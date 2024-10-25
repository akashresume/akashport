let mainImgCollection = document.querySelectorAll(".popupui > a")
        mainImgCollection.forEach(function (mainImg) {
            mainImg.addEventListener("click", function () {
                console.log(this.parentNode)
                this.parentNode.querySelector(".mainpopup").style.transform = "scale(1)";
                this.parentNode.querySelector(".popup").style.transform = "translate(-50%, -50%) scale(1)"
            });
        });
        let btnCloseCollection = document.querySelectorAll(".btn-close")
        btnCloseCollection.forEach(function (btnClose) {
            btnClose.addEventListener("click", function () {
                this.parentNode.parentNode.parentNode.style.transform = "scale(0)"
                this.parentNode.parentNode.style.transform = "translate(-50%, -50%) scale(0)"
            });
        });       