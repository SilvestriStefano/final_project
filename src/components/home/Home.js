import { Box } from '@mui/material';
import { useState } from 'react';
import ToggleColorMode from '../navbar/ToggleColorMode';
import Login from './Login';
import Registration from './Registration';

export default function Home() {
    const [page, setPage] = useState('register');

    const toLogIn = () => {
        setPage('login');
    };
    const toRegister = () => {
        setPage('register');
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'text.primary',
                }}
            >
                <ToggleColorMode />
            </Box>
            {page === 'register' ?
                <Registration toLogIn={toLogIn} />
                :
                <Login toRegister={toRegister} />
            }
        </>
    )
}
