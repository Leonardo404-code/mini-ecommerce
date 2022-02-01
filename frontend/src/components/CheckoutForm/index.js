import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import React, { useContext, useEffect } from "react";

import { Form } from "./styled";
import { Button } from "../../components/Button";
import { useHistory } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import { CartContext } from "../../context/CartContext";

export function CheckoutForm({ clientSecret }) {
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const { handleClearCart } = useContext(CartContext);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          handleClearCart();
          NotificationManager.success("Pagamento realizado com sucesso!");
          break;
        case "processing":
          NotificationManager.info("Seu pagamento está sendo processado");
          break;
        case "requires_payment_method":
          NotificationManager.warning("Adicione um método de pagamento");
          break;
        default:
          NotificationManager.error(
            "Alguma coisa deu errado, por favor tente mais tarde ou report o bug"
          );
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    try {
      await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "http://localhost:3000/thanks",
        },
      });
    } catch (err) {
      NotificationManager.error("Erro ao realizar o pagamento");
      history.push("/");
    }
  };

  return (
    <Form onSubmit={handleSubmit} id="payment-form">
      <PaymentElement />
      <Button disabled={!stripe}>Pagar</Button>
    </Form>
  );
}
