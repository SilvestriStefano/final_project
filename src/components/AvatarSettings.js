import { Avatar, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import React from 'react'

export default function AvatarSettings({handleOpenUserMenu,handleCloseUserMenu,handleCloseNavMenu,anchorElUser}) {
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    return (
        <>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
}
