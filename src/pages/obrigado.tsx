import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import parse from 'html-react-parser'

import { Navigation } from 'components/Navigation'
import { Testimonials } from 'components/Testimonials'

import { Container } from '@styles/pages/ThankYou'
import { convertion } from 'scripts/google'
import { GetStaticProps } from 'next'

export default function ThankYou() {
  return (
    <>
      <Head>{parse(convertion)}</Head>
      <Container>
        <Navigation />

        <main>
          <aside>
            <h1>#TAMOJUNTO</h1>
            <p>
              A equipe do Estúdio La.Bomba recebeu suas informações e em breve
              entrará em contato!
            </p>
          </aside>

          <section>
            <a href="https://estudiolabomba.com/">
              <Image src="/foguete2.svg" width={40} height={40} />
              Conheça mais do nosso universo
            </a>
            <a href="https://blog.estudiolabomba.com/">
              <Image src="/grafico2.svg" width={40} height={40} />
              Veja mais conteúdos que ajudam a transformar seu negócio
            </a>
          </section>
        </main>

        <Testimonials />
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}
