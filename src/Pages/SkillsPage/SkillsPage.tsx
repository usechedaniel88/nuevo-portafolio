import { height } from '@mui/system'
import React from 'react'
import './skillspage.css'

type Props = {}

const SkillsPage = (props: Props) => {
  return (
    <>
    {/* style={{}} */}
    <section className="skills" id="skills">
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
                                        <span>98%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </section>
    </>
  )
}

export default SkillsPage