import React, { useState } from 'react';
import './Skaiciuotuvas.css';
import Mygtukas from '../Mygtukas/Mygtukas'


const Skaiciuotuvas = () =>
 {
  let [first, setFirst] = useState(0);
  let [second, setSecond] = useState(0);
  let [suma, setSum] = useState(0);
 return (
  <div className="container">
    <p className="m-3 fs-5 fw-bold">Result: {suma}</p>
      <div>
        <input  className="m-3"type ="text" placeholder='First number' onChange={(e)=> setFirst(e.target.value)}></input>
        <input type ="text"placeholder='Second number' onChange={(e)=> setSecond(e.target.value)}></input>
      </div>
      <div className="m-3 d-flex gap-2">
        <Mygtukas
          pirmas = {first}
          antras = {second}
          text = {"Sudeti"}
          operator = {"+"}
          setSum={setSum}
        />
        <Mygtukas
          pirmas = {first}
          antras = {second}
          text = {"Atimti"}
          operator = {"-"}
          setSum={setSum}
        />
        <Mygtukas
          pirmas = {first}
          antras = {second}
          text = {"Dauginti"}
          operator = {"*"}
          setSum={setSum}
        />
        <Mygtukas
          pirmas = {first}
          antras = {second}
          text = {"Dalinti"}
          operator = {"/"}
          setSum={setSum}
        />
      </div>
  </div>
)};


export default Skaiciuotuvas;


{/* <Mygtukas
pirmas = {first}
antras = {second}
text = {"Sudetis"}
operator = {"+"}
/> */}