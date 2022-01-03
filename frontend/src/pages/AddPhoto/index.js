import { Header } from "../../components/Header";
import { FormImage } from "../../styles/pages/PhotoStyled";
import { MdNoPhotography } from "react-icons/md";
import { useRef } from "react";
import { useParams } from "react-router-dom";

export function AddPhoto() {
  const inputFile = useRef(null);
  const { id } = useParams();

  const handleOpenfileManagement = async () => {
    inputFile.current.click();
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
        .then((data) => console.log(data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header title={"Adicionar Fotos"} />
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

        <p>Clique para adicionar uma imagem no seu produto</p>
      </FormImage>
    </>
  );
}
