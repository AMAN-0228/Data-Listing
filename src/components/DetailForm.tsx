import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import  { useFromContext } from './context/FormContext';

const DetailForm = () => {
  
  const {updateValue,handleSubmit,formDetails} = useFromContext()
  const {name,email} = formDetails
  // const {updateValue,handleSubmit,formDetails} = useContext(FormContext)
  return (
    <Box
      sx={{
        width: 1000,
        height: 300,
        // backgroundColor: 'primary.dark',
      }}
    >
      <form onSubmit={handleSubmit}
       style={{display : "flex",flexDirection : "column",justifyContent:"center",alignItems: "center",}}>
        <label htmlFor="name" >Name:</label>
        <input type="text" name="name" id="name"value={name}  required onChange={updateValue}/>
        <label htmlFor="name">Email :</label>
        <input type="email" name="email" id="email" value={email} required onChange={updateValue}/>
        <label htmlFor="phoneNo">Phone No :</label>
        <input type="tel" name="phoneNo" id="phoneNo" pattern="[6-9]{1}[0-9]{9}" required onChange={updateValue}/>
        <Button type='submit' variant="contained" >Outlined</Button>
      </form>
    </Box>

  )
}

export default DetailForm
