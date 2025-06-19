import styled from 'styled-components';
import arch from '../images/rose_may_flower_arch.jpg';
import squareArch from '../images/rose_may_flower_arch_square.jpg';
import { lavendarFloral } from '../styles/colors';
import ImageCard from '../components/ImageCard'

export default function SaveTheDate() {
  return (
    <Background>
      <ImageCard 
        desktopImage={arch} 
        mobileImage={squareArch} 
        textColor={lavendarFloral}
      >
        Save the date! September 27th 2025, Perth, Ontario.
      </ImageCard>
    </Background>
  );
}

const Background = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100% - 60px);
  justify-content: center;
  width: 100%;
`;
