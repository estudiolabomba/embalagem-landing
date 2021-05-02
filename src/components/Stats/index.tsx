import Image from 'next/image'

import { Container } from './styles'

export function Stats() {
  return (
    <Container>
      <div className="stats">
        <div data-aos="fade-up">
          <Image
            src="/75-sales-percent.svg"
            alt="75%"
            width={128}
            height={128}
          />

          <p>
            Das empresas que investiram no design das suas embalagens
            registraram <span>AUMENTO DE VENDAS</span>
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="500">
          <Image
            src="/81-sales-percent.svg"
            alt="81%"
            width={128}
            height={128}
          />

          <p>
            Das compras no Ponto de Venda tem a <span>EMBALAGEM</span> como a
            principal fator de decisão.
          </p>
        </div>
      </div>

      <div className="phrase">
        <img src="/lamp.png" alt="Ilustração de Lâmpada" />

        <h2
          className="text-4xl lg:text-4xl md:text-2xl"
          data-aos="fade-left"
          data-aos-delay="800"
        >
          Transformamos <br /> <span> Essência</span> e<span> Propósito</span>{' '}
          <br />
          em valor para marcas
        </h2>
      </div>
    </Container>
  )
}
