import styled from 'styled-components';
import arch from '../images/rose_may_flower_arch.jpg';
import { lavendar, mint } from '../styles/colors';
import '../styles/App.css';

const Background = styled.div`
  background-color: ${mint};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

const Image = styled.img`
  max-width: 40rem;
`;

const Text = styled.p`
  color: ${lavendar};
  font-family: cursive;
  font-weight: bold
`;

export default function SaveTheDate() {
  return (
    <Background>
      <Image src={arch} alt="rose_may_flower_arch.jpg" />
      <Text>
        Save the date! September 27th 2025, Perth, Ontario.
      </Text>
    </Background>
  );
}
