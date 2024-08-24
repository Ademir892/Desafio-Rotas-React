import { BrowserRouter, Route, Routes } from "react-router-dom";

import Produtos from "./routes/Home/Produtos";
import Sobre from "./routes/Sobre";
import Home from "./routes/Home";
import Homebody from "./routes/Home/Homebody";
import Computers from "./routes/Home/Produtos/Computers";
import NotFound from "./routes/Home/NotFound";
import Eletronics from "./routes/Home/Produtos/Eletronics";
import Books from "./routes/Home/Produtos/Books";




export default function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Homebody />} />
          <Route path="/home" element={<Homebody />} />
          <Route path="produtos/" element={<Produtos />} >
            <Route path="computers" element={<Computers />} />
            <Route path="eletronics" element={<Eletronics />} />
            <Route path="books" element={<Books />} />
          </Route>
          <Route path="/sobre" element={<Sobre />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        </Routes>
      </BrowserRouter>
  );
}

