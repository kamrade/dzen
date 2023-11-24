import { BrowserRouter, Routes, Route } from 'react-router-dom';
import s from './App.module.scss';
import { Home, About } from './pages';
import { Header } from './uikit';

function App() {
  return (
    <BrowserRouter>
      <div className={s.App}>
        <Header />
        <main>
          
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
          </Routes>
          
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
