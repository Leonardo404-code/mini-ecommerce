/* eslint-disable jsx-a11y/img-redundant-alt */
import { Header } from "../../components/Header";
import { ButtonContainer, FormImage } from "../../styles/pages/PhotoStyled";
import React, { useRef, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { NotificationManager } from "react-notifications";
import { ProductContext } from "../../context/ProductContext";

import NoImage from "../../images/no-image.png";

export function AddPhoto() {
  const { handleAddNewProduct, products } = useContext(ProductContext);

  const inputFile = useRef(null);

  const [photoUrl, setPhotoUrl] = useState("");

  const { id } = useParams();

  const handleGetProductPhoto = async () => {
    await fetch(`http://localhost:8080/product/${id}`, {
      method: "GET",
      mode: "cors",
    })
      .then((res) => {
        if (!res.ok) {
          const { status } = res;

          if (status !== 500) {
            NotificationManager.error(
              "Error desconhecido, por favor entre em contato ou crie um pull request"
            );
            return;
          } else {
            NotificationManager.error("Error ao processar fotos do produto");
            return;
          }
        }

        return res.json();
      })
      .then((data) => {
        const { url } = data.photo;

        products.pop();

        handleAddNewProduct(data);

        setPhotoUrl(url);
      });
  };

  const handleOpenfileManagement = async () => {
    inputFile.current.click();
  };

  const handleAddPhoto = async (e) => {
    e.preventDefault();

    const image = e.target.files["0"];

    const formData = new FormData();

    formData.append("photo", image);

    await fetch(`http://localhost:8080/upload-photo/${id}`, {
      method: "POST",
      mode: "cors",
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          const { status } = res;

          switch (status) {
            case 406:
              NotificationManager.error(
                "Formato inválido! Somente formatos PNG, JPG e JPEG permitidos"
              );
              break;
            default:
              NotificationManager.error(
                "Error desconhecido, por favor entre em contato ou crie um pull request"
              );
              break;
          }
        }

        return res.json();
      })
      .then(() => {
        handleGetProductPhoto();

        NotificationManager.success(
          "Foto adicionada, verifique seu produto na página inicial!"
        );
      });
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
        <Link to={"/"}>
          <Button>Voltar ao início</Button>
        </Link>
      </ButtonContainer>
    </>
  );
}
