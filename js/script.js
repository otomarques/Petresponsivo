let menu = document.getElementById("links-navegacao");
let menu_barras = document.getElementById("menu_barras");

function mostrarMenu(){

    if (window.getComputedStyle(menu).display == "none") {
       /* menu.style.display = "initial"*/
        menu.style.display = "flex"
        menu_barras.setAttribute("aria-label","fechar menu")

        
    }else{
        menu.style.display = "none"
        menu_barras.setAttribute("aria-label","abrir menu")

        
    }


}
