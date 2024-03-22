import React from "react";
import Card from "../../components/Card/Card";
import Icon from "../../components/Icon/Icon";
import "./About.css";

interface AboutProps { }

const About: React.FC<AboutProps> = (props) => {
  return (
    <div className="about">
      <Card className="about-card">
        <div className="content">
          <h1>Sobre a MoonCoin</h1>
          <p>
            A MoonCoin é uma criptomoeda desenvolvida por Miqueias Rodrigues, oferecendo uma plataforma segura e eficiente para transações descentralizadas.
          </p>
          <p>
          Com uma visão voltada para o futuro, a MoonCoin busca proporcionar uma experiência única aos entusiastas de criptomoedas. Junte-se a nós e explore novas fronteiras no universo das finanças digitais com a MoonCoin.
          </p>
        </div>
      </Card>
      <Card className="about-card">
        <Icon
          className="about-image"
          backgroundImage={"/assets/images/bitcoin.png"}
        />
      </Card>
    </div>
  );
};

export default About;
