import Image from 'next/image'

import { Container } from './styles'

export function Navigation() {
  return (
    <Container>
      <a
        href="http://estudiolabomba.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/logo.svg" alt="Estúdio La.Bomba" width={176} height={30} />
      </a>
    </Container>
  )
}
