import styled from 'styled-components';

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
  display: flex;
  flex-wrap: wrap;
  height: calc(100% - 60px);
  justify-content: center;
  width: 100%;
`;
