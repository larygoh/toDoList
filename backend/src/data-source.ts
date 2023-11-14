import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Tasks } from "./entity/Tasks"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "chunee.db.elephantsql.com",
    port: 5432,
    username: "fvenuwfo",
    password: "qQq_HhQ3qn534EPss5Ba_FFzys9hge7m",
    database: "fvenuwfo",
    synchronize: true,
    logging: false,
    entities: [User, Tasks],
    migrations: [],
    subscribers: [],
})
