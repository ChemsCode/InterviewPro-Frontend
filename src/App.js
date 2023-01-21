import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      {/* valid routes */}

      </Route>
      {/* invalid routes*/}
      <Route path="*" element={<Layout />} />
    </Routes>
  );
}

export default App;