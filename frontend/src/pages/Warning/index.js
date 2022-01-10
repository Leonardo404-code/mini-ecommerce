import React from "react";
import { Header } from "../../components/Header";
import {
  WarningText,
  CardContainer,
  WarningContainer,
} from "../../styles/pages/WarningStyled";
import { AiOutlineWarning } from "react-icons/ai";
import { BsClipboard } from "react-icons/bs";
import { NotificationManager } from "react-notifications";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function Warning() {
  const handleCopyToClipboard = (e) => {
    const cartNumber = e.target.textContent;

    navigator.clipboard.writeText(cartNumber);

    NotificationManager.info("Copiado para área de transferência!");
  };

  return (
    <>
      <title>E-commerce||Aviso</title>
      <Header title={"Aviso"} />
      <WarningContainer>
        <WarningText>
          <AiOutlineWarning />
          <p>
            Dados de cartão genuínos não podem ser usados em modo de teste. Use
            os números de cartão de teste a seguir, uma data de validade no
            futuro e qualquer número de CVC aleatório para criar um pagamento
            bem-sucedido.{" "}
            <a href="https://stripe.com/docs/testing">Saiba mais</a>
          </p>
        </WarningText>

        <CardContainer>
          <h4>Números de cartão de teste</h4>
          <table>
            <thead>
              <tr>
                <th>Número</th>
                <th>Marca</th>
                <th>CVC</th>
                <th>Data</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="copy-number">
                  <button onClick={handleCopyToClipboard}>
                    4242 4242 4242 4242
                  </button>
                  <BsClipboard />
                </td>
                <td>Visa</td>
                <td>Quaisquer 3 dígitos</td>
                <td>Qualquer data futura</td>
              </tr>

              <tr>
                <td className="copy-number">
                  <button onClick={handleCopyToClipboard}>
                    5555 5555 5555 4444
                  </button>
                  <BsClipboard />
                </td>
                <td>Mastercard</td>
                <td>Quaisquer 3 dígitos</td>
                <td>Qualquer data futura</td>
              </tr>

              <tr>
                <td className="copy-number">
                  <button onClick={handleCopyToClipboard}>
                    6011 1111 1111 1117
                  </button>
                  <BsClipboard />
                </td>
                <td>Discover</td>
                <td>Quaisquer 3 dígitos</td>
                <td>Qualquer data futura</td>
              </tr>

              <tr>
                <td className="copy-number">
                  <button onClick={handleCopyToClipboard}>
                    3056 9300 0902 0004
                  </button>
                  <BsClipboard />
                </td>
                <td>Diners Club</td>
                <td>Quaisquer 3 dígitos</td>
                <td>Qualquer data futura</td>
              </tr>

              <tr>
                <td className="copy-number">
                  <button onClick={handleCopyToClipboard}>
                    3566 0020 2036 0505
                  </button>
                  <BsClipboard />
                </td>
                <td>JCB</td>
                <td>Quaisquer 3 dígitos</td>
                <td>Qualquer data futura</td>
              </tr>
            </tbody>
          </table>
        </CardContainer>

        <div align="right" className="button">
          <Link to={"/payment"}>
            <Button>Realizar pagamento</Button>
          </Link>
        </div>
      </WarningContainer>
    </>
  );
}
