import Layout from "./components/Layouts/Layout";
import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
