import "./HeroGig.scss";

function HeroGig({ gig }) {
  console.log(gig);
  return (
    <div className="heroGig">
      <section className="heroGig__curr-gig">
        <h1>Current Gig</h1>
        <article className="heroGig__curr-gig__card">
          <h3>{gig.gigName}</h3>
          <p>{gig.address}</p>
          <p>{gig.date}</p>
          <p>{gig.time}</p>
          <p>{gig.category}</p>
          <p>{gig.venue}</p>
          <p>{gig.description}</p>
          <p>Posted by: {gig.userName}</p>
          {/* <p>User ID: {gig.userID}</p> */}
        </article>
      </section>
    </div>
  );
}

export default HeroGig;
