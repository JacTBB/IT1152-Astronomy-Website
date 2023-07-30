//Cart Toggle Functions
var cartopen = false;
function cart() {
    if (window.innerWidth < 500) {
        gocheckoutpage()
        return
    }

    if (menuopen == true) {
        menu()
    }
    if (cartopen == false) {
        cartopen = true;
        document.getElementById('cartdisplay').style.display = "block";
    }
    else {
        cartopen = false;
        document.getElementById('cartdisplay').style.display = "none";
    }
}
//Cart Go To Checkout Page
function gocheckoutpage() {
    window.location.href = 'checkout.html'
}