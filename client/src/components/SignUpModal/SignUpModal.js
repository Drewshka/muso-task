import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
// import FormContent from "../FormContent/FormContent";
import SignUpContent from "../SignUpContent/SignUpContent";

export default class FormModal extends Component {
  render() {
    console.log(this.props);

    const signUpContent = (
      <SignUpContent
        // user={this.props.user}
        hideModalHandler={this.props.hideModalHandler}
      ></SignUpContent>
    );
    const modal = this.props.showSignUpModal ? (
      <div>{signUpContent}</div>
    ) : null;
    return <div>{modal}</div>;
  }
}
