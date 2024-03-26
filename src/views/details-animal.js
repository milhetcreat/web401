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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

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
                    <Breadcrumbs aria-label="breadcrumb" style={{marginLeft: '250px', marginTop: '20px', marginBottom: '20px'}}>
                        <Link underline="hover" color="inherit" href="/">
                            Home
                        </Link>
                        <Typography color="text.primary">{animal.PRENOM}</Typography>
                    </Breadcrumbs>
                    <div style={{ backgroundColor: 'var(--all-fill)', display: 'flex', gap: '150px', padding: '50px', marginRight: '250px', marginLeft: '250px', justifyContent: 'center', alignItems: 'center', borderRadius: '20px' }}>
                        <div>
                            <img
                                width="400px"
                                src={"https://milhet.alwaysdata.net/sae401/" + animal.PHOTO}
                                alt={animal.title}
                            />
                        </div>
                        <div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: '25px', marginBottom: '20px', gap: '5px' }}>
                                {animal.GENRE === 0 ? <MaleIcon /> : <FemaleIcon />}
                                <h3>{animal.PRENOM}</h3>
                            </div>
                            <div>
                                <Stack
                                    direction="row"
                                    divider={<Divider orientation="vertical" flexItem />}
                                    spacing={3}
                                >
                                    <Item style={{ paddingRight: '30px', paddingLeft: '30px' }}><h4>Age</h4> <p>{animal.AGE} {animal.AGE === 1 ? 'an' : 'ans'}</p></Item>
                                    <Item style={{ paddingRight: '30px', paddingLeft: '30px' }}><h4>Poids</h4> <p>{animal.POIDS} kg</p></Item>
                                    <Item style={{ paddingRight: '30px', paddingLeft: '30px' }}><h4>Taille</h4> <p>{animal.TAILLE} cm</p></Item>
                                </Stack>
                            </div>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><LocationOnIcon></LocationOnIcon><span style={{ fontWeight: 'bold' }}>Localisation : </span> {animal.LOCALISATION}</p>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><PetsIcon></PetsIcon><span style={{ fontWeight: 'bold' }}> Race : </span> {animal.RACE}</p>
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
                </div>
            )}
        </div>
    );
}
