import { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const CreateForm = ({ data, filterFlags }) => {
    const [expand, setExpand] = useState(false);
    const [flagsState, setFlagState] = useState(filterFlags)
    const handleChangeSub = (event) => {
        const name = event.target.name
        setFlagState(prev => { return { ...prev, sub_departments: { ...prev.sub_departments, [name]: !prev.sub_departments[name] } } })
    }
    const handleChangeDepart = () => {
        selectAll()
    }
    const checkAll = () => {
        const newlist = [...data.sub_departments]
        let newFlag: boolean = true;
        newlist.forEach(item => {
            if (flagsState.sub_departments[item] === false) {
                newFlag = false
                return
            }
        })
        setFlagState(prev => {
            return {
                ...prev,
                [data.department]: newFlag,
            }
        })
        // const newFlag = flagsState.sub_departments.find(false)
    }
    const selectAll = () => {
        const name = data.department
        const newFlag = !(flagsState[name])
        let newSub_departments = {};
        data.sub_departments.forEach(item => {
            newSub_departments = {
                ...newSub_departments,
                [item]: newFlag
            }
        })
        setFlagState(prev => {
            return {
                ...prev,
                [name]: newFlag,
                sub_departments: newSub_departments,
            }
        })
    }
    useEffect(() => {
        checkAll()
    }, [flagsState.sub_departments])
    return (
        <div style={{ textAlign: "left" }}>
            {!expand ? <AddIcon style={{ alignItems: "center" }} onClick={() => setExpand(true)} /> : <RemoveIcon onClick={() => setExpand(false)} />}
            <FormControlLabel
                sx={{ ml: 1 }}
                label={data.department}
                control={
                    <Checkbox
                        checked={flagsState[data.department]}
                        // indeterminate={checked[0] !== checked[1]}
                        onChange={handleChangeDepart}
                    />
                }
            />
            <Box sx={{ display: `${expand ? 'flex' : 'none'}`, flexDirection: 'column', ml: 7 }}>
                {data.sub_departments.map((item, index) => {
                    return (
                        <FormControlLabel
                            key={index}
                            label={item}
                            control={<Checkbox checked={flagsState.sub_departments[item]} name={item} onChange={handleChangeSub} />}
                        />

                    )
                })}
            </Box>
        </div>
    )
}

export default CreateForm
