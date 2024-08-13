import Modal from "../Fragments/Modal";

const ModalDeleteList = (props) => {
  const { isOpen, closeModal, backgroundLayout } = props;

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      backgroundLayout={backgroundLayout}
      saveAble={false}
    >
      <h1 className="font-semibold mb-1">Delete To Do List</h1>
      <hr className="opacity-35 my-2" />
      <p>Are you sure want to delete this list?</p>
      <div className="flex justify-end gap-x-4 mt-4">
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={closeModal}
        >
          Delete
        </button>
      </div>
    </Modal>
  );
};

export default ModalDeleteList;