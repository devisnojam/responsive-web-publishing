import styled from '@emotion/styled';

import BannerImageView from '../../shared/components/banner-image-view';
import { IconButton } from '../../shared/components/buttons';
import FormInputText from '../../shared/components/inputs/form-text-input';
import Layout from '../../shared/components/layout';

export default function CreateAccountPage() {
  return (
    <div className="page-container">
      <Layout.Header />
      <ContentSection>
        <BannerImageView
          imageURL="/imgs/create-account-sample-img.png"
          breakpointHeight={{
            mobile: '232px',
            tablet: '615px',
            desktop: '691px',
          }}
        />
        <div className="form">
          <h3 className="form__title">Create Account</h3>
          <span className="form__info">
            {`Welcome! enter your details and start\ncreating, collecting and selling NFTs.`}
          </span>
          <form action="" className="form__group">
            <FormInputText
              leftIcon="user"
              inputProps={{ type: 'text', placeholder: 'Username' }}
            />
            <FormInputText
              leftIcon="envelope"
              inputProps={{ type: 'email', placeholder: 'Email Address' }}
            />
            <FormInputText
              leftIcon="lockkey"
              inputProps={{ type: 'password', placeholder: 'Password' }}
            />
            <FormInputText
              leftIcon="lockkey"
              inputProps={{ type: 'password', placeholder: 'Confirm Password' }}
            />

            <IconButton className="form__group__submit">
              Create account
            </IconButton>
          </form>
        </div>
      </ContentSection>
      <Layout.Footer />
    </div>
  );
}

const ContentSection = styled.section`
  display: grid;
  .form {
    padding: 0 30px;
    padding-top: 30px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
    color: #ffffff;
    &__title {
      ${({ theme }) => theme.fonts.fontH3('work-sans')}
    }
    &__info {
      ${({ theme }) => theme.fonts.fontBase('work-sans')};
      white-space: pre-wrap;
      text-transform: capitalize;
    }
    &__group {
      width: 100%;
      max-width: 330px;
      display: flex;
      flex-direction: column;
      row-gap: 15px;
      &__submit {
        margin-top: 15px;
        height: 46px;
      }
    }
  }

  ${({ theme }) => theme.mediaQueryHelper('tablet')} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 4.79616%;
    .form {
      padding: 80px 0;
      width: 325px;
      justify-content: center;
      align-items: flex-start;
    }
  }

  ${({ theme }) => theme.mediaQueryHelper('desktop')} {
    .form {
      padding: 100px 0;
      width: 460px;
      &__title {
        ${({ theme }) => theme.fonts.fontH2('work-sans')};
      }
      &__info {
        ${({ theme }) => theme.fontStyles['work-sans-regular']};
        font-size: 22px;
        line-height: 1.6;
      }
    }
  }
`;
