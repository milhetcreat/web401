import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
//import '../colors.css';

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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px', gap: '20px' }}>
            {listeType.map((type) => {
                const cardClass = `card-${type.ID_TYPE}`;
                return (
                    <div>
                        <Card style={{ width: '100px', height: '90px' }}>
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
                    </div>
                );
            })}
        </div>
    );

}