import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ComponentProps } from 'react';

import Avatar from '../avatar';

interface Props extends ComponentProps<'div'> {
  className?: string;
  direction?: 'v' | 'h';
  size?: 'sm' | 'm' | 'lg';
  ranking?: number;
}

export default function ArtistCard({
  className,
  direction = 'v',
  size = 'm',
  ranking,
}: Props) {
  return (
    <Styled
      className={`artist-card ${className ? className : ''}`}
      direction={direction}
      size={size}
      ranking={ranking}
    >
      <Avatar className="artist-img" />
      <div className="artist-info">
        <span className="artist-info__name">Dish Studio</span>
        <div className="artist-info__total-sales">
          <span className="label">Total Sales:</span>
          <span className="value">34.53 Eth</span>
        </div>
      </div>
      <span className="ranking"></span>
    </Styled>
  );
}

const Styled = styled.div<Props>`
  padding: 20px 20px;
  background-color: #3b3b3b;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  position: relative;
  .artist-img {
    width: 120px;
    height: 120px;
  }
  .artist-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
    color: #ffffff;
    &__name {
      ${({ theme }) => theme.fonts.fontH5('work-sans')};
    }
    &__total-sales {
      display: flex;
      column-gap: 10px;
      .label {
        ${({ theme }) => theme.fonts.fontBase('work-sans')};
        color: ${({ theme }) => theme.colors.caption};
      }
      .value {
        ${({ theme }) => theme.fonts.fontBase('space-mono')};
        color: #ffffff;
      }
    }
  }
  .ranking {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.caption};
    ${({ theme }) => theme.fonts.fontBase('space-mono')};
    display: ${({ ranking }) => (ranking ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 8.33333%;
    top: 7.56302%;
    &::after {
      content: '${({ ranking }) => ranking}';
      display: block;
    }
  }

  ${({ direction, theme }) =>
    direction === 'h' &&
    css`
      padding: 20px 20px;
      flex-direction: row;
      column-gap: 12px;
      .artist-img {
        width: 24px;
        height: 24px;
      }
      .artist-info {
        ${theme.fonts.fontBase('work-sans')};
        position: relative;
        top: 2px;
        &__total-sales {
          display: none;
        }
      }
      .ranking {
        display: none;
      }
    `}
`;
