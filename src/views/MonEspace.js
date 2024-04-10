import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PetsIcon from '@mui/icons-material/Pets';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ReportIcon from '@mui/icons-material/Report';
import '../colors.css';
import InfoUser from "../components/infoUser";
import ListAnimauxUser from "../components/animauxUser";
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

export default function MonEspace() {

    const navigate = useNavigate();

    const NavigateAjout = () => {
        navigate("/ajoutanimal");
    };

    return (
        <div style={{ marginRight: '100px', marginLeft: '100px' }}>
            <p>Info User</p>
            <p style={{ fontSize: '22px', fontWeight: '500' }}>Mes Animaux</p>
            <ListAnimauxUser></ListAnimauxUser>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <Fab size="medium" onClick={NavigateAjout} style={{ backgroundColor: 'var(--all-stroke)', color: 'white' }}>
                        <AddIcon />
                    </Fab>
            </div>
        </div>
    );
}
