import Fastify from 'fastify'
import FastifyVite from 'fastify-vite'
import renderer from 'fastify-vite-vue'

const root = (import.meta as any).url
const app = Fastify({ logger: true })

await app.register(FastifyVite, { root, renderer })
await (app as any).vite.commands()
await app.listen(3000)
