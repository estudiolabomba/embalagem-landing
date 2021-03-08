import { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'

import { Container } from '@styles/pages/Home'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>React JS Config</title>
      </Head>

      <Container>
        <h1 className="text-5xl">La.Bomba</h1>
      </Container>
    </>
  )
}

export default Home
