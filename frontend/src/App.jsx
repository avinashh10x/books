import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ShowBook from "./pages/showBook";
import CreateBook from "./pages/createBook";
import EditBook from "./pages/editBook";
import DeleteBook from "./pages/deleteBook";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
      </Routes>
    </>
  )
}

export default App
