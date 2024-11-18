import styled from '@emotion/styled';
import { ComponentProps, PropsWithChildren } from 'react';

interface Props extends ComponentProps<'div'> {
  className?: string;
}

export function TabContainer({
  children,
  className,
}: PropsWithChildren<Props>) {
  // children to array -> [0]:tab-header / [1]:tab-panel-group

  return (
    <StyledContainer className={`tab__container ${className ? className : ''}`}>
      {children}
    </StyledContainer>
  );
}

const StyledContainer = styled.div<Props>`
  .tab__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .tab__header {
    box-sizing: border-box;
    margin: 0;
    padding: 0 30px;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    &__item {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      ${({ theme }) => theme.fontStyles['work-sans-semi-bold']};
      font-size: 16px;
      line-height: 1.4;
      color: #858584;
      cursor: pointer;
      &:first-of-type {
        color: #fff;
        border-bottom: 2px solid #fff;
      }
    }
  }
  .tab__panel-group {
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    box-sizing: border-box;
    padding: 30px 40px 30px 40px;
    width: 100%;
    max-height: 800px;
    overflow-y: scroll;
    &__item {
      display: grid;
      grid-template-rows: repeat(5, 1fr);
      row-gap: 30px;
      &.collections {
        display: none;
      }
    }
  }

  ${({ theme }) => theme.mediaQueryHelper('tablet')} {
    .tab__panel-group {
      padding: 80px 77px;
    }
    .tab__panel-group__item {
      display: grid;
      grid-template-rows: repeat(5, 1fr);
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
      &.collections {
        display: none;
      }
    }
  }

  ${({ theme }) => theme.mediaQueryHelper('desktop')} {
    .tab__panel-group {
      padding: 80px 115px;
    }
    .tab__panel-group__item {
      display: grid;
      grid-template-rows: repeat(5, 1fr);
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      &.collections {
        display: none;
      }
    }
  }
`;
