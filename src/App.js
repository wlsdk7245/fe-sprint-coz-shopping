import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BookmarkPage from "./pages/BookmarkPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/products/list" element={<ProductPage />} />
      <Route path="/bookmark" element={<BookmarkPage />} />
    </Routes>
  );
}

export default App;
