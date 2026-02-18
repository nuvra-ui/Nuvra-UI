import { BrowserRouter, Route, Routes } from "react-router";
import HomeView from "./views/HomeView";
import ImprintView from "./views/ImprintView";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/imprint" element={<ImprintView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
