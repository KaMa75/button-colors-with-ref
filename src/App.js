import React, {useRef} from 'react';

import Button from './components/Button';
import ButtonFwdRef from './components/ButtonFwdRef';
import './App.css';

function App() {
  const buttonRef = useRef();

  const handleOnClick = () => {
    buttonRef.current.style.backgroundColor = 'red';
    buttonRef.current.style.color = 'white';
  }

  return (
    <div>
      <Button/>
      <ButtonFwdRef ref={buttonRef} onClick={handleOnClick} />
    </div>
  );
}

export default App;
