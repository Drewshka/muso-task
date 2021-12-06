import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import EditUserContent from "../EditUserContent/EditUserContent";
// import FormContent from "../FormContent/FormContent";
// import SignUpContent from "../SignUpContent/SignUpContent";

export default class EditUserModal extends Component {
  render() {
    console.log(this.props);

    const editUserContent = (
      <EditUserContent
        user={this.props.user}
        hideModalHandler={this.props.hideModalHandler}
      ></EditUserContent>
    );
    const modal = this.props.showEditUserModal ? (
      <div>{editUserContent}</div>
    ) : null;
    return <div>{modal}</div>;
  }
}
