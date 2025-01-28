
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './component/header'
import All from './pages/All'
import Compulete from './pages/compulete'
import Ongoing from './pages/Ongoing'
import Alllist from './pages/Alllist'
import Compuletelist from './pages/compuletelist'
import Ongoinglist from './pages/Ongoinglist'

function App() {
 

  return<>
{/* <Header/> */}
<Routes>

  <Route path='/' element={<Alllist/>}/>
  <Route path='/comp' element={<Compuletelist/>}/>
  <Route path='/ongoing' element={<Ongoinglist/>}/>
</Routes>
  
  </>
    
     
}

export default App
