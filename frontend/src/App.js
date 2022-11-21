import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import RoutePage from "./pages/route-page/RoutePage";
import RoutePageVideo from "./pages/route-page-video/RoutePageVideo";
import Register from "./components/register/register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Layout />} />
          <Route path="/routed" element={<RoutePage />} />
          <Route path="/route-video" element={<RoutePageVideo />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
