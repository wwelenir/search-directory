import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import { Wrapper, Container, Logo, Search, CarouselTitle, Carousel, ModalTitle, ModaContent } from './styles';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

import { Card, RestaurantCard, Modal, Map, Loader, Skeleton } from '../../components';
import { useSelector } from 'react-redux';

export default () => {
  const [inputValue, setInputValue] = useState();
  const [query, setQuery] = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  function handleChange(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue);
    }
  }

  function handleOpenModal(placeId) {
    setPlaceId(placeId);
    setModalOpened(true);
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} height="46px" alt="Logo do restaurante" />
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
          {restaurants.length > 0 ? (
            <>
              <CarouselTitle>Na sua Área</CarouselTitle>
              <Carousel {...settings}>
                {restaurants.map((restaurant) =>
                  <Card
                    key={restaurant.place_id}
                    photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
                    title={restaurant.name}
                  />
                )}
              </Carousel>
            </>
          ) : (
            <>
              <Loader />
            </>
          )}
        </Search>
        {restaurants.map(restaurant =>
          <RestaurantCard key={restaurant.place_id} onClick={() => handleOpenModal(restaurant.place_id)} restaurant={restaurant} />
        )}
      </Container >
      <Map query={query} placeId={placeId} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} >
        {restaurantSelected ? (
          <>
            <ModalTitle>{restaurantSelected?.name}</ModalTitle>
            <ModaContent>{restaurantSelected?.formatted_phone_number}</ModaContent>
            <ModaContent>{restaurantSelected?.formatted_address}</ModaContent>
            <ModaContent>{restaurantSelected?.opening_hours?.isOpen() ? 'Aberto' : 'Fechado'}</ModaContent>
          </>
        ) : (
          <>
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
          </>
        )}
      </Modal>
    </Wrapper>
  )
}