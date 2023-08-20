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