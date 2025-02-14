import React from 'react';
import styled from 'styled-components';

export default function ImageCard(props) {
  const { 
    desktopImage, 
    mobileImage, 
    textColor, 
    children 
  } = props;

  return (
    <Card>
      <DesktopImage src={desktopImage} alt="card-image-d" />
      <MobileImage src={mobileImage} alt="card-image-m" />
      <Text color={textColor}>
        {children}
      </Text>
    </Card>
  );
}

const Card = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
`;

const Image = styled.img`
  max-width: 40rem;
  width: 100%;
`;


const DesktopImage = styled(Image)`
  @media screen and (max-width:800px) {
    display:none;
  }
`;

const MobileImage = styled(Image)`
  @media screen and (min-width:801px) {
    display:none;
  }
`;

const Text = styled.p`
  color: ${props => (props.color)};
  font-family: cursive;
  font-weight: bold;
  margin: 0;
  padding: 1rem;
`;