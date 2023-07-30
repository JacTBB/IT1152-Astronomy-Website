//Initialise
reloadcheckoutcart()

function reloadcheckoutcart() {
    getproductdata()
    .then(() => {
        var total = 0

        const products = document.getElementById('checkout')
        while (products.hasChildNodes()) {
            products.removeChild(products.firstChild);
        }
        document.getElementById('checkoutempty').style.display = 'block'
        document.getElementById('checkoutitemtotal').style.display = 'none'
        document.getElementById('payment').style.display = 'none'
        
        //ProductInfo
        var Cart = JSON.parse(localStorage.getItem('cart')) || {}
        for (const key of Object.keys(Cart)) {
            const value = Cart[key]

            productdata = allproductdata.find((y) => y['name'] == key)

            if (productdata) {
                //Product
                const div = document.createElement('div')
                const imgbox = document.createElement('div')
                const img = document.createElement('img')
                const productname = document.createElement('p')
                const unitprice = document.createElement('p')
                const price = document.createElement('p')
                const quantity = document.createElement('div')
                const qtyAdd = document.createElement('button')
                const qtyMin = document.createElement('button')
                const qty = document.createElement('p')

                div.classList = 'checkoutitem'
                imgbox.classList = 'imgbox'
                img.src = productdata['image']
                productname.classList = 'name'
                productname.innerHTML = `${productdata['name']}`
                unitprice.classList = 'unitprice'
                unitprice.innerHTML = `$${productdata['price']}`
                price.classList = 'price'
                price.innerHTML = `$${(value * productdata['price']).toFixed(2)}`
                quantity.classList = 'quantity'
                qty.innerHTML = `${value}`

                qtyAdd.id = productdata['name']
                qtyAdd.addEventListener('click', additemtocartfunction)
                qtyMin.id = productdata['name']
                qtyMin.addEventListener('click', removeitemfromcartfunction)

                if (window.innerWidth < 800) {
                    unitprice.innerHTML = `Unit Price: $${productdata['price']}`
                    price.innerHTML = `Price: $${(value * productdata['price']).toFixed(2)}`
                }

                div.appendChild(imgbox)
                imgbox.appendChild(img)
                div.appendChild(productname)
                div.appendChild(unitprice)
                div.appendChild(quantity)
                quantity.appendChild(qtyMin)
                quantity.appendChild(qty)
                quantity.appendChild(qtyAdd)
                div.appendChild(price)
                
                products.appendChild(div)

                //Remove Cart Empty Message
                if (products.hasChildNodes()) {
                    const cartempty = document.getElementById('checkoutempty')
                    cartempty.style.display = 'none';
                }

                total += productdata['price'] * value

                //Total
                const carttotal = document.getElementById('checkoutitemtotal')
                carttotal.style.display = 'block'
                carttotal.innerHTML = `Total: $${total.toFixed(2)}`

                //Show Payment Form
                document.getElementById('payment').style.display = 'flex'
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

//Functions
function additemtocartfunction(x) {
    console.log(x)
    if (!x.target) return
    const productdata = allproductdata.find((y) => y['name'] == x.target.id)

    var Cart = JSON.parse(localStorage.getItem('cart')) || {}
    var quantity = Cart[productdata['name']] || 0
    var notifmessage = 'You have added an item to cart!'
    if (Object.keys(Cart).length < 10 || typeof(Object.keys(Cart).length) == 'undefined') {
        if (quantity < 10) {
            if (!quantity || quantity == 0) {
                quantity = 1
            }
            else {
                if (productdata['multi'] == true) {
                    quantity += 1
                }
                else {
                    notifmessage = 'You can only add 1 of this item!'
                }
            }
            Cart[productdata['name']] = quantity
            localStorage.setItem('cart', JSON.stringify(Cart))
    
            console.log(productdata['name'], "/", quantity, "/", `Multi: ${productdata['multi']}`)
        }
        else {
            notifmessage = 'Max quantity allowed for this item!'
        }
    }
    else {
        notifmessage = 'Your shopping cart is full!'
    }

    reloadcart()
    reloadcheckoutcart()
    setTimeout(() => { LoadContent() }, 10)

    const notificationbar = document.getElementById('notificationbar')
    const notification = document.createElement('div')
    notification.classList.add('notification')
    const p = document.createElement('p')
    p.innerHTML = notifmessage
    notification.appendChild(p)
    notificationbar.appendChild(notification)

    notification.style.display = 'block'
    notification.classList.add('notificationinanim')
    setTimeout(() => {
        notification.classList.remove('notificationinanim')
    }, 500)
    setTimeout(() => {
        notification.classList.add('notificationoutanim')
    }, 500+1000)
    setTimeout(() => {
        notification.classList.remove('notificationoutanim')
        notification.style.display = 'none'
        notification.remove()
    }, 500+1000+500)
}

function removeitemfromcartfunction(x) {
    if (!x.target) return
    const productdata = allproductdata.find((y) => y['name'] == x.target.id)

    var Cart = JSON.parse(localStorage.getItem('cart')) || {}
    var quantity = Cart[productdata['name']] || 0
    quantity -= 1
    Cart[productdata['name']] = quantity
    if (quantity == 0) {
        delete Cart[productdata['name']]
    }
    localStorage.setItem('cart', JSON.stringify(Cart))

    console.log(productdata['name'], "/", quantity)

    reloadcart()
    reloadcheckoutcart()
    setTimeout(() => { LoadContent() }, 10)

    var notifmessage = 'You have removed an item from cart!'
    const notificationbar = document.getElementById('notificationbar')
    const notification = document.createElement('div')
    notification.classList.add('notification')
    const p = document.createElement('p')
    p.innerHTML = notifmessage
    notification.appendChild(p)
    notificationbar.appendChild(notification)

    notification.style.display = 'block'
    notification.classList.add('notificationinanim')
    setTimeout(() => {
        notification.classList.remove('notificationinanim')
    }, 500)
    setTimeout(() => {
        notification.classList.add('notificationoutanim')
    }, 500+1000)
    setTimeout(() => {
        notification.classList.remove('notificationoutanim')
        notification.style.display = 'none'
        notification.remove()
    }, 500+1000+500)
}