import { useCart } from "@/context/CartContext";

interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  description?: string;
  quantity: number; // Ensure quantity is always a number
}

const  ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart({ ...product, quantity: product.quantity ?? 1 })}>
        Add to Cart
      </button>
    </div>
  );
};
export default ProductCard;
