import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
// import FormContent from "./FormContent";
import FormContent from "../FormContent/FormContent";

export default class FormModal extends Component {
  render() {
    console.log(this.props);

    const formContent = (
      <FormContent
        user={this.props.user}
        hideModalHandler={this.props.hideModalHandler}
        state={this.state}
      ></FormContent>
    );
    const modal = this.props.showModal ? <div>{formContent}</div> : null;
    return <div>{modal}</div>;
  }
}
