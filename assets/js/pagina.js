window.onload = function (event) {
    if (window.innerWidth < 1200) {
        $('#navmenu').addClass('d-none');
        $('#navmenu22').removeClass('d-none');
    }
    else {
        $('#navmenu').removeClass('d-none');
        $('#navmenu22').addClass('d-none');
    }
};
window.onresize = function (event) {
    if (window.innerWidth < 1200) {
        $('#navmenu').addClass('d-none');
        $('#navmenu22').removeClass('d-none');
    }
    else {
        $('#navmenu').removeClass('d-none');
        $('#navmenu22').addClass('d-none');
    }
};