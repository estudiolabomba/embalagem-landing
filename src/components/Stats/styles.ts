import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;

  @media (max-width: 768px) {
    gap: 56px;
  }

  @media (max-width: 540px) {
    flex-direction: column;
  }

  .stats {
    display: flex;
    flex-direction: column;
    gap: 72px;

    > div {
      display: flex;
      align-items: center;
      gap: 48px;
      margin-left: 104px;

      @media (max-width: 1024px) {
        margin-left: 40px;
      }

      @media (max-width: 540px) {
        gap: 24px;

        img {
          width: 11rem !important;
        }
      }

      @media (max-width: 540px) {
        margin-left: 0px;
      }

      p {
        max-width: 312px;
        font-size: 20px;
        font-weight: bold;
        font-style: italic;

        @media (max-width: 768px) {
          max-width: 200px;
          font-size: 16px;
        }

        @media (max-width: 540px) {
          max-width: 100%;
        }

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

    @media (max-width: 768px) {
      img {
        max-width: 280px;
      }
    }

    @media (max-width: 540px) {
      img {
        max-width: 80%;
        margin: 0 auto;
      }
    }

    @media (max-width: 375px) {
      h2 {
        font-size: 32px;
      }
    }
  }
`
