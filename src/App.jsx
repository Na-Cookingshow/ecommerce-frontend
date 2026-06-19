import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
function App() {
  return (
    <Routes>

      {/* PUBLIC */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
  path="/users"
  element={
    <PrivateRoute>
      <Layout>
        <Users />
      </Layout>
    </PrivateRoute>
  }
/>

<Route
  path="/orders"
  element={
    <PrivateRoute>
      <Layout>
        <Orders />
      </Layout>
    </PrivateRoute>
  }
/>

      {/* PROTECTED LAYOUT */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </PrivateRoute>
        }
      />

      <Route
        path="/products"
        element={
          <PrivateRoute>
            <Layout>
              <Products />
            </Layout>
          </PrivateRoute>
        }
      />

      <Route
        path="/add-product"
        element={
          <PrivateRoute>
            <Layout>
              <AddProduct />
            </Layout>
          </PrivateRoute>
        }
      />

      <Route
        path="/edit-product/:id"
        element={
          <PrivateRoute>
            <Layout>
              <EditProduct />
            </Layout>
          </PrivateRoute>
        }
      />

      <Route path="*" element={<h1 className="p-6">404 Not Found</h1>} />

    </Routes>
  );
}

export default App;