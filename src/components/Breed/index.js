import React from "react";
import { Link } from "@reach/router";

function Breed({ name }) {
  const [breedLink, setBreedLink] = React.useState("");

  React.useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${name}/images/random`)
      .then(response => response.json())
      .then(data => setBreedLink(data.message));
  }, []);

  return (
    <Link to={name}>
      <img width="100px" src={breedLink} />
      <span>{name}</span>
    </Link>
  );
}

export default Breed;
