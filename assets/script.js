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


// selectors for quantity up and down buttons
const quantityDown = document.querySelector('#quantity-down');
const quantityUp = document.querySelector('#quantity-up');


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





// add event listener to DECREASE quantity when quantityDown const connected to
// #quantity-down is clicked. But do not allow quantity to go below 0 with IF statement. 
quantityDown.addEventListener('click', function(e){
    if (quantity > 0) {
        quantity--
    }
    updateQuantity(`quantity: ${quantity}`)
})

// add event listener to INCREASE quantity. Same method as the one above
quantityUp.addEventListener('click', function(){
    quantity++
    updateQuantity(`quantity: ${quantity}`)
})

