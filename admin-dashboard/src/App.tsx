import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Loader from "./components/Loader";
const Dashboard = lazy(() => import("./pages/Dashboard"));
const AdminLayout = lazy(() => import("./pages/AdminLayout"));
const Customers = lazy(() => import("./pages/Customers"));
const Transactions = lazy(() => import("./pages/Transactions"));
const Products = lazy(() => import("./pages/Products"));
const BarChart = lazy(() => import("./pages/BarChart.jsx"));
const PieChart = lazy(() => import("./pages/PieChart.jsx"));
const LineChart = lazy(() => import("./pages/LineChart.jsx"));
const StopWatch = lazy(() => import("./pages/StopWatch.jsx"));
const Coupon = lazy(() => import("./pages/Coupon.jsx"));
const Toss = lazy(() => import("./pages/Toss.jsx"));


const App:React.FC =()=> {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="customers" element={<Customers />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="products" element={<Products />} />
            <Route path="chart/bar" element={<BarChart />} />
            <Route path="chart/pie" element={<PieChart />} />
            <Route path="chart/line" element={<LineChart />} />
            <Route path="app/stopwatch" element={<StopWatch />} />
            <Route path="app/coupon" element={<Coupon />} />
            <Route path="app/toss" element={<Toss />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
