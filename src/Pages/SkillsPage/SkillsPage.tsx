import { height } from '@mui/system'
import React from 'react'
import './skillspage.css'
import { Container, ImageListItem } from '@mui/material'
import SkillsImage from '../../assets/Images/Coding _Flatline.svg'

type Props = {}

const SkillsPage = (props: Props) => {
  return (
    <Container>
        <ImageListItem sx={{width:300, margin:'0 auto', borderRadius:'10px', marginTop:'20px'}} data-aos="fade-left">
            <img style={{borderRadius:'20px'}} src={SkillsImage} alt="ImageProfile" />
        </ImageListItem>
        <section className="skills" id="skills" style={{borderRadius: '20px'}}>
                <div className="contenido-seccion">
                    <div className="fila">
                        {/* technical skill */}
                        <div className="col">
                            <h3>Habilidades Tecnicas</h3>
                            <div className="skill">
                                <span>HTML & CSS</span>
                                <div className="barra-skill">
                                    <div className="progreso htmlcss">
                                        <span>85%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>Javascript</span>
                                <div className="barra-skill">
                                    <div className="progreso javascript">
                                        <span>74%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>TypeScript</span>
                                <div className="barra-skill">
                                    <div className="progreso typescript">
                                        <span>70%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>React</span>
                                <div className="barra-skill">
                                    <div className="progreso react">
                                        <span>82%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>Nest.js</span>
                                <div className="barra-skill">
                                    <div className="progreso nestjs">
                                        <span>71%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Professional skill */}
                        <div className="col">
                            <h3>Habilidades Personales</h3>
                            <div className="skill">
                                <span>Comunicacion</span>
                                <div className="barra-skill">
                                    <div className="progreso comunicacion">
                                        <span>90%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>Trabajo en Equipo</span>
                                <div className="barra-skill">
                                    <div className="progreso trabajo-en-equipo">
                                        <span>95%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>Creatividad</span>
                                <div className="barra-skill">
                                    <div className="progreso creatividad">
                                        <span>88%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>Dedicacion</span>
                                <div className="barra-skill">
                                    <div className="progreso dedicacion">
                                        <span>92%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>Responsabilidad</span>
                                <div className="barra-skill">
                                    <div className="progreso responsabilidad">
                                        <span>100%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </section>
    </Container>
  )
}

export default SkillsPage