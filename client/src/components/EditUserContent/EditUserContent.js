import { withRouter } from "react-router-dom";
import "./EditUserContent.scss";
import { Component } from "react";
import validator from "validator";

import axios from "axios";
const apiUrl = "http://localhost:8080";
// import { Link } from "react-router-dom";

const initialState = {
  name: "",
  address: "",
  city: "",
  country: "",
  phone: "",
  email: "",
  instrument: "",
  bio: "",
  nameError: "",
  addressError: "",
  cityError: "",
  countryError: "",
  phoneError: "",
  emailError: "",
  instrumentError: "",
  bioError: "",
};

// TODO: MAKE MODAL POSITION ABSOLUTE SO IT DOESN'T PUSH THE OTHER ELEMENTS BELOW IT.

// function FormContent() {
class EditUserContent extends Component {
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
    let addressError = "";
    let cityError = "";
    let countryError = "";
    let phoneError = "";
    let emailError = "";
    let instrumentError = "";
    let bioError = "";

    if (!this.state.name) {
      nameError = `This field is required`;
    }

    if (!this.state.address) {
      addressError = "This field is required";
    }

    if (!this.state.city) {
      cityError = "This field is required";
    }

    if (!this.state.country) {
      countryError = "This field is required";
    }

    if (!this.state.phone) {
      phoneError = "This field is required";
    }

    if (!this.state.email) {
      emailError = "This field is required";
    }

    if (!this.state.instrument) {
      instrumentError = "This field is required";
    }

    if (!this.state.bio) {
      bioError = "This field is required";
    }

    if (
      nameError &&
      addressError &&
      cityError &&
      countryError &&
      phoneError &&
      emailError &&
      instrumentError &&
      bioError
    ) {
      this.setState({
        nameError,
        addressError,
        cityError,
        countryError,
        phoneError,
        emailError,
        instrumentError,
        bioError,
      });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // let phone = event.target.phone.value;
    // let email = event.target.email.value;
    // let defaultPhone = this.props.user[0].phone;
    // let defaultEmail = this.props.user[0].email;

    console.log(this.props);

    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // *clear form
      this.setState(initialState);
      // this.props.history.push("/");
    }

    //TODO need to fix form validation so that if we edit users and leave phone and email fields blank, validator won't return false for default phone and email fields
    // const validatePhoneNumber = (number) => {
    //   const isValidPhoneNumber = validator.isMobilePhone(number);
    //   return isValidPhoneNumber;
    // };

    // if (!validatePhoneNumber(phone || defaultPhone)) {
    //   alert("Please enter a valid phone number");
    //   return false;
    // }

    // console.log(validatePhoneNumber(phone));

    // const validateEmail = (Email) => {
    //   const isValidEmail = validator.isEmail(Email);
    //   return isValidEmail;
    // };

    // if (!validateEmail(email || defaultEmail)) {
    //   alert("Please enter a valid email");
    //   return false;
    // }

    // console.log(validateEmail(email));

    let currUserId = this.props.user[0].id;

    axios

      .put(`${apiUrl}/users/${currUserId}`, {
        name: event.target.name.value || this.props.user[0].name,
        address: event.target.address.value || this.props.user[0].address,
        city: event.target.city.value || this.props.user[0].city,
        country: event.target.country.value || this.props.user[0].country,
        phone: event.target.phone.value || this.props.user[0].phone,
        email: event.target.email.value || this.props.user[0].email,
        instrument:
          event.target.instrument.value || this.props.user[0].instrument,
        bio: event.target.bio.value || this.props.user[0].bio,
      })
      .then((response) => {
        console.log("response: ", response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });

    console.log("handle submit!");

    window.location.reload(false);
    // this.props.history.push("/");
  };

  render() {
    // console.log(this.props.user[0]);
    return (
      <div className="editUser">
        <h1>What would you like to change?</h1>
        <form
          className="editUser__container"
          id="editUser__container"
          name="myForm"
          action="POST"
          onSubmit={this.handleSubmit}
        >
          <article id="editUser-container1">
            <div className="editUser__container-name">
              <h4 className="editUser__container-name-title">
                Enter your name
              </h4>
              <input
                className="editUser__container-name-input"
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <div
                className="editUser__container-name-error"
                id="nameError"
                name="nameError"
              >
                {this.state.nameError}
              </div>
            </div>
            <div className="editUser__container-address">
              <h4 className="editUser__container-address-title">
                What's your address?
              </h4>
              <input
                className="editUser__container-address-input"
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                value={this.state.address}
                onChange={this.handleChange}
              />
              <div
                className="editUser__container-address-error"
                id="addressError"
                name="addressError"
              >
                {this.state.addressError}
              </div>
            </div>

            <div className="editUser__container-city">
              <h4 className="editUser__container-city-title">
                What's your city?
              </h4>
              <input
                className="editUser__container-city-input"
                type="text"
                id="city"
                name="city"
                placeholder="City"
                value={this.state.city}
                onChange={this.handleChange}
              />
              <div
                className="editUser__container-city-error"
                id="cityError"
                name="cityError"
              >
                {this.state.cityError}
              </div>
            </div>

            <div className="editUser__container-country">
              <h4 className="editUser__container-country-title">
                Enter your country
              </h4>
              <input
                className="editUser__container-country-input"
                type="text"
                id="country"
                name="country"
                placeholder="Country"
                value={this.state.country}
                onChange={this.handleChange}
              />
              <div
                className="editUser__container-country-error"
                id="countryError"
                name="countryError"
              >
                {this.state.countryError}
              </div>
            </div>
          </article>

          <article id="editUser-container2">
            <div className="editUser__container-phone">
              <h4 className="editUser__container-phone-title">
                What's your phone number?
              </h4>
              <input
                className="editUser__container-phone-input"
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone number"
                value={this.state.phone}
                onChange={this.handleChange}
              />
              <div
                className="editUser__container-phone-error"
                id="phoneError"
                name="phoneError"
              >
                {this.state.phoneError}
              </div>
            </div>

            <div className="editUser__container-email">
              <h4 className="editUser__container-email-title">Email</h4>
              <label id="email"> </label>
              <input
                type="text"
                name="email"
                className="editUser__container-email-input"
                id="email"
                placeholder="Address"
                value={this.state.email}
                onChange={this.handleChange}
              />

              <div
                className="editUser__container-email-error"
                id="emailError"
                name="emailError"
              >
                {this.state.emailError}
              </div>
            </div>

            <div className="editUser__container-instrument">
              <h4 className="editUser__container-instrument-title">
                Instrument
              </h4>
              <label id="instrument"></label>
              <input
                type="instrument"
                name="instrument"
                className="editUser__container-instrument-input"
                id="instrument"
                placeholder="Instrument"
                value={this.state.instrument}
                onChange={this.handleChange}
              />
              <div
                className="editUser__container-instrument-error"
                id="instrumentError"
                name="instrumentError"
              >
                {this.state.instrumentError}
              </div>
            </div>

            <div className="editUser__container-bio">
              <h4 className="editUser__container-bio-title">Bio</h4>
              <textarea
                className="editUser__container-bio-input"
                type="text"
                id="bio"
                name="bio"
                placeholder="Please enter a bio"
                value={this.state.bio}
                onChange={this.handleChange}
              />
              <div
                className="editUser__container-bio-error"
                id="bioError"
                name="bioError"
              >
                {this.state.bioError}
              </div>
            </div>

            <div className="editUser__container-button">
              <button
                className="editUser__container-button-submit"
                type="submit"
                id="submit"
                value="submit"
              >
                Submit
              </button>
              {/* <Link to="/"> */}
              <button
                onClick={this.props.hideModalHandler}
                className="editUser__container-button-cancel"
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

export default withRouter(EditUserContent);
