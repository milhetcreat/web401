import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EditIcon from '@mui/icons-material/Edit';
import NbLike from "./nbLike";
import '../colors.css';

export default function ListAnimauxUser() {
    //const { idUser } = useParams();
    const idUser = 1;
    const [user, setUser] = useState(null);

    //const idUser = localStorage.getItem('user_id');
    const token = localStorage.getItem('accessToken');
    const url = `https://milhet.alwaysdata.net/sae401/api/animaux/${idUser}/users`;
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

    const [critere, setCritere] = useState("");
    //let animal.ID_ANIMAL = setCritere();

    return (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '10px' }}>
            {listeAnimaux.map((animal) => (
                <Card key={animal.ID_ANIMAL} variant="outlined" sx={{ maxWidth: 600 }}>
                    <Box sx={{ p: 2 }}>
                        <Stack direction="row" justifyContent="space-around" gap="20px">
                            <img
                                width="180px"
                                src={"https://milhet.alwaysdata.net/sae401/images/" + animal.PHOTO}
                                alt={animal.PRENOM}
                            />
                            <Stack direction="column" marginRight="50px">
                                <Typography gutterBottom variant="h6" component="div" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    {`${animal.PRENOM} `}
                                    {animal.GENRE === 0 ? <MaleIcon /> : <FemaleIcon />}
                                </Typography>
                                <div style={{ display: 'flex', gap: '20px', marginTop: '15px' }}>
                                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px'}}>
                                        <Fab size="tall" style={{ backgroundColor: 'var(--all-fill)', color: 'white' }}>
                                            <FavoriteBorderIcon />
                                        </Fab>
                                        <NbLike critere={animal.ID_ANIMAL}></NbLike>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px'}}>
                                        <Fab size="tall" style={{ backgroundColor: 'var(--all-fill)', color: 'white' }}>
                                            <EditIcon />
                                        </Fab>
                                        <Typography>Edit</Typography>
                                    </div>
                                </div>
                            </Stack>
                        </Stack>
                    </Box>
                </Card>
            ))}
        </div>


    );
}
