// type for common context 
export type actionType = {
    type : string;
    payload?: object
}

export type ReducerHook = {
    state: FormDetail;
    dispatch : (type :string,payload?:object)=> void;
}
// type for form 
export type FormDetail = {
    name: string
    email: string
    phoneNo: number | null
    isFiled: boolean
}
export type typeFormContext = {
    formDetails: FormDetail;
    handleSubmit?: (event:  React.FormEvent<HTMLFormElement>) => void;
    updateValue ?: (event:React.ChangeEvent<HTMLInputElement>) => void;
}

// interface for user data 
 export interface



// export type formReducer )