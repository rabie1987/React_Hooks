import React, { useState } from "react";
import "./addmovies.css";
import Modal from "react-modal";
Modal.setAppElement("#root");
const Addmovies = ({ addfilm }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [posterURL, setURL] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleclic = () => {
    addfilm({ title, description, rating, posterURL });
    closeModal();
  };
  return (
    <div className="Add-btn-container">
      <button className="Add-btn" onClick={openModal}>
        +
      </button>
      <Modal
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1 className="addMovie-h1">Add A Movie</h1>
        <form>
          <label>Movie Name</label>
          <input
            type="text"
            name="name"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Movie Rate</label>
          <input
            type="text"
            name="rating"
            required
            onChange={(e) => setRating(e.target.value)}
          />
          <label>URL</label>
          <input
            type="url"
            name="image"
            required
            onChange={(e) => setURL(e.target.value)}
          />
          <label>Movie Description</label>
          <textarea
            type="text"
            name="description"
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </form>
        <button className="Modal-btn" onClick={handleclic}>
          Add Movie
        </button>
      </Modal>
    </div>
  );
};
export default Addmovies;
