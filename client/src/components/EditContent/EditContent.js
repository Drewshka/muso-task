import "./EditContent.scss";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Component } from "react";
import axios from "axios";
const apiUrl = "http://localhost:8080";

const initialState = {
  name: "",
  description: "",
  category: "",
  venue: "",
  address: "",
  date: "",
  time: "",
  nameError: "",
  descriptionError: "",
  categoryError: "",
  venueError: "",
  addressError: "",
  dateError: "",
  timeError: "",
};

// TODO: MAKE MODAL POSITION ABSOLUTE SO IT DOESN'T PUSH THE OTHER ELEMENTS BELOW IT.

class EditContent extends Component {
  state = initialState;

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let nameError = "";
    let descriptionError = "";
    let categoryError = "";
    let venueError = "";
    let addressError = "";
    let dateError = "";
    let timeError = "";

    if (!this.state.name) {
      nameError = `This field is required`;
    }

    if (!this.state.description) {
      descriptionError = "This field is required";
    }

    if (!this.state.category) {
      venueError = "This field is required";
    }

    if (!this.state.venue) {
      venueError = "This field is required";
    }

    if (!this.state.address) {
      addressError = "This field is required";
    }

    if (!this.state.date) {
      timeError = "This field is required";
    }

    if (!this.state.time) {
      timeError = "This field is required";
    }

    if (
      nameError &&
      descriptionError &&
      categoryError &&
      venueError &&
      addressError &&
      dateError &&
      timeError
    ) {
      this.setState({
        nameError,
        descriptionError,
        categoryError,
        venueError,
        addressError,
        dateError,
        timeError,
      });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state);

    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
      this.props.history.push("/");
    }

    let currGigId = this.props.gig[0].id;

    axios

      .put(`${apiUrl}/gigs/${currGigId}`, {
        userName: this.props.gig[0].userName,
        userID: this.props.gig[0].userID,
        gigName: event.target.name.value || this.props.gig[0].gigName,
        description:
          event.target.description.value || this.props.gig[0].description,
        category: event.target.category.value || this.props.gig[0].category,
        venue: event.target.venue.value || this.props.gig[0].venue,
        address: event.target.address.value || this.props.gig[0].address,
        date: event.target.date.value || this.props.gig[0].date,
        time: event.target.time.value || this.props.gig[0].time,
      })
      .then((response) => {
        console.log("response: ", response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
    // console.log(this.props.gig.id);

    console.log("handle submit!");

    // this.props.history.push("/");
  };

  render() {
    console.log(this.props);

    return (
      <div className="edit">
        <h1>What would you like to change?</h1>
        <form
          className="edit__container"
          id="edit__container"
          name="myForm"
          action="POST"
          onSubmit={this.handleSubmit}
        >
          <article id="editContainer1">
            <div className="edit__container-name">
              <h4 className="edit__container-name-title">Name</h4>
              <input
                className="edit__container-name-input"
                type="text"
                id="name"
                name="name"
                placeholder="Please name your gig"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <div
                className="edit__container-name-error"
                id="nameError"
                name="nameError"
              >
                {this.state.nameError}
              </div>
            </div>
            <div className="edit__container-description">
              <h4 className="edit__container-description-title">
                Gig Description
              </h4>
              <textarea
                className="edit__container-description-input"
                type="text"
                id="description"
                name="description"
                placeholder="Please describe the gig"
                value={this.state.description}
                onChange={this.handleChange}
              />
              <div
                className="edit__container-description-error"
                id="descriptionError"
                name="descriptionError"
              >
                {this.state.descriptionError}
              </div>
            </div>

            <div className="edit__container-category">
              <h4 className="edit__container-category-title">Category</h4>
              <div className="edit__container-category-list">
                <div className="edit__container-category-list-container">
                  <input
                    type="radio"
                    id="Performance"
                    name="category"
                    value="Performance"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="Performance" id="Performance">
                    Performance
                  </label>
                </div>
                <div className="edit__container-category-list-container2">
                  <input
                    type="radio"
                    id="Recording"
                    name="category"
                    value="Recording"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="Recording" id="Recording">
                    Recording
                  </label>
                </div>
                <div className="edit__container-category-list-container3">
                  <input
                    type="radio"
                    id="Education"
                    name="category"
                    value="Education"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="Education" id="Education">
                    Education
                  </label>
                </div>
                <div
                  className="edit__container-category-error"
                  id="categoryError"
                  name="categoryError"
                >
                  {this.state.categoryError}
                </div>
              </div>
            </div>

            <div className="edit__container-venue">
              <h4 className="edit_container-venue-title" id="venue-title">
                Venue
              </h4>
              <input
                className="edit__container-venue-input"
                type="text"
                id="venue"
                name="venue"
                placeholder="Please add a venue"
                value={this.state.venue}
                onChange={this.handleChange}
              />
              <div
                className="edit__container-venue-error"
                id="venueError"
                name="venueError"
              >
                {this.state.venueError}
              </div>
            </div>
          </article>

          <article id="editContainer2">
            <div className="edit__container-address">
              <h4 className="edit__container-address-title">Address</h4>
              <input
                className="edit__container-address-input"
                type="text"
                id="address"
                name="address"
                placeholder="Please add the address"
                value={this.state.address}
                onChange={this.handleChange}
              />
              <div
                className="edit__container-address-error"
                id="addressError"
                name="addressError"
              >
                {this.state.addressError}
              </div>
            </div>
            <div className="edit__container-date">
              <h4 className="form__container-date-title">Date</h4>
              <label id="date"></label>
              <input
                type="date"
                name="date"
                className="edit__container-date-input"
                id="date"
                placeholder="Please add the address"
                value={this.state.date}
                onChange={this.handleChange}
              />
              <div
                className="edit__container-date-error"
                id="dateError"
                name="dateError"
              >
                {this.state.dateError}
              </div>
            </div>
            <div className="edit__container-time">
              <h4 className="edit__container-time-title">Time</h4>
              <label id="time"></label>
              <input
                type="time"
                name="time"
                className="form__container-time-input"
                id="time"
                placeholder="Please add the address"
                value={this.state.time}
                onChange={this.handleChange}
              />
              <div
                className="edit__container-time-error"
                id="timeError"
                name="timeError"
              >
                {this.state.timeError}
              </div>
            </div>

            <div className="edit__container-button">
              <button
                className="edit__container-button-submit"
                type="submit"
                id="submit"
                value="submit"
              >
                Submit
              </button>
              {/* <Link to="/"> */}
              <button
                onClick={this.props.hideEditModalHandler}
                className="edit__container-button-cancel"
                type="cancel"
                id="cancel"
                value="cancel"
              >
                Cancel
              </button>
              {/* </Link> */}
            </div>
          </article>
        </form>
      </div>
    );
  }
}

export default withRouter(EditContent);
