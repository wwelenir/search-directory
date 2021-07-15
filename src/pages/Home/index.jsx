import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import { Wrapper, Container, Logo, Search, Map, CarousselTitle, Carrousel } from './styles'

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

import { Card, RestaurantCard, Modal } from '../../components';

export default () => {
  const [inputValue, setInputValue] = useState();
  const [modalOpened, setModalOpened] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

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
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>
          <CarousselTitle>Na sua Área</CarousselTitle>
          <Carrousel {...settings}>
            <Card photo={restaurante} title='nome do resturante' />
            <Card photo={restaurante} />
            <Card photo={restaurante} />
            <Card photo={restaurante} />
            <Card photo={restaurante} />
            <Card photo={restaurante} />
          </Carrousel>
          <button onClick={() => setModalOpened(true)}>Abrir Modal</button>
        </Search>
        <RestaurantCard />
      </Container >
      <Map />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
  )
}