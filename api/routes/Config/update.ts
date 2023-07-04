import { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prisma";
import { z } from "zod";

export async function UpdateConfig(fastify: FastifyInstance) {
    fastify.put('/config/:id', async (request) => {

        const configId = z.object({
            id: z.string()
        })

        const { id } = configId.parse(request.params)

        const configSchema = z.object({
            Color: z.string(),
            Ring: z.string()
        })

        const { Color, Ring } = configSchema.parse(request.body)

        try {
            await prisma.config.update({
                where: {
                    id
                },
                data: {
                    Color,
                    Ring
                }
            })
        } catch (err) {
            throw err
        }
    })
}