//Initialise
reloadcart()

//Print localStorage
console.log('localStorage:')
for (var i=0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    console.log(key, localStorage.getItem(key))
}
console.log('\n')

//Functions
function reloadcart() {
    getproductdata()
    .then(() => {
        var total = 0

        const products = document.getElementById('cartitemdisplay')
        while (products.hasChildNodes()) {
            products.removeChild(products.firstChild);
        }

        //ProductInfo
        for (var i=0; i < localStorage.length; i++) {
            const key = localStorage.key(i)
            const value = localStorage.getItem(key)
            if (isNaN(value)) {
                if (key != 'userdata' && key !='comments' && value.length < 10) {
                    setTimeout(() => {
                        localStorage.removeItem(key)
                    }, 1000)
                }
            }
            else {
                productdata = allproductdata.find((y) => y['name'] == key)

                if (productdata) {
                    //Product
                    const div = document.createElement('div')
                    const img = document.createElement('img')
                    const productname = document.createElement('p')
                    const price = document.createElement('p')

                    div.classList = 'cartitem'
                    img.classList = 'cartitemimg'
                    img.src = productdata['image']
                    productname.classList = 'cartitemname'
                    productname.innerHTML = `${productdata['name']}`
                    price.classList = 'cartitemprice'
                    price.innerHTML = `${value} x $${productdata['price']}`

                    div.appendChild(img)
                    div.appendChild(productname)
                    div.appendChild(price)
                    
                    products.appendChild(div)

                    //Remove Cart Empty Message
                    if (products.hasChildNodes()) {
                        const cartempty = document.getElementById('cartempty')
                        cartempty.style.display = 'none';
                    }

                    total += productdata['price'] * value

                    if (i == localStorage.length-1) {
                        //Total
                        const carttotal = document.getElementById('cartitemtotal')
                        carttotal.innerHTML = `Subtotal: $${total}`
                    }
                }
            }
        }

        return
    })
    .catch(console.error)
}