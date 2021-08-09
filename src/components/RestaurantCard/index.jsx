import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";

import restaurante from '../../assets/restaurante-fake.png';

import { Address, Restaurant, RestaurantInfo, RestaurantePhoto, Title } from './styles';
import Skeleton from '../Skeleton';

const RestaurantCard = ({ restaurant, onClick }) => {
  console.log(restaurant)
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        {imageLoaded ? (
          <>
            <Title>{restaurant.name}</Title>
            <ReactStars
              count={5}
              isHalf
              value={restaurant.rating}
              edit={false}
              activeColor="#e7711c"
            />
            <Address>{restaurant.vicinity ?? restaurant.formatted_address}</Address>
          </>
        ) : (
          <>
            <Skeleton width="180px" height="10px" />
            <Skeleton width="180px" height="10px" />
            <Skeleton width="180px" height="10px" />
            <Skeleton width="180px" height="10px" />
            <Skeleton width="180px" height="10px" />
          </>
        )}

      </RestaurantInfo>
      <RestaurantePhoto
        imageLoaded={imageLoaded}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
        onLoad={() => setImageLoaded(true)}
        alt="Foto do restaurante"
      />
      {!imageLoaded && <Skeleton width="100px" height="100px" />}
    </Restaurant>
  )
};

export default RestaurantCard;