export const addToCart = (id: string, name: string) => {
    const existingCart = localStorage.getItem('cart')
    let cartItems = existingCart ? JSON.parse(existingCart) : []

    const newItem = { _id: id, course: name }
    cartItems.push(newItem)

    localStorage.setItem('cart', JSON.stringify(cartItems))
}


export const removeFromCart = (id: string) => {
    const existingCart = localStorage.getItem('cart')
    let cartItems = existingCart ? JSON.parse(existingCart) : []

    cartItems = cartItems.filter((item: { _id: string }) => item._id !== id)

    localStorage.setItem('cart', JSON.stringify(cartItems))
}

export const isAddedToCart = ( id: string ) =>{
    const existingCart = localStorage.getItem('cart');
    let cartItems = existingCart ? JSON.parse(existingCart) : [];

    // Check if the item with the given id exists in the cart
    const itemExists = cartItems.find((item: { _id: string }) => item._id === id);

    console.log(id,"huhu",itemExists)
    return Boolean(itemExists)
}