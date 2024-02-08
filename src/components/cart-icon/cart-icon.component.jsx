import { useSelector, useDispatch } from "react-redux";

import {CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

import { selectCartIsOpen, selectCartCount } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';


const CartIcon = () => {
    const dispatch = useDispatch();

    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectCartIsOpen);
    
    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
        
    return (
        <CartIconContainer>
        <ShoppingIcon onClick={toggleIsCartOpen}/>
        <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;