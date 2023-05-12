import { Route, Routes } from "react-router-dom";
import Main from "./app.feature/Main/Main";
import Product from "./app.feature/Product/Product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/products/list" element={<Product />} />
    </Routes>
  );
}

export default App;
