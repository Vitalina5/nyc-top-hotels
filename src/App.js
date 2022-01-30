import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [hotels, setHotels] = useState(data);
  //const [showMore, setShowMore] = useState(false);

  const removeHotel = (id) => {
     const newHotels = hotels.filter(hotel => hotel.id !== id);
     setHotels(newHotels)
  }

  const setShowMore = (id) => {
    const newHotels = [];
    hotels.forEach(hotel => {
      if (hotel.id === id) {
        const changeHotel = {...hotel, showMore: !hotel.showMore};
        newHotels.push(changeHotel);
      } else {
        newHotels.push(hotel);
      }
    });
    setHotels(newHotels); 
  }

  return (
    <div>
      <div className="container">
        <h1>nyc top {hotels.length} hotels</h1>
      </div>

      {hotels.map((hotel => {
        const {id, hotelName, description, image, source, showMore} = hotel;
        return (
          <div key={id}>
            <div className='container'>
              <h2>{id} - {hotelName}</h2>
            </div>
            <div className='container'>
              <p>{showMore ? description : description.substring(0, 180) + "..."}
              <button onClick={() => setShowMore(id)}>{showMore ? "Show less" : "Show more"}</button>
              </p>
            </div>
            <div className='container'>
              <img src={image} width="500px" />
            </div>
            <div className='container'>
              <p>{source}</p>
            </div>
            <div className='container'>
              <button className='btn' onClick={() => removeHotel(id)}>remove</button>
            </div>
          </div>
        )
      }))}

    </div>
  );
}

export default App;
