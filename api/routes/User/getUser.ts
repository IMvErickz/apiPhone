import { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prisma";
import { z } from "zod";

export async function GetUser(fastify: FastifyInstance) {
    fastify.get('/users', async () => {
        const users = await prisma.user.findMany()

        return { users }
    })

    fastify.get('/user/:id', async (request) => {

        const userId = z.object({
            id: z.string()
        })

        const { id } = userId.parse(request.params)

        const users = await prisma.user.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                Name: true,
                Branch: true,
                config: {
                    select: {
                        Color: true,
                        id: true,
                        Ring: true
                    }
                }
            }
        })

        return { users }
    })
}