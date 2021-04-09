import React, { useState, useEffect } from 'react';
import './percentage.css';


function Percentage(props) {
  const {skillsState} = props;
  const [percentage, updatePercentage] = useState((skillsState.JavaScript+skillsState.HTML+skillsState.CSS+skillsState.React)*5);
  
  useEffect(() => {
    calcPercentage(); 
    // eslint-disable-next-line
  }, [skillsState]);

  function calcPercentage() {
    let temp = Object.entries(skillsState);
    let percentageValue = temp.reduce((prev, curr) => {
        return prev+curr[1]
    }, 0) / (temp.length*5);
    updatePercentage(percentageValue*100);
    console.log("Percentage is -> "+ percentageValue);
  }

  return (
    <div className="percentage">
      <button className="percentageButton" onClick={()=> calcPercentage()}>Get Percentage</button>
      <span className="percentageValue">{percentage}%</span>
    </div>
  );
}

export default Percentage;
