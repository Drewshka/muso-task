import { Link } from "react-router-dom";
import "./UsersPage.scss";
import React, { Component } from "react";
import Hero from "../../components/Hero/Hero";
import UsersList from "../../components/UsersList/UsersList";
import axios from "axios";
const apiURL = "http://localhost:8080";
const usersURL = `${apiURL}/users`;

// import Photo from "../../assets/images/Upload-video-bike.jpg";
// export default function GigsPage() {
export default class UsersPage extends Component {
  state = {
    users: [],
    selectedUser: null,
  };

  //   componentDidMount() {
  //     axios.get(usersURL).then((r) => {
  //       this.setState({ usersData: JSON.parse(r.data) });
  //     });
  //   }

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

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchUserDetails();
    }
  }

  render() {
    // *filter variable -> filters out video from users list which is being displayed in hero
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

    return (
      <section className="users">
        <h1 className="users__title">Users Page</h1>
        <Hero user={this.state.selectedUser} />
        <UsersList users={filteredUsers} />

        {/* <UsersList users={this.state.users} /> */}
        {/* <article className="users__current"></article> */}
        {/* {usersList.map((user) => {
          return (
            <Link
              to={`/${user.id}`}
              key={user.id}
              style={{ textDecoration: "none" }}
            >
              <article className="users__card">
                <h3>{user.name}</h3>
                <p>{user.address}</p>
                <p>{user.city}</p>
                <p>{user.country}</p>
                <p>{user.instrument}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.bio}</p>
              </article>
            </Link>
          );
        })} */}
      </section>
    );
  }
}
