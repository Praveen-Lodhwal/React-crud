import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Read from './Components/CRUD/Read';
import Create from './Components/CRUD/Create';
import Update from './Components/CRUD/Update';
import Read_data from './Components/CRUD/Read_data';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Read/>}></Route>
          <Route path="/create" element={<Create/>}></Route>
          <Route path="/update/:id" element={<Update/>}></Route>
          <Route path="/read_data/:id" element={<Read_data/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
