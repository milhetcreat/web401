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

export default function NbLike(props) {
    let idAnimal = props.critere; 
    const [like, setLike] = useState(null);

    useEffect(() => {
        const fetchNbLike = () => {
            fetch(
                `https://milhet.alwaysdata.net/sae401/api/favoris/` + props.critere
            )
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then((data) => {
                    setLike(data);
                })
                .catch((error) => {
                    console.error("Error fetching animal details:", error);
                });
        };

        fetchNbLike();
    }, [idAnimal]);

    return (
        <div>
            {like && (
                <Typography>{like.nombre_likes}</Typography>
            )}
        </div>
    );
}

