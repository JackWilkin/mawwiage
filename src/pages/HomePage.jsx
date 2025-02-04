import styled from 'styled-components';
import { sage } from '../styles/colors';

export default function HomePage() {
  return (
    <Background>
        <p>
          Homepage for Rose and May's wedding.
        </p>
    </Background>
  );
}

const Background = styled.div`
  color: ${sage};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-grow: 1;
  height: 100%;
`;
