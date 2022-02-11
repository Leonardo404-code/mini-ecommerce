import React from "react";
import { Header } from "../../components/Header";
import {
  CreditsContainer,
  SocialMedia,
} from "../../styles/pages/CreditsStyled";
import ProfileImage from "../../images/profile-picture.png";
import InstagramIcon from "../../images/instagram.png";
import LinkedinIcon from "../../images/linkedin.png";
import GithubIcon from "../../images/github.png";

export function Creadits() {
  return (
    <>
      <title>E-commerce||Créditos</title>
      <Header title="Creditos" />
      <CreditsContainer>
        <img src={ProfileImage} alt="Leonardo" />

        <div>
          <h2>Desenvolvedor</h2>
          <p>
            Programador Full-Stack autodidata, Sempre fui envolvido com
            tecnologia desde novo e me interessava construir softwares, a 2 anos
            estudo programação e apenas com muito estudo e com ajuda do Google
            desenvolvi meus primeiros projetos. Sou mais focado em Back-end, e
            utilizando a stack ReactJS + Fiber consigo criar aplicações
            incríveis.
          </p>
        </div>
      </CreditsContainer>
      <SocialMedia>
        <a
          className="github"
          href="https://github.com/Leonardo404-code"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GithubIcon} alt="Github" />
          <p>Github</p>
        </a>

        <a
          className="linkedin"
          href="https://www.linkedin.com/in/leonardo-bispo-006701179/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedinIcon} alt="Linkedin" />
          <p>Linkedin</p>
        </a>

        <a
          className="instagram"
          href="https://www.instagram.com/leonardobispo.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={InstagramIcon} alt="Instagram" />
          <p>Instagram</p>
        </a>
      </SocialMedia>
    </>
  );
}
