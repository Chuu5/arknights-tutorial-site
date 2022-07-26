import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home/Home'
import Summon from './pages/summon/Summon'
import Tutorial from './pages/Tutorial/Tutorial'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route path='/' element={<Home />}/>
        <Route path='/tutorial' element={<Tutorial />} />
        <Route path='/summon' element={<Summon />}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
