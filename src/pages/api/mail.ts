import { NextApiRequest, NextApiResponse } from 'next'

import { Email } from 'lib/smtp'
import pipedrive from 'services/pipedrive'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, phone, email, enterprise, enterpriseSize } = req.body

    await Email.send({
      Host: process.env.NEXT_SMTP_HOST,
      Username: process.env.NEXT_SMTP_USERNAME,
      Password: process.env.NEXT_SMTP_PASSWORD,
      To: process.env.NEXT_SMTP_TO,
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

    return res.status(200).json({})
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method not allowed.')
  }
}
