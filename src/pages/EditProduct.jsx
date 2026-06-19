import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState("");

  // FETCH PRODUCT
  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    setFetching(true);
    setError("");

    try {
      const res = await api.get(`/products/${id}`);
      const p = res.data.data;

      setName(p.name);
      setPrice(p.price);
      setStock(p.stock);
      setImage(p.image);
    } catch (error) {
      console.log(error);
      setError("Failed to load product");
    } finally {
      setFetching(false);
    }
  };

  // UPDATE PRODUCT
  const handleUpdate = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      await api.put(`/products/${id}`, {
        name,
        price,
        stock,
        image,
      });

      navigate("/products");
    } catch (error) {
      console.log(error);
      setError("Failed to update product");
    } finally {
      setLoading(false);
    }
  };

  // LOADING UI
  if (fetching) {
    return (
      <div className="p-6">
        Loading product...
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow rounded">

      <h1 className="text-xl font-bold mb-4">
        ✏️ Edit Product
      </h1>

      {/* ERROR */}
      {error && (
        <div className="bg-red-100 text-red-600 p-2 rounded mb-4 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleUpdate} className="space-y-4">

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2"
          placeholder="Name"
        />

        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border p-2"
          placeholder="Price"
        />

        <input
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="w-full border p-2"
          placeholder="Stock"
        />

        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full border p-2"
          placeholder="Image URL"
        />

        <button
          disabled={loading}
          className={`w-full py-2 rounded text-white ${
            loading ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {loading ? "Updating..." : "Update Product"}
        </button>

      </form>

    </div>
  );
}