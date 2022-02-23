import { Header } from "../../components/Header";
import { CheckoutForm } from "../../components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState, useContext } from "react";
import {
  PaymentContainer,
  ProductContainer,
  PaymentSection,
} from "../../styles/pages/PaymentStyled";
import { CartContext } from "../../context/CartContext";
import NoImage from "../../images/no-image2.png";
import NumberFormat from "react-number-format";
import NotificationManager from "react-notifications/lib/NotificationManager";

// Replace for your key
const stripePromise = loadStripe(
  "pk_test_51Jv4QNJ8UqvyLktoQZjZaB4PEy8VVUKnrV8RsT6565NTYdLVtAhzfqJD4mmrFHnyxu1wz65tXVdnPeRrnGqJqsqL00TXC6TMH3"
);

export function Payment() {
  const { cart, totalConvert } = useContext(CartContext);

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    const post = {
      amount: totalConvert,
      email: "teste@gmail.com",
    };

    fetch("http://localhost:8080/pay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((res) => {
        if (!res.ok) {
          const { status } = res;

          if (status !== 400) {
            NotificationManager.error(
              "Error desconhecido, por favor entre em contato ou crie um pull request"
            );
            return;
          } else {
            NotificationManager.error(
              "Não foi possivel processar seu Checkout de Pagamento, por favor tente novamente"
            );
            return;
          }
        }

        return res.json();
      })
      .then((data) => {
        const { client_secret } = data;

        setClientSecret(client_secret);
      });
  }, [totalConvert]);

  const appearance = {
    theme: "night",
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      <title>E-commerce||Pagamento</title>
      <Header title="Pagamento" />
      <PaymentSection>
        <div className="product-info">
          {cart.map((product) => (
            <ProductContainer key={JSON.stringify(product.ID)}>
              {product.photo.url === "" ? (
                <img src={NoImage} alt="Sem imagem" className="no-image" />
              ) : (
                <img
                  src={product.photo.url}
                  alt="Imagem do produto"
                  className="product-image"
                />
              )}
              <div>
                <p>{product.name}</p>
                <NumberFormat
                  displayType="text"
                  thousandSeparator
                  decimalSeparator="."
                  value={product.value.toFixed(2)}
                  prefix="R$ "
                />
              </div>
            </ProductContainer>
          ))}
        </div>
        <PaymentContainer>
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm clientSecret={clientSecret} />
            </Elements>
          )}
        </PaymentContainer>
      </PaymentSection>
    </>
  );
}
