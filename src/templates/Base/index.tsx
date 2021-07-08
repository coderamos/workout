import * as s from './styles';

export type BaseTemplateProps = {
  children: React.ReactNode;
};

const BaseTemplate = ({ children }: BaseTemplateProps) => (
  <s.Wrapper>
    <s.Content>{children}</s.Content>
  </s.Wrapper>
);

export default BaseTemplate;
