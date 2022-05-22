import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Characters from './views/Characters'
import Character from './views/Character'

function App() {
  return (
    <>
      <Router>
        <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
          <div className='container'>
            <Link className='navbar-brand' to=''>Rick and Morty API</Link>
          </div>
        </nav>

        <div className='container p-5'>
          <Routes>
            <Route index path='/' element={<Characters />} />
            <Route path='character/:id' element={<Character/>} />
          </Routes>
          <div className='text-center py-5'><a className='text-decoration-none' href='https://github.com/rojaslabs/rick-and-morty-api'>github.com/rojaslabs/rick-and-morty-api</a></div>
        </div>
      </Router>
    </>
  )
}

export default App