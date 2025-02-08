"use client";

import { useCart } from "@/context/CartContext";
import ProductCard from "../../components/ProductCard";

import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";



const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const CartPage = () => {
  
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();

  useEffect(() => {
    if (cart.length === 0) {
      addToCart({
        _id: "1",
        title: "Test Product",
        price: 10,
        imageUrl: "https://via.placeholder.com/150",
        quantity: 1,
      });
    }
  }, []);
  
  const totalPrice = cart.reduce((total, product) => total + product.price * (product.quantity ?? 1), 0);

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart })
    });
    const session = await response.json();
    if (stripe) {
      await stripe.redirectToCheckout({ sessionId: session.id });
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.map((product) => (
              <div key={product._id} className="border p-4 rounded-lg shadow-md">
                <ProductCard product={product} />
                <div className="flex justify-between items-center mt-2">
                  <button
                    onClick={() => removeFromCart(product._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                  <div className="flex items-center">
                    <button
                      onClick={() => updateQuantity(product._id, Math.max(1, (product.quantity || 1) - 1))}
                      className="bg-gray-300 px-2 py-1 rounded-md mx-2 hover:bg-gray-400 transition"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={product.quantity || 1}
                      min={1}
                      onChange={(e) => updateQuantity(product._id, Number(e.target.value))}
                      className="border px-2 py-1 w-16 text-center rounded-md"
                    />
                    <button
                      onClick={() => updateQuantity(product._id, (product.quantity || 1) + 1)}
                      className="bg-gray-300 px-2 py-1 rounded-md mx-2 hover:bg-gray-400 transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-right">
            <h2 className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</h2>
            <button
              onClick={handleCheckout}
              className="bg-blue-500 text-white px-6 py-2 rounded-md mt-4 hover:bg-blue-600 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
function addToCart(arg0: { _id: string; title: string; price: number; imageUrl: string; quantity: number; }) {
  throw new Error("Function not implemented.");
}

