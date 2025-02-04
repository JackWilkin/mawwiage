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
  align-items: center;
  color: ${sage};
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  height: 100%;
  justify-content: center;
`;
