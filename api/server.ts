import Fastify from "fastify";
import Cors from '@fastify/cors'
import { RegisterUser } from "./routes/User/register";
import { GetUser } from "./routes/User/getUser";
import { UpdateConfig } from "./routes/Config/update";
import { UpdateUser } from "./routes/User/Update";
import { Delete } from "./routes/User/Delete";

async function Main() {
    const fastify = Fastify({
        logger: true
    })

    await fastify.register(Cors, {
        origin: true
    })

    await fastify.register(RegisterUser)
    await fastify.register(GetUser)
    await fastify.register(UpdateConfig)
    await fastify.register(UpdateUser)
    await fastify.register(Delete)

    await fastify.listen({ port: 3333 })
}

Main()