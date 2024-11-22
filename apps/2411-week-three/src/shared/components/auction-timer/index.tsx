import styled from '@emotion/styled';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<'div'> {
  className?: string;
}

export default function AuctionTimer({ className }: Props) {
  return (
    <Styled className={`auction-timer ${className ? className : ''}`}>
      <span className="label">Auction ends in:</span>
      <div className="clock">
        <div className="unit hours">
          <span className="num">23</span>
          <span className="label">Hours</span>
        </div>
        <span className="colons">:</span>
        <div className="unit minutes">
          <span className="num">59</span>
          <span className="label">Minutes</span>
        </div>
        <span className="colons">:</span>
        <div className="unit seconds">
          <span className="num">59</span>
          <span className="label">Seconds</span>
        </div>
      </div>
    </Styled>
  );
}

const Styled = styled.div<Props>`
  padding: 30px 30px;
  background-color: rgba(59, 59, 59, 0.5);
  filter: blur(10);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  .label {
    ${({ theme }) => theme.fonts.fontCaption('space-mono')};
    color: #ffffff;
  }
  .clock {
    display: flex;
    column-gap: 10px;
    color: #ffffff;
    .unit {
      display: flex;
      flex-direction: column;
      row-gap: 5px;
    }
    .num {
      ${({ theme }) => theme.fonts.fontH3('space-mono')}
    }
    .label {
      ${({ theme }) => theme.fonts.fontCaption('space-mono')}
    }
    .colons {
      ${({ theme }) => theme.fonts.fontH4('space-mono')}
    }
  }
`;
