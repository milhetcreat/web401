import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import '../colors.css';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import ListeMessages from "../components/ListMessages";
import Stack from '@mui/material/Stack';

export default function Messages() {

    return (
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-between' }}>
            <div>
                <Typography gutterBottom variant="h1" component="div" style={{ fontSize: '25px', fontWeight: 'bold', textAlign: 'center', marginTop: '10px' }}>
                    Tous les messages
                </Typography>
                <ListeMessages isAuthenticated={true}></ListeMessages>
            </div>
            <div>
                toto
            </div>
            <div>
                toto
            </div>
        </div>


    );
}
