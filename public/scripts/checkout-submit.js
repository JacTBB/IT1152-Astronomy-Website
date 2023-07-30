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
            // const Headers1 = {
            //   'Content-Type': 'application/json'
            // }
            // const Body1 = {
            //     'email': email,
            //     'product': product['name']
            // }
            // fetch('https://it103f-bp-website-api.up.railway.app/purchase', {method: 'POST', headers: Headers1, body: JSON.stringify(Body1)})
            // .then(response => response.json())
            // .then(data => {
            //   console.log(data)
            // })
            // .catch(console.error)

            // const Headers2 = {
            //     'Content-Type': 'application/json'
            // }
            // const Body2 = {
            //     'name': name,
            //     'email': email,
            //     'data': [
            //         {
            //             'link': product['link'],
            //             'name': product['name']
            //         }
            //     ]
            // }
            // fetch('https://hook.us1.make.com/nm6jbdirz9dxypn4qvet67po8gq1jgm4', {method: 'POST', headers: Headers2, body: JSON.stringify(Body2)})
            // .then(() => {
                successcounter += 1
                if (successcounter == boughtproducts.length) {
                    console.log('All Products Bought.')
                    window.location.href = 'checkout-success.html'
                }
            // })
            // .catch(console.error)
        }

        if (boughtproducts.length == 0) {
            document.getElementById('purchaseoverlay').style.display = 'none'
            alert("Your shopping cart is empty!")
        }
    }, 1000)
}



var purchased = false
function submitfunction() {
    document.getElementById('purchaseoverlay').style.display = 'block'

    setTimeout(async () => {
        if (await formvalidate() && purchased == false) {
            purchased = true
            purchase()
        }
        else {
            document.getElementById('purchaseoverlay').style.display = 'none'
            alert("Failed Validation!")
        }
    }, 1)
    return false
}



async function formvalidate() {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
    return true
}