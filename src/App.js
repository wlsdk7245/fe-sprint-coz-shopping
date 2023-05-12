import { Route, Routes } from "react-router-dom";
import Main from "./app.feature/Main/Main";
import Bookmark from "./app.feature/Bookmark/Bookmark";
import Product from "./app.feature/Product/Product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
