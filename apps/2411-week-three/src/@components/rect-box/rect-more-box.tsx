import styled from '@emotion/styled';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<'span'> {
  className?: string;
  more?: number;
  width?: string;
  backgroundColor?:
    | `#${string}`
    | `rgb(${number},${number},${number})`
    | `rgba(${number},${number},${number},${number})`;
  fontColor?: `#${string}`;
  fontSize?: `${number}px`;
}

export default function RectMoreBox({ className, more = 10, ...props }: Props) {
  return (
    <Styled
      className={`rect-more-box ${className ? className : ''}`}
      {...props}
    >
      {`${more}+`}
    </Styled>
  );
}

const Styled = styled.span<Omit<Props, 'more'>>`
  display: inline-block;
  width: ${({ width }) => (width ? width : '100px')};
  border-radius: 20px;
  aspect-ratio: 1 / 1;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : '#ffffff'};
  color: ${({ fontColor }) => (fontColor ? fontColor : '#000000')};
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.fontStyles['space-mono-bold']};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
  line-height: 1.4;
`;
