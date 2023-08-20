import { ReactNode, createContext, useState, useContext } from "react";
import { typeFormContext, FormDetail,  } from "../../types/Types";

export type FormProviderProps = {
    children: ReactNode
}

const initialState:FormDetail = {
    name: '',
    email: '',
    phoneNo: 9876543210,
    isFiled: false,
}
export const FormContext = createContext<typeFormContext >({formDetails:initialState})


export const FormContextProvider = ({children}: FormProviderProps) => {
    // const [state, dispatch] = useReducer(reducer, initialState);
    const [formDetails, setFormDetails] = useState(initialState);
    const handleSubmit = (event:  React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log("on submit",formDetails)
        localStorage.setItem("Form Details", JSON.stringify(formDetails))
        setFormDetails(prev => { return {...prev,isFiled: true } })
        console.log("submit")
        console.log(formDetails.isFiled)
    }
    const updateValue = (event:React.ChangeEvent<HTMLInputElement>) => {
        const name: string = event.target.name
        const value: string | number = event.target.value
        setFormDetails(prev => { return {...prev,[name]: value } })
        console.log(formDetails)
    }
    return <FormContext.Provider value={{formDetails, handleSubmit ,updateValue}}>
        {children}
    </FormContext.Provider>
}

export const useFromContext = ()=>{
     return useContext(FormContext)
}

