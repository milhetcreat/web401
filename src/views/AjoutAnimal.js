import '../colors.css';
import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import Type from '../components/Type';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import Button from '@mui/material/Button';

export default function AjoutAnimal() {


    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px', gap: '40px' }}>
            <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '700px' }, }} noValidate autoComplete="off" style={{ display: 'flex', flexDirection: 'column' }}>
                <Type></Type>
                <CssTextField label="Nom*" />
                <CssTextField label="Race*" />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', gap: '20px' }}>
                    <div>
                        <Card style={{ width: '100px', height: '90px' }}>
                            <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--all-fill)' }}>
                                <MaleIcon style={{ fontSize: 60 }} />
                            </CardContent>
                        </Card>
                        <p style={{ color: 'black', textAlign: 'center', margin: '5px 0' }}>Mâle</p>
                    </div>
                    <div>
                        <Card style={{ width: '100px', height: '90px' }}>
                            <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--all-fill)' }}>
                                <FemaleIcon style={{ fontSize: 60 }} />
                            </CardContent>
                        </Card>
                        <p style={{ color: 'black', textAlign: 'center', margin: '5px 0' }}>Femmelle</p>
                    </div>
                </div>
                <CssTextField label="Age*" type="number" />
                <CssTextField label="Description*" multiline rows={4} />
                <CssTextField label="Spécificité" multiline rows={3} />
                <div style={{ display: 'flex', gap: '20px' }}>
                    <Button variant="contained" size="medium">
                        Medium
                    </Button>
                    <Button variant="outlined" size="medium">
                        Medium
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