import {Outlet,Navigate} from 'react-router-dom'
import { useFromContext } from "./context/FormContext"

const PrivateRoutes = () => {
    const{formDetails} = useFromContext();
    const {isFiled} = formDetails
    
  return (
      isFiled?<Outlet/>:<Navigate to='/formdetail'/>
    
  )
}

export default PrivateRoutes

