import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import React, { useContext } from "react";

import { Form } from "./styled";
import { Button } from "../../components/Button";
import { useHistory } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import { CartContext } from "../../context/CartContext";

export function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const { handleClearCart } = useContext(CartContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/thanks",
      },
    });

    if (result.error) {
      NotificationManager.error("Erro ao realizar o pagamento");
      history.push("/");
    } else {
      handleClearCart();
      NotificationManager.success("Pagamento realizado com sucesso!");
    }
  };

  return (
    <Form onSubmit={handleSubmit} id="payment-form">
      <PaymentElement />
      <Button disabled={!stripe}>Pagar</Button>
    </Form>
  );
}
