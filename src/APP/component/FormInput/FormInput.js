import React from 'react'
import './FormInput..css'
import TextField from '@mui/material/TextField';

const FormInput = (props)=>{

    const {id,onChange, label, ...inputProps}=props
    return(
        <div className='textFieldContainer' >
            <TextField  id="text-field" label={label} variant="outlined" {...inputProps}  onChange={onChange}/>
        </div>
    );
}

export default FormInput;