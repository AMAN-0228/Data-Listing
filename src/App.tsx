import {Routes,Route} from 'react-router-dom'
import './App.css'
import DetailForm from './components/DetailForm'
import PrivateRoutes from './components/PrivateRoutes'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route path='/' element={<Home/>} />
        </Route>        
        <Route path='/formdetail' element={<DetailForm/>}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
