import Link from 'next/link';

import * as s from './styles';

export type LinkWrapperProps = {
  href: string;
  children: React.ReactNode;
};

const LinkWrapper = ({ href, children }: LinkWrapperProps) => (
  <s.Wrapper aria-label="LinkWrapper component">
    <Link href={href}>{children}</Link>
  </s.Wrapper>
);

export default LinkWrapper;
