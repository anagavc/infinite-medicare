import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Register,
  About,
  ContactPage,
  BlogPage,
  BlogItem,
} from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogItem />} />
      </Routes>
    </>
  );
}

export default App;
