import { withRouter } from "react-router-dom";
import "./SignUpContent.scss";
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
class SignUpContent extends Component {
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
      nameError ||
      addressError ||
      cityError ||
      countryError ||
      phoneError ||
      emailError ||
      instrumentError ||
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

    let phone = event.target.phone.value;
    let email = event.target.email.value;

    console.log(this.state);

    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
      // this.props.history.push("/");
    }

    const validatePhoneNumber = (number) => {
      const isValidPhoneNumber = validator.isMobilePhone(number);
      return isValidPhoneNumber;
    };

    if (!validatePhoneNumber(phone)) {
      alert("Please enter a valid phone number");
      return false;
    }

    console.log(validatePhoneNumber(phone));

    const validateEmail = (Email) => {
      const isValidEmail = validator.isEmail(Email);
      return isValidEmail;
    };

    if (!validateEmail(email)) {
      alert("Please enter a valid email");
      return false;
    }

    console.log(validateEmail(email));

    axios

      .post(`${apiUrl}/users`, {
        name: event.target.name.value,
        address: event.target.address.value,
        city: event.target.city.value,
        country: event.target.country.value,
        phone: event.target.phone.value || null,
        email: event.target.email.value || null,
        instrument: event.target.instrument.value,
        bio: event.target.bio.value,
      })
      .then((response) => {
        console.log("response: ", response.data);
        // this.setState({
        //   users: response,
        // });

        return axios.get(`${apiUrl}/users`);
      })
      .then(({ data }) => {
        console.log("Users: ", data);
        this.setState({
          users: data,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });

    console.log("handle submit!");

    //   this.props.history.push("/");
    window.location.reload(false);
  };

  // componentDidUpdate(prevProps) {
  //   if (prevProps.state.users !== this.props.state.users) {
  //     this.setState({ users: this.props.state.users });
  //   }

  //   console.log(prevProps.state.users);
  //   console.log(prevState);
  //   console.log(this.props.state.users);
  // }

  render() {
    // console.log(this.props.state);
    return (
      <div className="signUp">
        <h1 className="signUp__header">User Sign-Up</h1>
        <form
          className="signUp__container"
          id="signUp__container"
          name="myForm"
          action="POST"
          onSubmit={this.handleSubmit}
        >
          <article id="signUp-container1">
            <div className="signUp__container-name">
              <h4 className="signUp__container-name-title">Enter your name</h4>
              <input
                className="signUp__container-name-input"
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <div
                className="signUp__container-name-error"
                id="nameError"
                name="nameError"
              >
                {this.state.nameError}
              </div>
            </div>
            <div className="signUp__container-address">
              <h4 className="signUp__container-address-title">
                What's your address?
              </h4>
              <input
                className="signUp__container-address-input"
                type="text"
                id="address"
                name="address"
                placeholder="Your address"
                value={this.state.address}
                onChange={this.handleChange}
              />
              <div
                className="signUp__container-address-error"
                id="addressError"
                name="addressError"
              >
                {this.state.addressError}
              </div>
            </div>

            <div className="signUp__container-city">
              <h4 className="signUp__container-city-title">
                What's your city?
              </h4>
              <input
                className="signUp__container-city-input"
                type="text"
                id="city"
                name="city"
                placeholder="Your city"
                value={this.state.city}
                onChange={this.handleChange}
              />
              <div
                className="signUp__container-city-error"
                id="cityError"
                name="cityError"
              >
                {this.state.cityError}
              </div>
            </div>

            <div className="signUp__container-country">
              <h4 className="signUp__container-country-title">
                Enter your country
              </h4>
              <input
                className="signUp__container-country-input"
                type="text"
                id="country"
                name="country"
                placeholder="Your country"
                value={this.state.country}
                onChange={this.handleChange}
              />
              <div
                className="signUp__container-country-error"
                id="countryError"
                name="countryError"
              >
                {this.state.countryError}
              </div>
            </div>
          </article>

          <article id="signUp-container2">
            <div className="signUp__container-phone">
              <h4 className="signUp__container-phone-title">Phone number</h4>
              <input
                className="signUp__container-phone-input"
                type="text"
                id="phone"
                name="phone"
                placeholder="Your phone number"
                value={this.state.phone}
                onChange={this.handleChange}
              />
              <div
                className="signUp__container-phone-error"
                id="phoneError"
                name="phoneError"
              >
                {this.state.phoneError}
              </div>
            </div>

            <div className="signUp__container-email">
              <h4 className="signUp__container-email-title">Email</h4>
              <label id="email"></label>
              <input
                type="text"
                name="email"
                className="signUp__container-email-input"
                id="email"
                placeholder="Your address"
                value={this.state.email}
                onChange={this.handleChange}
              />

              <div
                className="signUp__container-email-error"
                id="emailError"
                name="emailError"
              >
                {this.state.emailError}
              </div>
            </div>

            <div className="signUp__container-instrument">
              <h4 className="signUp__container-instrument-title">Instrument</h4>
              <label id="instrument"></label>
              <input
                type="instrument"
                name="instrument"
                className="signUp__container-instrument-input"
                id="instrument"
                placeholder="Your instrument"
                value={this.state.instrument}
                onChange={this.handleChange}
              />
              <div
                className="signUp__container-instrument-error"
                id="instrumentError"
                name="instrumentError"
              >
                {this.state.instrumentError}
              </div>
            </div>

            <div className="signUp__container-bio">
              <h4 className="signUp__container-bio-title">A brief bio</h4>
              <textarea
                className="signUp__container-bio-input"
                type="text"
                id="bio"
                name="bio"
                placeholder="Please enter a bio"
                value={this.state.bio}
                onChange={this.handleChange}
              />
              <div
                className="signUp__container-bio-error"
                id="bioError"
                name="bioError"
              >
                {this.state.bioError}
              </div>
            </div>

            <div className="signUp__container-button">
              <button
                className="signUp__container-button-submit"
                type="submit"
                id="submit"
                value="submit"
              >
                Submit
              </button>
              {/* <Link to="/"> */}
              <button
                onClick={this.props.hideModalHandler}
                className="signUp__container-button-cancel"
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

export default withRouter(SignUpContent);
