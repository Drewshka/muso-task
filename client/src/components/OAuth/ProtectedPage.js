export default function ProtectedPage(props) {
  console.log("Protected page props: ", props);
  return (
    <>
      <h1>Protected Page</h1>
      {/* This component outputs user information provided by Github after successful authentication */}
      <h2>Hey, {props.user.displayName}</h2>
      {props.user.bio && <p>{props.user.bio}</p>}
      {/* Github provides us with some additional information about user that we can output here as well */}
      <ul>
        {props.user._json.company && <li>{props.user._json.company}</li>}
        {props.user._json.blog && <li>{props.user._json.blog}</li>}
        {props.user._json.location && <li>{props.user._json.location}</li>}
        {props.user._json.email && <li>{props.user._json.email}</li>}
      </ul>
    </>
  );
}
