import { useContext } from "react";

import {ProductCardContainer, Img, ProductButton, Footer, Name, Price} from  "./product-card.styles.jsx";

import { CartContext } from "../../contexts/cart.context";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  }

  return (
    <ProductCardContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <ProductButton buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add To Cart
      </ProductButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
