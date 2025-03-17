import Box from "@mui/material/Box";
import { Button, Card, CardActions, CardContent, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function Login() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    function loginAction() {
        
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
                    <Typography onClick={() => { console.log('login') }} textAlign={'end'} variant="body2" color="blue">
                        Register
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={loginAction} variant={'contained'} size="small">Login</Button>
                </CardActions>
            </Card>
        </Box>
    )
}