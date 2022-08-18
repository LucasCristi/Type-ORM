import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Carrinho } from "./Carrinho"

@Entity("tb_produtos")
export class Produtos {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    descricao: string

    @Column()
    preco: number

    @Column()
    estoque: number

    @OneToMany(() => Carrinho, carrinho => carrinho.produto)
public carrinho!: Carrinho[];
}
