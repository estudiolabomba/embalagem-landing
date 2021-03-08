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
    nav {
      margin-top: 56px;
    }

    .full-banner {
      display: flex;
      justify-content: space-between;
      gap: 6.5rem;

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
      }
    }

    .clients-logo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 910px;
      margin: 56px auto 0;
    }
  }

  section {
    &.market-data {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 80px;

      .stats {
        display: flex;
        flex-direction: column;
        gap: 72px;

        > div {
          display: flex;
          align-items: center;
          gap: 48px;
          margin-left: 104px;

          p {
            max-width: 312px;
            font-size: 20px;
            font-weight: bold;
            font-style: italic;

            span {
              color: ${({ theme }) => theme.colors.magenta};
            }
          }
        }
      }

      .phrase {
        position: relative;

        h2 {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 100%;
          transform: translate(-50%, -50%);
          text-align: center;
        }
      }
    }

    &.call-form {
      margin-top: 80px;
      display: flex;
      justify-content: space-between;

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

          .item {
            display: flex;
            flex-direction: column;
            align-items: center;

            & + .item {
              margin-top: 80px;
            }

            h4 {
              line-height: 100%;
              font-size: 32px;
              margin-top: 24px;
            }
          }
        }
      }
    }

    &.testimonials {
      margin-top: 140px;

      h2 {
        text-align: center;
        line-height: 130%;
      }

      .content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 104px;
        gap: 96px;
        justify-content: space-between;

        .item {
          display: flex;

          .person {
            margin-right: 64px;
            flex: 1;

            img {
              border-radius: 50%;
              margin-bottom: 16px;
            }

            span {
              display: block;
              font-size: 14px;
            }

            small {
              display: block;
              font-size: 12px;
              color: ${({ theme }) => theme.colors.gray_light};
              line-height: 120%;
            }
          }

          .text {
            max-width: 381px;
            width: 100%;
            position: relative;

            &:before {
              content: url('/testimonial-detail.svg');
              position: absolute;
              top: -2rem;
              left: -3.1rem;
              z-index: -1;
            }

            p {
              font-size: 15px;
              line-height: 150%;
              text-align: justify;
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

    img {
      width: 100%;
      height: 392px;
      object-fit: cover;
      object-position: center;
    }
  }
`
