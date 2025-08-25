import { useState } from 'react'
import './App.css'

function App() {
  return(
    <>
      <header>
        <InfoSubsection id="text">
          <div>
            <img src="/assets/logo.png" alt="FEU FIGHTERS logo" id="logo"/>
            <h2 id="slogan">El fuego no es un juego. Apagarlo Sí.</h2>
          </div>
          <LinkButton text="DESCARGAR AHORA" link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>
        </InfoSubsection>
        <InfoSubsection id="image">
          <img id = "tromprun" src="/assets/elle-lefaunt-running-cut.png" alt="Elle Lefaunt Corriendo"/>
        </InfoSubsection>
      </header>
      <main>
        <InfoSection id="reverse">
          <InfoSubsection id="text">
            <h3>Acerca de nuestro objetivo</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae reprehenderit officia rem ut assumenda quasi sequi tenetur et optio quaerat necessitatibus, in harum cum alias laudantium quia hic. Facere, laudantium.</p>
            <LinkButton text="LEER MAS" link="https://www.greenpeace.org/argentina/tag/incendios/"/>
          </InfoSubsection>
          <InfoSubsection id="image"> 
            <img src="/assets/Mierdon.webp" alt="Mierdon"/>
          </InfoSubsection>
        </InfoSection>
        <InfoSection id="normal">
          <InfoSubsection id="text">
            <h3>Como buscamos apoyar la causa</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae reprehenderit officia rem ut assumenda quasi sequi tenetur et optio quaerat necessitatibus, in harum cum alias laudantium quia hic. Facere, laudantium.</p>
            <LinkButton text="DESCARGAR AHORA" link="https://www.greenpeace.org/argentina/tag/incendios/"/>
          </InfoSubsection>
          <InfoSubsection id="image"> 
            <img src="/assets/Mierdon.webp" alt="Mierdon"/>
          </InfoSubsection>
        </InfoSection>
      </main>
    </>
  )
}

function LinkButton(props){
  return(
    <a className="link-button" href={props.link}>{props.text}</a>
  )
}

function InfoSubsection(props){
  return(
    <article className="info-sec" id={props.id}></article>
  )
}

function InfoSection(props){
  return(
    <section className="info" id={props.id}></section>
  )
}

export default App
