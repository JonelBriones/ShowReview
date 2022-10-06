import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Edit from './pages/Edit'
import Create from './pages/Create'
import { GlobalProvider } from './context/GlobalState'
import Show from './pages/Show'
function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Create />} path="/create" />
            <Route element={<Edit />} path="/edit" />
            <Route element={<Show />} path="/show/:show_title" />
          </Routes>
        </BrowserRouter>
      </div>
    </GlobalProvider>
  )
}

export default App
