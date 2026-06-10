import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Nike Shoes", price: 50, image: "https://via.placeholder.com/300" },
  { id: 2, name: "T-Shirt", price: 20, image: "https://via.placeholder.com/300" },
  { id: 3, name: "Bag", price: 35, image: "https://via.placeholder.com/300" },
  { id: 4, name: "Watch", price: 80, image: "https://via.placeholder.com/300" },
];

export default function Products() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}