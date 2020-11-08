import { NextApiRequest, NextApiResponse } from 'next'
import enablePublicAccess from '@cors'
import DB from '@database'

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  await enablePublicAccess(request, response)
  const db = new DB()
  const id = request.query.id
  const entry = await db.getById(id as string)

  response.status(200).json(entry)
}

export default allAvos
