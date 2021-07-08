import BaseTemplate from 'templates/Base';

import { Container } from 'components/Container';

import * as s from './styles';

const Home = () => (
  <BaseTemplate>
    <Container>
      <s.Wrapper>
        <h1>workout/</h1>
      </s.Wrapper>
    </Container>
  </BaseTemplate>
);

export default Home;
