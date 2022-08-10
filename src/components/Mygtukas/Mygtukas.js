import React from 'react';

import './Mygtukas.css';

const Mygtukas = ({pirmas, antras, text, operator, setSum}) => {

  const handleOperation = () => {
    switch(operator) {
      case '+':
        setSum(parseInt(pirmas) + parseInt(antras))
        break
      case '-':
        setSum(parseInt(pirmas) - parseInt(antras))
        break
      case '*':
        setSum(parseInt(pirmas) * parseInt(antras))
        break
      case '/':
        setSum(parseInt(pirmas) / parseInt(antras))
        break

    }
  }

  return (
  <button onClick={handleOperation}>{text}</button>
  )
};

export default Mygtukas;
