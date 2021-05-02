import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 140px;

  @media (max-width: 768px) {
    margin-top: 104px;
  }

  h2 {
    text-align: center;
    line-height: 130%;

    @media (max-width: 414px) {
      margin-top: 104px;
      font-size: 1.5rem;
    }
  }

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 104px;
    gap: 96px;
    justify-content: space-between;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    .item {
      display: flex;

      @media (max-width: 414px) {
        flex-direction: column-reverse;
      }

      .person {
        margin-right: 64px;

        @media (max-width: 1024px) {
          margin-right: 40px;
        }

        @media (max-width: 768px) {
          margin-right: 32px;
        }

        @media (max-width: 414px) {
          margin-right: 0px;
          display: flex;
          align-items: center;
          margin-top: 32px;

          > div {
            margin-left: 24px;
          }
        }

        img {
          border-radius: 50%;
          margin-bottom: 16px;

          @media (max-width: 414px) {
            width: 72px !important;
          }
        }

        span {
          display: block;
          font-size: 14px;

          @media (max-width: 768px) {
            display: inline-block;
            font-size: 16px;
          }

          @media (max-width: 414px) {
            display: block;
            font-weight: bold;
          }
        }

        small {
          display: inline-block;
          font-size: 12px;
          color: ${({ theme }) => theme.colors.gray_light};
          line-height: 120%;

          @media (max-width: 768px) {
            display: block;
            font-size: 14px;
          }
        }
      }

      .text {
        max-width: 381px;
        width: 100%;
        position: relative;

        @media (max-width: 1024px) {
          max-width: 300px;
        }

        &:before {
          content: url('/testimonial-detail.svg');
          position: absolute;
          top: -2rem;
          left: -3.1rem;
          z-index: -1;

          @media (max-width: 1024px) {
            left: -1.5rem;
            top: -3rem;
          }

          @media (max-width: 768px) {
            top: -2rem;
            left: -3.5rem;
          }
        }

        p {
          font-size: 15px;
          line-height: 150%;
          text-align: justify;
        }

        @media (max-width: 768px) {
          max-width: 100%;

          p {
            font-size: 18px;
          }
        }
      }
    }
  }
`
