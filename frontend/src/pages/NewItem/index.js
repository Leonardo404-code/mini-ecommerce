import { Header } from "../../components/Header";
import { Form } from "../../styles/pages/NewItemStyled";
import { useState } from "react";
import { Button } from "../../components/Button";
import { useHistory } from "react-router-dom";

export function NewItem() {
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);
  const [units, setUnits] = useState(0);
  const [description, setDescription] = useState("");
  const history = useHistory();

  const handleAddItem = async (e) => {
    e.preventDefault();

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
            <input
              type="text"
              name="value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="input-value"
              placeholder="Valor"
            />
            <input
              type="number"
              name="units"
              value={units}
              min="0"
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
