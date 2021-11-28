import { Link } from "react-router-dom";
import "./GigsPage.scss";
import React, { Component } from "react";
import GigsList from "../../components/GigsList/GigsList";
import HeroGig from "../../components/HeroGig/HeroGig";
import axios from "axios";
const apiURL = "http://localhost:8080";
const gigsURL = `${apiURL}/gigs`;

// export default function GigsPage() {
export default class GigsPage extends Component {
  state = {
    gigs: [],
    selectedGig: null,
  };

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

    const gigs = this.state.gigs;

    if (this.state.selectedGig === null) {
      return <p>Loading...</p>;
    }

    return (
      <section className="gigs">
        <h1>Gigs Page</h1>
        <HeroGig gig={this.state.selectedGig} />
        <GigsList gigs={filteredGigs} />
        {/* <table className="gigs__table">
          <thead>
            <tr className="gigs__table--headers">
              <th className="gigs__table--headers-category">Gig Name</th>
              <th className="gigs__table--headers-category">ADDRESS</th>
              <th className="gigs__table--headers-category">DATE</th>
              <th className="gigs__table--headers-category">TIME</th>
              <th className="gigs__table--headers-category">CATEGORY</th>
            </tr>
          </thead>
          <tbody> */}
        {/* {this.state.warehousesData.map((warehouse) => (
              <ListDisplayTablet
                key={warehouse.id}
                isWarehouseList={true}
                id={warehouse.id}
                name={warehouse.name}
                address={`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}
                contactName={warehouse.contact.name}
                contactPhone={warehouse.contact.phone}
                contactEmail={warehouse.contact.email}
              />
            ))} */}
        {/* <tr className="gigs__table--data">
              <td className="item-name">Jazz Trio</td>
              <td className="pad-right">459 Queen St.</td>
              <td>01/01/2021</td>
              <td>7:00pm</td>
              <td className="center-me">Performance</td>
            </tr> */}

        {/* {gigs.map((gig) => {
              return (
                // <Link
                //   to={`/gigs/${gig.id}`}
                //   key={gig.id}
                //   style={{ textDecoration: "none" }}
                // >
                <tr className="gigs__table--data">
                  <td className="item-name">{gig.gigName}</td>
                  <td className="pad-right">{gig.address}</td>
                  <td>{gig.date}</td>
                  <td>{gig.time}</td>
                  <td className="center-me">{gig.category}</td>
                </tr>
                // </Link>
              );
            })}
          </tbody> */}
        {/* </table> */}
      </section>
    );
  }
}
