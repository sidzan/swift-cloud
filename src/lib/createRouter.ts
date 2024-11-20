import type { Hook } from '@hono/zod-openapi'
import { UNPROCESSABLE_ENTITY } from '@/lib/http-status-codes'
import { OpenAPIHono } from '@hono/zod-openapi'

const defaultHook: Hook<any, any, any, any> = (result, c) => {
  if (!result.success) {
    return c.json(
      {
        success: result.success,
        error: result.error,
      },
      UNPROCESSABLE_ENTITY,
    )
  }
}

export function createRouter() {
  return new OpenAPIHono({
    strict: false,
    defaultHook,
  })
}
