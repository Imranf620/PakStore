import { lazy } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
const Dashboard = lazy(()=>import("./pages/Dashboard")) 
const AdminLayout = lazy(()=>import("./pages/Adminlayout")) 
const Customers = lazy(()=>import("./pages/Customers")) 
const Transactions = lazy(()=>import("./pages/Transactions")) 
const Products = lazy(()=>import("./pages/Products")) 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="customer" element={<Customers />} />
          <Route path="transaction" element={<Transactions />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
