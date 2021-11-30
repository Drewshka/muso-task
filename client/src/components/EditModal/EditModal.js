import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
// import FormContent from "./FormContent";
import EditContent from "../EditContent/EditContent";

export default class EditModal extends Component {
  render() {
    console.log(this.props);

    const editContent = (
      <EditContent
        gig={this.props.gig}
        hideEditModalHandler={this.props.hideEditModalHandler}
      ></EditContent>
    );
    const modal = this.props.showModal ? <div>{editContent}</div> : null;
    return <div>{modal}</div>;
  }
}
