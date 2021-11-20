// + and - buttons must respond to a click 
// + adds to cart, and - removes from cart
//cannot go minus zero..

// make remove button work
// add a second product to the cart
// display total price








// quantity starts at 1 when page loads
let quantity = 1


// so quantity CLASS will update when + or - buttons clicked
function updateQuantity(displayQuantity) {
    let quantity = document.querySelector('.total-quantity')
    quantity.innerHTML = displayQuantity
}





// event listeners:


// event listener to remove item from shopping cart

// identify variable as 'remove'
var removeCartItemButton = document.getElementsByClassName('remove')
// loop for our variable removeCartItemButton
for (var i = 0; i < removeCartItemButton.length; i++) {
    var button = removeCartItemButton[i]
    button.addEventListener('click', function(event){
        //console.log('clicked') 
        // to see if click works

        // event to remove 
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
    })
}






// selectors for quantity up/down and cart buttons
const quantityDown = document.querySelector('#quantity-down');
const quantityUp = document.querySelector('#quantity-up');
const checkOut = document.querySelector('.btn-checkout')
const returnToCart = document.querySelector('.btn-cart')


// add event listener to DECREASE quantity when quantityDown const connected to
// #quantity-down is clicked. But do not allow quantity to go below 0 with IF statement. 
quantityDown.addEventListener('click', function(e){
    if (quantity > 0) {
        quantity--
    }
    updateQuantity(`Quantity: ${quantity}`)
})

// add event listener to INCREASE quantity. Same method as the one above
quantityUp.addEventListener('click', function(e){
    quantity++
    updateQuantity(`Quantity: ${quantity}`)
})




// event listeners for checkout and return to cart buttons

checkOut.addEventListener('click', function (e){
    location.href = "checkout.html"
   
})


returnToCart.addEventListener('click', function (e){
    location.href = "index.html"
    console.log('click')
})


