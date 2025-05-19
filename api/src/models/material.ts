import {
    Model,
    DataTypes,
    type CreationOptional,
    type InferAttributes,
    type InferCreationAttributes,
} from "sequelize"
import { sequelize } from "../config/database.ts"

export class Material extends Model<
    InferAttributes<Material>,
    InferCreationAttributes<Material>
> {
    declare id: CreationOptional<number>
    declare name: string
}

Material.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true,
        },
    },
    {
        tableName: "materials",
        sequelize,
    },
)
