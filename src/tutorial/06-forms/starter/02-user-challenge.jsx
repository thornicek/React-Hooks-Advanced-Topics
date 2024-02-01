import { useState } from 'react';
import {data} from '../../../data'

const UserChallenge = () => {
  const [name, setName] = useState('')
  const [user, setUsers] = useState(data)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name)return;
    const fakeId = Date.now()
    const newUser = {id:fakeId, name:name}
    const updatedUsers = [...user, newUser]
    setUsers(updatedUsers)
    
    setName=''
  }

  const removeUser = (id) =>{
      const updatedUsers = user.filter((person)=>person.id !== id)
      setUsers(updatedUsers)
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input'
           id='name' value={name} onChange={(e)=> setName(e.target.value)} />
        </div>

        <button type='submit' className='btn btn-block' onSubmit={handleSubmit}>
          submit
        </button>
      </form>
      {/* render users below */}
      <h4>users</h4>
      {user.map((user)=>{
        return <div key={user.id}>
          <h4>{user.name}</h4>
          <button onClick={() => removeUser(user.id)} className='btn'></button>
        </div>
      })}
    </div>
  );
};
export default UserChallenge;
