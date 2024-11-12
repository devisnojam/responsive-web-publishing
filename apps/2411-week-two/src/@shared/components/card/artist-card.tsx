import styled from '@emotion/styled';
import { ComponentProps } from 'react';

import { UserType } from '../../../types/schema.type';
import Avatar from '../avatar';

interface Props extends ComponentProps<'div'> {
  className?: string;
  creator: UserType;
  nftNumber: number;
}

export default function ArtistCard({ className, creator, nftNumber }: Props) {
  return (
    <StyledCard className={className}>
      <span className="rank">{creator.rank}</span>
      <Avatar className="avatar" />
      <span className="artist-name">{creator.name}</span>
      <span className="user-id">{creator.id}</span>
      <span className="nft-number">{nftNumber}</span>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  ${({ theme }) => ({
    padding: '12px',
    // 카드의 width 는 부모 container 에 맞게 동적처리
    backgroundColor: theme.colors.nuteral4,
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.colors.text0,
    fontSize: theme.fonts.caption.size,
    position: 'relative',
    cursor: 'pointer',
    ':hover': {
      outline: '1px solid',
      outlineColor: theme.colors.purple1,
    },

    '.avatar': {
      width: '62px',
      height: '62px',
      margin: '4px 10px',
    },
    '.artist-name': {
      margin: '4px 0',
      fontSize: theme.fonts.h5.size,
      fontWeight: theme.fonts.h5.weight,
      lineHeight: theme.fonts.h5.lineHeight,
      letterSpacing: theme.fonts.h5.letterSpacing,
    },
    '.user-id': {
      margin: '4px 0',
    },
    '.nft-number': {
      margin: '4px 0',
      color: theme.colors.purple0,
    },
    '.rank': {
      width: '24px',
      height: '24px',
      backgroundColor: theme.colors.purple4,
      color: theme.colors.text4,
      fontSize: theme.fonts.caption.size,
      textAlign: 'center',
      lineHeight: '24px',
      borderRadius: '50%',
      position: 'absolute',
      top: '-12px', // card 의 padding 과 동일하게 줘야 위치 맞음
      left: '50%',
      transform: 'translateX(-50%)',
    },
  })}
`;
