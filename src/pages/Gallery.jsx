import styled from 'styled-components';
import cape from '../images/cape-reinga.jpg';
import corn from '../images/corn.jpg';
import soup from '../images/soup-sandos.jpg';
import wine from '../images/wine-cheers.jpg';
import { lavendar, mint } from '../styles/colors';

export default function Gallery() {
  return (
    <Background>
      <ImageContainer>
        <Image src={corn} alt="rose_may_flower_arch.jpg" />
      </ImageContainer>
      <ImageContainer>
        <Image src={soup} alt="rose_may_flower_arch.jpg" />
      </ImageContainer>
      <ImageContainer>
        <Image src={cape} alt="rose_may_flower_arch.jpg" />
      </ImageContainer>
      <ImageContainer>
        <Image src={wine} alt="rose_may_flower_arch.jpg" />
      </ImageContainer>
    </Background>
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
