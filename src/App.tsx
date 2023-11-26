import { BrowserRouter, Routes, Route } from 'react-router-dom';
import s from './App.module.scss';
import { Home, About } from './pages';
import { Header } from './uikit';
import { Button } from './uikit/DynamicButton';

function App() {


  return (
    <BrowserRouter>
      <div className={s.App}>
        <Header />
        
        <div className="pt-5 mt-5 container">
          <Button theme='primary'>Test 2</Button>
          <Button theme='secondary' size='md'>Test 3</Button>
        </div>

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
