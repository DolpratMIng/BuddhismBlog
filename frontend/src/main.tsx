import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import About from "./components/About";
import LayoutWithNavFooter from "./layout/LayoutWithNavFooter";
import LayoutWithoutNavFooter from "./layout/LayoutWithoutNavFooter";

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<LayoutWithNavFooter />}>
        <Route path="/" element={<App />} />
      </Route>
      <Route element={<LayoutWithoutNavFooter />}>
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
