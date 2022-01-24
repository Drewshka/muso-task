import "./Hero.scss";
import { withRouter } from "react-router-dom";
import React from "react";
import Modal from "react-modal";
import axios from "axios";
const apiUrl = "http://localhost:8080";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Hero({ user, history }) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // *references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  Modal.setAppElement(document.getElementById("root"));

  function closeModal() {
    setIsOpen(false);
  }

  // *DELETE GIG
  const handleClick = (event) => {
    event.preventDefault();

    let currUserId = user[0].id;

    axios
      .delete(`${apiUrl}/users/${currUserId}`)
      .then((response) => {
        console.log(response.data);

        return axios.get(`${apiUrl}/users`);
      })
      .then(({ data }) => {
        console.log("Single Gig: ", data);

        history.push("/users");
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });

    alert("Deleted successfully");
    window.location.reload(false);
  };

  return (
    <section className="hero">
      <h3 className="hero__curr-user">Current User</h3>
      {/* {user.map((userProp, i) => {
        return ( */}
      <article className="hero__curr-user__card">
        <h3 className="hero__curr-user__card-name">
          <span id="hero__span"></span>
          {user.name}
        </h3>
        <p className="hero__curr-user__card-address">
          <span id="hero__span">Address: </span>
          {user.address}
        </p>
        <p className="hero__curr-user__card-city">
          <span id="hero__span">City: </span>
          {user.city}
        </p>
        <p className="hero__curr-user__card-country">
          <span id="hero__span">Country: </span>
          {user.country}
        </p>
        <p className="hero__curr-user__card-instrument">
          <span id="hero__span">Instruments: </span>
          {user.instrument}
        </p>
        <p className="hero__curr-user__card-email">
          <span id="hero__span">Email: </span>
          {user.email}
        </p>
        <p className="hero__curr-user__card-phone">
          <span id="hero__span">Phone: </span>
          {user.phone}
        </p>
        <p className="hero__curr-user__card-bio">
          <span id="hero__span">About: </span>
          {user.bio}
        </p>

        <button onClick={openModal}>Delete User</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Delete User</h2>
          <button onClick={closeModal}>close</button>
          <div>
            Are you sure you'd like to delete this user and relevent gigs?
          </div>
          <form>
            <button onClick={handleClick}>Delete User</button>
          </form>
        </Modal>
      </article>
      {/* );
      })} */}
    </section>
  );
}

export default withRouter(Hero);
