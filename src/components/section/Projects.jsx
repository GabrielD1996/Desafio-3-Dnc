import styles from './Projects.module.css'
import firstPage from '../../image/firstPage.svg'
import challengeOne from '../../image/challengeOne.svg'
import Cards from '../elements/Cards'
function Projects() { 
    return (
        <section className={styles.Projects} id="projects">

            <h1>Projetos</h1>
            <div className={styles.cardSection}>
                <Cards img={firstPage}  title='Landing Page DNC' tech='HTML,CSS,JS'
                    description='Primeiro projeto pratico da DNC, inicio das praticas com programação. Primeiro projeto pratico da DNC, inicio das praticas com programação.'
                    repo='https://github.com/GabrielD1996/projeto-landing-page' />
                <Cards img={challengeOne}  title='Primeiro desafio DNC' tech='HTML,CSS'
                    description='Primeiro projeto pratico da DNC, inicio das praticas com programação.'
                    repo='https://github.com/GabrielD1996/projeto-landing-page' />
            </div>
            
            <div className={styles.cardSection}>
                <Cards img={firstPage}  title='Landing Page DNC' tech='HTML,CSS,JS'
                    description='Primeiro projeto pratico da DNC, inicio das praticas com programação.'
                    repo='https://github.com/GabrielD1996/projeto-landing-page' />
                <Cards img={challengeOne}  title='Primeiro desafio DNC' tech='HTML,CSS'
                    description='Primeiro projeto pratico da DNC, inicio das praticas com programação.'
                    repo='https://github.com/GabrielD1996/projeto-landing-page' />
            </div>

        </section>

    )
}

export default Projects