import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

import pipedrive from 'services/pipedrive'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, phone, email, enterprise, enterpriseSize } = req.body

    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_SMTP_HOST,
      secure: true,
      auth: {
        user: process.env.NEXT_SMTP_USERNAME,
        pass: process.env.NEXT_SMTP_PASSWORD
      }
    })

    const mailOption = {
      from: `${name} <${email}>`,
      to: process.env.NEXT_SMTP_TO,
      subject: `E-mail de Contato de ${name}`,
      text: `Nome: ${name}
      E-mail: ${email}
      Telefone: ${phone}
      Empresa: ${enterprise}
      Porte da Empresa: ${enterpriseSize}
      `
    }

    transporter.sendMail(mailOption, (err, data) => {
      if (err) {
        console.error(err)

        return res.status(500).send('Internal server error.')
      }
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

    return res
      .status(200)
      .send(`E-mail enviado para: ${process.env.NEXT_SMTP_TO}`)
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method not allowed.')
  }
}
