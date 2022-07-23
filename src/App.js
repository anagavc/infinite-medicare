import Layout from "./components/Layouts/Layout";
import { Routes, Route } from "react-router-dom";
import { Home, Login } from "./pages";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
