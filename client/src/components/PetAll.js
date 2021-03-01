import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';
import { Row, Col } from 'antd';

const  PetAll = (props) => {
  const [allPets, setAllPets] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/pet')
      .then((res) => {
        console.log('res.data');
        console.log(res);
        setAllPets(res.data);
        console.log(allPets);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="ParentDiv">
      <div className="ChildDiv">
        <h1>Pet Shelter</h1>
        <p>
          <Link to={`/pets/new`} className="alignRight">
            add a pet to a shelter
          </Link>
        </p>
        <h3>These pets are looking for a good home</h3>
        <Row>
          <Col>
            <section>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                {allPets.map((element, index) => (
                  <tbody>
                    <tr>
                      <td>{element.name}</td>
                      <td>{element.type}</td>
                      <td>
                        <Link to={`/pets/${element._id}`}>details</Link>
                        <span> | </span>
                        <Link to={`/pets/${element._id}/edit`}>edit</Link>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </section>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PetAll;
