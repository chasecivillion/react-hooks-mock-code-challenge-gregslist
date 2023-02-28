import React, {useState} from "react";

function ListingCard({description, image, location}) {

  const [button, setButton] = useState(false)

  const handleClick = () => {
    setButton(button => !button)
  }
  // function turnOff(e) {
  //   if(e.target.textContent = "★") {
  //     return "☆" 
  //   }
  // }
  // function turnOn(e) {
  //   if(e.target.textContent = "☆") {
  //     return "★" 
  //   }
  // }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {true ? (
          <button onClick={handleClick}className="emoji-button favorite active">{(button ? "★" : "☆")}</button>
        ) : (
          <button onClick={handleClick}className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
