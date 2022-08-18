import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, JoinTable } from "typeorm"
import { Vendas } from "./Vendas"
import { Produtos } from "./Produto"

@Entity()
export class Carrinho {
    @PrimaryGeneratedColumn()
    idcarrinho: number

    @Column()
    preco: number

    @Column()
    quantidade: number

    @ManyToOne(() => Vendas, (venda) => venda.carrinho)
    @JoinTable({name: 'id_vendas'})
    public venda!: Vendas

    @ManyToOne(() => Produtos, (produto) => produto.carrinho)
    @JoinTable({name: 'id_produtos'})
    public produto!: Produtos
}