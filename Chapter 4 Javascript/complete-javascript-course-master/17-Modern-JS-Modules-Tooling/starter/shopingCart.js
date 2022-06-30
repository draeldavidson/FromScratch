//EXPORTING MODULE

console.log('Executed Module');

const shippingCost = 10;
const cart = [];

function addToCart(product,quantity) {
    cart.push({product,quantity});
    console.log(`${quantity}x ${product} added to cart`);
}
const totalPrice = 289

export {addToCart, totalPrice};