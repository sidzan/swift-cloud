import configureOpenAPI from '@/lib/configureOpenApi'
import { OpenAPIHono } from '@hono/zod-openapi'
import { logger } from 'hono/logger'
import { router } from './router'

const app = new OpenAPIHono()
configureOpenAPI(app)
app.use(logger())

const routes = [
  router,
]

routes.forEach(r => app.route('/', r))

export default app
