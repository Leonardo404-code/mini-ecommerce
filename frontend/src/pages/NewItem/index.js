import { Header } from "../../components/Header";
import { Form } from "../../styles/pages/NewItemStyled";
import React, { useState } from "react";
import { Button } from "../../components/Button";
import { useHistory } from "react-router-dom";
import NumberFormat from "react-number-format";
import { NotificationManager } from "react-notifications";

export function NewItem() {
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);
  const [units, setUnits] = useState(1);
  const [description, setDescription] = useState("");
  const history = useHistory();

  const handleAddItem = async (e) => {
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

    if (description.length > 255) {
      NotificationManager.error(
        "Campo de descrição não pode conter mais que 255 caracteres",
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

    try {
      await fetch("http://localhost:8080/product/create", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(post),
      })
        .then((res) => res.json())
        .then((data) => {
          setName("");
          setValue(0);
          setUnits(0);
          setDescription("");

          history.push(`/add_photo/${data.ID}`);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header title="Novo Item" />
      <Form onSubmit={handleAddItem}>
        <div className="input-container">
          <div>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-name"
              placeholder="Nome do produto"
            />
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
