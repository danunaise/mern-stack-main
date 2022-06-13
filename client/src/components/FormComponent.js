import { Grid, Typography, Button} from '@mui/material';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

import NavbarComponent from './NavbarComponent';

const FormComponent =()=>{

    const [state, setState] = useState({
        title:"",
        description:"",
        auther:"",
    })

    const {title, description, auther} = state;

    //setstate
    const handleState = name => (e)=>{
        //เข้าถึงข้อมูลที่ส่งมา เข้า state โดยใช้ event.target.value
        setState({...state, [name]: e.target.value})
    }

    const submitForm = (e)=>{
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/create`,{title, description, auther})
        .then(res=>{
            Swal.fire(
                'Successfully!',
                'คุณได้ทำการบันทึกข้อมูลเรียบร้อยแล้ว',
                'success'
            )
            setState({...state, title:"", description:"", auther:""});
        })
        .catch(err=>{
            Swal.fire(
                'Op! Error',
                err.response.data.message,
                'error'
            )
        })
    }
    return(
        <div>
            <NavbarComponent />
            <Container maxWidth="sm" sx={{ p:2}}>
            <form onSubmit={submitForm}>
                <Typography variant="h4" gutterBottom component="div">
                    Create a new post
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField                            
                            label="ชื่อบทความ" 
                            variant="outlined" 
                            value={title} 
                            onChange={handleState('title')}
                            fullWidth 
                            multiline
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField                          
                            label="คุณคิดอะไรอยู่?"
                            margin="normal"
                            minRows={4}
                            value={description}
                            onChange={handleState('description')}
                            multiline
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField                           
                            label="ชื่อผู้เขียน" 
                            variant="outlined" 
                            value={auther}
                            onChange={handleState('auther')}
                            fullWidth 
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" type="submit" color="primary" fullWidth>post</Button>
                    </Grid>
                </Grid>                
            </form>
            </Container>
        </div>
    );
}

export default FormComponent;