import "./GigsList.scss";
import { Link } from "react-router-dom";

function GigsList({ gigs }) {
  return (
    <section className="gigs">
      <h3 className="gigs__header">Gigs List</h3>
      <table className="gigs__table">
        <thead>
          <tr className="gigs__table--headers">
            <th className="gigs__table--headers-gig">Gig Name</th>
            <th className="gigs__table--headers-address">ADDRESS</th>
            <th className="gigs__table--headers-date">DATE</th>
            <th className="gigs__table--headers-time">TIME</th>
            <th className="gigs__table--headers-category">CATEGORY</th>
          </tr>
        </thead>
        <tbody className="gigs__table-body">
          {gigs.map((gig, i) => {
            return (
              <tr key={i} className="gigs__table-body-container">
                <td className="gigs__table-body-container-name">
                  <Link to={`/gigs/${gig.id}`}>{gig.gigName}</Link>
                </td>
                <td className="gigs__table-body-container-address">
                  {gig.address}
                </td>
                <td className="gigs__table-body-container-date">{gig.date}</td>
                <td className="gigs__table-body-container-time">{gig.time}</td>
                <td className="gigs__table-body-container-category">
                  {gig.category}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default GigsList;
