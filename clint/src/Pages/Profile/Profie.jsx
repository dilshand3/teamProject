import React from 'react';
import "./Profile.css";
import { ProfileData } from '../../dummydata';

const InputName = ({ name }) => {
  return (
    <>
      <p>{name}</p>
    </>
  )
}

const Profie = () => {
  return (
    <div className='ProfileContainer'>
      <h2>User Dashboard</h2>
      {
        ProfileData.map((val, index) => (
          <InputName key={index} name={val} />
        ))
      }
      <button>LOGOUT</button>
    </div>
  )
}

export default Profie;
