import React from 'react'
import BannerImage from '../../assets/Images/Banner.jpg'

type Props = {}

const Banner = (props: Props) => {
  return (
    <>
        <img style={{width:'100%', height:'150px'}} src={BannerImage} alt='Banner' />
    </>
  )
}

export default Banner