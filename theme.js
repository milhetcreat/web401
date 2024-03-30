import { createTheme } from '@mui/material/styles';

// Créer un thème personnalisé avec les propriétés que vous souhaitez modifier
const theme = createTheme({
  // Utilisez la propriété "overrides" pour personnaliser le style des composants spécifiques
  overrides: {
    // Personnalisation du composant MUIPaper
    MuiPaper: {
      root: {
        // Ajoutez ici les styles que vous souhaitez modifier pour le composant MUIPaper
        // Par exemple, vous pouvez modifier la couleur de fond ou la couleur du texte
        backgroundColor: 'blue', // Exemple: changer la couleur de fond en bleu
        color: 'white', // Exemple: changer la couleur du texte en blanc
      },
    },
  },
});

export default theme;
