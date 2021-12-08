import "./UsersList.scss";
import { Link } from "react-router-dom";

function UsersList({ users }) {
  return (
    <section className="list">
      <h3 className="list__header">Users List</h3>
      <div className="list__container">
        {users.map((user) => {
          return (
            <Link
              to={`/users/${user.id}`}
              key={user.id}
              style={{ textDecoration: "none" }}
            >
              <article className="list__card">
                <h3 className="list__card-name">{user.name}</h3>
                <p className="list__card-city">
                  <span id="list__span">City: </span>
                  {user.city}
                </p>
                <p className="list__card-country">
                  <span id="list__span">Country: </span>
                  {user.country}
                </p>
                <p className="list__card-instrument">
                  <span id="list__span">Instrument: </span>
                  {user.instrument}
                </p>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default UsersList;
