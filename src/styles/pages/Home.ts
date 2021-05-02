import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1245px;
  padding: 0 15px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 24px;
  }

  header {
    .full-banner {
      display: flex;
      justify-content: space-between;
      gap: 6.5rem;

      @media (max-width: 768px) {
        gap: 4rem;
      }

      @media (max-width: 540px) {
        gap: 2rem;
      }

      @media (max-width: 414px) {
        flex-direction: column;
      }

      .call {
        display: flex;
        align-items: center;
        position: relative;

        h1 {
          margin-left: -2rem;
          position: relative;
          z-index: 1;
          max-width: 25.75rem;
        }

        @media (max-width: 768px) {
          img {
            max-width: 88px;
          }

          h1 {
            max-width: 29rem;
          }
        }

        @media (max-width: 540px) {
          margin-top: 56px;

          img {
            max-width: 80px;
          }

          h1 {
            width: 10rem;
          }
        }

        @media (max-width: 414px) {
          img {
            max-width: 88px;
          }

          h1 {
            width: 100%;
            font-size: 48px;
            line-height: 100%;
          }
        }

        @media (max-width: 375px) {
          h1 {
            font-size: 40px;
          }
        }
      }
    }

    .clients-logo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 910px;
      margin: 56px auto 0;

      @media (max-width: 1024px) {
        max-width: 768px;
      }

      @media (max-width: 768px) {
        max-width: 540px;

        img {
          max-width: 64px !important;
        }
      }

      @media (max-width: 540px) {
        max-width: 100%;
      }

      @media (max-width: 540px) {
        img {
          max-width: 48px !important;
        }
      }
    }
  }

  section {
    &.call-form {
      margin-top: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 540px) {
        flex-direction: column-reverse;
        margin-top: 0;
      }

      form {
        background-color: ${({ theme }) => theme.colors.amarelo};
        border-radius: 8px;
        padding: 40px;
        box-shadow: 0px 8px 46px rgba(210, 210, 209, 0.6);
        width: 100%;
        max-width: 488px;
        display: flex;
        flex-direction: column;
        align-content: center;
        position: relative;

        @media (max-width: 768px) {
          max-width: 400px;
          padding: 32px;
        }

        &:before {
          content: url('/eye.svg');
          position: absolute;
          bottom: -96px;
          left: -300px;
          z-index: -1;
        }

        fieldset {
          display: flex;
          flex-direction: column;

          & + fieldset {
            margin-top: 24px;
          }

          label,
          p {
            color: ${({ theme }) => theme.colors.black};
            font-weight: bold;
            margin: 0;
            line-height: 1;
            margin-bottom: 8px;
          }

          input {
            background-color: ${({ theme }) => theme.colors.black};
            padding: 16px 24px;
            border-radius: 4px;
            color: #fff;

            &::placeholder {
              color: ${({ theme }) => theme.colors.gray};
            }
          }

          .enterprises-radio {
            display: flex;

            > div {
              display: flex;
              margin-top: 8px;

              input {
                margin-right: 0.5rem;
              }

              & + div {
                margin-left: 1rem;
              }
            }
          }
        }

        button {
          background: ${({ theme }) => theme.colors.magenta};
          color: #fff;
          border-radius: 4px;
          padding: 14px 30px;
          font-weight: bold;
          font-size: 16px;
          margin-top: 40px;
          transition: all ease 0.2s;

          &:hover {
            background: #870a39;
          }
        }
      }

      .content {
        text-align: center;
        margin-top: 32px;

        .items {
          display: flex;
          flex-direction: column;
          margin-top: 72px;

          @media (max-width: 540px) {
            flex-direction: row;
            justify-content: space-between;
            margin-bottom: 32px;
          }

          .item {
            display: flex;
            flex-direction: column;
            align-items: center;

            & + .item {
              margin-top: 80px;

              @media (max-width: 540px) {
                margin-top: 0;
              }
            }

            h4 {
              line-height: 100%;
              font-size: 32px;
              margin-top: 24px;

              @media (max-width: 768px) {
                font-size: 24px;
                line-height: 120%;
              }
            }
          }
        }
      }
    }

    &.cta {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-top: 124px;

      a {
        background-color: ${({ theme }) => theme.colors.amarelo};
        color: ${({ theme }) => theme.colors.black};
        font-size: 24px;
        padding: 16px 32px;
        border-radius: 4px;
        font-weight: bold;
        line-height: 1;
        transition: all ease 0.2s;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 124px 0 56px;
  }
`

export const Wrapper = styled.div`
  .cases {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 72px;

    @media (max-width: 540px) {
      grid-template-columns: 1fr;
    }

    img {
      width: 100%;
      height: 392px;
      object-fit: cover;
      object-position: center;
    }
  }
`
