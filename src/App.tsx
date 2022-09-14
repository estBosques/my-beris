import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Content from "./utils/Content";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./utils/Layout";
import AddRecord from "./pages/AddRecord";
import Home from "./pages/Home";
import History from "./pages/History";
import NotFound from "./pages/NotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/addRecord" element={<AddRecord />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
