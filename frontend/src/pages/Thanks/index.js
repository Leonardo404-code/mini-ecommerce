import React, { useEffect, useContext } from "react";
import CatGif from "../../images/cat-kiss.gif";
import { ThanksContainer } from "../../styles/pages/ThankStyled";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import { CartContext } from "../../context/CartContext";

export function Thanks() {
  const location = useLocation();

  const { handleClearCart } = useContext(CartContext);

  useEffect(() => {
    if (location.search === "") {
      return;
    }

    const clientSecret = new URLSearchParams(location.search).get(
      "payment_intent"
    );

    if (!clientSecret) {
      return;
    }

    handleClearCart();
    NotificationManager.success("Pagamento realizado com sucesso!");
  }, []);

  return (
    <>
      <title>E-commerce||Agradecimentos</title>
      <Header title={"Obrigado!"} />
      <ThanksContainer>
        <img src={CatGif} alt="Cat kiss" />
        <p>Obrigado por utilizar meu primeiro projeto de e-commerce!</p>
        <p>
          Se gostou por favor, deixe sua estrela no Github{" "}
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
