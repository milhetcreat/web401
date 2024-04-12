import '../colors.css';
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
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
import { Typography, Link } from '@mui/material';
import { checkAuthentication } from '../auth';

export default function Login() {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        const headers = new Headers();
        headers.append("Content-Type", "application/json")
        const login = {
            email: email,
            password: password,
        };
        console.warn(email, password)
        const fetchOptions = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(login)
        };
        fetch('https://milhet.alwaysdata.net/sae401/api/login', fetchOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data.accessToken && data.user_id) {
                    // Stocker les informations dans le local storage
                    localStorage.setItem('accessToken', data.accessToken);
                    localStorage.setItem('user_id', data.user_id);

                    // Vérifier l'authentification avant de rediriger
                    const authenticated = checkAuthentication();
                    if (authenticated) {
                        // Utilisateur authentifié, rediriger vers la page d'accueil
                        window.location.href = "/";
                    } else {
                        // Utilisateur non authentifié, afficher un message d'erreur ou effectuer une action appropriée
                        console.error("Utilisateur non authentifié.");
                    }
                } else {
                    console.error("Les données reçues ne contiennent pas les informations attendues :", data);
                }
            })
            .catch((error) => {
                console.error("Erreur lors de la requête :", error);
            });

    }

    return (
        <div >
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px', gap: '40px' }}>
                <Box sx={{ '& > :not(style)': { m: 1, width: '700px' }, }} noValidate autoComplete="off" style={{ display: 'flex', flexDirection: 'column' }}>
                    <CssTextField label="Mail*" value={email} onChange={(e) => setEmail(e.target.value)} />
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
                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
                        <Typography>Je n'ai pas encore de compte</Typography>
                        <Link className='Link' href="/signup">
                            <Typography>S'Inscrire</Typography>
                        </Link>
                    </div>
                    <div style={{ display: 'flex', gap: '20px', marginTop: '70px' }}>
                        <Button type="submit" variant="contained" size="medium" style={{ backgroundColor: 'var(--all-stroke)' }}>
                            Se Connecter
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