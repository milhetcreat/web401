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

export default function Connexion() {
    
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div >
            <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px', gap: '40px' }}>
                <Box sx={{ '& > :not(style)': { m: 1, width: '700px' }, }} noValidate autoComplete="off" style={{ display: 'flex', flexDirection: 'column' }}>
                    <CssTextField label="Mail*"/>
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
                            label="Password*"
                        />
                    </StyledPasswordInput>
                    <Link to="/signup" style={{textAlign: 'center'}}>Je n'ai pas encore de compte S'Inscrire</Link>
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