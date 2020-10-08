import React, { useState, useEffect } from 'react';
import {
  Link,
  useHistory,
  useParams,
} from 'react-router-dom';
import BorderTopHome from './BorderTopHome'
const QuestionSelect =()=> {

  const [regionAr, setRegionAr] = useState("");
  const [regionMa, setRegionMa] = useState("");
  const [regionAu, setRegionAu] = useState("");
  const [regionHa, setRegionHa] = useState("");
  const [check, setCheck] = useState("est le reponse est");

  const { questionId } = useParams();
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

  
  const onCkeckResult = () => {
    if (JSON.stringify(imputResult) === JSON.stringify(goodresult)){
    //setCheck("bienjouer!")}
    history.push("/3")}
    else {
      setCheck("t null!")
    }
  }

  return(
    <div clasName="">
      <BorderTopHome />
      <h2>Hello from Question Select</h2>

      <p>Metre les bonne region au bonne endroi.</p>
      <div className="">
        <label htmlFor="region-select-ar" clasName="">Quelle est cette region:</label>
          <select 
            clasName=""
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

          <label htmlFor="region-select-ma" clasName="">Quelle est cette region:</label>
          <select 
            clasName=""
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

          <label htmlFor="region-select-au" clasName="">Quelle est cette region:</label>
          <select 
            clasName=""
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

          <label htmlFor="region-select-ha" clasName="">Quelle est cette region:</label>
          <select 
            clasName=""
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
      <button className="" type="button" onClick={() => onCkeckResult()}  >ok</button>
      {check}
    </div>
  )
}

export default QuestionSelect;