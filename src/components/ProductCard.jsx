export default function ProductCard({ product, onDelete, onEdit }) {
  return (
    <div className="bg-white shadow p-4 rounded">
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>

      <div className="flex gap-2 mt-3">
        <button
          onClick={() => onEdit(product)}
          className="bg-blue-500 text-white px-3 py-1"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(product.id)}
          className="bg-red-500 text-white px-3 py-1"
        >
          Delete
        </button>
      </div>
    </div>
  );
}