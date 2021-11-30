// import { Link } from "react-router-dom";
import "./GigsPage.scss";
import React, { Component } from "react";
import GigsList from "../../components/GigsList/GigsList";
import HeroGig from "../../components/HeroGig/HeroGig";
// import EditModal from "../../components/FormModal/FormModal";
import axios from "axios";
const apiURL = "http://localhost:8080";
const gigsURL = `${apiURL}/gigs`;

export default class GigsPage extends Component {
  state = {
    gigs: [],
    selectedGig: null,
    // showModal: false,
  };

  // showEditModalHandler = (event) => {
  //   this.setState({ showModal: true });
  // };

  // hideEditModalHandler = (event) => {
  //   this.setState({ showModal: false });
  // };

  fetchGigDetails = () => {
    // *sets default user to first in the array
    let currGigId = this.props.match.params.id
      ? this.props.match.params.id
      : this.state.gigs[0].id;

    console.log(currGigId);

    axios
      .get(`${gigsURL}/${currGigId}`)

      .then(({ data }) => {
        console.log("Single Gig: ", data);
        this.setState({
          selectedGig: data,
        });
        // *scroll to top of page when selecting a new video
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    axios
      .get(gigsURL)
      .then(({ data }) => {
        console.log("Gigs: ", data);
        this.setState(
          {
            gigs: data,
          },
          this.fetchGigDetails
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchGigDetails();
    }
  }

  render() {
    // *filter variable -> filters out gig from gigs list which is being displayed in hero
    const filteredGigs = this.state.selectedGig
      ? this.state.gigs.filter((gig) => gig.id !== this.state.selectedGig.id)
      : this.state.gigs;

    if (this.state.selectedGig === null) {
      return <p>Loading...</p>;
    }

    return (
      <section className="gigs">
        <h1>Gigs Page</h1>

        <button type="button" onClick={this.showEditModalHandler}>
          Edit Gig
        </button>

        {/* <EditModal
          showModal={this.state.showModal}
          hideEditModalHandler={this.hideEditModalHandler}
          gig={this.state.selectedGig}
        ></EditModal> */}

        <HeroGig gig={this.state.selectedGig} />
        <GigsList gigs={filteredGigs} />
      </section>
    );
  }
}
