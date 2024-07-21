import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from './CartSlice';
import { formatCost } from './utils'; 
import './ProductCard.css';

const ProductCard = ({ plant }) => {
  const [addedToCart, setAddedToCart] = React.useState(false);
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const isInCart = cartItems.some(item => item.name === plant.name);
    setAddedToCart(isInCart);
  }, [cartItems, plant.name]);

  const handleAddToCart = () => {
    dispatch(addItem(plant));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeItem(plant.name));
  };

  return (
    <div className="product-card">
      <img src={plant.image} alt={plant.name} className="plant-image" />
      <h3 className="plant-name">{plant.name}</h3>
      <p className="plant-description">{plant.description}</p>
      <p className="plant-cost">${formatCost(plant.cost)}</p>
      <button
  onClick={handleAddToCart}
  disabled={addedToCart}
  className="add-to-cart-button"
>
  {addedToCart ? "Added to Cart" : "Add to Cart"}
</button>

    </div>
  );
};

export default ProductCard;
