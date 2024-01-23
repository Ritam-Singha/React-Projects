import profilePhoto from "./assets/ritam2.jpg";

function Card() {
  return (
    <div className="card">
      <img src={profilePhoto} alt="profile picture" className="ritamphoto" />
      <h2 className="card-title">Ritam Singha</h2>
      <p className="card-text">
        Hey, I am an Engneering student, currently doing b.tech in CSE.
      </p>
    </div>
  );
}
export default Card;
