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
import '../colors.css';

export default function DetailAnimal() {
    const { idAnimal } = useParams();
    const [animal, setAnimal] = useState(null);

    useEffect(() => {
        const fetchAnimalDetails = () => {
            fetch(
                `https://milhet.alwaysdata.net/sae401/api/animaux/${idAnimal}`
            )
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then((data) => {
                    setAnimal(data);
                })
                .catch((error) => {
                    console.error("Error fetching animal details:", error);
                });
        };

        fetchAnimalDetails();
    }, [idAnimal]);

    return (
        <div>
            {animal && (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Breadcrumbs aria-label="breadcrumb" style={{ marginLeft: '250px', marginTop: '20px', marginBottom: '20px' }}>
                        <Link underline="hover" color="inherit" href="/">
                            Home
                        </Link>
                        <Typography color="text.primary">{animal.PRENOM}</Typography>
                    </Breadcrumbs>
                    <div style={{ backgroundColor: 'var(--dog-fill)', display: 'flex', gap: '150px', padding: '50px', justifyContent: 'center', alignItems: 'center'}}>
                        <div>
                            <img
                                width="400px"
                                src={"https://milhet.alwaysdata.net/sae401/" + animal.PHOTO}
                                alt={animal.title}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <h3 className="prenom" style={{fontSize: '65px', marginBottom: '5px'}}>{animal.PRENOM}</h3>

                            <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><PetsIcon></PetsIcon> {animal.RACE}</p>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>{animal.GENRE === 0 ? (<> <MaleIcon /> Mâle </>) : ( <>  <FemaleIcon /> Femelle </> )}</p>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}> <DateRangeIcon></DateRangeIcon> {animal.AGE} {animal.AGE === 1 ? 'an' : 'ans'}</p>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 'bold' }}><LocationOnIcon></LocationOnIcon> {animal.LOCALISATION}</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '250px', marginRight: '250px' }}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                        </ListItem>
                        <Fab size="small" color="primary" aria-label="like">
                            <FavoriteIcon />
                        </Fab>
                    </div>
                    <div style={{marginLeft: '250px', marginRight: '250px' }}>
                        <p>{animal.DESCRIPTION}</p>

                    </div>
                </div>
            )}
        </div>
    );
}
