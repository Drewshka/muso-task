import axios from "axios";
import { Component } from "react";

const baseUrl = "http://localhost:8080";
const profileUrl = `${baseUrl}/profile`;

class Profile extends Component {
  state = {
    isLoading: true,
    userInfo: {},
  };
  componentDidMount() {
    const token = sessionStorage.getItem("token");
    console.log(token);

    if (!token) {
      return this.setState({ failedAuth: true });
    }

    axios
      .get(profileUrl, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // If that works, set the user state to the API result and render to page
        this.setState({ userInfo: response.data });
      })
      .catch((error) => {
        // ...Otherwise we'll set that failedAuth state from line 9 to true.
        this.setState({ isLoading: true });
      });

    // axios.get(profileUrl, {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // });
  }
  render() {
    const { isLoading, userInfo } = this.state;
    return isLoading ? <h1>Loading...</h1> : <h1>Welcome {userInfo.name}!</h1>;
  }
}

export default Profile;
