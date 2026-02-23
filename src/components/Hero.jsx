import './Hero.css'
import reactLogo from '../assets/react.svg'
import fotoPessoal from '../assets/foto-pessoal-sem-fundo.png'
import jsLogo from '../assets/JavaScript_logo.png'
import html5Logo from '../assets/HTML5_logo.png'
import css3Logo from '../assets/CSS3_logo.png'
import curriculoPdf from '../assets/cv-j2026.pdf'

function Hero () {
    return (
        <div className="hero-principal">
            <div className="componente-imagem">
                <img src={fotoPessoal} alt="foto pessoal" />
            </div>
            <div className="componente-dados">
                <div className="text-apresentacao"><h1>Olá, eu sou Vitor</h1></div>
                <div className="text-descricao"><p>Criando o futuro da web, um pixel de cada vez.</p></div>
                <div className="body-botoes">
                    <a className="btn-hero" href={curriculoPdf} download="Vitor_Silva_CV.pdf" target="_blank" rel="noopener noreferrer"><p>Baixar CV</p></a>
                </div>
                <div className="lista-habilidades">
                    <img src={reactLogo} alt="logo react" />
                    <img src={jsLogo} alt="JavaScript" />
                    <img src={html5Logo} alt="HTML5" />
                    <img src={css3Logo} alt="CSS3" className="css3-hab"/>
                </div>
            </div>
        </div>
    );
}

export default Hero