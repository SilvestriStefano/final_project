import { AppBar, Box, Toolbar, Container, Button, Avatar } from '@mui/material';

import ToggleColorMode from './ToggleColorMode';
import BurgerMenu from './BurgerMenu';
import AvatarSettings from './AvatarSettings';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';


export default function Navigation() {
    const navigateTo = useNavigate();
    const [loaded, setLoaded] = useState(false);

    const [catMenu, setCatMenu] = useState([]);
    const APIcatMenu = "http://localhost/wp_final_project/index.php/wp-json/wp/v2/categories";
    useEffect(() => {
        axios.get(APIcatMenu)
        .then(res => {
            setCatMenu(res.data);
            setLoaded(true)
        })
    }, [])

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };



    if (!loaded) {
        return (
            <AppBar position="static">
                <Container maxWidth='xl'>
                    <Toolbar
                        disableGutters
                        sx={{
                            alignContent: 'center',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        </Box>

                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                onClick={() => { navigateTo('/') }}
                                sx={{ my: 2, color: 'text.primary', display: 'block' }}
                            >
                                Home
                            </Button>
                        </Box>

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

                        <Box >
                            <Avatar />
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        )
    }


    return (
        <AppBar position="static">
            <Container maxWidth="xl" >
                <Toolbar
                    disableGutters
                    sx={{
                        alignContent: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    {/*==================== start mobile menu ============================== */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <BurgerMenu
                            handleOpenNavMenu={handleOpenNavMenu}
                            handleCloseNavMenu={handleCloseNavMenu}
                            anchorElNav={anchorElNav}
                            catMenu={catMenu}
                        />
                    </Box>
                    {/*==================== end mobile menu ============================== */}

                    {/*==================== start desktop pages ============================== */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={() => { navigateTo('/') }}
                            sx={{ my: 2, color: 'text.primary', display: 'block' }}
                        >
                            Home
                        </Button>
                        {catMenu.map((cat, index) => (
                            <Button
                                key={index}
                                onClick={() => { navigateTo(`/category/${cat.id}`) }}
                                sx={{ my: 2, color: 'text.primary', display: 'block' }}
                            >
                                {cat.name}
                            </Button>
                        ))}
                    </Box>
                    {/*==================== end desktop pages ============================== */}

                    {/*==================== start Toggle Theme ============================== */}

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
                    {/*==================== end Toggle Theme ============================== */}

                    {/*==================== start Avatar ============================== */}
                    <Box >
                        <AvatarSettings
                            handleOpenUserMenu={handleOpenUserMenu}
                            handleCloseUserMenu={handleCloseUserMenu}
                            handleCloseNavMenu={handleCloseNavMenu}
                            anchorElUser={anchorElUser}
                        />
                    </Box>
                    {/*==================== end avatar ============================== */}

                </Toolbar>
            </Container>
        </AppBar>
    );
};
