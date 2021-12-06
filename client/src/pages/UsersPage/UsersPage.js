// import { Link } from "react-router-dom";
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

// export default function GigsPage() {
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
      // showModal: false,
      // showEditUserModal: false,
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

    console.log(currUserId);

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

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchUserDetails();
    }
    if (prevState.users !== this.state.users) {
      this.setState({ users: this.state.users });
    }

    // console.log(prevState);
    // console.log(this.state.users);
  }

  render() {
    // *filter variable -> filters out user from users list which is being displayed in hero
    const filteredUsers = this.state.selectedUser
      ? this.state.users.filter(
          (user) => user.id !== this.state.selectedUser.id
        )
      : this.state.users;

    // console.log(this.state.users);
    const usersList = this.state.users;
    const currUser = this.state.selectedUser;
    console.log(usersList);
    console.log(currUser);

    if (this.state.selectedUser === null) {
      return <p>Loading...</p>;
    }

    // const props = { user: this.state.selectedUser };

    return (
      <section className="users">
        <h2 className="users__title">Musicians</h2>
        <div className="users__button">
          <button
            className="users__button-post"
            type="button"
            onClick={this.showModalHandler}
          >
            Post a Gig
          </button>
          <button
            className="users__button-signUp"
            type="button"
            onClick={this.showSignUpModalHandler}
          >
            Sign-up
          </button>
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

        {/* <Hero {...props} /> */}

        <UsersList users={filteredUsers} />
      </section>
    );
  }
}
