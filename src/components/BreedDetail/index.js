import React from "react";

function BreedDetail({ name }) {
  const [breedImages, setBreedImages] = React.useState([]);
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    fetch(`https://dog.ceo/api/breed/${name}/images`)
      .then(response => response.json())
      .then(data => setBreedImages(data.message))
      .finally(() => setLoading(false));
  }, [name]);

  if (loading) {
      return <p>Loading...</p>
  }

  return (
    <div>
      <h1>{`Images of ${name} dogs`}</h1>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {breedImages.map(image => (
          <li key={image} style={{ listStyle: 'none', margin: '10px' }}>
            <img style={{
              objectFit: 'cover',
              height: '200px',
              width: '200px',
            }} src={image} alt={image} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BreedDetail;
