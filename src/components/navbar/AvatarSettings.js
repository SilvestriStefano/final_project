import { Avatar, IconButton, Menu, MenuItem, Typography } from '@mui/material';

export default function AvatarSettings({handleOpenUserMenu,handleCloseUserMenu,handleCloseNavMenu,anchorElUser}) {
    return (
        <>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Admin" src=" " />
            </IconButton>
            {/* clicking on the avatar shows dropdown with logout */}
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                    <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">Log out</Typography>
                    </MenuItem>
            </Menu>
        </>
    )
}
