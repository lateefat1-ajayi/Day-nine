import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ShoppingList from "./pages/ShoppingList"
import Header from "./components/Header"


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/list" element={ <ShoppingList/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
