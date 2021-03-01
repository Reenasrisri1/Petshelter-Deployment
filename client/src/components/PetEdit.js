import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';

const PetEdit = (props) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [skill1, setSkill1] = useState('');
  const [skill2, setSkill2] = useState('');
  const [skill3, setSkill3] = useState('');
   const [loading, setLoading] = useState(false);
  const [errs, setErrs] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8000/api/pet/${props.petId}`).then((res) => {
      console.log(res.data);
      setName(res.data.name);
      setType(res.data.type);
      setDescription(res.data.description);
      setSkill1(res.data.skill1);
      setSkill2(res.data.skill2);
      setSkill3(res.data.skill3);
      setLoading(true);
    });
  }, []);
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/pet/${props.petId}`, {
        name,
        type,
        description,
        skill1,
        skill2,
        skill3,
      })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          setErrs(res.data.errors);
        } else {
          console.log(res.data._id);
          navigate(`/`);
        }
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
      <h2>Edit {name}</h2>
      <form onSubmit={submitForm}>
        <div className="divSection">
          <div className="sidebyside">
            <label>Pet Name:</label>
            <br></br>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            {errs.name ? (
              <span className="err-text">{errs.name.message}</span>
            ) : null}
            <br></br>
            <label>Pet Type:</label>
            <br></br>
            <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
            {errs.type ? (
              <span className="err-text">{errs.type.message}</span>
            ) : null}
            <br></br>
            <label>Pet Description:</label>
            <br></br>
            <input
              type="text" value={description} 
              onChange={(e) => setDescription(e.target.value)}
            />
            {errs.description ? (
              <span className="err-text">{errs.description.message}</span>
            ) : null}
            <br></br>
            <button>Edit Pet</button>
          </div>

          <div className="sidebyside">
            <p>Skills (optional):</p>
            <label>Skill 1:</label>
            <br></br>
            <input type="text"  value={skill1} onChange={(e) => setSkill1(e.target.value)} />
            {errs.skill1 ? (
              <span className="err-text">{errs.skill1.message}</span>
            ) : null}
            <br></br>
            <label>Skill 2:</label>
            <br></br>
            <input type="text"  value={skill2} onChange={(e) => setSkill2(e.target.value)} />
            {errs.skill2 ? (
              <span className="err-text">{errs.skill2.message}</span>
            ) : null}
            <br></br>
            <label>Skill 3:</label>
            <br></br>
            <input type="text"  value={skill3}onChange={(e) => setSkill3(e.target.value)} />
            {errs.skill3 ? (
              <span className="err-text">{errs.skill3.message}</span>
            ) : null}
          </div>
        </div>
      </form>
    </div>
  );
};

export default PetEdit;
