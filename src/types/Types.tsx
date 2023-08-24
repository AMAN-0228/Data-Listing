// type for common context 

export type ChildrenType = {
    children: React.ReactNode
}
export type actionType = {
    type : string;
    payload?: object
}

// export default dispatchType={}

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
export type userData = {
    userId : number
    id : number
    title : string
    body : string
}
export type AllData = {
    data : userData[]
}
export type CompleteData ={
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


export type dispatchType = () => CompleteData

//   filter type
export interface singleFilterData {
    department: string,
        sub_departments: string[]
}

export type FullFilterData = singleFilterData[]
