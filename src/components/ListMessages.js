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
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ListeMessages() {
    //const { idUser } = useParams();
    //const idUser = 1;
    const [user, setUser] = useState(null);

    const idUser = localStorage.getItem('user_id');
    //const idUser = 1;
    const token = localStorage.getItem('accessToken');

    //let url = `https://milhet.alwaysdata.net/sae401/api/conversations?idutilisateur=${idUser}`
    //let url = `https://milhet.alwaysdata.net/sae401/api/conversations?idutilisateur=3`
    const [listeMessages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = () => {
            const url = `https://milhet.alwaysdata.net/sae401/api/conversations?idutilisateur=${idUser}`;
            const fetchOptions = { method: "GET" };
            fetch(url, fetchOptions)
                .then((response) => response.json())
                .then((dataJSON) => {
                    console.log(dataJSON);
                    setMessages(dataJSON);
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        fetchMessages();

    }, [idUser]);

    const conversations = listeMessages.reduce((acc, message) => {
        if (!acc[message.ID_CONVERSATION]) {
            acc[message.ID_CONVERSATION] = message;
        }
        return acc;
    }, {});

    const conversationCards = Object.values(conversations).map((message) => (
        <Link key={message.ID_message} to={"/details/" + message.ID_message} style={{ textDecoration: 'none', margin: '20px' }}>
            <Card variant="outlined" sx={{ maxWidth: 360 }}>
                <Box sx={{ p: 2 }}>
                    <Stack direction="row" justifyContent="space-around" alignItems="center" gap="20px">
                        <img
                            width="100px"
                            src={"https://milhet.alwaysdata.net/sae401/images/" + message.animal.PHOTO}
                            alt={message.animal.PRENOM}
                        />
                        <Stack direction="column" justifyContent="space-between" alignItems="start">
                            <Typography gutterBottom variant="h6" component="div">
                                {`${message.user.prenom} ${message.user.name}`}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                {`${message.animal.PRENOM}, ${message.animal.RACE}`}
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Card>
        </Link>
    ));

    return (
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-between' }}>
            <div>
                {conversationCards}
            </div>
        </div>
    );
}
