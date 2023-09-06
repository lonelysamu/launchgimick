document.querySelector('body').addEventListener('click', (e) => {

    if(e.target.id == "transitionbutton"){
        document.querySelector(".oriframe").classList.add("d-none")
        document.querySelector(".altframe").classList.remove("d-none")
        document.querySelector(".altframe").classList.add("fadein4")
    }

})