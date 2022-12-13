import { Typography,Box, TextField, Checkbox, Button } from "@mui/material"
import React, { useState } from "react"
const label={inputProps:{'aria-label':'Checkbox demo'}};

const SignUpForm=()=>{


    const[userData,setUserData]=useState({
        name:"",
        email:"",
        password:"",
        confirmpassword:""
    })
    const handleChange=({target:{name,value}})=>{
        let updatedDAta={...userData}
        updatedDAta[name]=value
        setUserData(updatedDAta)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(userData.password===userData.confirmpassword){
            alert("Success")
        }
        else{
            alert("Invalid credentials")
        }

    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <Box sx={{width:"100%",maxWidth:500,background:"white",padding:10,borderRadius:10}}>
            <Typography variant="h1"  color="primary" gutterBottom>
                Register

            </Typography>
            <TextField
            required
            id="outline-required"
            label="Name"
          
            name="Name"
            type="name"
            sx={{margin:1}}
            onChange={handleChange}
            />
            <TextField
            required
            id="outline-required"
            label="Email"
            name="email"
            tye="email"
        
            sx={{margin:1}}
            onChange={handleChange}
            />
            <TextField
            required
            id="outline-required"
            label="password"
            name="password"
            type="password"
          
            sx={{margin:1}}
            onChange={handleChange}
            />
            <TextField
            required
            id="outline-required"
            label="confirmpassword"
            name="confirmpassword"
            type="password"
          
            sx={{margin:1}}
            onChange={handleChange}
            />
            <Box sx={{textAlign:"left",margin:1}}>
            <Checkbox {...label} defaultChecked/>
            <Typography variant="p" color="black">
                Accept Terms and conditions
            </Typography> </Box>
            <Button variant="contained" type="submit" sx={{margin:1}} fullWidth>Register</Button>
           
            </Box></form>
            
        </div>
    )
}
export default SignUpForm;