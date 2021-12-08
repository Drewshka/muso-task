import "./UsersPage.scss";
import React, { Component } from "react";
import Hero from "../../components/Hero/Hero";
import UsersList from "../../components/UsersList/UsersList";
import FormModal from "../../components/FormModal/FormModal";
import SignUpModal from "../../components/SignUpModal/SignUpModal";
import EditUserModal from "../../components/EditUserModal/EditUserModal";
import axios from "axios";
const apiURL = "http://localhost:8080";
const usersURL = `${apiURL}/users`;

export default class UsersPage extends Component {
  state = {
    users: [],
    selectedUser: null,
    showModal: false,
    showSignUpModal: false,
    showEditUserModal: false,
  };

  //*POST GIG MODAL HANDLERS
  showModalHandler = (event) => {
    this.setState({ showModal: true });
  };

  hideModalHandler = (event) => {
    this.setState({ showModal: false });
  };

  //*USER SIGN-UP MODAL HANDLERS
  showSignUpModalHandler = (event) => {
    this.setState({
      showSignUpModal: true,
    });
  };

  hideSignUpModalHandler = (event) => {
    this.setState({ showSignUpModal: false });
  };

  //*EDIT USER MODAL HANDLERS
  showEditUserModalHandler = (event) => {
    this.setState({ showEditUserModal: true });
  };

  hideEditUserModalHandler = (event) => {
    this.setState({ showEditUserModal: false });
  };

  fetchUserDetails = () => {
    // *sets default user to first in the array
    let currUserId = this.props.match.params.id
      ? this.props.match.params.id
      : this.state.users[0].id;

    axios
      .get(`${usersURL}/${currUserId}`)

      .then(({ data }) => {
        console.log("Single User: ", data);
        this.setState({
          selectedUser: data,
        });
        // *scroll to top of page when selecting a new video
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    axios
      .get(usersURL)
      .then(({ data }) => {
        console.log("Users: ", data);
        this.setState(
          {
            users: data,
          },
          this.fetchUserDetails
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchUserDetails();
    }
  }

  render() {
    // *filter variable -> filters out user from users list which is being displayed in hero
    const filteredUsers = this.state.selectedUser
      ? this.state.users.filter(
          (user) => user.id !== this.state.selectedUser.id
        )
      : this.state.users;

    if (this.state.selectedUser === null) {
      return <p>Loading...</p>;
    }

    return (
      <section className="users">
        <h2 className="users__title">Musicians</h2>
        <div className="users__button">
          {/* POST A GIG */}
          <button
            className="users__button-post"
            type="button"
            onClick={this.showModalHandler}
          >
            Post a Gig
          </button>
          {/* SIGN-UP */}
          <button
            className="users__button-signUp"
            type="button"
            onClick={this.showSignUpModalHandler}
          >
            Sign-up
          </button>
          {/* EDIT USER */}
          <button
            className="users__button-edit"
            type="button"
            onClick={this.showEditUserModalHandler}
          >
            Edit User
          </button>
        </div>
        <FormModal
          showModal={this.state.showModal}
          hideModalHandler={this.hideModalHandler}
          user={this.state.selectedUser}
          // state={this.state}
        ></FormModal>

        <SignUpModal
          showSignUpModal={this.state.showSignUpModal}
          hideModalHandler={this.hideSignUpModalHandler}
          state={this.state}
        ></SignUpModal>

        <EditUserModal
          showEditUserModal={this.state.showEditUserModal}
          hideModalHandler={this.hideEditUserModalHandler}
          user={this.state.selectedUser}
        ></EditUserModal>

        <Hero user={this.state.selectedUser} users={this.state.users} />

        <UsersList users={filteredUsers} />
      </section>
    );
  }
}
