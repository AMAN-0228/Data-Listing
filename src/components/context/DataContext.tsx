import {createContext, useEffect, useState, useContext} from 'react'
import { AllData, ChildrenType } from '../../types/Types';
import { useFromContext } from './FormContext';
// import reducer from '../reducer/DataReducer'


// const initialState:CompleteData = {
//     data : [],
//     is_Error : false,
//     is_Loading : false,
// }

const inital :AllData = {
    data : []
}

// export const DataContext = createContext<CompleteData>(initialState);
export const DataContext = createContext<AllData>(inital);

export const DataContextProvider = ({children}:ChildrenType)=>{
    const [content, setContent] = useState(inital);
    // const [state, dispatch] = useReducer(reducer, initialState);
    const {formDetails}=useFromContext()
    const fetchData = ()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(res=>setContent({data:[...res]}))
        // console.log(content)
    }
  
    useEffect(()=>{
        // getapi()
        console.log(formDetails)
        fetchData();
    },[formDetails])
    return (
        <DataContext.Provider value={content}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = ()=>{
    return useContext(DataContext)
}

