import { FastifyInstance } from 'fastify'
import { prisma } from '../../lib/prisma'
import { randomUUID } from 'node:crypto'
import { z } from 'zod'

export async function RegisterUser(fastify: FastifyInstance) {
    fastify.post('/user', async (request) => {

        const userSchema = z.object({
            Name: z.string(),
            Branch: z.number(),
            Adm: z.boolean(),
            Password: z.string()
        })

        const { Name, Branch, Adm, Password } = userSchema.parse(request.body)

        try {
            await prisma.user.create({
                data: {
                    id: randomUUID(),
                    Name,
                    Branch,
                    Adm,
                    Password,
                    config: {
                        create: {
                            id: randomUUID(),
                            Color: '#18181b',
                            Ring: 'padrao'
                        }
                    }
                }
            })
        } catch (err) {
            throw err
        }
    })
}