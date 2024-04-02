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
import axios from 'axios';

const AjoutAnimal = () => {
    //const url = "https://milhet.alwaysdata.net/sae401/api/animaux/"
    const [type, setType] = useState(null);
    const [prenom, setPrenom] = useState('');
    const [race, setRace] = useState('');
    const [age, setAge] = useState('');
    const [description, setDescription] = useState('');
    const [specificite, setSpecificite] = useState('');
    const [genre, setGenre] = useState('');
    const [localisation, setLocalisation] = useState('');
    const [photo, setphoto] = useState('');

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);

        axios.post('/upload', formData)
            .then(response => {
                // Store the uploaded image URL in state
                setphoto(response.data.url);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleButtonClick = () => {
        // Trigger click on file input when button is clicked
        document.getElementById("fileInput").click();
    };

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")
    const handleSubmit = (event) => {
        event.preventDefault();
        const nouvelAnimal = {
            ID_UTILISATEUR: 1,
            ID_TYPE: type,
            PRENOM: prenom,
            AGE: age,
            GENRE: genre,
            PHOTO: photo,
            LOCALISATION: localisation,
            RACE: race,
            SPECIFICITE: specificite,
            DESCRIPTION: description,
        };
        console.log(nouvelAnimal);
        const fetchOptions = {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(nouvelAnimal)
        };
        fetch('/api/animaux', fetchOptions)
            .then((response) => {
                console.log(response.text());
                return response.json()
            })
            .then((dataJSON) => {
                console.log(dataJSON)
            })
            .catch((error) => {
                console.error("Erreur lors de la requête:", error);
            });
    };


    return (
        <div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px', gap: '40px' }}>
                <Fab size="medium" color="primary" aria-label="like" style={{ backgroundColor: 'var(--all-stroke)' }} onClick={handleButtonClick}>
                    <CameraAltIcon />
                </Fab>
                <input id="fileInput" type="file" style={{ display: 'none' }} onChange={handleFileUpload} />
                <Box sx={{ '& > :not(style)': { m: 1, width: '700px' }, }} noValidate autoComplete="off" style={{ display: 'flex', flexDirection: 'column' }}>
                    <Type value={type} setType={setType}></Type>
                    <CssTextField label="Prenom*" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
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
                    <CssTextField label="Localisation*" value={localisation} onChange={(e) => setLocalisation(e.target.value)} />
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
            </form>
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
