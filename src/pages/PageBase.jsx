import styled from 'styled-components';
import { periwinkle } from '../styles/colors';

export default function PageBase(props) {
    const {children} = props;
    return (
        <Background>
            {children}
        </Background>
    );
}

const Background = styled.div`
  align-items: center;
  background-color: ${periwinkle};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: calc(100% - 60px);
  justify-content: center;
  width: 100%;
`;
