import { NextPage } from 'next'
import React, { FormEvent, useEffect, useState } from 'react'
import Image from 'next/image'
import { toast } from 'react-toastify'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { Email } from 'lib/smtp'
import pipedrive from 'services/pipedrive'

import { Container, Wrapper } from '@styles/pages/Home'

const Home: NextPage = () => {
  const [name, setName] = useState('')
  const [enterprise, setEnterprise] = useState('')
  const [enterpriseSize, setEnterpriseSize] = useState('Pequena')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const [formSending, setFormSending] = useState(false)

  const handleSubmitForm = async (e: FormEvent) => {
    try {
      e.preventDefault()
      setFormSending(true)

      toast('Enviando...', { type: 'info' })

      await Email.send({
        Host: 'mail.estudiolabomba.com',
        Username: 'contato@estudiolabomba.com',
        Password: 'labomba13',
        To: 'andre@estudiolabomba.com',
        From: email,
        Subject: `E-mail de Contato vindo de ${name}`,
        Body: `Nome: ${name} <br/>
              E-mail: ${email} <br/>
              Telefone: ${phone} <br/>
              Empresa: ${enterprise} <br/>
              Porte da Empresa: ${enterpriseSize} <br/>
              `
      })

      const person = await pipedrive.post('persons', {
        name,
        email: [email],
        phone: [phone]
      })

      await pipedrive.post('leads', {
        title: `[Landing/Embalagem] ${name}`,
        person_id: person.data.data.id,
        owner_id: person.data.data.owner_id.id
      })

      toast('Iremos entrar em contato com você em breve!', { type: 'success' })

      setName('')
      setEnterprise('')
      setEnterpriseSize('Pequena')
      setPhone('')
      setEmail('')
    } finally {
      setFormSending(false)
    }
  }

  useEffect(() => {
    AOS.init({
      duration: 800
    })
  }, [])

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
            <div className="call" data-aos="fade-right">
              <img
                src="/dolar-symbol.svg"
                alt="Venda mais com Design de Embalagem"
              />

              <h1 className="text-2xl md:text-4xl xl:text-6xl lg:text-5xl">
                Venda mais com Design de Embalagem
              </h1>
            </div>

            <Image
              src="/after-before-sao-camilo.png"
              alt="Antes e Depois da Embalagem da São Camilo"
              width={594}
              height={435}
              data-aos="fade-left"
              data-aos-delay="500"
            />
          </div>

          <div
            className="clients-logo"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
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
            <div data-aos="fade-up">
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

            <div data-aos="fade-up" data-aos-delay="500">
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

            <h2
              className="text-4xl lg:text-4xl md:text-2xl"
              data-aos="fade-left"
              data-aos-delay="800"
            >
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
              {formSending ? 'Enviando...' : 'Quero essa Transformação'}
            </button>
          </form>

          <div className="content">
            <h3 className="text-3xl md:text-2xl lg:text-4xl" data-aos="fade-up">
              Nosso Design vai ajudar <br /> a alavancar suas
              <span> Vendas</span>
            </h3>

            <div className="items">
              <div className="item" data-aos="fade-up" data-aos-delay="500">
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

              <div className="item" data-aos="fade-up" data-aos-delay="800">
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
                  “Desenvolvemos até o momento 3 projetos com o Estúdio
                  La.Bomba. Como definir o Estúdio? Jovens, ousados, dedicados e
                  super profissionais. Estamos tendo resultados excelentes no
                  PDV e aceitação do público.”
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta" data-aos="fade-up" data-aos-delay="800">
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
