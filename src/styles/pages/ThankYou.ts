import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1245px;
  padding: 0 15px;
  margin: 0 auto 10rem;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 24px;
  }

  main {
    display: flex;
    align-items: center;
    gap: 5vw;
    margin-top: 5rem;

    aside {
      max-width: 50vw;
      text-align: center;

      h1 {
        font-size: 4rem;
        color: ${({ theme }) => theme.colors.magenta};
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.5rem;
        line-height: 150%;
        max-width: 80%;
        margin: 0 auto;
      }
    }

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      a {
        color: ${({ theme }) => theme.colors.black};
        background: ${({ theme }) => theme.colors.amarelo};
        border-radius: 4px;
        padding: 14px 30px;
        font-weight: bold;
        font-size: 16px;
        margin-top: 40px;
        transition: all ease 0.2s;

        display: flex;
        align-items: center;
        justify-content: center;

        > div {
          margin-right: 2rem !important;
        }

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
`
