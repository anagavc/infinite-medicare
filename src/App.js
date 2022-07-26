import ScrollToTop from "./utilities/ScrollToTop";
import AdminLayout from "./admin/components/AdminLayout";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Register,
  About,
  ContactPage,
  BlogPage,
  BlogItem,
  UserDashboard,
} from "./pages";

const isAdmin = true;
function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogItem />} />
        <Route path="/account" element={<UserDashboard />} />
        {isAdmin && <Route path="/admin/*" element={<AdminLayout />} />}
      </Routes>
    </ScrollToTop>
  );
}

export default App;
