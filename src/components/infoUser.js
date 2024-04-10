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

export default function InfoUser() {
    //const { idUser } = useParams();
    const idUser = 1;
    const [user, setUser] = useState(null);

    //const idUser = localStorage.getItem('user_id');
    const token = localStorage.getItem('accessToken');

    useEffect(() => {
        const fetchInfoUser = () => {
            fetch(
                `https://milhet.alwaysdata.net/sae401/api/utilisateurs/${idUser}`   
            )
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then((data) => {
                    setUser(data);
                })
                .catch((error) => {
                    console.error("Error fetching user infos:", error);
                });
        };

        fetchInfoUser();
    }, [idUser]);

    return (
        <div>
            {user && (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Breadcrumbs aria-label="breadcrumb" style={{ marginLeft: '250px', marginTop: '20px', marginBottom: '20px' }}>
                        <Link underline="hover" color="inherit" href="/">
                            Home
                        </Link>
                        <Typography color="text.primary">Mon Espace</Typography>
                    </Breadcrumbs>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginLeft: '250px', marginRight: '250px' }}>
                        <h3 className="prenom" style={{ fontSize: '65px', marginBottom: '5px', marginTop: '0px', color: 'var(--dog-stroke)' }}>{user.PRENOM}</h3>
                        <div>
                            <Fab size="small" aria-label="like" style={{ marginRight: '5px', backgroundColor: 'var(--dog-stroke)', color: 'white' }}>
                                <FavoriteIcon />
                            </Fab>
                            <Fab size="small" aria-label="like" style={{ backgroundColor: 'var(--dog-stroke)', color: 'white' }}>
                                <ReportIcon />
                            </Fab>
                        </div>
                    </div>
                    <div style={{ backgroundColor: 'var(--bg-user)', display: 'flex', gap: '150px', padding: '50px', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <img
                                width="400px"
                                src={"https://milhet.alwaysdata.net/sae401/images/" + user.pdp}
                                alt={user.prenom}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><PetsIcon></PetsIcon> {user.RACE}</p>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>{user.genre === 0 ? (<> <MaleIcon /> Mâle </>) : (<>  <FemaleIcon /> Femelle </>)}</p>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}> <DateRangeIcon></DateRangeIcon> {user.AGE} {user.AGE === 1 ? 'an' : 'ans'}</p>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 'bold' }}><LocationOnIcon></LocationOnIcon> {user.LOCALISATION}</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', marginLeft: '250px', marginRight: '250px', marginTop: '50px' }}>
                        <div style={{ marginLeft: '250px', marginRight: '250px' }}>
                            <p>{user.DESCRIPTION}</p>
                            <p style={{ fontWeight: 'bold' }}> Spécificités</p>
                            <p>{user.SPECIFICITE === null ? 'Aucunes' : user.SPECIFICITE}</p>
                        </div>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Photos" secondary={user.PRENOM}/>
                        </ListItem>
                    </div>
                </div>
            )}
        </div>
    );
}
