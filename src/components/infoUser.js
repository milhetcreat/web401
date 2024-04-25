import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
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
import Card from '@mui/material/Card';
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import Box from '@mui/material/Box';
import '../colors.css';

export default function InfoUser({ NavigateModifUser }) {

    const [user, setUser] = useState(null);

    const idUser = localStorage.getItem('user_id');
    const token = localStorage.getItem('accessToken');

    useEffect(() => {
        const fetchInfoUser = () => {
            fetch(`https://milhet.alwaysdata.net/sae401/api/utilisateurs/${idUser}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // Envoyer l'accessToken dans le corps de la requête
                    Authorization: `Bearer ${token}`,
                },
            })
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
                    <div style={{ backgroundColor: 'var(--bg-user)', display: 'flex', gap: '100px', alignItems: 'center', justifyContent: 'center' }}>
                        <div>
                            <Avatar
                                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                                alt={user.prenom}
                                src={"https://milhet.alwaysdata.net/sae401/images/" + user.pdp}
                            />
                        </div>
                        <div>
                            <p style={{ fontSize: '22px', fontWeight: '500' }}>Informations personnelles</p>
                            <Card key={user.ID_user} variant="outlined" sx={{ minWidth: 800 }} >
                                <Box sx={{ p: 2 }}>
                                    <Stack direction="row" justifyContent="space-between" gap="20px" alignItems="center">
                                        <Stack direction="column" style={{marginLeft: '20px'}}>
                                            <Typography gutterBottom variant="h6" component="div" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize:'25px' }}>
                                                {`${user.prenom} `}
                                                {user.name}
                                            </Typography>
                                            <Typography gutterBottom variant="h6" component="div" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'grey', fontSize: '16px' }}>
                                                <LocationOnIcon></LocationOnIcon>
                                                {user.localisation}
                                            </Typography>
                                            <Typography gutterBottom variant="h6" component="div" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'grey', fontSize: '16px' }}>
                                                <EmailIcon></EmailIcon>
                                                {user.email}
                                            </Typography>
                                            <Typography gutterBottom variant="h6" component="div" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'grey', fontSize: '16px' }}>
                                                <CallIcon></CallIcon>
                                                {user.telephone}
                                            </Typography>
                                        </Stack>
                                        <Fab onClick={() => NavigateModifUser(user.id)} size="tall" style={{ backgroundColor: 'var(--all-fill)', color: 'white', marginRight: '50px' }}>
                                            <EditIcon />
                                        </Fab>
                                    </Stack>
                                </Box>
                            </Card>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
