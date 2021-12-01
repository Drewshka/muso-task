import "./Hero.scss";

function Hero({ user }) {
  console.log(...user);

  return (
    <section className="hero">
      <h3 className="hero__curr-user">Current User</h3>
      {user.map((userProp, i) => {
        return (
          <article key={i} className="hero__curr-user__card">
            <h3>{userProp.name}</h3>
            <p>{userProp.address}</p>
            <p>{userProp.city}</p>
            <p>{userProp.country}</p>
            <p>{userProp.instrument}</p>
            <p>{userProp.email}</p>
            <p>{userProp.phone}</p>
            <p>{userProp.bio}</p>
          </article>
        );
      })}
    </section>
  );
}

export default Hero;

// *old code before mapping
// const props = { user: this.state.selectedUser };

// console.log(...user);

// console.log(user[0].name);

// return (
//   <div className="hero">
//     <section className="hero__curr-user">
//       <h1>Current User</h1>
//       <article className="hero__curr-user__card">
//         <h3>{user.name}</h3>
//         <p>{user.address}</p>
//         <p>{user.city}</p>
//         <p>{user.country}</p>
//         <p>{user.instrument}</p>
//         <p>{user.email}</p>
//         <p>{user.phone}</p>
//         <p>{user.bio}</p>
//         {/* <button>Post a Gig</button> */}
//       </article>
//     </section>
//   </div>
// );
