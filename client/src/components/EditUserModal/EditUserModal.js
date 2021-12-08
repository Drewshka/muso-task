import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import EditUserContent from "../EditUserContent/EditUserContent";

export default class EditUserModal extends Component {
  render() {
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
