import React, { useState } from "react";

function Button(props) {
  let { code, live } = props;
  return (
    <div className="buttons">
      <a href={code} target="_blank">
        <button>CODE</button>
      </a>

      <a href={live} target="_blank">
        <button>LIVE</button>
      </a>
    </div>
  );
}

function ProjectContainer(props) {
  let { name, src, code, live } = props;

  return (
    <div className="project">
      <img src={src} alt="" />

      <h1>{name}</h1>

      <Button code={code} live={live} />
    </div>
  );
}

function Project() {
  const [projName, setProjName] = useState([
    {
      name: "To-do List",
      src: "https://thumbs.gfycat.com/HeftyDescriptiveChimneyswift-max-1mb.gif",
      code: "https://github.com/Ankit-06/Todo-list",
      live: "https://todo-list-ankit.netlify.app/",
    },
    {
      name: "Weather App",
      src: "https://cdn.dribbble.com/users/28455/screenshots/1389791/weather.gif",
      code: "https://github.com/Ankit-06/Weather-App",
      live: "https://weather-app-ankit.netlify.app/",
    },
    {
      name: "Online Examination",
      src: "https://mintbook.com/assetsNew/img/ams.gif",
      code: "https://github.com/Ankit-06/OnlineExamination-Project",
      live: "",
    },
  ]);

  return (
    <div className="project-container">
      {projName.map((proj) => {
        return (
          <ProjectContainer
            key={proj.name}
            name={proj.name}
            src={proj.src}
            code={proj.code}
            live={proj.live}
          />
        );
      })}
    </div>
  );
}

export default Project;
