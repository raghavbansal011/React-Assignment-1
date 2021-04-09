import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Skill from '../Skill/skill';
import './skills.css';

function Skills(props) {
  const { updateSkillsState, skillsState } = props;
  const skills = Object.entries(skillsState);

  function swap(index1, index2){
    let a = this[index1];
    this[index1] = this[index2];
    this[index2] = a;
  }

  function updateState(skillName, val) {
    const newState = {
        ...skillsState,
        [skillName]: val
    };
    updateSkillsState(newState);
    console.log(newState);
  }

  function changeSkillsOrdering(shift, skillName) {
    const skillToBeSorted = [...skills];
    skillToBeSorted.every(([skill], index) => {
        if (shift === 1 && skill===skillName){
            swap.call(skillToBeSorted, index-1, index)
            return false;
        } else if (shift===2 && skill===skillName){
            swap.call(skillToBeSorted, index,index+1);
            return false;
        }
        return true;
    });

    let newState = skillToBeSorted.reduce((state, [skill, rating]) => { 
        state[skill] = rating; 
        return state; 
    }, {});
    updateSkillsState(newState);
    console.log(newState);
  }

  let i = -1;
  return (
      <div className="skills">
        {_.map(skillsState, (rating, skill) => {
            i=i+1;
            return (
                <Skill hasUp={i===0 ? false : true} hasDown={i===skills.length-1 ? false: true} key={skill} skill={skill} rating={rating} updateState={updateState} changeSkillsOrdering={changeSkillsOrdering}/>
            )
        }, )}
      </div>
  );
}

Skills.propTypes = {
    updateSkillsState: PropTypes.func.isRequired,
    skillsState: PropTypes.shape({
        JavaScript: PropTypes.number.isRequired,
        HTML: PropTypes.number.isRequired,
        CSS: PropTypes.number.isRequired,
        React: PropTypes.number.isRequired,
    }).isRequired,
}

export default Skills;
