import { Table, Column, Model, Default, DataType, AllowNull } from 'sequelize-typescript'

@Table({
    tableName: 'games',
    timestamps: true
})
export class Game extends Model {
    @Default(false)
    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    isRun!: boolean;

    @Default(0)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    tick!: number;

    @Default(500)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    speed!: number;
}