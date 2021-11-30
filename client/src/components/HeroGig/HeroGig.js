// import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import "./HeroGig.scss";
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

function HeroGig({ gig, history }) {
  console.log(gig);
  // this.props.history.push("/");
  console.log(history);

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  Modal.setAppElement(document.getElementById("root"));

  function closeModal() {
    setIsOpen(false);
  }

  // *DELETE GIG
  const handleClick = (event) => {
    event.preventDefault();

    let currGigId = gig.id;
    // let commentId = event.target.id;

    axios
      .delete(`${apiUrl}/gigs/${currGigId}`)
      .then((response) => {
        console.log(response.data);

        return axios.get(`${apiUrl}/gigs`);
      })
      .then(({ data }) => {
        console.log("Single Gig: ", data);
        // this.setState({
        //   selectedGig: data,
        // });
        history.push("/gigs");
        // history.push("/");
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });

    alert("Deleted successfully");
  };

  return (
    <div className="heroGig">
      <section className="heroGig__curr-gig">
        <h1>Current Gig</h1>
        <article className="heroGig__curr-gig__card">
          <h3>{gig.gigName}</h3>
          <p>{gig.address}</p>
          <p>{gig.date}</p>
          <p>{gig.time}</p>
          <p>{gig.category}</p>
          <p>{gig.venue}</p>
          <p>{gig.description}</p>
          <p>Posted by: {gig.userName}</p>
          {/* <p>User ID: {gig.userID}</p> */}

          <button onClick={openModal}>Delete Gig</button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Edit Gig</h2>
            <button onClick={closeModal}>close</button>
            <div>Would you like to delete this gig?</div>
            <form>
              <button onClick={handleClick}>Delete Gig</button>
            </form>
          </Modal>
        </article>
      </section>
    </div>
  );
}

// export default HeroGig;
export default withRouter(HeroGig);
