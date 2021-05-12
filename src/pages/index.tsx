import 'aos/dist/aos.css'
import { GetStaticProps, NextPage } from 'next'
import React, { FormEvent, useEffect, useState } from 'react'
import Image from 'next/image'
import { toast } from 'react-toastify'
import AOS from 'aos'
import { useRouter } from 'next/router'

import { api } from 'services/api'

import { Stats } from 'components/Stats'
import { Navigation } from 'components/Navigation'
import { Testimonials } from 'components/Testimonials'

import { Container, Wrapper } from '@styles/pages/Home'
import pipedrive from 'services/pipedrive'

export default function Home() {
  const { push } = useRouter()

  const [name, setName] = useState('')
  const [enterprise, setEnterprise] = useState('')
  const [enterpriseSize, setEnterpriseSize] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const [formSending, setFormSending] = useState(false)

  const handleSubmitForm = async (e: FormEvent) => {
    e.preventDefault()

    if (!name) {
      return toast('Seu nome é obrigatório', { type: 'error' })
    }

    if (!enterprise) {
      return toast('Sua empresa é obrigatória', { type: 'error' })
    }

    if (!enterpriseSize) {
      return toast('O tamanho da sua empresa é obrigatório', { type: 'error' })
    }

    if (!phone) {
      return toast('Seu telefone é obrigatório', { type: 'error' })
    }

    if (!email) {
      return toast('Seu email é obrigatório', { type: 'error' })
    }

    try {
      setFormSending(true)

      toast('Enviando...', { type: 'info' })

      await api.post('/mail', {
        name,
        phone,
        email,
        enterprise,
        enterpriseSize
      })

      setName('')
      setEnterprise('')
      setEnterpriseSize('Pequena')
      setPhone('')
      setEmail('')

      toast('Iremos entrar em contato com você em breve!', { type: 'success' })

      push('/obrigado')
    } catch {
      toast('Não foi possível enviar sua mensagem, tente novamente!', {
        type: 'error'
      })
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
          <Navigation />

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

        <Stats />
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
                required
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
                required
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
                required
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
                required
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

        <Testimonials />

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

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}
