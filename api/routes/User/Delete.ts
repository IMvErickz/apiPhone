import { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prisma";
import { z } from "zod";

export async function Delete(fastify: FastifyInstance) {
    fastify.delete('/user/:id', async (request) => {

        const userId = z.object({
            id: z.string()
        })

        const { id } = userId.parse(request.params)

        try {
            await prisma.user.deleteMany({
                where: {
                    id
                }
            })
        } catch (err) {
            throw err
        }
    })
}