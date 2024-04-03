import React, { useState } from 'react';
import '../colors.css';
import { AppBar, Typography, Toolbar, IconButton, MenuItem, Menu, InputBase, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { BrowserRouter as Router, Route, Routes, Link, Switch } from 'react-router-dom';
import { Padding } from '@mui/icons-material';

function App() {
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
                <nav>
                    <Link className='Link' to="/" style={{ color: 'black', display: 'flex', justifyContent: 'center', gap: '4px', textDecoration: 'none' }}> <HomeIcon></HomeIcon>Home</Link>
                </nav>
            </ListItem>
        </div>
    );

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
                    <Menu id="menu-appbar" anchorEl={anchorEl}
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
                        <MenuItem onClick={handleMenuClose}><Link className='Link' to="/login" style={{ textDecoration: 'none', color: 'black'}}>Se Connecter</Link></MenuItem>
                        <MenuItem onClick={handleMenuClose}><Link className='Link' to="/signup" style={{ textDecoration: 'none', color: 'black'}}>S'inscrire</Link></MenuItem>
                        <MenuItem onClick={handleMenuClose}>Mon Espace</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Se déconnecter</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            <Drawer anchor={'left'} open={leftDrawerOpen} onClose={toggleLeftDrawer(false)}>
                {leftDrawerList}
            </Drawer>
        </div>
    );
}

export default App;
