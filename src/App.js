import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./components/LandingComp/LandingPage";
import Home from "./components/HomeComp/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* valid routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
      </Route>
      {/* invalid routes*/}
      <Route path="*" element={<Layout />} />
    </Routes>
  );
}

export default App;
