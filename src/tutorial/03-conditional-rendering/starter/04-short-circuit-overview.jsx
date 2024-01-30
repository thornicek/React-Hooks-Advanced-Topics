import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [text, setText] = useState('')
  const [name, setName] = useState('peter')
  return (
    <div>
      <h4>Falsy OR: {text || 'hello world'}</h4>
      <h4>Falsy AND: {text && 'hello world'}</h4>
      <h4>Truthy OR: {text || 'hello world'}</h4>
      <h4>Truthy AND: {text && 'hello world'}</h4>
    </div>
  )
};
export default ShortCircuitOverview;
