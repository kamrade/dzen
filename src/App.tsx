import { BrowserRouter, Routes, Route } from 'react-router-dom';
import s from './App.module.scss';

import { About, Services, Showcase, Home, ButtonShowcase } from '~/pages';
import { Header } from '~/uikit';

function App() {
  
  return (
    <BrowserRouter>
      <div className={s.App}>
        <Header />

        <main className={s.Routes}>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/showcase' element={<Showcase/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/button-showcase' element={<ButtonShowcase/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
