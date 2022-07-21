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

$(document).ready(function () {
    $('.openBtn').on('click', function () {
        $('.modal-body').load('https://kakatorox.github.io/CV/index.html', function () {
            $('#myModal').modal({ show: true });
        });
    });
});