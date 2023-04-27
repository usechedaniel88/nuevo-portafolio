// import React from 'react'
import ImageProfile from '../../assets/Images/ImageProfile.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Button, Container, ImageListItem,  } from '@mui/material'
import ChatImage from '../../assets/Images/Chat_Flatline.svg'
import { Link } from 'react-router-dom';

// type Props = {}

const Homepage = () => {
  return (
    <Container sx={{margin:'0 auto', textAlign: 'center'}}>        
        <h1>Hola soy Daniel Useche</h1>
        <Box>
            <ImageListItem sx={{width:300, margin:'0 auto', borderRadius:'10px', marginTop:'20px'}} data-aos="fade-left">
                <img style={{borderRadius:'20px'}} src={ImageProfile} alt="ImageProfile" />
            </ImageListItem>
        </Box>
        <p style={{textAlign:'justify'}}>
        Junior Full Stack Developer con experiencia como profesor de robótica y programación. Mi pasión por la tecnología surgió tras hacer un gran cambio de vida, así que decidí formarme en desarrollo web full stack para ampliar tanto mis habilidades como conocimientos técnicos, con el principal objetivo de poder aplicarlos en un entorno real de trabajo en el que pueda seguir aprendiendo y desarrollarme profesionalmente. Me gusta trabajar en equipo bajo la metodología agile, soy responsable, comunicativo, adaptable y disciplinado. 
        </p>
      
        <Button 
        variant="contained"
        sx={{color:'white !important'}}
        href="https://drive.google.com/file/d/1s0OxnUEwKvRsUMCyM8rbqu4OmBFuFS-T/view?usp=share_link" target="_blank"
        >Curriculum</Button>
      
        <p>Sigueme a traves de las redes sociales</p>
        <ImageListItem sx={{width:300, margin:'0 auto', borderRadius:'10px', marginTop:'20px'}} data-aos="fade-left">
          <img style={{borderRadius:'20px'}} src={ChatImage} alt="ChatImage" />
        </ImageListItem>
      <Link to='https://www.instagram.com/danieluseche/' target="_blank">
        <InstagramIcon
        fontSize="large"
        color="primary"
        />
      </Link>
      <Link to='https://www.linkedin.com/in/daniel-useche/' target="_blank">
        <LinkedInIcon 
        color="primary"
        fontSize="large"
        />
      </Link>
      <Link to='https://github.com/usechedaniel88' target="_blank">
        <GitHubIcon 
        color="primary"
        fontSize="large"
        />
      </Link>

    </Container>
  )
}

export default Homepage