import './Contato.css'
import iconeWhats from '../assets/whatsapp-icone.png'
import iconeGmail from '../assets/icone-gmail.png'

function Contato () {
    return (
        <div className="contato-container">
      <div className="contato-card">
        <h2>Vamos conversar?</h2>
        <p className="contato-subtitulo">
          Estou disponível para novas oportunidades e pronto para transformar ideias em código.
        </p>

        <div className="contato-links">
          <a 
            href="https://wa.me/5551998222783" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contato-item"
          >
            <div className="icone-neon">
              <i className="fa-brands fa-whatsapp"></i>
              <img src={iconeWhats} alt="icone whatsapp" className="icon-contact"/>
            </div>
            <div className="contato-info">
              <span>WhatsApp</span>
              <p>(51) 99822-2783</p>
            </div>
          </a>

          <a 
            href="mailto:vitorsilvapsn281@gmail.com" 
            className="contato-item"
          >
            <div className="icone-neon">
              <i className="fa-solid fa-envelope"></i>
              <img src={iconeGmail} alt="icone gmail" className="icon-contact"/>
            </div>
            <div className="contato-info">
              <span>E-mail</span>
              <p>vitorsilvapsn281@gmail.com</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    );
}

export default Contato