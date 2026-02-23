import './Header.css';
import reactLogo from '../assets/react.svg'

function Header({mudarAba, abaAtiva, mostrarGato}) {
    return (
        <header className="header-container">
            <div className="logo" onClick={() => mostrarGato(true)}>
                <span>&lt;Vitor /&gt; </span>
                <img src={reactLogo} alt="logo-react"/>
            </div>

            <nav className="nav-menu">
                <ul>
                    <li><a href="#home" className={abaAtiva === 0 ? "btn-home opc-ativa" : "btn-home"} onClick={() => mudarAba(0)}>Início</a></li>
                    <li><a href="#sobre" className={abaAtiva === 1 ? "btn-sobre opc-ativa" : "btn-sobre"} onClick={() => mudarAba(1)}>Sobre</a></li>
                    <li><a href="#projetos" className={abaAtiva === 2 ? "btn-projetos opc-ativa" : "btn-projetos"} onClick={() => mudarAba(2)}>Projetos</a></li>
                    <li><a href="#contato" className={abaAtiva === 3 ? "btn-contato opc-ativa" : "btn-contato"} onClick={() => mudarAba(3)}>Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;