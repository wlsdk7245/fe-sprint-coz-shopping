import { Route, Routes } from "react-router-dom";
import Main from "./app.feature/Main/Main";
import Product from "./app.feature/Product/Product";
import Bookmark from "./app.feature/Bookmark/Bookmark";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/products/list" element={<Product />} />
      <Route path="/bookmark" element={<Bookmark />} />
    </Routes>
  );
}

export default App;
