import React from "react";
import Links from "./Links";



function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {Bio(props)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {Links()}
    </div>
  );
}

function Bio(props) {
  if (props.bio) {
    return (
      <div>
        <p>{props.bio}</p>
      </div>
    );
  }
}

export default About;
