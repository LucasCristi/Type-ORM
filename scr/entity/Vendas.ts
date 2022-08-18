import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm"
import { Carrinho } from "./Carrinho"
import { Cliente } from "./Cliente"


@Entity("tb_vendas")
export class Vendas {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    data: number

    @Column()
    status: string 

    @OneToOne(() => Cliente)
    @JoinColumn({name : 'id_cliente'})
    cliente: Cliente

    @OneToMany(() => Carrinho, carrinho => carrinho.venda)
    public carrinho!: Carrinho[];
 }