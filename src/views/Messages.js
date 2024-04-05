import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import '../colors.css';

export default function MonEspace() {
    //const { idUser } = useParams();
    //const idUser = 1;
    const [user, setUser] = useState(null);

    const idUser = localStorage.getItem('user_id');
    const token = localStorage.getItem('accessToken');

    let url = `https://milhet.alwaysdata.net/sae401/api/conversations?idutilisateur=${idUser}`
    const [listeMessages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = () => {
            const fetchOptions = { method: "GET" };
            fetch(url, fetchOptions)
                .then((response) => {
                    return response.json();
                })
                .then((dataJSON) => {
                    setMessages(dataJSON);
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        fetchMessages();

    }, [url]);

    return (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '50px' }}>
            <div>
            {listeMessages.map((message) => (
                <Link key={message.ID_message} to={"/details/" + message.ID_message} style={{ textDecoration: 'none', margin: '10px' }}>
                    <Card sx={{ maxWidth: 345, marginBottom: '10px' }}>
                        <CardHeader
                            avatar={
                                message.GENRE === 0 ? <MaleIcon /> : <FemaleIcon />
                            }
                            action={
                                <Fab size="small" color="primary" aria-label="like">
                                    <FavoriteIcon />
                                </Fab>
                            }
                            title={message.PRENOM}
                            titleTypographyProps={{ variant: 'h6', style: { fontWeight: 'bold' } }}
                        />
                        <div style={{ textAlign: 'center' }}>
                            <img
                                style={{ width: '300px', height: 'auto' }}
                                src={"https://milhet.alwaysdata.net/sae401/images/" + message.PHOTO}
                                alt={message.prenom}
                            />
                        </div>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: 3, fontWeight: '600' }}>
                                {message.RACE}, {message.AGE} {message.AGE === 1 ? 'an' : 'ans'}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ fontStyle: 'italic' }}>
                                {message.LOCALISATION}
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>
            ))}
            </div>
            <div>
                toto
            </div>
        </div>


    );
}
