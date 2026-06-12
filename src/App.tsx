
import { Routes, Route } from "react-router-dom";

import Index from "./routes/index";
import About from "./routes/about";
import Contact from "./routes/contact";
import Services from "./routes/services";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
}
