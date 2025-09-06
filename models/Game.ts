import { Table, Column, Model, Default, DataType, AllowNull, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript'
import { House } from './House';

@Table({
    tableName: 'games',
    timestamps: true
})
export class Game extends Model {
    // @PrimaryKey
    // @AutoIncrement
    // @Column(DataType.INTEGER)
    // id!: number;

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

    @HasMany(() => House)
    houses!: House[]
}