import styled from 'styled-components';
import galleryImages from '../images';
import { lavendar, mint } from '../styles/colors';

export default function Gallery() {
  const imageContainers = galleryImages.map(createImageContainer);

  return (
    <Background>
      {imageContainers}
    </Background>
  );
}

function createImageContainer(image) {
  return (
    <ImageContainer>
      <Image src={image}/>
    </ImageContainer>
  );
}

const Background = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ImageContainer = styled.div`
  align-items: center;
  background-color: white;
  border: 1px solid ${lavendar};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.5rem;
  padding: 1rem;
`;

const Image = styled.img`
  max-width: 20rem;
  border: 1px solid ${mint};
`;
