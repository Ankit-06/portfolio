import EducationList from "./EducationList";
import { useState } from "react";

const About = () => {
  const [education, setEducation] = useState([
    {
      course: "Bachelor in Computer Applications",
      img: "https://img.icons8.com/ios/50/000000/calendar--v1.png",
      year: "2018-2021",
      name: "Institute of Innovation in Technology and Management, Delhi",
      grade: "Secured an aggregate of 73%.",
    },
    {
      course: "Senior Secondary Education",
      img: "https://img.icons8.com/ios/50/000000/calendar--v1.png",
      year: "2016-2017",
      name: "Kendriya Vidyalaya JNU Campus, Delhi",
      grade: "Secured an aggregate of 57.02%.",
    },
    {
      course: "Secondary Education",
      img: "https://img.icons8.com/ios/50/000000/calendar--v1.png",
      year: "2014-2015",
      name: "Kendriya Vidyalaya JNU Campus, Delhi",
      grade: "Secured 8.4 CGPA",
    },
  ]);

  return (
    <>
      <div className="about-yourself">
        <p>
          Hi, my name is Ankit Mishra. I live in Delhi. I've completed my
          Bachelor in computer applications from Guru Gobind Singh Indraprastha
          University, Delhi.
        </p>
        <p>
          I am a passionate learner who is interested in web development. I am
          looking forward to learn and experiment more about technologies like
          JavaScript, Node.Js and React.
        </p>
      </div>

      <hr />

      <div className="skills">
        <h1>Skills</h1>
        <div className="skills-container">
          <ul id="first-list">
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <ul id="second-list">
            <li>Core Java</li>
            <li>React</li>
          </ul>
          <ul id="third-list">
            <li>MySQL</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="education">
        <h1>Education</h1>
        <div className="education-container">
          <ul className="ed-items">
            {education.map((edu, index) => {
              return (
                <EducationList
                  key={index}
                  course={edu.course}
                  img={edu.img}
                  year={edu.year}
                  name={edu.name}
                  grade={edu.grade}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
