//Initialise
reloadpurchases()

function reloadpurchases() {
    getproductdata()
    .then(() => {
        var total = 0

        const purchases = document.getElementById('purchases')
        while (purchases.hasChildNodes()) {
            purchases.removeChild(purchases.firstChild);
        }
        document.getElementById('purchasesempty').style.display = 'block'
        
        //ProductInfo
        var purchasesobj = JSON.parse(localStorage.getItem('purchases')) || {}
        for (const timestamp of Object.keys(purchasesobj)) {
            const array = purchasesobj[timestamp]

            for (const productdata of array) {
                console.log(productdata)
                //Product
                const div = document.createElement('tr')
                const imgbox = document.createElement('td')
                const img = document.createElement('img')
                const productname = document.createElement('td')
                const price = document.createElement('td')
                const date = document.createElement('td')

                div.classList = 'purchaseitem'
                imgbox.classList = 'imgbox'
                img.src = productdata['image']
                productname.classList = 'name'
                productname.innerHTML = `${productdata['name']}`
                price.classList = 'price'
                price.innerHTML = `$${Number(productdata['price']).toFixed(2)}`
                date.classList = 'date'
                date.innerHTML = `${Date(timestamp)}`

                if (window.innerWidth < 800) {
                    price.innerHTML = `Price: $${Number(productdata['price']).toFixed(2)}`
                    date.innerHTML = `Date: ${Date(timestamp)}`
                }

                div.appendChild(imgbox)
                imgbox.appendChild(img)
                div.appendChild(productname)
                div.appendChild(price)
                div.appendChild(date)
                
                purchases.appendChild(div)

                //Remove Cart Empty Message
                if (purchases.hasChildNodes()) {
                    const purchasesempty = document.getElementById('purchasesempty')
                    purchasesempty.style.display = 'none';
                }
            }
        }

        return
    })
    .catch(console.error)
}



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
    window.location.href = '#'
}