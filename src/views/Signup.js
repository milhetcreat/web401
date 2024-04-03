import '../colors.css';
import React, { useState, useEffect, useRef } from "react";
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
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {Typography, Link} from '@mui/material';

export default function AjoutUser() {
    const fileInputRef = useRef(null);

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [genre, setGenre] = useState('');
    const [localisation, setLocalisation] = useState('');
    const [prenom, setPrenom] = useState('');
    const [telephone, setTelephone] = useState('');
    const [pdp, setPdp] = useState({});

    const handleFileChange = (event) => {
        setPdp(event.target.files[0]);
    };

    const handleButtonClick = () => {
        document.getElementById("fichier").click();
    };

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "multipart/form-data")
    const handleSubmit = (event) => {
        //event.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("genre", genre);
        formData.append("pdp", pdp);
        formData.append("localisation", localisation);
        formData.append("prenom", prenom);
        formData.append("telephone", telephone);

        const fetchOptions = {
            method: "POST",
            headers: myHeaders,
            body: formData
        };
        for (const value of formData.values()) {
            console.log(value);
        }
        fetch('https://milhet.alwaysdata.net/sae401/api/animaux', fetchOptions)
            .then((response) => {
                response.json().then((value) => {
                    console.log(value);
                })
            })
            .then((dataJSON) => {
                console.log(dataJSON)
            })
            .catch((error) => {
                console.error("Erreur lors de la requête:", error);
            });
    };


    return (
        <div >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px', gap: '40px' }}>
                <Fab
                    size="medium"
                    color="primary"
                    aria-label="like"
                    style={{ backgroundColor: "var(--all-stroke)" }}
                    onClick={handleButtonClick}
                >
                    <CameraAltIcon />
                </Fab>
                <input
                    accept="image/*"
                    id="fichier"
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                />
                <Box sx={{ '& > :not(style)': { m: 1, width: '700px' }, }} noValidate autoComplete="off" style={{ display: 'flex', flexDirection: 'column' }}>
                    <CssTextField label="Nom*" value={name} onChange={(e) => setName(e.target.value)} />
                    <CssTextField label="Prénom*" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
                    <CssTextField label="Ville*" value={localisation} onChange={(e) => setLocalisation(e.target.value)} />
                    <CssTextField label="Mail*" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <CssTextField label="Téléphone*" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                    <StyledPasswordInput sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password*</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password*" value={password} onChange={(e) => setPassword(e.target.value)}
                        />
                    </StyledPasswordInput>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', gap: '20px' }}>
                        <div>
                            <Card style={{ width: '100px', height: '90px' }}>
                                <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: genre === 0 ? 'var(--all-stroke)' : 'var(--all-fill)' }} onClick={() => setGenre(0)}>
                                    <Man2SharpIcon style={{ fontSize: 60 }} />
                                </CardContent>
                            </Card>
                            <p style={{ color: 'black', textAlign: 'center', margin: '5px 0' }}>Homme</p>
                        </div>
                        <div>
                            <Card style={{ width: '100px', height: '90px' }}>
                                <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: genre === 1 ? 'var(--all-stroke)' : 'var(--all-fill)' }} onClick={() => setGenre(1)}>
                                    <WomanIcon style={{ fontSize: 60 }} />
                                </CardContent>
                            </Card>
                            <p style={{ color: 'black', textAlign: 'center', margin: '5px 0' }}>Femme</p>
                        </div>
                    </div>
                    <Link to="/login">J'ai déja un compte Se Connecter</Link>
                    <div style={{ display: 'flex', gap: '20px', marginTop: '70px' }}>
                        <Button type="submit" variant="contained" size="medium" style={{ backgroundColor: 'var(--all-stroke)' }}>
                            S'inscrire
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

const StyledPasswordInput = styled(FormControl)({
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
    // Add additional styles specific to Password field here
});