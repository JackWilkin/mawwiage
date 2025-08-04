import styled from 'styled-components';
import { royalPurple } from '../styles/colors';
import PageBase from './PageBase';

export default function Info() {
  return (
    <PageBase>
      <Information>
        <Heading>Dress code</Heading>
        <Text>
          Please get just as fancy as you want to (no need to be super formal)! We will be outdoors, so consider that when choosing your shoes. Please avoid lavender as the brides will be in that color.
        </Text>
        <Heading>Accommodation</Heading>
        <Text>
          Accommodation can be booked at the Colonial House Motor Inn, or elsewhere in Perth. For family members coming in from outside of Canada, we have already made some arrangements (if your last name is Wilkin, Sikes, or Burke, this means you! Please contact Tuki and John).
        </Text>
        <Heading>Travel tips</Heading>
        <Text>
          If you are flying in, the best airport to come into is Ottawa. Perth is just over an hour by car from Ottawa. If you can't get a direct flight, it should be easy to connect in Toronto or Montreal, which have larger airports than Ottawa.
        </Text>
        <Text>
          If you're driving in from the US, you have two options for border crossings: Lansdowne Port of Entry in the Thousand Islands (across from Alexandria Bay on the US side) and Johnstown Port of Entry (across from Ogdensburg, NY). These are about the same distance from Perth. Johnstown/Ogdensburg is 15-20 minutes further, but often has a shorter queue, so it should work out to be pretty similar. Remember to bring your passport!
        </Text>
        <Heading>Additional Information</Heading>
        <Text>
          We will be holding a BBQ at the venue the night before the wedding. We would love it if you brought a potluck dish!
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
  height: 100%;
`;

const Heading = styled.h3`
  color: ${royalPurple};
  flex-grow: 1;
`;

const Text = styled.p`
  color: ${royalPurple};
  flex-grow: 1;
`;
