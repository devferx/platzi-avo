import { NextApiRequest, NextApiResponse } from 'next'

const yesOrNo = async (req: NextApiRequest, res: NextApiResponse) => {


  const answer = Math.round(Math.random()) ? 'yes' : 'no'
  res.status(200).json({
    data: answer,
    error: null,
  })
}

export default yesOrNo
