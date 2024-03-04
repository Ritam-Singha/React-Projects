import ProfilePhoto from "./assets/goddam2.jpg";
function Card() {
  return (
    <div className="card">
      <img src={ProfilePhoto} alt="This is an image" className="ritamphoto" />
      <h2 className="card-title">Ritam Singha</h2>
      <p className="card-text">I am an engineer</p>
    </div>
  );
}

export default Card;
