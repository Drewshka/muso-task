import "./UsersList.scss";
import { Link } from "react-router-dom";

function UsersList({ users }) {
  console.log(users);
  return (
    <section className="list">
      <h3 className="list__header">Users List</h3>
      {users.map((user) => {
        return (
          <Link
            to={`/users/${user.id}`}
            key={user.id}
            style={{ textDecoration: "none" }}
          >
            <article className="list__card">
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
      })}
    </section>
  );
}

export default UsersList;
