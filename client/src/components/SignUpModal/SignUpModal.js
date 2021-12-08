import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import SignUpContent from "../SignUpContent/SignUpContent";

export default class FormModal extends Component {
  render() {
    const signUpContent = (
      <SignUpContent
        hideModalHandler={this.props.hideModalHandler}
        state={this.props.state}
      ></SignUpContent>
    );
    const modal = this.props.showSignUpModal ? (
      <div>{signUpContent}</div>
    ) : null;
    return <div>{modal}</div>;
  }
}
