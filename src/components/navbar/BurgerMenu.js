import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router';

export default function BurgerMenu({ handleOpenNavMenu, handleCloseNavMenu, anchorElNav, catMenu }) {
    const navigateTo = useNavigate();

    return (
        <>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
            >
                <MenuItem
                    onClick={() => { navigateTo('/') }}
                >
                    <Typography textAlign="center">Home</Typography>
                </MenuItem>
                {catMenu.map((cat, index) => (
                    (cat.name !== 'Uncategorized') &&
                    <MenuItem
                        key={index}
                        onClick={() => { navigateTo(`/category/${cat.id}`) }}
                    >
                        <Typography textAlign="center">{cat.name}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
}
