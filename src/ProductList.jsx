import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem.jsx';

const plantsByCategory = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', price: 15, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=400' },
      { name: 'Spider Plant', price: 12, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400' },
      { name: 'Peace Lily', price: 18, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400' },
      { name: 'Boston Fern', price: 14, image: 'https://images.unsplash.com/photo-1610397648930-477b8c7f0943?w=400' },
      { name: 'Rubber Plant', price: 20, image: 'https://images.unsplash.com/photo-1622897208950-4c8b02c61f76?w=400' },
      { name: 'Areca Palm', price: 22, image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=400' },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      { name: 'Lavender', price: 10, image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?w=400' },
      { name: 'Jasmine', price: 16, image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=400' },
      { name: 'Rosemary', price: 9, image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=400' },
      { name: 'Mint', price: 8, image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400' },
      { name: 'Basil', price: 8, image: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=400' },
      { name: 'Gardenia', price: 19, image: 'https://images.unsplash.com/photo-1591958911259-bee2173bdccc?w=400' },
    ],
  },
  {
    category: 'Succulents',
    plants: [
      { name: 'Echeveria', price: 11, image: 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=400' },
      { name: 'Aloe Vera', price: 13, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
      { name: 'Jade Plant', price: 12, image: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=400' },
      { name: 'Haworthia', price: 10, image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400' },
      { name: 'Zebra Cactus', price: 9, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400' },
      { name: 'Burro\u2019s Tail', price: 14, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
    ],
  },
];

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [addedItems, setAddedItems] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalItemsInCart = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((prev) => ({ ...prev, [plant.name]: true }));
  };

  if (showCart) {
    return <CartItem onContinueShopping={() => setShowCart(false)} />;
  }

  return (
    <div>
      <nav className="navbar">
        <span className="brand" onClick={onHomeClick}>🌿 Paradise Nursery</span>
        <div className="nav-links">
          <span onClick={onHomeClick}>Home</span>
          <span className="active">Plants</span>
          <span className="cart-link" onClick={() => setShowCart(true)}>
            🛒 Cart <span className="cart-count">{totalItemsInCart}</span>
          </span>
        </div>
      </nav>

      <div className="product-list">
        {plantsByCategory.map((section) => (
          <div key={section.category} className="category-section">
            <h2>{section.category}</h2>
            <div className="plants-grid">
              {section.plants.map((plant) => (
                <div key={plant.name} className="plant-card">
                  <img src={plant.image} alt={plant.name} className="plant-thumb" />
                  <h3>{plant.name}</h3>
                  <p className="plant-price">${plant.price}</p>
                  <button
                    className="add-to-cart-button"
                    disabled={!!addedItems[plant.name]}
                    onClick={() => handleAddToCart(plant)}
                  >
                    {addedItems[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
