import { NextApiRequest, NextApiResponse } from 'next'

import pipedrive from 'services/pipedrive'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { name, phone, email, enterprise, enterpriseSize } = req.body

      const person = await pipedrive.post('persons', {
        name,
        email: [email],
        phone: [phone]
      })

      const orgExists = await pipedrive.get<{
        data: { items: { item: { id: number } }[] }
      }>('organizations/search', {
        params: {
          term: enterprise,
          fields: 'name',
          exact_match: true
        }
      })

      let organization_id

      if (orgExists.data.data.items.length >= 1) {
        organization_id = orgExists.data.data.items[0].item.id
      }

      if (orgExists.data.data.items.length === 0) {
        const organization = await pipedrive.post('organizations', {
          name: enterprise,
          owner_id: person.data.data.id,
          '67c45418ff177ff741080f2b0ddeec638a3998d4': enterpriseSize
        })

        organization_id = organization.data.data.id
      }

      await pipedrive.post('leads', {
        title: `[Landing/Embalagem] ${name}`,
        person_id: person.data.data.id,
        owner_id: person.data.data.owner_id.id,
        organization_id
      })

      return res.status(200).json({ success: true })
    } catch (err) {
      res.status(400).json({ error: true, message: err })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method not allowed.')
  }
}
