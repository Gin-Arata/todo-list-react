import { useState } from "react";
import ButtonElement from "../Elements/Button";
import InputElement from "../Elements/InputElement";
import Modal from "../Fragments/Modal";
import { getNewId } from "../../services/setTodoList";

const ModalCreateList = (props) => {
  const { isOpen, closeModal, backgroundLayout, onSubmit } = props;
  const [formData, setFormData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const addId = { ...formData, id: getNewId() };

    onSubmit(addId);
  };

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      backgroundLayout={backgroundLayout}
    >
      <h1 className="font-semibold mb-1">Create New To Do List</h1>
      <hr className="opacity-35 my-2" />
      <form action="" onSubmit={handleSubmit}>
        <InputElement
          type="text"
          name="task"
          placeholder="Input your new todo in here."
          labelValue="To Do"
          onChange={handleChange}
        />
        <InputElement
          type="date"
          name="date"
          labelValue="Date"
          onChange={handleChange}
        />
        <ButtonElement type="submit">Save</ButtonElement>
      </form>
    </Modal>
  );
};

export default ModalCreateList;
