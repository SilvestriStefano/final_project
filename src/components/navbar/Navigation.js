import { useState, useEffect } from 'react';
import { AppBar, Box, Toolbar, Container, Button } from '@mui/material';

import ToggleColorMode from './ToggleColorMode';
import BurgerMenu from './BurgerMenu';
import AvatarSettings from './AvatarSettings';

import axios from 'axios';


export default function Navigation() {
    const pages = ['Products', 'Pricing', 'Blog'];
    const [catMenu, setCatMenu]=useState([]);
    const APIcatMenu= "http://localhost/wp_final_project/index.php/wp-json/wp/v2/categories";
    useEffect(() => {
      axios.get(APIcatMenu).then(res=>setCatMenu(res.data))
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
                    {console.log(catMenu)}
                    {/*==================== start mobile menu ============================== */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <BurgerMenu
                            handleOpenNavMenu={handleOpenNavMenu}
                            handleCloseNavMenu={handleCloseNavMenu}
                            anchorElNav={anchorElNav}
                            pages={pages}
                        />
                    </Box>
                    {/*==================== end mobile menu ============================== */}

                    {/*==================== start desktop pages ============================== */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {catMenu.map((cat,index) => (
                            <Button
                                key={index}
                                onClick={handleCloseNavMenu}
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
