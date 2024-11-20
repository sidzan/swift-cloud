import type { Context } from 'hono'

export function healthCheck(c: Context) {
  return c.json({ message: 'ok' }, 200)
}
