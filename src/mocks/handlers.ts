import { rest } from 'msw'
import db from '../../db.json'


export const handlers = [
  rest.get('http://localhost:5173/coffee', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(db)
    )
  }),
]
