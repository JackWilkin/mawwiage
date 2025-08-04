import styled from 'styled-components';
import { royalPurple } from '../styles/colors';
import PageBase from './PageBase';

export default function HomePage() {
  return (
    <PageBase>
      <Information>
        <Heading>Rosie and May are getting married!</Heading>
        <Text>
          We can't wait for our family and friends to join us. The wedding is being held in Perth, Ontario, in Canada. See our info page for some important info.
        </Text>
      </Information>
    </PageBase>
  );
}

const Information = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  text-align: left;
  overflow-y: scroll;
`;

const Heading = styled.h2`
  color: ${royalPurple};
  text-align: center;
`;

const Text = styled.p`
  color: ${royalPurple};
  text-align: center;
  height: inherit;
  margin: 1rem;
`;
