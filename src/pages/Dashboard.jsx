import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Dashboard() {
  const [stats, setStats] = useState({
    products: 0,
    users: 0,
    orders: 0,
    revenue: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await api.get("/dashboard");
      setStats(res.data);
    } catch (error) {
      console.log(error);

      setError("Failed to load dashboard data");

      // fallback demo data
      setStats({
        products: 12,
        users: 5,
        orders: 8,
        revenue: 250,
      });
    } finally {
      setLoading(false);
    }
  };

  const formatMoney = (value) => {
    return `$${Number(value).toFixed(2)}`;
  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        📊 Dashboard Overview
      </h1>

      {/* ERROR */}
      {error && (
        <div className="bg-red-100 text-red-600 p-2 rounded mb-4 text-sm">
          {error}
        </div>
      )}

      {/* LOADING */}
      {loading ? (
        <p className="text-gray-500">Loading dashboard...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* PRODUCTS */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <p className="text-gray-500">Products</p>
            <p className="text-3xl font-bold text-blue-600">
              {stats.products}
            </p>
          </div>

          {/* USERS */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <p className="text-gray-500">Users</p>
            <p className="text-3xl font-bold text-green-600">
              {stats.users}
            </p>
          </div>

          {/* ORDERS */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <p className="text-gray-500">Orders</p>
            <p className="text-3xl font-bold text-purple-600">
              {stats.orders}
            </p>
          </div>

          {/* REVENUE */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <p className="text-gray-500">Revenue</p>
            <p className="text-3xl font-bold text-red-600">
              {formatMoney(stats.revenue)}
            </p>
          </div>

        </div>
      )}

    </div>
  );
}