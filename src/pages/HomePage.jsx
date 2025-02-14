import styled from 'styled-components';
import { sage } from '../styles/colors';
import PageBase from './PageBase';

export default function HomePage() {
  return (
    <PageBase>
        <Text>
          Homepage for Rose and May's wedding.
        </Text>
    </PageBase>
  );
}

const Text = styled.p`
  color: ${sage};
  flex-grow: 1;
  text-align: center;
`;
