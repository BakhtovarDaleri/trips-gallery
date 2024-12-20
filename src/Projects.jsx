import React from "react";
import Heading from "./Heading";
import ProjectCard from "./ProjectCard";
import project1Img from "../../trips-gallery/src/assets/project1.jpg";
import project2Img from "../../trips-gallery/src/assets/project2.jpg";
import project3Img from "../../trips-gallery/src/assets/project3.jpg";
import project4Img from "../../trips-gallery/src/assets/project4.jpg";

const projects = [
  {
    city: "Тбилиси",
    month: "апрель",
    cost: "83.000",
    image: project1Img,
    text: "НА АВТОБУСЕ",
    isNew: true,
  },
  {
    city: "Стамбул",
    month: "март",
    cost: "110.000",
    image: project2Img,
    text: "НА САМОЛЕТЕ",
    isNew: false,
  },
  {
    city: "Дубай",
    month: "июнь",
    cost: "220.000",
    image: project3Img,
    text: "НА САМОЛЕТЕ",
    isNew: true,
  },
  {
    city: "Пхукет",
    month: "сентябрь",
    cost: "135.000",
    image: project4Img,
    text: "САМОЛЕТ + ПАРОМ",
    isNew: true,
  },
];

function Projects() {
  return (
    <div>
      <Heading level="h1" text="Галерея путешествий" />

      {projects.map(function (project) {
        return (
          <ProjectCard
            city={project.city}
            month={project.month}
            cost={project.cost}
            image={project.image}
            text={project.text}
            isNew={project.isNew}
          />
        );
      })}
    </div>
  );
}

export default Projects;
