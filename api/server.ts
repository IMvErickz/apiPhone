import Fastify from "fastify";
import Cors from '@fastify/cors'
import { RegisterUser } from "./routes/User/register";
import { GetUser } from "./routes/User/getUser";
import { UpdateConfig } from "./routes/Config/update";

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

    await fastify.listen({ port: 3333 })
}

Main()