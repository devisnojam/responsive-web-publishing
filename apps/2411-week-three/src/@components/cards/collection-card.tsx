import styled from '@emotion/styled';
import { ComponentProps } from 'react';

import { NFTType, UserType } from '../../types/index.type';
import Avatar from '../avatar';
import { RectMoreBox } from '../rect-box';
import RectImageBox from '../rect-box/rect-image-box';

interface Props extends ComponentProps<'div'> {
  className?: string;
  collections?: NFTType[];
  moreCollectionCount?: number;
  creator?: UserType;
}

export default function CollectionCard({ className }: Props) {
  return (
    <Styled className={`collection-card ${className ? className : ''}`}>
      <div className="photo-grid">
        <RectImageBox className="photo-grid__main" />
        <div className="photo-grid__sub">
          <RectImageBox className="photo-grid__sub__box" />
          <RectImageBox className="photo-grid__sub__box" />
          <RectMoreBox className="photo-grid__sub__box more" />
        </div>
      </div>

      <div className="collection-info">
        <span className="collection-info__title">{`DSGN Animals`}</span>
        <div className="collection-info__profile">
          <Avatar className="collection-info__profile__avatar" />
          <span className="collection-info__profile__name">{`MrFox`}</span>
        </div>
      </div>
    </Styled>
  );
}

const Styled = styled.div<Props>`
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  cursor: pointer;

  .photo-grid {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    &__main {
      width: 100%;
      aspect-ratio: 1 / 1;
    }
    &__sub {
      display: flex;
      justify-content: space-between;
      &__box {
        width: 30.15873%;
        ${({ theme }) => theme.fontStyles['space-mono-bold']};
        font-size: 16px;
        line-height: 1.4;
        background-color: ${({ theme }) => theme.colors.callToAction};
        color: #ffffff;
      }
    }
  }
  .collection-info {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    color: #ffffff;
    ${({ theme }) => theme.fonts.fontBase('work-sans')}
    &__title {
      ${({ theme }) => theme.fonts.fontH5('work-sans')}
    }
    &__profile {
      display: flex;
      column-gap: 12px;
      &__avatar {
        width: 24px;
      }
      &__name {
        position: relative;
        top: 2px;
      }
    }
  }
`;
