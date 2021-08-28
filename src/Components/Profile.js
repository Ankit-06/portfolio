import profile from "./pictures/profile.jpg";

const Profile = () => {
  return (
    <div className="container">
      <img id="profile-picture" src={profile} alt="profile" />
      <h3 id="fullName">Ankit Mishra</h3>
    </div>
  );
};

export default Profile;
