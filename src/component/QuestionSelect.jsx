import React, { useState } from 'react';
import {
  useHistory,
} from 'react-router-dom';
import BorderTopHome from './BorderTopHome';
import CounterQuestionSelect from './CounterQuestionSelect';
import './QuestionSelect.css'
const QuestionSelect =()=> {

  const [regionAr, setRegionAr] = useState("");
  const [regionMa, setRegionMa] = useState("");
  const [regionAu, setRegionAu] = useState("");
  const [regionHa, setRegionHa] = useState("");

  const history = useHistory();

  const imputResult =  
    [{
    region1: regionAr,
    region2: regionMa,
    region3: regionAu,
    region4: regionHa,
    }]
  
  const goodresult =
    [{
    region1: "ardenne",
    region2: "marne",
    region3: "aube",
    region4: "haute marne",
    }]

  //debut composants
  const onCkeckResult = () => {
    if (JSON.stringify(imputResult) === JSON.stringify(goodresult)){
    history.push("/3")}
    
  }
  

  return(
    <div clasName="question-select-container">
      <BorderTopHome />
      <CounterQuestionSelect />

      <h1 className="question-select-title">Metre les departements aux bons endrois</h1>

      <div className="seclect-container"> 
        <div className="container1">
          <label htmlFor="region-select-ar" clasName="question-label1">Quel est ce departement:</label>
          <br></br>
          <select 
            clasName="select1"
            value={regionAr}
            name="region-ar" 
            id="region-ar"
            onChange={(e)=> setRegionAr(e.target.value)}
          >
            <option value="haute marne">haute marne</option>
            <option value="ardenne">ardenne</option>
            <option value="marne">marne</option>
            <option value="aube">aube</option>   
          </select> 
        </div>
        <div className="container2">
          <label htmlFor="region-select-ma" clasName="question-label2">Quel est ce departement:</label>
          <br></br>
          <select 
            clasName="select1"
            value={regionMa}
            name="region-marne" 
            id="region-marne"
            onChange={(e)=> setRegionMa(e.target.value)}
          >
            <option value="ardenne">ardenne</option>
            <option value="marne">marne</option>
            <option value="aube">aube</option>
            <option value="haute marne">haute marne</option>
          </select>
        </div> 
        <div className="container3">
          <label htmlFor="region-select-au" clasName="question-label3">Quel est ce departement:</label>
          <br></br>
          <select 
            clasName="select1"
            value={regionAu}
            name="region-aube" 
            id="region-aube"
            onChange={(e)=> setRegionAu(e.target.value)}
          > 
            <option value="ardenne">ardenne</option>
            <option value="haute marne">haute marne</option>                       
            <option value="marne">marne</option>
            <option value="aube">aube</option>
          </select>
        </div>
        <div className="container4">
          <label htmlFor="region-select-ha" clasName="question-label4">Quel est ce departement:</label>
          <br></br>
          <select 
            clasName="select1"
            value={regionHa}
            name="region-haut" 
            id="region-haut"
            onChange={(e)=> setRegionHa(e.target.value)}
          >
            <option value="marne">marne</option>
            <option value="ardenne">ardenne</option>           
            <option value="aube">aube</option>
            <option value="haute marne">haute marne</option>
          </select>
        </div>
      </div>
        <div className="question-select-button-container">
          <button className="question-select-button" type="button" onClick={() => onCkeckResult()} >validation</button>
        </div>
    </div>
  )
}

export default QuestionSelect;