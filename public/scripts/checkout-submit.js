//Initialise
var boughtproducts = []
var successcounter = 0



//Functions
async function processcart() {
    await getproductdata()
    .then(() => {
        var total = 0

        //ProductInfo
        var Cart = JSON.parse(localStorage.getItem('cart')) || {}
        for (const key of Object.keys(Cart)) {
            const value = Cart[key]

            productdata = allproductdata.find((y) => y['name'] == key)
            
            if (productdata) {
                for (i=0; i<value; i++) {
                    boughtproducts.push(productdata)
                }
    
                console.log(key)
                delete Cart[key]
                localStorage.setItem('cart', JSON.stringify(Cart))
            }
        }

        return
    })
    .catch(console.error)
}



async function purchase() {
    await processcart()

    var Purchases = JSON.parse(localStorage.getItem('purchases')) || {}
    Purchases[Date.now()] = boughtproducts
    localStorage.setItem('purchases', JSON.stringify(Purchases))

    setTimeout(() => {
        const firstname = document.getElementById('form-first-name').value
        const lastname = document.getElementById('form-last-name').value
        const email = document.getElementById('form-email').value
        const cardnumber = document.getElementById('form-card').value
        const cardexpiry = document.getElementById('form-expiry').value
        const cardcvc = document.getElementById('form-cvc').value
        console.warn("Purchase attempt:", firstname, lastname, email, cardnumber, cardexpiry, cardcvc)


        console.log(boughtproducts)
        for (const product of boughtproducts) {
            successcounter += 1
            if (successcounter == boughtproducts.length) {
                console.log('All Products Bought.')
                window.location.href = 'checkout-success.html'
            }
        }

        if (boughtproducts.length == 0) {
            document.getElementById('purchaseoverlay').style.display = 'none'
            alert("Your shopping cart is empty!")
        }
    }, 1000)
}



function submitfunction() {
    document.getElementById('purchaseoverlay').style.display = 'block'

    purchase()
    
    return false
}