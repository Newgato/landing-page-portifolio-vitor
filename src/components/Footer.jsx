import './Footer.css';
import instaLogo from '../assets/Instagram_icon.png'
import faceLogo from '../assets/Facebook_icon.svg'
import gitLogo from '../assets/github-logo.png'

function Footer() {
    return (
        <div className="Footer-Principal">
            <div className="Lista-Itens">
                <ul>
                    <li className="Item"><a href="https://www.instagram.com/vitor__silvaaa__?igsh=czhraGEyeXppa2N3" target="_blank"><img src={instaLogo} target="_blank" alt="@vitor__silvaaa__" className="img-footer"/></a></li>
                    <li className="Item"><a href="https://www.facebook.com/share/1Gvqe4cDPL/" target="_blank"><img src={faceLogo} target="_blank" alt="Vitor Gomes da Silva" className="img-footer"/></a></li>
                    <li className="Item"><a href="https://github.com/Newgato" target="_blank"><img src={gitLogo} target="_blank" alt="Vitor Gomes da Silva" className="img-footer"/></a></li>
                </ul>
            </div>
            <div className="nome-footer"><span>&copy; {new Date().getFullYear()} Vitor Gomes da Silva</span></div>
        </div>
    );
}

export default Footer