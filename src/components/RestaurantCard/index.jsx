import React from 'react';
import ReactStars from "react-rating-stars-component";

import restaurante from '../../assets/restaurante-fake.png';

import { Address, Restaurant, RestaurantInfo, RestaurantePhoto, Title } from './styles';

export default ({ restaurant }) => (
  <Restaurant>
    <RestaurantInfo>
      <Title>{restaurant.name}</Title>
      <ReactStars
        count={5}
        isHalf
        value={restaurant.rating}
        edit={false}
        activeColor="#e7711c"
      />
      <Address>{restaurant.vicinity || restaurant.format_address}</Address>
    </RestaurantInfo>
    <RestaurantePhoto
      src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
      alt="Foto do restaurante"
    />
  </Restaurant>
);