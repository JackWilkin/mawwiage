import styled from 'styled-components';
import arch from '../images/rose_may_flower_arch.jpg';
import { lavendar } from '../styles/colors';

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

const Background = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
  padding: 1rem;
`;

const Image = styled.img`
  max-width: 40rem;
`;

const Text = styled.p`
  color: ${lavendar};
  font-family: cursive;
  font-weight: bold
`;
