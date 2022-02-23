import { Header } from "../../components/Header";
import { Form } from "../../styles/pages/NewItemStyled";
import React, { useState, useContext } from "react";
import { Button } from "../../components/Button";
import { useHistory } from "react-router-dom";
import NumberFormat from "react-number-format";
import { NotificationManager } from "react-notifications";
import { ProductContext } from "../../context/ProductContext";

export function NewItem() {
  const [name, setName] = useState("");
  const [value, setValue] = useState(1);
  const [units, setUnits] = useState(1);
  const [description, setDescription] = useState("");
  const history = useHistory();
  const { handleAddNewProduct } = useContext(ProductContext);

  const handleAddProduct = async (e) => {
    e.preventDefault();

    if (name === "") {
      NotificationManager.error("Campo nome não pode estar vazio", "Error");
      return;
    }

    if (name.length > 255) {
      NotificationManager.error(
        "Campo de nome não pode conter mais que 255 caracteres",
        "Error"
      );
      return;
    }

    if (value === 0) {
      NotificationManager.error("valor do produto não pode ser zero", "Error");
      return;
    }

    if (units === 0) {
      NotificationManager.error(
        "unidades do produto não pode ser zero",
        "Error"
      );
      return;
    }

    if (description === "") {
      NotificationManager.error(
        "Campo de descrição não pode estar vazio",
        "Error"
      );
      return;
    }

    const post = {
      name: name,
      value: Number(value),
      units: Number(units),
      description: description,
    };

    await fetch("http://localhost:8080/product/create", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(post),
    })
      .then((res) => {
        if (!res.ok) {
          const { status } = res;

          switch (status) {
            case 400:
              NotificationManager.error("Falha ao criar seu produto");
              break;
            default:
              NotificationManager.error(
                "Erro interno do servidor, por favor entrar em contato ou criar um novo pull request"
              );
              break;
          }
        }
        return res.json();
      })
      .then((data) => {
        const { ID } = data;

        handleAddNewProduct(data);

        setName("");
        setValue(0);
        setUnits(0);
        setDescription("");

        NotificationManager.success(
          "Produto criado com sucesso! Agora adicione uma foto"
        );

        history.push(`/add_photo/${ID}`);
      });
  };

  return (
    <>
      <title>E-commerce || Novo item</title>
      <Header title="Novo Item" />
      <Form onSubmit={handleAddProduct}>
        <div className="input-container">
          <div>
            <p>Nome do produto</p>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-name"
              placeholder="Ex: Camiseta massa"
            />

            <p>Valor</p>
            <NumberFormat
              displayType="input"
              thousandSeparator
              decimalSeparator="."
              value={value}
              onValueChange={(e) => setValue(e.target.value)}
              placeholder="Valor"
              className="input-value"
              // eslint-disable-next-line react/jsx-no-duplicate-props
              onValueChange={(values) => {
                setValue(values.value);
              }}
            />

            <p>Unidades disponíveis</p>
            <input
              type="number"
              name="units"
              value={units}
              min="1"
              onChange={(e) => setUnits(e.target.value)}
              className="input-units"
              placeholder="Unidades disponíveis"
            />
          </div>
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div align="right" className="button-container">
          <Button type="submit">Adicionar item</Button>
        </div>
      </Form>
    </>
  );
}
