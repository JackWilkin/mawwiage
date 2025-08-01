import styled from 'styled-components';
import { royalPurple } from '../styles/colors';
import PageBase from './PageBase';

export default function Info() {
  return (
    <PageBase>
        <Text>
          Info page for Rose and May's wedding.
        </Text>
    </PageBase>
  );
}

const Text = styled.h3`
  color: ${royalPurple};
  flex-grow: 1;
  text-align: center;
`;
