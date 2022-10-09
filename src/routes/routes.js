import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from 'react-hot-toast';

import Header from "../components/Header";
import AdicionarExercicio from "../pages/Categorias";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AdicionarExercicio/>}/>
      </Routes>
      <Toaster/>
    </BrowserRouter>
  )
}
