import '../colors.css';
import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import Type from '../components/Type';

export default function AjoutAnimal() {


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
      <Type></Type>
    </div>
  );

}