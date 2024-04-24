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
import ReportIcon from '@mui/icons-material/Report';
import '../colors.css';

export default function conversation() {
    const { idMessage } = useParams();
    const [message, setMessage] = useState(null);

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
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginLeft: '250px', marginRight: '250px' }}>
                        <h3 className="prenom" style={{ fontSize: '65px', marginBottom: '5px', marginTop: '0px', color: 'var(--dog-stroke)' }}>{animal.PRENOM}</h3>
                        <div>
                            <Fab size="small" aria-label="like" style={{ marginRight: '5px', backgroundColor: 'var(--dog-stroke)', color: 'white' }}>
                                <FavoriteIcon />
                            </Fab>
                            <Fab size="small" aria-label="like" style={{ backgroundColor: 'var(--dog-stroke)', color: 'white' }}>
                                <ReportIcon />
                            </Fab>
                        </div>
                    </div>
                    <div style={{ backgroundColor: 'var(--bg-animal)', display: 'flex', gap: '150px', padding: '50px', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <img
                                width="400px"
                                src={"https://milhet.alwaysdata.net/sae401/images/" + animal.PHOTO}
                                alt={animal.PRENOM}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><PetsIcon></PetsIcon> {animal.RACE}</p>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>{animal.GENRE === 0 ? (<> <MaleIcon /> Mâle </>) : (<>  <FemaleIcon /> Femelle </>)}</p>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}> <DateRangeIcon></DateRangeIcon> {animal.AGE} {animal.AGE === 1 ? 'an' : 'ans'}</p>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 'bold' }}><LocationOnIcon></LocationOnIcon> {animal.LOCALISATION}</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', marginLeft: '250px', marginRight: '250px', marginTop: '50px' }}>
                        <div style={{ marginLeft: '250px', marginRight: '250px' }}>
                            <p>{animal.DESCRIPTION}</p>
                            <p style={{ fontWeight: 'bold' }}> Spécificités</p>
                            <p>{animal.SPECIFICITE === null ? 'Aucunes' : animal.SPECIFICITE}</p>
                        </div>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <img
                                        width="40px"
                                        src={"https://milhet.alwaysdata.net/sae401/images/" + animal.user.pdp}
                                        alt={animal.user.prenom}
                                    />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={`${animal.user.prenom} ${animal.user.name}`} secondary="Propriétaire de l'animal" />
                            Contacter*
                        </ListItem>
                    </div>
                </div>
            )}
        </div>
    );
}
