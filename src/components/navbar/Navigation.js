import { AppBar, Box, Toolbar, Container, Button, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';

import ToggleColorMode from './ToggleColorMode';
import BurgerMenu from './BurgerMenu';
import AvatarSettings from './AvatarSettings';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';


const useStyles = makeStyles((theme) => ({
    toolBar: {
        alignContent: 'center',
        justifyContent: 'space-between'
    },
    boxMobile: {
        display: {
            xs: 'flex',
            md: 'none'
        }
    },
    boxDesktop: {
        display: {
            xs: 'none',
            md: 'flex'
        }
    },
    navButton: {
        display: 'block',
        my: 2
    }
}))


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



    const classes = useStyles();
    if (!loaded) {
        return (
            <AppBar position="static">
                <Container maxWidth='xl'>
                    <Toolbar
                        disableGutters
                        className={classes.toolBar}
                    >
                        <Box sx={{ display: 'flex' }}>
                            <Button
                                onClick={() => { navigateTo('/') }}
                                className={classes.navButton}
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
                    className={classes.toolBar}
                >
                    {/*==================== start mobile menu ============================== */}
                    <Box
                        sx={{
                            display: {
                                xs: 'flex',
                                md: 'none'
                            }
                        }}

                        // className={classes.boxMobile}
                    >
                        <BurgerMenu
                            handleOpenNavMenu={handleOpenNavMenu}
                            handleCloseNavMenu={handleCloseNavMenu}
                            anchorElNav={anchorElNav}
                            catMenu={catMenu}
                        />
                    </Box>
                    {/*==================== end mobile menu ============================== */}

                    {/*==================== start desktop pages ============================== */}
                    <Box
                        className={classes.boxDesktop}
                    >
                        <Button
                            onClick={() => { navigateTo('/') }}
                            className={classes.navButton}
                            sx={{color:'text.primary'}}
                        >
                            Home
                        </Button>
                        {catMenu.map((cat, index) => (
                            <Button
                                key={index}
                                onClick={() => { navigateTo(`/category/${cat.id}`) }}
                                className={classes.navButton}
                                sx={{color:'text.primary'}}
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
