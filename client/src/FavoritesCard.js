import React from 'react';
import { Link } from 'react-router-dom';
import pinIcon from './assets/pin_icon.jpg';
import pinIconActive from './assets/pin_icon_clicked.jpg';

function FavoritesCard({ favorite }) {
  const { location } = favorite;
  const { name, city, state, image, sunrise, sunset, goldenHour, dayLength } = location;
  const isFavorite = true;

  const handleFavoriteClick = () => {
    // Handle favorite click logic here
  };

  return (
    <div className="location-card-wrapper">
      <div className="card card-compact w-96 bg-primary-color shadow-xl flex justify-center items-center" style={{ marginRight: '20px' }}>
        <div className="h-60 flex items-center justify-center">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="card-body flex flex-col items-center">
          <div className="flex justify-center items-center">
            <h2 className="card-title text-center">{name}</h2>
            <div className="relative group">
              <img
                src={isFavorite ? pinIconActive : pinIcon}
                alt="Favorite"
                style={{ width: '60px', height: '60px' }}
                className="cursor-pointer"
                onClick={handleFavoriteClick}
              />
              <div className="absolute top-12 right-700 bg-primary text-white text-xs invisible group-hover:visible p-2 rounded w-24 h-22 flex items-center justify-center">
                {isFavorite ? "Click me to remove this spot from your favorites" : "Click me to add this spot to your favorites"}
              </div>
            </div>
          </div>
          <h3>{city}, {state}</h3>
          <div className="tooltip tooltip-primary tooltip-right" data-tip={location.timezone}>
            <div>
              <p><strong>Sunrise:</strong> {sunrise}</p>
              <p><strong>Sunset:</strong> {sunset}</p>
              <p><strong>Golden Hour:</strong> {goldenHour}</p>
              <p><strong>Day Length:</strong> {dayLength} Hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoritesCard;