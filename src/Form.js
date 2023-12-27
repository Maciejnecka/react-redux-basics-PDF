import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCounterAction } from './actions/counter';

const Form = () => {
  const counter = useSelector((state) => state.counter);
  const [inputCounter, setInputCounter] = useState(counter);

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Uruchom akcje [setCounter]');
    dispatch(setCounterAction(Number(inputCounter)));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          onChange={({ target }) => setInputCounter(target.value)}
          value={inputCounter}
        />
        <input type="submit" value="zapisz" />
      </div>
    </form>
  );
};

export default Form;
