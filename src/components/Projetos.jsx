import './Projetos.css'
import logoTelegram from '../assets/Telegram_logo.png'
import logoGoogle from '../assets/Google_Favicon.png'

function Projetos () {
    return (
    <div className="projetos-container">
      <div className="projetos-card">
        <h2>Meus Projetos</h2>
        <p className="projetos-subtitulo">
          Soluções desenvolvidas focando em performance, automação e interfaces modernas.
        </p>

        <div className="projetos-links">
          
          <a 
            href="https://t.me/alphabetaccess_bot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="projeto-item"
          >
            <div className="icone-neon">
              <i className="fa-brands fa-telegram"></i> 
              <img src={logoTelegram} alt="logo telegram" className="icon-projects"/>
            </div>
            <div className="projeto-info">
              <span>Back-end • Automação & API</span>
              <p>Bot de Gestão de Assinaturas</p>
            </div>
          </a>

          {/* Projeto 2: O próprio Portfólio */}
          <a 
            href="https://github.com/Newgato/landing-page-portifolio-vitor.git" 
            target="_blank" 
            rel="noopener noreferrer"
            className="projeto-item"
          >
            <div className="icone-neon">
              <i className="fa-brands fa-react"></i> 
              <img src={logoGoogle} alt="logo google" className="icon-projects"/>
            </div>
            <div className="projeto-info">
              <span>Front-end • React & Glassmorphism</span>
              <p>Landing Page Interativa (GitHub)</p>
            </div>
          </a>

        </div>
      </div>
    </div>
    );
}

export default Projetos