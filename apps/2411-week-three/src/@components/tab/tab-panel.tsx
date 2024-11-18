import styled from '@emotion/styled';
import { ComponentProps, PropsWithChildren } from 'react';

interface TabPanelProps extends ComponentProps<'div'> {
  className?: string;
}

export function TabPanel({
  children,
  className,
}: PropsWithChildren<TabPanelProps>) {
  return (
    <div className={`tab__panel-group__item ${className ? className : ''}`}>
      {children}
    </div>
  );
}

interface TabPanelGroupProps extends ComponentProps<'section'> {
  className?: string;
}

export function TabPanelGroup({
  children,
  className,
}: PropsWithChildren<TabPanelGroupProps>) {
  return (
    <Styled className={`tab__panel-group ${className ? className : ''}`}>
      {children}
    </Styled>
  );
}

const Styled = styled.section<TabPanelGroupProps>``;
