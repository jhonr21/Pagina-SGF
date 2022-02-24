import React from 'react'
import somos from "../img/somos.jpg"


const QuienSomos = () => {
    return (
        <div className='container'>
            <h1 className='somos-q'>Quienes Somos</h1>
            <div className='d-flex'>
                <div className=' quienes-somos'>
                    SGF Global ha obtenido la distinguida reputación de ser sinónimo de calidad, integridad y fiabilidad, al garantizar procesos de reclutamiento y selección que cubren las necesidades de talento humano, desarrollo y retención de personal de cada cliente en más de 35 países alrededor del mundo, entregando resultados que superan sus expectativas y requerimientos.
                </div>
                <div>
                    <img
                        className=" imagenes"
                        src={somos}
                        alt="Third slide"
                    />
                </div>
            </div>

        </div>
    )
}

export default QuienSomos