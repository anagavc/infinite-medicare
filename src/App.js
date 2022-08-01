import Loader from "./components/Layouts/Loader";
import ScrollToTop from "./utilities/ScrollToTop";
import AdminLayout from "./admin/components/AdminLayout";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { lazy, Suspense } from "react";
import {
  Login,
  Register,
  About,
  ContactPage,
  BlogPage,
  BlogItem,
  UserDashboard,
  NotFound,
} from "./pages";
const Home = lazy(() => import("./pages/Home"));
function App() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Suspense fallback={<Loader />}>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogItem />} />
          <Route
            path="/account"
            element={
              currentUser === null ? (
                <Navigate to="/login" />
              ) : (
                <UserDashboard />
              )
            }
          />
          {currentUser?.isAdmin && (
            <Route path="/admin/*" element={<AdminLayout />} />
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
    </Suspense>
  );
}

export default App;
