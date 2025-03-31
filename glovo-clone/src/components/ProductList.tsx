"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  inStock: boolean;
};

type ProductListProps = {
  products: Product[];
  categoryName: string;
};

export default function ProductList({ products, categoryName }: ProductListProps) {
  const router = useRouter();
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isOrderComplete, setIsOrderComplete] = useState(false);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem(`${categoryName.replace(/\s+/g, '-').toLowerCase()}-cart`);
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse saved cart:", e);
        localStorage.removeItem(`${categoryName.replace(/\s+/g, '-').toLowerCase()}-cart`);
      }
    }
  }, [categoryName]);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(
      `${categoryName.replace(/\s+/g, '-').toLowerCase()}-cart`,
      JSON.stringify(cart)
    );
  }, [cart, categoryName]);

  const addToCart = (productId: string) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + 1,
    }));
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[productId] && newCart[productId] > 0) {
        newCart[productId] -= 1;
        if (newCart[productId] === 0) {
          delete newCart[productId];
        }
      }
      return newCart;
    });
  };

  const clearCart = () => {
    setCart({});
  };

  const getCartCount = (productId: string) => {
    return cart[productId] || 0;
  };

  const getTotalCartItems = () => {
    return Object.values(cart).reduce((total, count) => total + count, 0);
  };

  const getTotalPrice = () => {
    return products.reduce((total, product) => {
      const quantity = cart[product.id] || 0;
      return total + (product.price * quantity);
    }, 0);
  };

  const handleCheckout = () => {
    if (getTotalCartItems() === 0) return;

    setIsCheckingOut(true);

    // Simulate checkout process
    setTimeout(() => {
      setIsCheckingOut(false);
      setIsOrderComplete(true);

      // Reset after showing success message
      setTimeout(() => {
        setIsOrderComplete(false);
        clearCart();
        router.refresh();
      }, 3000);
    }, 2000);
  };

  const getCategoryColor = () => {
    switch(categoryName) {
      case 'Andrew Poultry Farm':
        return 'bg-farm-green-600 hover:bg-farm-green-700';
      case 'Kinunga Avocado Orchard':
        return 'bg-farm-green-600 hover:bg-farm-green-700';
      case 'JJ Sheep n Goat Farm':
        return 'bg-farm-olive-500 hover:bg-farm-olive-600';
      case 'Kilonito Kienyeji Vegetables and Fruits':
        return 'bg-farm-leaf-500 hover:bg-farm-leaf-600';
      case 'Lukenya Beef n Dairy':
        return 'bg-farm-olive-500 hover:bg-farm-olive-600';
      case 'Kite11 Maize Farm':
        return 'bg-farm-brown-500 hover:bg-farm-brown-600';
      default:
        return 'bg-farm-green-600 hover:bg-farm-green-700';
    }
  };

  const getCategoryLightColor = () => {
    switch(categoryName) {
      case 'Andrew Poultry Farm':
        return 'bg-farm-green-100 text-farm-green-800';
      case 'Kinunga Avocado Orchard':
        return 'bg-farm-green-100 text-farm-green-800';
      case 'JJ Sheep n Goat Farm':
        return 'bg-farm-olive-100 text-farm-olive-800';
      case 'Kilonito Kienyeji Vegetables and Fruits':
        return 'bg-farm-leaf-100 text-farm-leaf-700';
      case 'Lukenya Beef n Dairy':
        return 'bg-farm-olive-100 text-farm-olive-800';
      case 'Kite11 Maize Farm':
        return 'bg-farm-brown-100 text-farm-brown-800';
      default:
        return 'bg-farm-green-100 text-farm-green-800';
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6 sticky top-20 z-10 border border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Your Order</h2>
          <span className={`py-1 px-3 rounded-full text-sm font-medium ${getCategoryLightColor()}`}>
            {getTotalCartItems()} items
          </span>
        </div>

        {getTotalCartItems() > 0 ? (
          <div className="mt-4">
            <div className="mb-4 max-h-60 overflow-y-auto space-y-3 pr-2">
              {products.map(product => {
                const quantity = getCartCount(product.id);
                if (quantity === 0) return null;

                return (
                  <div key={`cart-${product.id}`} className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
                    <div className="flex items-center">
                      <span className="font-medium">{quantity} ×</span>
                      <span className="ml-2">{product.name}</span>
                    </div>
                    <span className="font-semibold text-farm-green-700">${(product.price * quantity).toFixed(2)}</span>
                  </div>
                );
              })}
            </div>

            <div className="border-t pt-4 flex justify-between font-semibold">
              <span>Total:</span>
              <span className="text-farm-green-700">${getTotalPrice().toFixed(2)}</span>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isCheckingOut || isOrderComplete}
              className={`w-full cart-button text-white font-medium py-3 px-4 rounded-lg mt-4 transition-all
                ${isCheckingOut || isOrderComplete
                  ? 'bg-gray-400 cursor-not-allowed'
                  : getCategoryColor()}`}
            >
              {isCheckingOut ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing Order...
                </span>
              ) : isOrderComplete ? (
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Order Complete!
                </span>
              ) : (
                'Proceed to Checkout'
              )}
            </button>

            {getTotalCartItems() > 0 && !isCheckingOut && !isOrderComplete && (
              <button
                onClick={clearCart}
                className="w-full text-gray-500 font-medium py-2 mt-2 hover:text-gray-700 transition-colors"
              >
                Clear Cart
              </button>
            )}
          </div>
        ) : (
          <div className="mt-4 flex flex-col items-center py-6">
            <svg className="w-16 h-16 text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <p className="text-gray-500 text-center">Your cart is empty</p>
            <p className="text-gray-400 text-sm text-center mt-1">Add items from the list below</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="product-card bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
            <div className="h-48 bg-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-6xl">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <span className="text-4xl">{getCategoryIcon(categoryName)}</span>
                )}
              </div>

              {getCartCount(product.id) > 0 && (
                <div className="absolute top-2 right-2 bg-farm-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {getCartCount(product.id)}
                </div>
              )}
            </div>

            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                <div className="text-farm-green-700 font-bold">${product.price.toFixed(2)} <span className="text-sm text-gray-500 font-normal">/ {product.unit}</span></div>
              </div>

              <p className="text-gray-600 text-sm mt-2 mb-4">{product.description}</p>

              {product.inStock ? (
                <div className="flex items-center justify-between">
                  <div className="text-sm text-farm-green-600 font-medium flex items-center">
                    <span className="w-2 h-2 bg-farm-green-500 rounded-full mr-1.5"></span>
                    In Stock
                  </div>

                  <div className="flex items-center space-x-2">
                    {getCartCount(product.id) > 0 && (
                      <>
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold w-8 h-8 rounded-full flex items-center justify-center"
                          aria-label="Remove from cart"
                        >
                          -
                        </button>
                        <span className="mx-2 font-medium">{getCartCount(product.id)}</span>
                      </>
                    )}

                    <button
                      onClick={() => addToCart(product.id)}
                      className={`cart-button text-white font-bold py-2 px-4 rounded-lg
                        ${getCartCount(product.id) > 0
                          ? 'w-8 h-8 flex items-center justify-center'
                          : 'flex items-center'}
                        ${getCategoryColor()}`}
                      aria-label={getCartCount(product.id) > 0 ? "Add more" : "Add to cart"}
                    >
                      {getCartCount(product.id) > 0 ? '+' : (
                        <>
                          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17"></path>
                          </svg>
                          Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div className="text-sm text-red-600 font-medium flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-1.5"></span>
                    Out of Stock
                  </div>
                  <button
                    disabled
                    className="bg-gray-300 text-gray-500 font-bold py-2 px-4 rounded-lg cursor-not-allowed"
                  >
                    Sold Out
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function getCategoryIcon(categoryName: string) {
  switch(categoryName) {
    case 'Andrew Poultry Farm':
      return '🐔';
    case 'Kinunga Avocado Orchard':
      return '🥑';
    case 'JJ Sheep n Goat Farm':
      return '🐐';
    case 'Kilonito Kienyeji Vegetables and Fruits':
      return '🫑';
    case 'Lukenya Beef n Dairy':
      return '🐄';
    case 'Kite11 Maize Farm':
      return '🌽';
    default:
      return '🌱';
  }
}
