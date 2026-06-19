import { NavLink } from "react-router-dom";
import { FaHome, FaBox, FaPlus, FaUsers } from "react-icons/fa";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  const linkClass = ({ isActive }) =>
    isActive
      ? "flex items-center gap-3 bg-gray-800 text-blue-400 font-semibold p-2 rounded"
      : "flex items-center gap-3 hover:bg-gray-800 p-2 rounded transition";

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-gray-900 text-white p-5 hidden md:flex md:flex-col sticky top-0 h-screen">

        <h1 className="text-xl font-bold mb-8 text-blue-400">
          🛒 Admin Panel
        </h1>

        <nav className="flex flex-col gap-3 text-sm">

          <NavLink to="/" end className={linkClass}>
            <FaHome /> Dashboard
          </NavLink>

          <NavLink to="/products" className={linkClass}>
            <FaBox /> Products
          </NavLink>

          <NavLink to="/add-product" className={linkClass}>
            <FaPlus /> Add Product
          </NavLink>

          <NavLink to="/users" className={linkClass}>
            <FaUsers /> Users
          </NavLink>

        </nav>

        {/* FOOTER IN SIDEBAR */}
        <div className="mt-auto text-xs text-gray-400 pt-6">
          © {new Date().getFullYear()} Admin Panel
        </div>

      </aside>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col min-h-screen">

        {/* TOP NAVBAR */}
        <Navbar />

        {/* CONTENT */}
        <main className="p-6 flex-1 overflow-y-auto">
          {children}
        </main>

      </div>

    </div>
  );
}