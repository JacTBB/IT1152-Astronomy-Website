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
        var Cart = JSON.parse(localStorage.getItem('cart'))
        for (const key in Cart) {
            const value = Cart[key]

            productdata = allproductdata.find((y) => y['name'] == key)

            if (productdata) {
                //Product
                const div = document.createElement('div')
                const imgbox = document.createElement('div')
                const img = document.createElement('img')
                const productname = document.createElement('p')
                const price = document.createElement('p')

                div.classList = 'cartitem'
                imgbox.classList = 'cartitemimgbox'
                img.classList = 'cartitemimg'
                img.src = productdata['image']
                productname.classList = 'cartitemname'
                productname.innerHTML = `${productdata['name']}`
                price.classList = 'cartitemprice'
                price.innerHTML = `${value} x $${productdata['price']}`

                div.appendChild(imgbox)
                imgbox.appendChild(img)
                div.appendChild(productname)
                div.appendChild(price)
                
                products.appendChild(div)

                //Remove Cart Empty Message
                if (products.hasChildNodes()) {
                    const cartempty = document.getElementById('cartempty')
                    cartempty.style.display = 'none';
                }

                total += productdata['price'] * value

                //Total
                const carttotal = document.getElementById('cartitemtotal')
                carttotal.innerHTML = `Subtotal: $${total.toFixed(2)}`

                //Cart Amount
                const cartamt1 = document.getElementById('cart-amt1')
                const cartamt2 = document.getElementById('cart-amt2')
                const CartLength = Object.values(Cart).reduce((a,c) => a+c)

                cartamt1.innerText = CartLength
                cartamt2.innerText = CartLength
            }
        }

        return
    })
    .catch(console.error)
}