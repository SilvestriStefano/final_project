import { Avatar, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { useContext } from 'react';
import { UserDataContext } from '../../context/UserContext';
import { LogContext } from '../../context/LogContext';
import { useNavigate } from 'react-router-dom';

export default function AvatarSettings(props) {
    const handleOpenUserMenu = props.handleOpenUserMenu;
    const handleCloseUserMenu = props.handleCloseUserMenu;
    const anchorElUser = props.anchorElUser;


    const navigateTo = useNavigate();

    const [loggedUser] = useContext(UserDataContext);
    const [, setLogState] = useContext(LogContext);

    const logOut = () => {
        setLogState(false);
        navigateTo('/');
    }

    
    return (
        <>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={loggedUser.username} src=" " />
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
                <MenuItem onClick={logOut}>
                    <Typography textAlign="center">Log out</Typography>
                </MenuItem>
            </Menu>
        </>
    )
}
