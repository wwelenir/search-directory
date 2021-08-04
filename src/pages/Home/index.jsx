import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import { Wrapper, Container, Logo, Search, CarousselTitle, Carrousel } from './styles'

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

import { Card, RestaurantCard, Modal, Map } from '../../components';
import { useSelector } from 'react-redux';

export default () => {
  const [inputValue, setInputValue] = useState();
  const [query, setQuery] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants } = useSelector((state) => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleChange(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue);
    }
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do restaurante" />
          <TextField
            label='Pesquisar restaurantes'
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          ><Input
              value={inputValue}
              onKeyPress={handleChange}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>
          <CarousselTitle>Na sua Área</CarousselTitle>
          <Carrousel {...settings}>
            {restaurants.map((restaurant) =>
              <Card
                key={restaurant.place_id}
                photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
                title={restaurant.name}
              />
            )}
          </Carrousel>
          <button onClick={() => setModalOpened(true)}>Abrir Modal</button>
        </Search>
        {restaurants.map(restaurant =>
          <RestaurantCard restaurant={restaurant} />
        )}
      </Container >
      <Map query={query} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
  )
}