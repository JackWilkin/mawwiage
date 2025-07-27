import styled from 'styled-components';
import galleryImages from '../images';
import { lavendarWeb, darkSpringGreen } from '../styles/colors';
import PageBase from './PageBase';

export default function Gallery() {
  const imageContainers = galleryImages.map(createImageContainer);

  return (
    <PageBase>
      <Images>
        {imageContainers}
      </Images>
    </PageBase>
  );
}

function createImageContainer(image) {
  return (
    <ImageContainer>
      <Image src={image}/>
    </ImageContainer>
  );
}

const Images = styled.div`
  align-items: center;
  background-color: inherit;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: inherit;
`;

const ImageContainer = styled.div`
  align-items: center;
  background-color: white;
  border: 1px solid ${lavendarWeb};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.5rem;
  padding: 1rem;
`;

const Image = styled.img`
  max-width: 20rem;
  border: 1px solid ${darkSpringGreen};
`;
