import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [ list, setList ] = useState([])

  useEffect(() => {
    fetch ("http://localhost:6001/listings")
      .then(response => response.json())
      .then(data => setList(data))
    },[])

    const display = () => {
      return (
      list.map(card=>
                      <ListingCard 
                                  key={card.id} 
                                  description={card.description}
                                  image= {card.image}
                                  location= {card.location}
                         />)
    )}    
  return (
    <main>
      <ul className="cards">
        {display()}
      </ul>
    </main>
  );
}

export default ListingsContainer;

// "id": 1,
//       "description": "heater",
//       "image": "./images/heater.jpg",
//       "location": "BROOKLYN"
