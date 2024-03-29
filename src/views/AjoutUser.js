import '../colors.css';
import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Man2SharpIcon from '@mui/icons-material/Man2Sharp';
import WomanIcon from '@mui/icons-material/Woman';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

export default function AjoutAnimal() {


    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px', gap: '40px' }}>
            <Fab size="large" color="primary" aria-label="like" style={{ backgroundColor: 'var(--all-stroke)' }}>
                <CameraAltIcon />
            </Fab>
            <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '700px' }, }} noValidate autoComplete="off" style={{ display: 'flex', flexDirection: 'column' }}>
                <CssTextField label="Nom*" />
                <CssTextField label="Prénom*" />
                <CssTextField label="Ville*" />
                <CssTextField label="Mail*" />
                <CssTextField label="Téléphone*" />
                <CssTextField label="Mot de Passe*" />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', gap: '20px' }}>
                    <div>
                        <Card style={{ width: '100px', height: '90px' }}>
                            <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--all-fill)' }}>
                                <Man2SharpIcon style={{ fontSize: 60 }} />
                            </CardContent>
                        </Card>
                        <p style={{ color: 'black', textAlign: 'center', margin: '5px 0' }}>Homme</p>
                    </div>
                    <div>
                        <Card style={{ width: '100px', height: '90px' }}>
                            <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--all-fill)' }}>
                                <WomanIcon style={{ fontSize: 60 }} />
                            </CardContent>
                        </Card>
                        <p style={{ color: 'black', textAlign: 'center', margin: '5px 0' }}>Femme</p>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '20px', marginTop: '70px' }}>
                    <Button variant="contained" size="medium" style={{ backgroundColor: 'var(--all-stroke)' }}>
                        S'inscrire
                    </Button>
                    <Button variant="outlined" size="medium" style={{ borderColor: 'var(--all-stroke)', color: 'var(--all-stroke)' }}>
                        Annuler
                    </Button>
                </div>
            </Box>
        </div>
    );

}

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#84746A',
    },
    '& label': {
        color: 'black',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#84746A',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#84746A',
            borderWidth: 1,
        },
        '&:hover fieldset': {
            borderColor: '#84746A',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#84746A',
        },
    },
});