import styled from '@emotion/styled';
import { ComponentProps } from 'react';

import { SVGIconCurrencyEthereum } from '../../../assets/icons';
import { UserType } from '../../../types/schema.type';
import Avatar from '../avatar';
import { IconButton } from '../buttons';

interface Props extends ComponentProps<'div'> {
  className?: string;
  thumbImgSrc?: string;
  nftName: string;
  creators: UserType[];
  priceOfEth: number;
}

export default function NFTCard({
  className,
  thumbImgSrc,
  nftName,
  creators,
  priceOfEth,
  ...props
}: Props) {
  return (
    <StyledCard className={className} {...props}>
      <div className="img-box">
        <img src={thumbImgSrc ?? '/imgs/sample-nft-thumb.webp'} alt="nft" />
      </div>

      <div className="nft-info">
        <span className="name">{nftName}</span>
        <div className="creator">
          {creators.map((c, index) => (
            <StyledAvatar key={c.id} index={index} />
          ))}
          <span className="user-id">
            {creators.map((c) => c.id).join(', ')}
          </span>
        </div>
      </div>
      <span className="divider"></span>
      <div className="price-info">
        <div className="left">
          <span className="label">Current Bid :</span>
          <span className="price">
            <SVGIconCurrencyEthereum /> {priceOfEth.toLocaleString()}
          </span>
        </div>
        <IconButton className="right btn">Place a Bid</IconButton>
      </div>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  ${({ theme }) => ({
    padding: '12px',
    // width: '277px',
    borderRadius: '15px',
    backgroundColor: theme.colors.nuteral4,
    display: 'flex',
    flexDirection: 'column',
    rowGap: '14.67px',
    ':hover': {
      outline: '1px solid',
      outlineColor: theme.colors.purple1,
    },

    '.img-box': {
      width: '100%',
      height: '210px',
      borderRadius: '15px',
      textAlign: 'center',
      overflow: 'hidden',
      position: 'relative',
    },

    '.nft-info': {
      display: 'flex',
      flexDirection: 'column',
      rowGap: '8px',
      '.name': {
        color: theme.colors.purple0,
        fontSize: theme.fonts.h5.size,
        fontWeight: theme.fonts.h5.weight,
        lineHeight: '42px', // span 높이와 같게하여 세로 정렬
        letterSpacing: theme.fonts.h5.letterSpacing,
        display: 'inline-block',
        height: '42px',
      },
      '.creator': {
        height: '27px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        '.user-id': {
          marginLeft: '8px',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        },
      },
    },

    '.divider': {
      width: '100%',
      border: 0,
      borderStyle: 'solid',
      borderTopWidth: '1px',
      borderColor: theme.colors.nuteral2,
    },

    '.price-info': {
      padding: '0 4px',
      height: '35px',
      display: 'flex',
      justifyContent: 'space-between',
      '> .left': {
        fontSize: theme.fonts.caption.size,
        fontWeight: theme.fonts.caption.weight,
        lineHeight: theme.fonts.caption.lineHeight,
        width: '78px',
        '.label': {
          display: 'inline-block',
          width: '100%',
          textAlign: 'center',
          marginBottom: '8px',
          color: theme.colors.text3,
        },
        '.price': {
          display: 'inline-flex',
          columnGap: '8px',
          svg: {
            width: '14px',
            height: '14px',
            fill: 'transparent',
            path: { stroke: theme.colors.purple0 },
          },
        },
      },
      '> .btn': {
        height: '29px',
        alignSelf: 'flex-end',
      },
    },
  })}
`;

const StyledAvatar = styled(Avatar)<{ index: number }>`
  width: 27px;
  height: 27px;
`;
