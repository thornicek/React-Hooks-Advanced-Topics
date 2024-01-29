import { useState } from 'react';
import {data} from '../../../data'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'reading books'
  })


  const displayPerson = () => {
    setPerson({name:'Tomas', age: 28, hobby: 'NHL'})
  }


  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys {person.hobby}</h4>
      <button type='button' className='btn' onClick={displayPerson}>
        show Tomas
      </button>
    </>
  )
};

export default UseStateObject;
