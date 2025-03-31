import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const config = {
  runtime: 'edge'
}

const app = new Hono().basePath('/')

app.get('/', (c) => {
  return c.json({ message: 'Hello Hono!' })
})



export default import.meta.env.DEV ? app : handle(app)
