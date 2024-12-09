import React from "react";
import project1Img from "../../trips-gallery/src/assets/project1.jpg";

function ProjectCard(props) {
  return (
    <div className="background">
      <p>{props.text}</p>
      <div>{props.isNew}</div>
      <img src={props.image} alt={props.title} />
      <p>
        {props.city}, {props.month} - {props.cost}
      </p>
    </div>
  );
}

export default ProjectCard;
