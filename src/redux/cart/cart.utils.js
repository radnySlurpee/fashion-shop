export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartITem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartITem) {
        return cartItems.map( 
            cartItem => cartItem.id === cartItemToAdd.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]

}