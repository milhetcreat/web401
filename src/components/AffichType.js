import React, { useState, useEffect } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import '../colors.css';

export default function Type() {
  const url =
        "https://milhet.alwaysdata.net/sae401/api/types";
  const [type, setTypes] = useState([]);

  useEffect(() => {
    const fetchTypes = () => {
        const fetchOptions = { method: "GET" };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                setTypes(dataJSON);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    fetchTypes();
}, [url]);

  return (
    <div>
      <Link key={type.ID_TYPE} to={"/details/" + type.ID_TYPE} style={{ textDecoration: 'none', margin: '10px' }}>
        <Card style={{ width: '300px' }}>
          <CardContent>
            <Typography variant="body2" color="text.secondary" style={{ color: 'var(--primary-color)' }}>
              geelo
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
  
}