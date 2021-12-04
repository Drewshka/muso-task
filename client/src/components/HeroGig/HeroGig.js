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
  // console.log(...gig);
  // console.log(gig[0].id);

  // this.props.history.push("/");
  console.log(history);

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

    let currGigId = gig[0].id;
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
        // history.push("/");
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });

    history.push("/");
    alert("Deleted successfully");
  };

  return (
    <div className="heroGig">
      <section className="heroGig__curr-gig">
        <h3 className="heroGig__curr-gig-title">Current Gig</h3>
        {gig.map((gigProp, i) => {
          console.log(gigProp);
          return (
            <article key={i} className="heroGig__curr-gig__card">
              <h2 className="heroGig__curr-gig__card-name">
                {gigProp.gigName}
              </h2>
              <p className="heroGig__curr-gig__card-address">
                {" "}
                <span id="heroGig__span">Address: </span>
                {gigProp.address}
              </p>
              <p className="heroGig__curr-gig__card-date">
                <span id="heroGig__span">Date: </span>
                {gigProp.date}
              </p>
              <p className="heroGig__curr-gig__card-time">
                <span id="heroGig__span">Time: </span>
                {gigProp.time}
              </p>
              <p className="heroGig__curr-gig__card-category">
                <span id="heroGig__span">Category: </span>
                {gigProp.category}
              </p>
              <p className="heroGig__curr-gig__card-venue">
                <span id="heroGig__span">Venue: </span>
                {gigProp.venue}
              </p>
              <p className="heroGig__curr-gig__card-description">
                <span id="heroGig__span">Description: </span>
                {gigProp.description}
              </p>
              <p className="heroGig__curr-gig__card-email">
                <span id="heroGig__span">Get in touch: </span>
                {gigProp.email}
              </p>
              {/* <p>User ID: {gig.userID}</p> */}

              <button onClick={openModal}>Delete Gig</button>
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Delete Gig</h2>
                <button onClick={closeModal}>close</button>
                <div>Are you sure you'd like to delete this gig?</div>
                <form>
                  <button onClick={handleClick}>Delete Gig</button>
                </form>
              </Modal>
            </article>
          );
        })}
      </section>
    </div>
  );
}

// export default HeroGig;
export default withRouter(HeroGig);
