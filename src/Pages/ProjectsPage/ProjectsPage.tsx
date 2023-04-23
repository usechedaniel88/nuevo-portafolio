import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import SpacejumpImage from '../../assets/Images/spacejump.jpg'
import FrankenwheelImage from '../../assets/Images/frankenwheel.jpg'
import LarecettesocialImage from '../../assets/Images/larecettesocial.jpg'

export default function ProjectsPage() {
  return (
    <Box
    sx={{ 
      width: '100%',
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      justifyContent: { xs: 'center', sm: 'center' },
      marginTop:'40px',
      gap: '40px',

   }}
    >   
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={FrankenwheelImage}
          alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={'https://doom-project.vercel.app/'}>
          <Button size="small" color="primary">
            Share
          </Button>
        </Link>
      </CardActions>
    </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={SpacejumpImage}
            alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={'https://doom-project-a19w.vercel.app/'}>
            <Button size="small" color="primary">
              Share
            </Button>
          </Link>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={LarecettesocialImage}
            alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={'https://front-recette-social-las-abuelas.vercel.app/'}>
            <Button size="small" color="primary">
              Share
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
}