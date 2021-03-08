import { NextPage } from 'next'
import React, { FormEvent, useState } from 'react'
import Image from 'next/image'

import { Container, Wrapper } from '@styles/pages/Home'

const Home: NextPage = () => {
  const [name, setName] = useState('')
  const [enterprise, setEnterprise] = useState('')
  const [enterpriseSize, setEnterpriseSize] = useState('Pequena')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault()

    console.log({ name, enterprise, enterpriseSize, phone, email })
  }
  return (
    <Wrapper>
      <Container>
        <header>
          <nav>
            <a
              href="http://estudiolabomba.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/logo.svg"
                alt="Estúdio La.Bomba"
                width={176}
                height={30}
              />
            </a>
          </nav>

          <div className="full-banner">
            <div className="call">
              <Image
                src="/dolar-symbol.svg"
                alt="Venda mais com Design de Embalagem"
                width={122}
                height={236}
              />

              <h1 className="text-6xl">Venda mais com Design de Embalagem</h1>
            </div>

            <Image
              src="/after-before-sao-camilo.png"
              alt="Antes e Depois da Embalagem da São Camilo"
              width={594}
              height={435}
            />
          </div>

          <div className="clients-logo">
            <Image
              src="/triunfo-logo.svg"
              alt="Triunfo Foods"
              width={72}
              height={72}
            />

            <Image
              src="/mr-hops-logo.svg"
              alt="Mr.Hops"
              width={81.24}
              height={72}
            />

            <Image
              src="/sao-camilo-logo.svg"
              alt="São Camilo"
              width={117.65}
              height={72}
            />

            <Image
              src="/vyvan-logo.svg"
              alt="Vyvan"
              width={82.92}
              height={72}
            />

            <Image
              src="/troppo-logo.svg"
              alt="Tróppo!"
              width={108.36}
              height={21.86}
            />
          </div>
        </header>

        <section className="market-data">
          <div className="stats">
            <div>
              <Image
                src="/75-sales-percent.svg"
                alt="75%"
                width={128}
                height={128}
              />

              <p>
                Das empresas que investiram no design das suas embalagens
                registraram aumento de vendas
              </p>
            </div>

            <div>
              <Image
                src="/81-sales-percent.svg"
                alt="81%"
                width={128}
                height={128}
              />

              <p>
                Das compras no Ponto de Venda tem a <span>EMBALAGEM</span> como
                a principal fator de decisão.
              </p>
            </div>
          </div>

          <div className="phrase">
            <img src="/lamp.png" alt="Ilustração de Lâmpada" />

            <h2 className="text-4xl">
              Transformamos <br /> <span> Essência</span> e
              <span> Propósito</span> <br />
              em valor para marcas
            </h2>
          </div>
        </section>
      </Container>

      <section className="cases">
        <img src="mineiro-case.jpg" alt="Mineiro embalagem de Pão de Queijo" />
        <img src="vyvan-case.jpg" alt="Vyvan embalagem de Pimenta" />
        <img src="sambe-case.jpg" alt="Sambé embalagem de suco" />
      </section>

      <Container>
        <section className="call-form">
          <form id="form">
            <fieldset>
              <label htmlFor="name-input">Nome</label>
              <input
                type="text"
                name="name"
                id="name-input"
                placeholder="Nome completo"
                onChange={val => setName(val.target.value)}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="enterprise-input">Empresa</label>
              <input
                type="text"
                name="enterprise"
                id="enterprise-input"
                placeholder="Qual o nome da sua empresa?"
                onChange={val => setEnterprise(val.target.value)}
              />
            </fieldset>

            <fieldset>
              <p>Porte da Empresa</p>

              <div className="enterprises-radio">
                <div>
                  <input
                    type="radio"
                    id="pequena"
                    name="enterprise-size"
                    value="Pequena"
                    checked={enterpriseSize === 'Pequena'}
                    onChange={val => setEnterpriseSize(val.target.value)}
                  />
                  <label htmlFor="pequena">Pequena</label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="media"
                    name="enterprise-size"
                    value="Média"
                    checked={enterpriseSize === 'Média'}
                    onChange={val => setEnterpriseSize(val.target.value)}
                  />
                  <label htmlFor="media">Média</label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="grande"
                    name="enterprise-size"
                    value="Grande"
                    checked={enterpriseSize === 'Grande'}
                    onChange={val => setEnterpriseSize(val.target.value)}
                  />
                  <label htmlFor="grande">Grande</label>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <label htmlFor="phone-input">Telefone</label>
              <input
                type="text"
                name="phone"
                id="phone-input"
                placeholder="(xx) 90000-0000"
                onChange={val => setPhone(val.target.value)}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="email-input">E-mail</label>
              <input
                type="email"
                name="email"
                id="email-input"
                placeholder="E-mail profissional"
                onChange={val => setEmail(val.target.value)}
              />
            </fieldset>

            <button type="submit" onClick={handleSubmitForm}>
              Quero essa Transformação
            </button>
          </form>

          <div className="content">
            <h3 className="text-4xl">
              Nosso Design vai ajudar <br /> a alavancar suas
              <span> Vendas</span>
            </h3>

            <div className="items">
              <div className="item">
                <Image
                  src="/strategy-icon.svg"
                  alt="Planejamento Estratégico"
                  width={72}
                  height={72}
                />

                <h4>
                  Planejamento <br /> Estratégico
                </h4>
              </div>

              <div className="item">
                <Image
                  src="/ideia-icon.svg"
                  alt="Planejamento Estratégico"
                  width={62.95}
                  height={70}
                />

                <h4>
                  Design de <br /> Embalagem
                </h4>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <h2 className="text-4xl">
            Confira a reação dos nossos <br /> clientes com seus{' '}
            <span>Resultados</span>
          </h2>

          <div className="content">
            <div className="item">
              <div className="person">
                <Image
                  src="/lucas.jpeg"
                  alt="Lucas Redigolo"
                  width={112}
                  height={112}
                />

                <span>Lucas Redigolo,</span>
                <small>
                  Diretor Comercial, <br />
                  São Camilo Massas.
                </small>
              </div>

              <div className="text">
                <p>
                  “Contratamos o Estúdio La.Bomba para trazer profissionalismo e
                  posicionar nosso produto à altura da qualidade que entregamos.
                  Fomos surpreendidos com um Design que traduz todos os valores
                  da empresa e mostra ao consumidor tudo sobre o produto.{' '}
                  <strong>
                    O Redesign da linha de produtos aumentou o faturamento da
                    empresa em 28% e abriu portas para que grandes redes
                    varejistas se interessassem pelo nosso produto
                  </strong>
                  ”
                </p>
              </div>
            </div>

            <div className="item">
              <div className="person">
                <Image
                  src="/alex.jpeg"
                  alt="Alex Severnini"
                  width={112}
                  height={112}
                />

                <span>Alex Severnini,</span>
                <small>
                  Buyer, <br />
                  Triunfo Foods.
                </small>
              </div>

              <div className="text">
                <p>
                  “Desenvolvemos até o momento 3 projetos com o Estúdio
                  La.Bomba. Como definir o Estúdio? Jovens, ousados, dedicados e
                  super profissionais. Estamos tendo resultados excelentes no
                  PDV e aceitação do público.”
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <a href="#form">É isso que eu preciso!</a>
        </section>

        <footer>
          <a
            href="http://estudiolabomba.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logo.svg"
              alt="Estúdio La.Bomba"
              width={176}
              height={30}
            />
          </a>
        </footer>
      </Container>
    </Wrapper>
  )
}

export default Home
