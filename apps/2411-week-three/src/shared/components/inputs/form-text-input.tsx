import styled from '@emotion/styled';
import { cloneElement, ComponentProps } from 'react';

import {
  SVGIconEye,
  SVGIconEyeSlash,
  SVGIconUser,
} from '../../../assets/icons';

const BASIC_ICON_COMPONENT_ITEM = {
  user: <SVGIconUser />,
  eyeSlash: <SVGIconEyeSlash />,
  eye: <SVGIconEye />,
};
type IconKey = keyof typeof BASIC_ICON_COMPONENT_ITEM;

interface Props extends ComponentProps<'div'> {
  className?: string;
  inputProps: ComponentProps<'input'>;
  width?: string;
  leftIcon?: IconKey;
  rightIcon?: IconKey;
}

export default function FormInputText({
  className,
  leftIcon,
  rightIcon,
  inputProps,
  ...props
}: Props) {
  return (
    <Styled
      className={`form-input-text ${className ? className : ''}`}
      {...props}
    >
      {leftIcon &&
        cloneElement(BASIC_ICON_COMPONENT_ITEM[leftIcon], {
          className: 'form-input-text__icon left',
        })}
      <input className="form-input-text__input" {...inputProps} />
      {rightIcon &&
        cloneElement(BASIC_ICON_COMPONENT_ITEM[rightIcon], {
          className: 'form-input-text__icon right',
        })}
    </Styled>
  );
}

const Styled = styled.div<Omit<Props, 'inputProps'>>`
  box-sizing: border-box;
  width: ${({ width }) => (width ? width : '100%')};
  height: 46px;
  padding: 13px 20px;
  background-color: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.caption};
  border-radius: 20px;
  display: flex;
  column-gap: 13px;
  align-items: center;
  justify-content: space-between;
  .form-input-text__input {
    flex: 1;
    height: 22px;
    ${({ theme }) => theme.fonts.fontBase('work-sans')};
    position: relative;
    top: 1px;
  }
  .form-input-text__icon {
    width: 20px;
    height: 20px;
    &.left path {
      fill: #d8d8d8;
    }
    &.right path {
      fill: ${({ theme }) => theme.colors.callToAction};
    }
  }
`;
