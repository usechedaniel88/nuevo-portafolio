import React from 'react'
import ImageProfile from '../../assets/Images/ImageProfile.jpg'
import { Box, ImageListItem } from '@mui/material'

type Props = {}

const Homepage = (props: Props) => {
  return (
    <div>
        {/* <img src={ImageProfile} alt="imageprofile" style={}/> */}
        <Box>
            <ImageListItem sx={{width:300, margin:'0 auto', borderRadius:'10px', marginTop:'20px'}} data-aos="fade-left">
                <img style={{borderRadius:'20px'}} src={ImageProfile} alt="ImageProfile" />
            </ImageListItem>
        </Box>
        <h1>Hola soy Daniel Useche</h1>
        <p>
            Soy desarrollador fullstack. Estudio programación porque siempre me ha gustado la tecnología. Por esa misma razón acabé tomando el camino del desarrollo web, ya que se ha convertido para mí en una profesión que me encanta. Dedicarme a la programación me implica estar continuamente aprendiendo y buscando nuevas soluciones.
        </p>
    </div>
  )
}

export default Homepage