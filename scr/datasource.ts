import { DataSource } from "typeorm"
import { Cliente } from "./entity/Cliente"
import { Carrinho } from "./entity/Carrinho"
import { Produtos } from "./entity/Produto"
import { Vendas } from "./entity/Vendas"

const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 7777,
    username: "postgres",
    password: "LucasCristi77!",
    database: "postgres",
    // entities: ["src/entity/*.ts"],
    entities: [Cliente, Vendas, Produtos, Carrinho],
    logging: false,
    synchronize: true,
})

export default myDataSource
