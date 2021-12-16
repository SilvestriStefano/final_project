// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';
import { useContext } from 'react';
import { UserDataContext } from '../../context/UserContext';
import { LogContext } from '../../context/LogContext';



export default function Login({ toRegister }) {
    const [, setLoggedUser] = useContext(UserDataContext);
    const [, setLogState] = useContext(LogContext);

    const login=()=>{
        setLogState(true)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        axios.post('http://localhost/wp_final_project/index.php/wp-json/jwt-auth/v1/token', {
            username: data.get('username'),
            password: data.get('password')
        }).then(response => {
            if(response.status === 200) {
                setLoggedUser({
                    username: response.data.user_nicename,
                token: response.data.token
                });
                login()
            }
        }).catch (response=> {
                console.log(response.message)
            })
    };

return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item>
                        <Button onClick={toRegister} >
                            Don't have an account? Sign Up
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>

    </Container>
);
}
