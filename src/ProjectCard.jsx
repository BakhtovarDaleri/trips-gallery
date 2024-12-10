import React from "react";

function ProjectCard(props) {
  const cardStyle = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={cardStyle} className="project-card">
      <p className="corner-label">{props.text}</p>
      <div>{props.isNew}</div>
      <p className="trip-info">
        {props.city}, {props.month} - {props.cost}
      </p>
    </div>
  );
}

export default ProjectCard;
