import Image from 'next/image'

import { Container } from './styles'

export function Testimonials() {
  return (
    <Container>
      <h2 className="text-4xl">
        Confira a reação dos nossos <br /> clientes com seus{' '}
        <span>Resultados</span>
      </h2>

      <div className="content">
        <div className="item" data-aos="fade-up">
          <div className="person">
            <Image
              src="/lucas.jpeg"
              alt="Lucas Redigolo"
              width={112}
              height={112}
            />

            <div>
              <span>Lucas Redigolo,</span>
              <small>
                Diretor Comercial, <br />
                São Camilo Massas.
              </small>
            </div>
          </div>

          <div className="text">
            <p>
              “Contratamos o Estúdio La.Bomba para trazer profissionalismo e
              posicionar nosso produto à altura da qualidade que entregamos.
              Fomos surpreendidos com um Design que traduz todos os valores da
              empresa e mostra ao consumidor tudo sobre o produto.{' '}
              <strong>
                O Redesign da linha de produtos aumentou o faturamento da
                empresa em 28% e abriu portas para que grandes redes varejistas
                se interessassem pelo nosso produto
              </strong>
              ”
            </p>
          </div>
        </div>

        <div className="item" data-aos="fade-up" data-aos-delay="500">
          <div className="person">
            <Image
              src="/alex.jpeg"
              alt="Alex Severnini"
              width={112}
              height={112}
            />

            <div>
              <span>Alex Severnini,</span>
              <small>
                Buyer, <br />
                Triunfo Foods.
              </small>
            </div>
          </div>

          <div className="text">
            <p>
              “Desenvolvemos até o momento 3 projetos com o Estúdio La.Bomba.
              Como definir o Estúdio? Jovens, ousados, dedicados e super
              profissionais. Estamos tendo resultados excelentes no PDV e
              aceitação do público.”
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
