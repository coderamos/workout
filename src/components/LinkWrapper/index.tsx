import Link from 'next/link';

import * as s from './styles';

export type LinkWrapperProps = {
  href: string;
  children: React.ReactNode;
  isFloat?: boolean;
};

const LinkWrapper = ({ href, children, isFloat = false }: LinkWrapperProps) => (
  <s.Wrapper aria-label="LinkWrapper component" isFloat={isFloat}>
    <Link href={href}>{children}</Link>
  </s.Wrapper>
);

export default LinkWrapper;
