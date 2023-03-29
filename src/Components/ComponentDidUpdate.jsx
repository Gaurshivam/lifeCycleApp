import React, { useState } from 'react';

const ComponentDidUpdate = () => {
  const [state, setstate] = useState("");
  const [user, setUser] = useState([]);

  const AddData = () => {
    setUser([...user,state]);
  }
  return (
    <div>
      <h2>ComponentDidUpdate</h2>
      <input type="text" placeholder='Enter the value....' value={state} onChange={(e)=>setstate(e.target.value)} />
      <button onClick={AddData}>Add Data</button>
      {
        user.map((ele,i)=>{
          return (
            <p key={i}>{ele}</p>
          )
        })
      }
    </div>
  );
}

export default ComponentDidUpdate;
