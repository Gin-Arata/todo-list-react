import Modal from "../Fragments/Modal";
import InputElement from "../Elements/InputElement";
import ButtonElement from "../Elements/Button";

const ModalEditList = (props) => {
  const { isOpen, closeModal, backgroundLayout, formData, setFormData, onSubmit } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      backgroundLayout={backgroundLayout}
    >
      <h1 className="font-semibold mb-1">Edit To Do List</h1>
      <hr className="opacity-35 my-2" />
      <form action="" onSubmit={handleSubmit}>
        <InputElement
          type="text"
          name="task"
          placeholder="Input your new todo in here."
          labelValue="To Do"
          value={formData.task}
          onChange={handleChange}
        />
        <InputElement
          type="date"
          name="date"
          labelValue="Date"
          value={formData.date}
          onChange={handleChange}
        />
        <ButtonElement type="submit">Save</ButtonElement>
      </form>
    </Modal>
  );
};

export default ModalEditList;
