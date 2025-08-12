import styled from 'styled-components';
import { royalPurple } from '../styles/colors';
import PageBase from './PageBase';

export default function Registry() {
  return (
    <PageBase>
      <Link href='https://www.myregistry.com/Visitors/VisitorPassword.aspx?registryId=4938055'>www.myregistry.com</Link>
      <Text>Password: Peppercorn</Text>
    </PageBase>
  );
}

const Link = styled.a`
  color: ${royalPurple}
`;

const Text = styled.p`
  color: ${royalPurple}
`;