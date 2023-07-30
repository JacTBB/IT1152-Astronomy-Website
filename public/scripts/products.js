//Initialise
getproductdata()
.then(() => {
    for (productdata of allproductdata) {
        const div = document.createElement('div')
        const imgbox = document.createElement('div')
        const img = document.createElement('img')
        const productname = document.createElement('h4')
        const desc = document.createElement('p')
        const price = document.createElement('p')
        const button = document.createElement('button')

        div.classList = 'productcard'
        div.id = productdata['name']
        productname.innerHTML = productdata['name']
        productname.id = `URL${productdata['name']}`
        productname.addEventListener('click', productpagefunction)
        imgbox.classList = 'imgbox'
        img.src = productdata['image']
        img.alt = productdata['name']
        img.id = `URL${productdata['name']}`
        img.addEventListener('click', productpagefunction)
        desc.innerHTML = productdata['brief']
        desc.id = `URL${productdata['name']}`
        desc.addEventListener('click', productpagefunction)
        price.classList = 'price'
        price.innerHTML = `$${productdata['price']} `
        button.classList = 'productbutton'
        button.innerHTML = 'Add To Cart'
        button.id = productdata['name']
        button.type = 'button'
        button.addEventListener('click', addtocartfunction)

        div.appendChild(imgbox)
        imgbox.appendChild(img)
        div.appendChild(productname)
        div.appendChild(desc)
        div.appendChild(price)
        price.appendChild(button)

        if (productdata['showorder']) {
            div.style.order = productdata['showorder']
        }
        else {
            div.style.order = 100
        }

        if (productdata['featured']) {
            imgbox.classList = 'featuredimgbox'
            div.classList.add('featuredproductcard')
            div.style.gridArea = `${productdata['showorder']} / 1 / span 2 / span 2`
            div.style.maxheight = '450px'
        }

        document.getElementById('products').appendChild(div)
    }
    
    document.getElementById('productcardplaceholder').remove()

    return
})
.catch(console.error)

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

//Functions
function productpagefunction(x) {
    if (!x.target) return
    const productdata = allproductdata.find((y) => `URL${y['name']}` == x.target.id)

    window.open(`products/${productdata['name']}.html`, '_self')
}

function addtocartfunction(x) {
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

    reloadcart()
}