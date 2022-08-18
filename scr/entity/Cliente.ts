import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm"

@Entity("tb_cliente")
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number //| string

    @Column()
    nome: string

    @Column()
    email: string

    @Column()
    fone: number
}
