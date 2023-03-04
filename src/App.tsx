import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Order from "./components/Order";
import Error from "./components/Error";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Navbar></Navbar>
        </div>
        <div>
          <Routes>
            <Route path="/orders" element={<Order />} />
            <Route path="/setup" element={<Order />} />
            <Route path="/history" element={<Order />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
