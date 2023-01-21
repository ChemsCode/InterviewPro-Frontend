import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./components/LandingComp/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* valid routes */}
        <Route path="/" element={<LandingPage />} />
      </Route>
      {/* invalid routes*/}
      <Route path="*" element={<Layout />} />
    </Routes>
  );
}

export default App;
