import { Header } from "../../components/Header";
import { Form, FormImage } from "../../styles/pages/NewItemStyled";
import { MdNoPhotography } from "react-icons/md";
import { useState, useRef } from "react";
import { Button } from "../../components/Button";

export function NewItem() {
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);
  const [units, setUnits] = useState(0);
  const [description, setDescription] = useState("");
  const [showPhotoForm, setShowPhotoForm] = useState(true);
  const inputFile = useRef(null);

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
          setShowPhotoForm(true);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleOpenfileManagement = async () => {
    inputFile.current.click();
  };

  const handleAddPhoto = async (e) => {
    e.preventDefault();

    try {
      const image = e.target.files["0"];

      const formData = new FormData();

      formData.append("photo", image);

      await fetch("http://localhost:8080/upload-photo/4", {
        method: "POST",
        mode: "cors",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header title="Novo Item" />
      {showPhotoForm ? (
        <FormImage>
          <div
            className="no-image"
            align="middle"
            onClick={handleOpenfileManagement}
            onKeyDown={handleOpenfileManagement}
            role="presentation"
          >
            <MdNoPhotography />
          </div>
          <input
            type="file"
            name="photo"
            accept=".jpg, .jpeg, .png"
            ref={inputFile}
            onChange={handleAddPhoto}
            style={{ display: "none" }}
          />
        </FormImage>
      ) : null}
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
