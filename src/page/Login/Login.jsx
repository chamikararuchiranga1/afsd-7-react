import Box from "@mui/material/Box";
import { Button, Card, CardActions, CardContent, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link } from "react-router-dom";
import instance from "../../service/AxiosOrder";

export default function Login() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    function loginAction() {
        instance.post('/login', {
            email: email,
            password: pass
        })
            .then(function (response) {
                console.log(response.data?.token)
                localStorage.setItem('afsd-7-token',response.data?.token)
                window.location.reload()
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    return (
        <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography textAlign={'center'} gutterBottom variant="h5" component="div">
                        Login
                    </Typography>
                    <Box paddingBottom={2}>
                        <TextField onChange={(val) => {
                            setEmail(val.target.value)
                        }} fullWidth id="outlined-basic" label="Email" variant="outlined" />
                    </Box>
                    <Box paddingBottom={2}>
                        <TextField onChange={(val) => {
                            setPass(val.target.value)
                        }} fullWidth id="outlined-basic" type='password' label="Password" variant="outlined" />
                    </Box>
                    <Link to={'/register'} style={{ textDecoration: 'none' }}>
                        <Typography textAlign={'end'} variant="body2" color="blue">
                            Register
                        </Typography>
                    </Link>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={loginAction} variant={'contained'} size="small">Login</Button>
                </CardActions>
            </Card>
        </Box>
    )
}