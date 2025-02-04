import styled from 'styled-components';
import cape from '../images/cape-reinga.jpg';
import corn from '../images/corn.jpg';
import soup from '../images/soup-sandos.jpg';
import wine from '../images/wine-cheers.jpg';
import { lavendar } from '../styles/colors';
import '../styles/App.css';

const Background = styled.div`
  background-color: ${lavendar};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
`;

const Image = styled.img`
  max-width: 20rem;
`;

export default function Gallery() {
  return (
    <Background>
      <Image src={corn} alt="rose_may_flower_arch.jpg" />
      <Image src={soup} alt="rose_may_flower_arch.jpg" />
      <Image src={cape} alt="rose_may_flower_arch.jpg" />
      <Image src={wine} alt="rose_may_flower_arch.jpg" />
    </Background>
  );
}
