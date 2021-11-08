import { Header } from "../../components/Header";
import { Form } from "../../styles/pages/NewItemStyled";
import { MdNoPhotography } from "react-icons/md";

export function NewItem() {
  return (
    <>
      <Header title="Novo Item" />
      <Form>
        <div className="no-image" align="middle">
          <MdNoPhotography />
        </div>

        <div className="input-container">
          <div>
            <input
              type="text"
              name="name"
              className="input-name"
              placeholder="Nome do produto"
            />
            <input
              type="text"
              name="value"
              className="input-value"
              placeholder="Valor"
            />
            <input
              type="text"
              name="units"
              className="input-units"
              placeholder="Unidades disponíveis"
            />
          </div>
          <textarea placeholder="Descrição" />
        </div>
      </Form>
    </>
  );
}
