const EducationList = (props) => {
  return (
    <>
      <li className="ed-item">{props.course}</li>

      <p className="date">
        <img src={props.img} alt="" />
        {props.year}
      </p>

      <p className="clg-name">{props.name}</p>

      <p className="cgpa">{props.grade}</p>
    </>
  );
};

export default EducationList;
