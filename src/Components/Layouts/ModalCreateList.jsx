import InputElement from "../Elements/InputElement";
import Modal from "../Fragments/Modal";

const ModalCreateList = (props) => {
  const { isOpen, closeModal, backgroundLayout } = props;

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      backgroundLayout={backgroundLayout}
    >
      <h1 className="font-semibold mb-1">Create New To Do List</h1>
      <hr className="opacity-35 my-2" />
      <form action="">
        <InputElement
          type="text"
          name="todolist"
          placeholder="Input your new todo in here."
          labelValue="To Do"
        />
        <InputElement type="date" name="dateList" labelValue="Date" />
      </form>
    </Modal>
  );
};

export default ModalCreateList;
