import '../colors.css';
import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Type from '../components/Type';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const AjoutAnimal = () => {
    const [nom, setNom] = useState('');
    const [race, setRace] = useState('');
    const [age, setAge] = useState('');
    const [description, setDescription] = useState('');
    const [specificite, setSpecificite] = useState('');
    const [genre, setGenre] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Envoyer les données à votre backend pour les enregistrer dans la base de données
        const animalData = { nom, race, genre, age, description, specificite };
        console.log(animalData); // Vous devrez remplacer cette ligne par l'appel à votre API
    };

    return (
        <div component="form" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px', gap: '40px' }} onSubmit={handleSubmit}>
            <Fab size="medium" color="primary" aria-label="like" style={{ backgroundColor: 'var(--all-stroke)' }}>
                <CameraAltIcon />
            </Fab>
            <Box sx={{ '& > :not(style)': { m: 1, width: '700px' }, }} noValidate autoComplete="off" style={{ display: 'flex', flexDirection: 'column' }}>
                <Type></Type>
                <CssTextField label="Nom*" value={nom} onChange={(e) => setNom(e.target.value)} />
                <CssTextField label="Race*" value={race} onChange={(e) => setRace(e.target.value)} />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', gap: '20px' }}>
                    <div>
                        <Card style={{ width: '100px', height: '90px', backgroundColor: genre === 0 ? 'var(--all-stroke)' : 'var(--all-fill)' }} onClick={() => setGenre(0)}>
                            <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <MaleIcon style={{ fontSize: 60 }} />
                            </CardContent>
                        </Card>
                        <p style={{ color: 'black', textAlign: 'center', margin: '5px 0' }}>Mâle</p>
                    </div>
                    <div>
                        <Card style={{ width: '100px', height: '90px', backgroundColor: genre === 1 ? 'var(--all-stroke)' : 'var(--all-fill)' }} onClick={() => setGenre(1)}>
                            <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <FemaleIcon style={{ fontSize: 60 }} />
                            </CardContent>
                        </Card>
                        <p style={{ color: 'black', textAlign: 'center', margin: '5px 0' }}>Femelle</p>
                    </div>
                </div>
                <CssTextField label="Age*" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                <CssTextField label="Description*" multiline rows={4} value={description} onChange={(e) => setDescription(e.target.value)} />
                <CssTextField label="Spécificité" multiline rows={3} value={specificite} onChange={(e) => setSpecificite(e.target.value)} />
                <div style={{ display: 'flex', gap: '20px', marginTop: '70px' }}>
                    <Button type="submit" variant="contained" size="medium" style={{ backgroundColor: 'var(--all-stroke)' }}>
                        Valider
                    </Button>
                    <Button variant="outlined" size="medium" style={{ borderColor: 'var(--all-stroke)', color: 'var(--all-stroke)' }}>
                        Annuler
                    </Button>
                </div>
            </Box>
        </div>
    );
}

export default AjoutAnimal;

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
