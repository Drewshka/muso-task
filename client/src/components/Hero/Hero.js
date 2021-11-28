import "./Hero.scss";

function Hero({ user }) {
  console.log(user);
  return (
    <div className="hero">
      <section className="hero__curr-user">
        <h1>Current User</h1>
        <article className="hero__curr-user__card">
          <h3>{user.name}</h3>
          <p>{user.address}</p>
          <p>{user.city}</p>
          <p>{user.country}</p>
          <p>{user.instrument}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.bio}</p>
          {/* <button>Post a Gig</button> */}
        </article>
      </section>
    </div>
  );
}

export default Hero;
