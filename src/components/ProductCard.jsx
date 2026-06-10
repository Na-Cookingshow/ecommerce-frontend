export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg hover:scale-105 transition duration-200 bg-white">
      
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover"
      />

      <div className="p-3">
        <h2 className="font-semibold text-lg">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>

        <button className="mt-3 w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700">
          Add to Cart
        </button>
      </div>

    </div>
  );
}