import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    Summer: {
        text: "Let's hit the beach!",
        iconName: 'sun'
    },
    Winter:{
        text: "Burr , It is chilly",
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month)=>{
    if (month > 2 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
}

const SeasonDisplay = (props)=>{
    const SEASON = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[SEASON];
   // const TEXT = SEASON === 'Summer' ? "Let's hit the beach!" : "Burr , It is chilly";
  //  const ICON = SEASON === 'Summer' ? 'sun' : 'snowflake';
    console.log(SEASON);
return(
    <div className={`season-display ${SEASON}`}>
    <i className={`icon-left massive ${iconName} icon`}></i>
    <h1>{text}</h1>
    <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
)
};

export default SeasonDisplay;