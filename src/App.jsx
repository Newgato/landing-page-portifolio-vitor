import { useState, useRef, createRef, useMemo, cloneElement } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Projetos from './components/Projetos'
import Contato from './components/Contato'
import VideoBackground from './components/VideoBackground'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import gatoBeijo from './assets/gato-beijo.mp4'

function App() {
  const [abaAtual, setAbaAtual] = useState(0);

  const [direcao, setDirecao] = useState('slide');

  const [mostrarVideoGato, setMostrarVideoGato] = useState(false);

  const conteudos = [
    <Hero key="hero"/>,
    <Sobre key="sobre"/>,
    <Projetos key="projetos"/>,
    <Contato key="contato"/>
  ];

  const conteudos_styles = [
    "cont-style",
    "code-style",
    "cont-style",
    "cont-style"
  ]

  const nodeRefs = useRef(conteudos.map(() => createRef()));

  const proximaAba = () => {
    setDirecao('slide');
    setAbaAtual((antigo) => (antigo === conteudos.length - 1 ? 0 : antigo + 1))
  };

  const abaAnterior = () => {
    setDirecao('slide-reverse')
    setAbaAtual((antigo) => (antigo === 0 ? conteudos.length - 1 : antigo - 1))
  };

  const setAbaManual = (abaSelecionada) => {
    if (abaSelecionada > abaAtual) {
      setDirecao('slide');
    } else if (abaSelecionada < abaAtual) {
      setDirecao('slide-reverse');
    }
    setAbaAtual(abaSelecionada);
  };

  return (
    <div className="app-container">
      {mostrarVideoGato && (<div className="video-fullscreen-overlay"><video src={gatoBeijo} autoPlay controls={false} onEnded={() => setMostrarVideoGato(false)}></video><div className="text-video-cat"><h1>🤩 OBRIGADO POR ACESSAR MINHA PAGINA! 🤩</h1></div></div>)}
      <VideoBackground/>
      <Header mudarAba={setAbaManual} abaAtiva={abaAtual} mostrarGato={setMostrarVideoGato}/>
      <main className="main-content">
        <button onClick={abaAnterior} className="seta-esquerda seta-app-container"><FontAwesomeIcon icon={faChevronLeft} /></button>
        <TransitionGroup className="transition-wrapper" childFactory={(child) => cloneElement(child, {classNames: direcao})}>
          <CSSTransition key={abaAtual} timeout={500} classNames={direcao} nodeRef={nodeRefs.current[abaAtual]}>
            <div className="conteudo-dinamico " ref={nodeRefs.current[abaAtual]}>
              <div className={conteudos_styles[abaAtual]}>
                {conteudos_styles[abaAtual] === "code-style" && (<div className="code-top-bar"><div className="circle-top-bar circle-top-bar-red"></div><div className="circle-top-bar circle-top-bar-yellow"></div><div className="circle-top-bar circle-top-bar-green"></div><p className="code-p">sobre.js</p></div>)}
                {conteudos_styles[abaAtual] === "code-style" ? <div className="code-body-style">{conteudos[abaAtual]}</div> : conteudos[abaAtual]}
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
        <button onClick={proximaAba} className="seta-direita seta-app-container"><FontAwesomeIcon icon={faChevronRight} /></button>
      </main>
      <Footer/>
    </div>
  )
}

export default App