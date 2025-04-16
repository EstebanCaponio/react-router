import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ChiSiamo from "./pages/ChiSiamo"
import ListaDeiPost from "./pages/ListaDeiPost"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/chi-siamo' element={<ChiSiamo />} />
        <Route path='/lista-dei-post' element={<ListaDeiPost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
