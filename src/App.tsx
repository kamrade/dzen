import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import s from './App.module.scss';
import { Home, About } from './pages';

function App() {
  return (
    <BrowserRouter>
      <header className="mb-5">
        <div className="container">
          <nav>
            <h1>Dzen</h1>
            <Link to="/">Home</Link>
            <NavLink to="/about">About</NavLink>
          </nav>
        </div>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
        <div className={s.App}>
          
          <div className="container">
            <hr />
            Dzen 1
          </div>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App
