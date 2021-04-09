import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../Rating/rating';
import './skill.css';

function Skill(props) {
  const {hasUp, hasDown, rating, skill, changeSkillsOrdering, updateState } = props;

  const onUp = (skill) => {
    changeSkillsOrdering(1, skill)
  }

  const onDown = (skill) => {
    changeSkillsOrdering(2,skill)
  }

  return (
    <div name={skill} className="skill">
        <div className="skillName">{skill}</div>
        <div className="skillRating">
            <span className={"arrow " + (hasUp ? "" : "remove")} onClick={()=>{onUp(skill);}}>↑</span>
            <span className={(hasUp ? "remove" : "")}>&nbsp;&nbsp;</span>
            <Rating 
                updateState={updateState} 
                rating={rating} 
                skillName={skill}
            />
            <span className={"arrow " + (hasDown ? "" : "remove")} onClick={()=>{onDown(skill);}}>↓</span>
            <span className={(hasDown ? "remove" : "")}>&nbsp;&nbsp;</span>
        </div>
    </div>
            
  );
}

Skill.propTypes = {
    skill: PropTypes.string.isRequired,
    changeSkillsOrdering: PropTypes.func.isRequired,
    updateState: PropTypes.func.isRequired,
    rating: PropTypes.number.isRequired
}

export default Skill;