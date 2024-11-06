import styled from '@emotion/styled';

import { IconButton } from './@shared/components/buttons';

export default function App() {
  return (
    <FlexBox direction="column" gap={24}>
      <FlexBox direction="row" gap={24}>
        <IconButton leftIcon="diamond" rightIcon="arrow-r">
          Button
        </IconButton>
        <IconButton leftIcon="diamond">Button</IconButton>
        <IconButton rightIcon="arrow-r">Button</IconButton>
        <IconButton>Button</IconButton>
      </FlexBox>

      <FlexBox direction="row" gap={24}>
        <IconButton varients="outline" leftIcon="diamond" rightIcon="arrow-r">
          Button
        </IconButton>
        <IconButton varients="outline" leftIcon="diamond">
          Button
        </IconButton>
        <IconButton varients="outline" rightIcon="arrow-r">
          Button
        </IconButton>
        <IconButton varients="outline">Button</IconButton>
      </FlexBox>
    </FlexBox>
  );
}

const FlexBox = styled.div<{ direction: 'row' | 'column'; gap: number }>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap}px;
`;
