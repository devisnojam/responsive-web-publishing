import styled from '@emotion/styled';
import { cloneElement, ComponentProps } from 'react';

import {
  SVGIconEnvelopeSimple,
  SVGIconEye,
  SVGIconEyeSlash,
  SVGIconLockKey,
  SVGIconUser,
} from '../../../assets/icons';

const BASIC_ICON_COMPONENT_ITEM = {
  user: <SVGIconUser />,
  eyeSlash: <SVGIconEyeSlash />,
  eye: <SVGIconEye />,
  envelope: <SVGIconEnvelopeSimple />,
  lockkey: <SVGIconLockKey />,
};
type IconKey = keyof typeof BASIC_ICON_COMPONENT_ITEM;

interface Props extends ComponentProps<'div'> {
  className?: string;
  inputProps: ComponentProps<'input'>;
  width?: string;
  height?: string;
  leftIcon?: IconKey;
  rightIcon?: IconKey;
  isError?: boolean;
  errorMessage?: true extends Props['isError'] ? string : undefined;
}

export default function FormInputText({
  className,
  leftIcon,
  rightIcon,
  inputProps,
  isError,
  errorMessage,
  ...props
}: Props) {
  return (
    <Styled
      className={`form-input ${className ? className : ''}`}
      isError={isError}
      {...props}
    >
      <div className="form-input__text">
        {leftIcon &&
          cloneElement(BASIC_ICON_COMPONENT_ITEM[leftIcon], {
            className: 'form-input__text__icon left',
          })}
        <input className="form-input__text__input" {...inputProps} />
        {rightIcon &&
          cloneElement(BASIC_ICON_COMPONENT_ITEM[rightIcon], {
            className: 'form-input__text__icon right',
          })}
      </div>
      {isError && errorMessage && (
        <span className="form-input__error-message">{errorMessage}</span>
      )}
    </Styled>
  );
}

const Styled = styled.div<Omit<Props, 'inputProps'>>`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '60px')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .form-input__text {
    padding: 11px 20px;
    background-color: #ffffff;
    border: 1px solid
      ${({ theme, isError }) =>
        isError ? theme.colors.error : theme.colors.caption};
    border-radius: 20px;
    display: flex;
    column-gap: 13px;
    align-items: center;
    justify-content: space-between;
    &__input {
      flex: 1;
      height: 22px;
      ${({ theme }) => theme.fonts.fontBase('work-sans')};
      position: relative;
      top: 1px;
    }
    &__icon {
      width: 20px;
      height: 20px;
      &.left path {
        fill: #d8d8d8;
      }
      &.right path {
        fill: ${({ theme }) => theme.colors.callToAction};
      }
    }
  }
  .form-input__error-message {
    display: inline-block;
    ${({ theme }) => theme.fonts.fontCaption('work-sans')};
    color: ${({ theme }) => theme.colors.error};
  }
`;
