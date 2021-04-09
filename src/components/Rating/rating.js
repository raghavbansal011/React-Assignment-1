import React from 'react';
import PropTypes from 'prop-types';
import './rating.css';

const ratingLevels = [1,2,3,4,5];

function Rating(props) { 
  const {skillName, rating, updateState} = props;

  return (
    <div className="rating">
      {ratingLevels.map((val)=> {
          return (
            <button 
                className={"ratingButton " + (rating===val ? "fixColor" : "") }
                key={val} 
                onClick={() =>updateState(skillName, val)
            }>{val}</button>
          )
      })}
    </div>
  );
}

Rating.propTypes = {
    skillName: PropTypes.string.isRequired,
    updateState: PropTypes.func.isRequired,
    rating: PropTypes.number.isRequired
}

export default Rating;
