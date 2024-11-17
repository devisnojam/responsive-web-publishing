import styled from '@emotion/styled';
import { ComponentProps } from 'react';

import TextInput from '../inputs/text-input';

interface Props extends ComponentProps<'div'> {
  className?: string;
}

export default function SubHeader({ className }: Props) {
  return (
    <Styled className={className}>
      <span className="title">Browse Marketplace</span>
      <span className="description">
        Browse through more than 50k NFTs on the NFT Marketplace.
      </span>
      <TextInput placeholder="Search your favorite NFTs" />
    </Styled>
  );
}

const Styled = styled.div<Props>`
  padding: 40px 40px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  color: #ffffff;
  .title {
    ${({ theme }) => theme.fonts.fontH4('work-sans')};
  }
  .description {
    ${({ theme }) => theme.fonts.fontBase('work-sans')};
    margin-bottom: 20px;
  }

  ${({ theme }) => theme.mediaQueryHelper('tablet')} {
    padding: 60px 77px;
    .title {
      ${({ theme }) => theme.fonts.fontH3('work-sans')};
    }
  }

  ${({ theme }) => theme.mediaQueryHelper('desktop')} {
    padding: 80px 115px;
    .title {
      ${({ theme }) => theme.fonts.fontH2('work-sans')};
    }
    .description {
      ${({ theme }) => theme.fontStyles['work-sans-regular']};
      font-size: 22px;
      line-height: 1.6;
    }
  }
`;
