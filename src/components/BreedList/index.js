import React from "react";
import Breed from "./../Breed";

function BreedList() {
  const [breedArray, setBreedArray] = React.useState([]);

  React.useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json())
      .then(data => setBreedArray(Object.keys(data.message)));
  }, []);

  return (
    <ul>
      {breedArray.map(breed => (
        <li key={breed}>
          <Breed name={breed} />
        </li>
      ))}
    </ul>
  );
}

export default BreedList;
