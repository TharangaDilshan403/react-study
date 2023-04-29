import React,{useState} from 'react'
import './SimpleForm.css'
import FormInput from "../component/FormInput/FormInput";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function SimpleForm() {

    const [value,setValue] = useState({
        userName : '',
        email : '',
        date : '',
        password : '',
        confirmPassword : ''
    })


    const inputs = [
        {
            id : '1',
            type : 'text',
            placeholder : 'User Name',
            label : 'User Name'
        },
        {
            id : '2',
            type : 'email',
            placeholder : 'Email Address',
            label : 'Email Address'
        },
        {
            id : '3',
            type : 'date',
            placeholder : 'Birth Day',
            label : ''
        },
        {
            id : '4',
            type : 'password',
            placeholder : 'Password',
            label : 'Password'
        },
        {
            id : '5',
            type : 'password',
            placeholder : 'confirm Password',
            label : 'confirm Password',
        }
    ]

    const onChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
    }
    return (
        <body>
            <form>
                <Typography variant='h6' color={"purple"}>Registration</Typography>
                {inputs.map((input)=>(
                    <FormInput key={input.id} {...input} onChange={onChange}/>
                ))}

                <Button variant="contained">Contained</Button>
            </form>
        </body>
    )
}