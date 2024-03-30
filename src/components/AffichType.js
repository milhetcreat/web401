import React, { useState, useEffect } from "react";
import '../colors.css';
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

export default function Type() {
  const url =
    "https://milhet.alwaysdata.net/sae401/api/types";
  let all = 5;
  const [listeType, setTypes] = useState([]);

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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
      <Link to={"/types/" + all + "/animaux"} style={{ textDecoration: 'none', margin: '10px' }}>
        <Card style={{ width: '100px', height: '90px' }}>
          <CardContent className={'card-5'} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Typography>
              <img
                style={{ width: '50px', height: 'auto' }}
                src={"https://milhet.alwaysdata.net/sae401/all.png"}
              />
            </Typography>
          </CardContent>
        </Card>
        <p style={{ color: 'black', textAlign: 'center', margin: '5px 0' }}>Tous</p>
      </Link>
      {listeType.map((type) => {
        const cardClass = `card-${type.ID_TYPE}`;
        return (
          <Link key={type.ID_TYPE} to={"/types/" + type.ID_TYPE + "/animaux"} style={{ textDecoration: 'none', margin: '10px' }}>
            <Card style={{ width: '100px', height: '90px'}}>
              <CardContent className={cardClass} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography>
                  <img
                    style={{ width: '50px', height: 'auto' }}
                    src={"https://milhet.alwaysdata.net/sae401/" + type.ICON}
                  />
                </Typography>
              </CardContent>
            </Card>
            <p style={{ color: 'black', textAlign: 'center', margin: '5px 0' }}>{type.NOM}</p>
          </Link>
        );
      })}
    </div>
  );

}