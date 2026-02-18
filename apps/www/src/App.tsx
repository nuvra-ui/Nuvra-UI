import { BrowserRouter, Route, Routes } from "react-router";
import HomeView from "./views/HomeView";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
