import "./GigsList.scss";
import { Link } from "react-router-dom";

function GigsList({ gigs }) {
  return (
    <section className="gigs">
      <h3 className="gigs__header">Gigs List</h3>
      <table className="gigs__table">
        <thead>
          <tr className="gigs__table--headers">
            <th className="gigs__table--headers-category">Gig Name</th>
            <th className="gigs__table--headers-category">ADDRESS</th>
            <th className="gigs__table--headers-category">DATE</th>
            <th className="gigs__table--headers-category">TIME</th>
            <th className="gigs__table--headers-category">CATEGORY</th>
          </tr>
        </thead>
        <tbody>
          {gigs.map((gig, i) => {
            return (
              <tr key={i} className="gigs__table--data">
                {/* <td className="item-name">{gig.gigName}</td> */}
                <td className="item-name">
                  <Link to={`/gigs/${gig.id}`}>{gig.gigName}</Link>
                </td>

                <td className="pad-right">{gig.address}</td>
                <td>{gig.date}</td>
                <td>{gig.time}</td>
                <td className="center-me">{gig.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default GigsList;
