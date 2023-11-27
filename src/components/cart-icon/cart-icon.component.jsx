import { useContext } from 'react';
import {CartIconContainer, ShoppingIconContainer, ItemCount } from './cart-icon.styles.jsx';

import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
        
    return (
        <CartIconContainer>
        <ShoppingIconContainer onClick={toggleIsCartOpen}/>
        <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;