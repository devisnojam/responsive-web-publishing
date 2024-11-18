import styled from '@emotion/styled';
import { ComponentProps, PropsWithChildren } from 'react';

interface TabHeaderItemProps extends ComponentProps<'li'> {
  className?: string;
}

export function TabHeaderItem({
  children,
  className,
}: PropsWithChildren<TabHeaderItemProps>) {
  return (
    <li className={`tab__header__item ${className ? className : ''}`}>
      {children}
    </li>
  );
}

interface TabHeaderProps extends ComponentProps<'ul'> {
  className?: string;
}

export function TabHeader({
  children,
  className,
}: PropsWithChildren<TabHeaderProps>) {
  return (
    <Styled className={`tab__header ${className ? className : ''}`}>
      {children}
    </Styled>
  );
}

const Styled = styled.ul<TabHeaderProps>``;
