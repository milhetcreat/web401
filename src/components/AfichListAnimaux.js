import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AlignHorizontalCenter } from "@mui/icons-material";

export default function AffichListAnimaux(props) {
    const url =
        "https://milhet.alwaysdata.net/sae401/api/animaux";
    const [listeAnimaux, setAnimaux] = useState([]);

    useEffect(() => {
        const fetchAnimaux = () => {
            const fetchOptions = { method: "GET" };
            fetch(url, fetchOptions)
                .then((response) => {
                    return response.json();
                })
                .then((dataJSON) => {
                    setAnimaux(dataJSON);
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        fetchAnimaux();
    }, [url]);



    return (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {listeAnimaux.map((animal) => (
                <Link key={animal.ID_ANIMAL} to={"/detail/" + animal.ID_ANIMAL} style={{ textDecoration: 'none', margin: '10px' }}>
                    <Card sx={{ maxWidth: 345, marginBottom: '20px' }}>
                        <CardHeader
                        avatar={
                            animal.GENRE === 0 ? <MaleIcon /> : <FemaleIcon />
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={animal.PRENOM}
                        titleTypographyProps={{ variant: 'h6', style: { fontWeight: 'bold' } }}
                        />
                        <div style={{ textAlign: 'center' }}>
                            <img
                                style={{ width: '300px', height: 'auto' }}
                                src={"https://milhet.alwaysdata.net/sae401/" + animal.PHOTO}
                                alt={animal.prenom}
                            />
                        </div>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: 3 }}>
                                {animal.DESCRIPTION}
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>


    );
}
