import React from "react";
import CatGif from "../../images/cat-kiss.gif";
import { ThanksContainer } from "../../styles/pages/ThankStyled";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

export function Thanks() {
  return (
    <>
      <title>E-commerce||Agradecimentos</title>
      <Header title={"Obrigado!"} />
      <ThanksContainer>
        <img src={CatGif} alt="Cat kiss" />
        <p>Obrigado por utilizar meu primeiro projeto de e-commerce!</p>
        <p>
          Se gostou por favor, deixe sua star no Github{" "}
          <AiFillStar className="star" />
        </p>
        <p>
          Feito com <BsFillSuitHeartFill className="heart" /> por Leonardo
          Bispo, saiba mais nos <Link to={"/credits"}>Créditos</Link>
        </p>
      </ThanksContainer>
    </>
  );
}
