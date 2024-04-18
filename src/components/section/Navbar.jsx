
import styles from './Navbar.module.css'
import {FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.links}>
                <ul>
                    <li><Nav.Link href='#projects'>Projetos</Nav.Link></li>
                    <li><Nav.Link href=''>Tecnologias</Nav.Link></li>
                    <li><Nav.Link href=''>Sobre mim</Nav.Link></li>
                </ul>
            </div>
            <div className={styles.icons}>
                <ul >
                    <li><a target="_blank" href="https://github.com/GabrielD1996"><FaGithub size={'2vw'} /></a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/gabriel-domingues-5b987b251/"><FaLinkedin size={'2vw'} /></a></li>
                </ul>
            </div>
            
        </nav >
    )
}

export default Navbar
