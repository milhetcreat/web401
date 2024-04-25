import React, { useState } from 'react';
import '../colors.css';
import { AppBar, Typography, Toolbar, IconButton, MenuItem, Menu, InputBase, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { BrowserRouter as Router, Route, Routes, Link, Switch } from 'react-router-dom';
import MessageIcon from '@mui/icons-material/Message';

function NavBar({ isAuthenticated }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const toggleLeftDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setLeftDrawerOpen(open);
    };

    const leftDrawerList = (
        <div role="presentation" onClick={toggleLeftDrawer(false)} onKeyDown={toggleLeftDrawer(false)}>
            <ListItem style={{ margin: '10px' }}>
                <nav style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: '20px' }}>
                    <Link className='Link' to="/" style={{ color: 'black', display: 'flex', gap: '4px', textDecoration: 'none' }}>
                        <HomeIcon></HomeIcon>
                        <span>Home</span>
                    </Link>
                    {isAuthenticated && (
                        <Link className='Link' to="/messages" style={{ color: 'black', display: 'flex', gap: '4px', textDecoration: 'none' }}>
                            <MessageIcon></MessageIcon>
                            <span>Messages</span>
                        </Link>
                    )}
                </nav>
            </ListItem>
        </div>

    );

    const handleLogout = ({ isAuthenticated }) => {
        if (!isAuthenticated) {
            // Si l'utilisateur n'est pas authentifié, pas besoin de déconnexion
            console.log('pb');
            return;
        }

        // Récupérer l'accessToken du localStorage
        const accessToken = localStorage.getItem('accessToken');

        // Effectuer une requête de déconnexion avec l'accessToken
        fetch('https://milhet.alwaysdata.net/sae401/api/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Envoyer l'accessToken dans le corps de la requête
                Authorization: `Bearer ${accessToken}`, // Ajoutez cette ligne si votre API nécessite un jeton d'authentification
            },
        })
            .then(response => {
                if (response.ok) {
                    // Vider le localStorage
                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('user_id');
                    // Rediriger l'utilisateur vers la page de connexion
                    window.location.href = '/';
                } else {
                    console.error('Erreur lors de la déconnexion :', response.statusText);
                }
            })
            .catch(error => {
                console.error('Erreur lors de la déconnexion :', error);
            });
    };

    return (
        <div>
            <AppBar position="static" style={{ backgroundColor: 'var(--all-stroke)' }}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleLeftDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Your'Pet
                    </Typography>
                    <div style={{ position: 'relative' }}>
                        <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder="Search" inputProps={{ 'aria-label': 'search' }} sx={{ pl: 3 }} style={{ color: 'white', marginLeft: '2px' }} />
                    </div>
                    <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenuOpen} color="inherit">
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        {isAuthenticated ? (
                            <>
                                <MenuItem onClick={handleMenuClose}><Link className='Link' to="/account" style={{ textDecoration: 'none', color: 'black' }}>Mon Espace</Link></MenuItem>
                                <MenuItem onClick={() => handleLogout({ isAuthenticated })}>Se déconnecter</MenuItem>
                            </>
                        ) : (
                            <>
                                <MenuItem onClick={handleMenuClose}><Link className='Link' to="/login" style={{ textDecoration: 'none', color: 'black' }}>Se Connecter</Link></MenuItem>
                                <MenuItem onClick={handleMenuClose}><Link className='Link' to="/signup" style={{ textDecoration: 'none', color: 'black' }}>S'inscrire</Link></MenuItem>
                            </>
                        )}
                    </Menu>
                </Toolbar>
            </AppBar>
            <Drawer anchor={'left'} open={leftDrawerOpen} onClose={toggleLeftDrawer(false)}>
                {leftDrawerList}
            </Drawer>
        </div>
    );
}

export default NavBar;
