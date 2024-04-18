import styles from './Presentation.module.css'
import { useEffect, useState } from 'react'
import ButtonA from '../elements/ButtonA'


function Presentation() {

    const [text, setText] = useState('');
    const toRotate = [' Bem vindo ao meu portifolio ', '  Sou aspirante a Dev. Full-stack',];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100)
    
    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        }, delta)
        return () => { clearInterval(ticker) }
    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (!isDeleting && updatedText === fullText) {    
            setIsDeleting(true);      
            setDelta(200);

        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop + 1);
        }
    }


    return (
        <div id="presentation" className={styles.Presentation}>
            <h1><strong> Olá, eu sou Gabriel D.  </strong></h1>
            <h4>*{text}</h4>

            <p>Sou apaixonado por buscar maneiras criativas para solucionar <br />
                os problema do dia a dia, estou empenhado em transformar minha <br />
                paixão em uma carreira de sucesso como Desenvolvedor Web. <br />
                Criando uma base sólida com os estudos na escola DNC com a <br />
                formação em tecnologia , estou pronto para mergulhar de cabeça <br />
                no universo da programação.</p>

            <p><ButtonA sizeF='1.2vw' text='Saber mais!' link='https://www.linkedin.com/in/gabriel-domingues-5b987b251/' /></p>

        </div>
    )
}

export default Presentation