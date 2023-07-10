import { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prisma";
import { z } from "zod";

export async function UpdateUser(fastify: FastifyInstance) {
    fastify.put('/user/:id', async (request) => {

        const userId = z.object({
            id: z.string()
        })

        const { id } = userId.parse(request.params)

        const updateSchema = z.object({
            Name: z.string(),
            Adm: z.boolean(),
            Branch: z.number(),
            Password: z.string()
        })

        const { Adm, Branch, Name, Password } = updateSchema.parse(request.body)

        try {
            await prisma.user.update({
                where: {
                    id
                },
                data: {
                    Name,
                    Adm,
                    Branch,
                    Password
                }
            })
        } catch (err) {
            throw err
        }
    })
}