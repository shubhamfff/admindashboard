import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import Dashboard from "./components/Dashboard";
import BillingTrends from "./BillingTrends";
import TotalRecieptTrends from "./TotalRecieptTrends";
import InsuranceBillingTrends from "./InsuranceBillingTrends";
import IpConcessionTrends from "./IpConcessionTrends";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="billing-trends" element={<BillingTrends />} />
          <Route path="total-receipt-trends" element={<TotalRecieptTrends />} />
          <Route
            path="insurance-billing-trends"
            element={<InsuranceBillingTrends />}
          />
          <Route path="ip-concession-trends" element={<IpConcessionTrends />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
