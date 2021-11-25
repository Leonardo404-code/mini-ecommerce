import { Header } from "../../components/Header";
import { CheckoutForm } from "../../components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState, useContext } from "react";
import {
  PaymentContainer,
  ProductContainer,
  PaymentSection,
} from "../../styles/pages/PaymentStyled";
import { CartContext } from "../../context/CartContext";

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
      .then((res) => res.json())
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
      <Header title="Pagamento" />
      <PaymentSection>
        <div>
          {cart.map((product) => (
            <ProductContainer key={JSON.stringify(product.ID)}>
              <img src={product.photo.url} alt={product.name} />
              <div>
                <p>{product.name}</p>
                <p>R$ {product.value.toFixed(2)}</p>
              </div>
            </ProductContainer>
          ))}
        </div>
        <PaymentContainer>
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
        </PaymentContainer>
      </PaymentSection>
    </>
  );
}