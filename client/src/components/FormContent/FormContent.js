import "./FormContent.scss";
import { Link } from "react-router-dom";

function FormContent() {
  return (
    <div className="form">
      <h1>Post a Gig!</h1>
      <form
        className="form__container"
        id="form__container"
        name="myForm"
        action="POST"
        //   onSubmit={this.handleSubmit}
      >
        <div className="form__container-name">
          <h4 className="form__container-name-title">Your Name</h4>
          <input
            className="form__container-name-input"
            type="text"
            id="name"
            name="name"
            placeholder="Please add your name"
            // value={this.state.name}
            // onChange={this.handleChange}
          />
          {/* <div
                className="form__container-name-error"
                id="nameError"
                name="nameError"
              >
                <img
                  src={error}
                  alt="error"
                  id="error-icon"
                  style={{
                    visibility: this.state.nameError ? "visible" : "hidden",
                  }}
                />
                {this.state.nameError}
              </div> */}
        </div>
        <div className="form__container-description">
          <h4 className="form__container-description-title">Gig Description</h4>
          <textarea
            className="form__container-description-input"
            type="text"
            id="description"
            name="description"
            placeholder="Please describe the gig"
            // value={this.state.name}
            // onChange={this.handleChange}
          />
          {/* <div
                className="form__container-description-error"
                id="nameError"
                name="nameError"
              >
                <img
                  src={error}
                  alt="error"
                  id="error-icon"
                  style={{
                    visibility: this.state.nameError ? "visible" : "hidden",
                  }}
                />
                {this.state.nameError}
              </div> */}
        </div>

        <div className="form__container-category">
          <h4 className="form__container-category-title">Category</h4>
          <div className="form__container-category-list">
            <div className="form__container-category-list-container">
              <input
                type="radio"
                id="performance"
                name="category"
                value="performance"
                // onChange={this.handleChange}
              />
              <label for="in-stock" id="in-label">
                Performance
              </label>
            </div>
            <div className="form__container-category-list-container2">
              <input
                type="radio"
                id="recording"
                name="category"
                value="recording"
                // onChange={this.handleChange}
              />
              <label for="out-of-stock" id="out-label">
                Recording
              </label>
            </div>
            <div className="form__container-category-list-container3">
              <input
                type="radio"
                id="education"
                name="category"
                value="education"
                // onChange={this.handleChange}
              />
              <label for="out-of-stock" id="out-label">
                Education
              </label>
            </div>
          </div>
        </div>

        <div className="form__container-venue">
          <h4 className="form__container-venue-title">Venue</h4>
          <input
            className="form__container-venue-input"
            type="text"
            id="venue"
            name="venue"
            placeholder="Please add a venue"
            // value={this.state.name}
            // onChange={this.handleChange}
          />
          {/* <div
                className="form__container-name-error"
                id="nameError"
                name="nameError"
              >
                <img
                  src={error}
                  alt="error"
                  id="error-icon"
                  style={{
                    visibility: this.state.nameError ? "visible" : "hidden",
                  }}
                />
                {this.state.nameError}
              </div> */}
        </div>
        <div className="form__container-address">
          <h4 className="form__container-address-title">Address</h4>
          <input
            className="form__container-address-input"
            type="text"
            id="address"
            name="address"
            placeholder="Please add the address"
            // value={this.state.name}
            // onChange={this.handleChange}
          />
          {/* <div
                className="form__container-name-error"
                id="nameError"
                name="nameError"
              >
                <img
                  src={error}
                  alt="error"
                  id="error-icon"
                  style={{
                    visibility: this.state.nameError ? "visible" : "hidden",
                  }}
                />
                {this.state.nameError}
              </div> */}
        </div>
        <div className="form__container-date">
          <h4 className="form__container-date-title">Date</h4>
          <label id="date">Please select date of gig: </label>
          <input
            type="date"
            name="date"
            className="form__container-date-input"
            id="date"
            placeholder="Please add the address"
            // value={this.state.name}
            // onChange={this.handleChange}>
          />

          {/* <div
                className="form__container-name-error"
                id="nameError"
                name="nameError"
              >
                <img
                  src={error}
                  alt="error"
                  id="error-icon"
                  style={{
                    visibility: this.state.nameError ? "visible" : "hidden",
                  }}
                />
                {this.state.nameError}
              </div> */}
        </div>
        <div className="form__container-time">
          <h4 className="form__container-time-title">Time</h4>
          <label id="time">Please select time of gig: </label>
          <input
            type="date"
            name="date"
            className="form__container-date-input"
            id="date"
            placeholder="Please add the address"
            // value={this.state.name}
            // onChange={this.handleChange}>
          />

          {/* <div
                className="form__container-name-error"
                id="nameError"
                name="nameError"
              >
                <img
                  src={error}
                  alt="error"
                  id="error-icon"
                  style={{
                    visibility: this.state.nameError ? "visible" : "hidden",
                  }}
                />
                {this.state.nameError}
              </div> */}
        </div>
      </form>
    </div>
  );
}

export default FormContent;
