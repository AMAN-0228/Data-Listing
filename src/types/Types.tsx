// type for common context 

export type ChildrenType = {
    children: React.ReactNode
}
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
export interface userData {
    userId : number
    id : number
    title : string
    body : string
}

export interface CompleteData {
    data : userData[],
    is_Error : boolean,
    is_Loading : boolean,
}

export enum DataActionType{
    "SET_DATA",
    "IS_ERROR",
    "IS_LOADING"
}

export interface SetAction{
    type : DataActionType.SET_DATA,
    payload : CompleteData[]
}

export interface ErrorAction{
    type : DataActionType.IS_ERROR,
}
export interface LoadAction{
    type : DataActionType.IS_LOADING,
}

export type DataAction = SetAction | ErrorAction | LoadAction
// export type formReducer )