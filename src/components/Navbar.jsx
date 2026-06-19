import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg px-6 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <div className="text-xl font-bold tracking-wide text-blue-400">
        E-Commerce Admin
      </div>

      {/* Links */}
      <div className="flex gap-6 font-medium">
        <Link
          to="/"
          className="hover:text-blue-400 transition duration-200"
        >
          Home
        </Link>

        <Link
          to="/products"
          className="hover:text-blue-400 transition duration-200"
        >
          Products
        </Link>

        <Link
          to="/add-product"
          className="hover:text-blue-400 transition duration-200"
        >
          Add Product
        </Link>
      </div>

      {/* Auth Section */}
      <div>
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-lg shadow"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition shadow"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}