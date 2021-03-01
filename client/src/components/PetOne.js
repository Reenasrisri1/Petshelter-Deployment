import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';

const PetOne = (props) => {
  const [pet, setPet] = useState({});
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get(`http://localhost:8000/api/pet/${props.id}`).then((res) => {
      console.log('res.data');
      console.log(res.data);
      setPet(res.data);
      console.log(pet);
      setLoaded(true);
    })
    .catch((err)=> console.log(err))
  }, []);
  const petDelete = (petId) => {
    axios
      .delete(`http://localhost:8000/api/pet/${petId}`)
      .then((res) => {
        console.log(res.data);
        // const filteredArrayAferDeletion = allPets.filter(
        //   (ele) => ele._id !== petId
        // );
        // setAllPets(filteredArrayAferDeletion);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Pet Shelter</h1>
      <p>
        <Link to={`/`} className="alignRight">
          back to home
        </Link>
      </p>
      <p style={{ display: 'inline-block' }}>Details about: {pet.name}</p>
      <button className="redBtn" onClick={() => petDelete(pet._id)}>
        Adopt {pet.name}
      </button>
      <div className="divSection">
        <label>Pet Type: &nbsp;&nbsp;&nbsp;&nbsp; {pet.type}</label>
        <br></br>
        <br></br>
        <label>Description: &nbsp;&nbsp;&nbsp;&nbsp; {pet.description}</label>
        <br></br>
        <br></br>
        <label style={{ float: 'top' }}>
          Skills: &nbsp;&nbsp;&nbsp;&nbsp;
          <div style={{ display: 'inline-block' }}>
            <p>{pet.skill1}</p>
            <p>{pet.skill2}</p>
            <p>{pet.skill3}</p>
          </div>
        </label>
        <br></br>
        <br></br>
        <button className="greenBtn">Like {pet.name}</button>
      </div>
    </div>
  );
};

export default PetOne;
