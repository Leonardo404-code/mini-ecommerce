/* eslint-disable jsx-a11y/img-redundant-alt */
import { Header } from "../../components/Header";
import { ButtonContainer, FormImage } from "../../styles/pages/PhotoStyled";
import React, { useRef, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button } from "../../components/Button";

import NoImage from "../../images/no-image.png";

export function AddPhoto() {
  const inputFile = useRef(null);
  const [photoUrl, setPhotoUrl] = useState("");
  const { id } = useParams();
  const history = useHistory();

  const handleOpenfileManagement = async () => {
    inputFile.current.click();
  };

  const getProductPhoto = async () => {
    try {
      await fetch(`http://localhost:8080/product/${id}`, {
        method: "GET",
        mode: "cors",
      })
        .then((res) => res.json())
        .then((data) => {
          const { url } = data.photo;
          setPhotoUrl(url);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddPhoto = async (e) => {
    e.preventDefault();

    try {
      const image = e.target.files["0"];

      const formData = new FormData();

      formData.append("photo", image);

      await fetch(`http://localhost:8080/upload-photo/${id}`, {
        method: "POST",
        mode: "cors",
        body: formData,
      })
        .then((res) => res.json())
        .then(() => {
          getProductPhoto();
        });
    } catch (err) {}
  };

  const handleBackToHome = () => {
    history.push("/");
  };

  return (
    <>
      <title>E-commerce||Adicionar Foto</title>
      <Header title={"Adicionar Foto"} />
      <FormImage>
        {photoUrl === "" ? (
          <img
            src={NoImage}
            alt="No image"
            onClick={handleOpenfileManagement}
          />
        ) : (
          <img
            src={photoUrl}
            alt="Product image"
            onClick={handleOpenfileManagement}
          />
        )}

        <input
          type="file"
          name="photo"
          accept=".jpg, .jpeg, .png"
          ref={inputFile}
          onChange={handleAddPhoto}
          style={{ display: "none" }}
        />
        <p>Clique para adicionar uma imagem no seu produto</p>
      </FormImage>

      <ButtonContainer>
        <Button onClick={handleBackToHome}>Voltar ao início</Button>
      </ButtonContainer>
    </>
  );
}
