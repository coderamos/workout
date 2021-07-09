import { Map as MapIcon } from '@styled-icons/feather';
import LinkWrapper from 'components/LinkWrapper';

import { Container } from 'components/Container';

import * as s from './styles';

const AboutTemplate = () => (
  <s.Wrapper>
    <LinkWrapper href="/">
      <MapIcon size={32} aria-label="about" />
    </LinkWrapper>
    <Container>
      <s.Content>
        <s.HeadingWrapper>heading</s.HeadingWrapper>
        <s.BodyWrapper>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            nisi facilis esse tenetur fuga. Possimus, quo vitae quisquam
            obcaecati quis cum neque eos, quae ducimus illo atque eligendi in,
            deleniti quam perferendis quibusdam sapiente veniam nobis magni nemo
            laudantium quas ab culpa. Neque, deleniti tempora accusamus
            perspiciatis esse adipisci fuga a corrupti delectus itaque dolores
            quae ipsam sed repellat. Vero quam harum repellat quisquam aut
            aliquid unde, veniam placeat, pariatur amet quia optio nesciunt
            natus consequatur? Ullam, nesciunt facere ad numquam recusandae
            repellat amet alias id, reiciendis illo consequatur soluta, quae
            modi aperiam accusamus quibusdam earum repellendus cum iste
            blanditiis?
          </p>
        </s.BodyWrapper>
      </s.Content>
    </Container>
  </s.Wrapper>
);

export default AboutTemplate;
