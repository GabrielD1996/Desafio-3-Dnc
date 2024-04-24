import Styles from './Cards.module.css'
import ButtonA from '../elements/ButtonA'
import { useState } from 'react'

function Cards({ img, title, description, tech, repo, site }) {
    const [info, setInfo] = useState(false);

    const handleInfoOn = () => {
        setInfo(true);
    };

    const handleInfoOff = () => {
        setInfo(false);
    };

    return (
        <div onMouseLeave={handleInfoOff} onTouchEnd={handleInfoOff} className={Styles.card}>
            {info ? (
                <section>
                    <div className={Styles.hiddenCard}>
                        <div className={Styles.div3} >
                            TESTE DE FUNCIONAMENTO
                        </div>
                       

                    </div>
                    <div>
                        <h3>{title}</h3>
                        <h5>
                            <strong>Tecnologias: </strong> {tech}
                        </h5>
                        <p>{description}</p>
                        <ButtonA sizeF="1.2vw" id="btnCards" text={'Clique Aqui'} link={repo} />
                    </div>
                </section>
            ) : (
                <section>
                    <a onMouseEnter={handleInfoOn} onTouchStart={handleInfoOn} target="_blank" href={site}>
                        <img src={img} alt="ErroIMG" />
                    </a>
                    <div>
                        <h3>{title}</h3>
                        <h5>
                            <strong>Tecnologias: </strong> {tech}
                        </h5>
                        <p>{description}</p>
                        <ButtonA id="btnCards" text={'Clique Aqui'} link={repo} />
                    </div>

                </section>
            )}
        </div>
    );
}

export default Cards;