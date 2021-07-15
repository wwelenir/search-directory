import React from 'react';
import ReactStars from "react-rating-stars-component";

import restaurante from '../../assets/restaurante-fake.png';

import { Address, Restaurant, RestaurantInfo, RestaurantePhoto, Title } from './styles';

export default () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Nome restaurante</Title>
      <ReactStars
        count={5}
        isHalf
        value={4}
        edit={false}
        activeColor="#e7711c"
      />
      <Address>Rua teste</Address>
    </RestaurantInfo>
    <RestaurantePhoto src={restaurante} alt="Foto do restaurante" />
  </Restaurant>
);