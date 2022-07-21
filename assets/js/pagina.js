if (screen.width < 800){
    var cambio = document.getElementById('navmenu');
    var listo = cambio.getAttribute("aria-orientation");
    var newValue = "horizontal";
    cambio.setAttribute("aria-orientation", newValue);
    }
else
    {
    console.log("Grande")
    }
        
