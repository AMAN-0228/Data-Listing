import { ReactNode, createContext, useState, useContext } from "react";
import { typeFormContext, FormDetail } from "../../types/Types";

export type FormProviderProps = {
    children: ReactNode
}

const initialState: FormDetail = {
    name: '',
    email: '',
    phoneNo: 9876543210,
    isFiled: false,
}
export const FormContext = createContext<typeFormContext >({formDetails:initialState})


export const FormContextProvider = ({children}: FormProviderProps) => {
    const [formDetails, setFormDetails] = useState<FormDetail>(initialState);
    const handleSubmit = (event:  React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        localStorage.setItem("Form Details", JSON.stringify(formDetails))
        setFormDetails(prev => { return {...prev,isFiled: true } })
        console.log("submit")
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

