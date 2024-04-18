import Styles from './Cards.module.css'
import ButtonA from '../elements/ButtonA'
import { useState } from 'react'

function Cards({ img, title, description, tech, repo, site, }) {

    // const [info, setInfo] = useState(false)

    // function InfoOn() {
    //     setInfo(true)
    // } 

    // function InfoOff() {
    //     setInfo(false)
    // }

    return (
        <div  className={Styles.card}>
             <section>
            <a  target="_blank" href={site}>
                <img src={img} alt="ErroIMG" />
            </a>
                <h3>
                    {title}
                </h3>
                <h5>
                    <strong>Tecnologias: </strong> {tech}
                </h5>
                <p>
                    {description}
                </p>
                <ButtonA sizeF='1.2vw' id='btnCards' text={'Clique Aqui'} link={repo} />
            </section>
           
        </div>

    )
}
export default Cards