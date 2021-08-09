import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Skeleton from '../Skeleton';

const Card = styled.div`
  dysplay: flex;
  justify-content: center;
  padding: 5px;
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

const Title = styled.p`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #ffffff;
  font-size: 16px;
`;

export default ({ photo, title }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const imageLoaded = new Image();
    imageLoaded.src = photo;
    imageLoaded.onload = () => setImageLoaded(true);
  }, [photo])
  return (
    <>
      {imageLoaded ? (
        <Card photo={photo} >
          <Title>{title}</Title>
        </Card>
      ) : <Skeleton width="90px" height="90px" />}

    </>
  );
}