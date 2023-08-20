import {createContext, useEffect, useReducer} from 'react'
import { ChildrenType, CompleteData, userData } from '../../types/Types';
import { useFromContext } from './FormContext';
import reducer from '../reducer/DataReducer'


const initialState:CompleteData = {
    data : [],
    is_Error : false,
    is_Loading : false,
}

export const DataContext = createContext<CompleteData>(initialState);

export const DataContextProvider = ({children}:ChildrenType)=>{
    
    const [state, dispatch] = useReducer(reducer, initialState);
    const {formDetails}=useFromContext()
    const fetchData = ()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(res=>console.log(res))
    }
    const getapi = async()=>{
        try {
            dispatch({type : })
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            const result =  res.json()
        } catch (error) {
            
        }
        
        console.log(res.json)
        console.log(result)
    }
    useEffect(()=>{
        // getapi()
        console.log(formDetails)
        fetchData();
    },[])
    return (
        <DataContext.Provider value={{state}}>
            {children}
        </DataContext.Provider>
    )
}



