import { Container, Typography } from '@mui/material'
// import React from 'react'

// type Props = {}

const Footer = () => {
  return (
    // <div>
    //     <p>&copy; Desarrollado por Daniel Useche / 2023</p>
    // </div>
    <Container
    sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '60px',
        marginTop: '80px',
        gap: '20px',
    }}
>
    <Typography variant="body1">
    &copy; Desarrollado por Daniel Useche - {new Date().getFullYear()}
    </Typography>
</Container>
  )
}

export default Footer