import {
    Model,
    DataTypes,
    type CreationOptional,
    type InferAttributes,
    type InferCreationAttributes,
    type HasManyAddAssociationMixin,
    type HasManyAddAssociationsMixin,
    type HasManyGetAssociationsMixin,
    type HasManySetAssociationsMixin,
} from "sequelize"
import { sequelize } from "../config/database.ts"
import { Material } from "./material.ts"

export class CollectionPoint extends Model<
    InferAttributes<CollectionPoint>,
    InferCreationAttributes<CollectionPoint>
> {
    declare id: CreationOptional<number>
    declare name: string
    declare address: string
    declare hours: string
    declare phone: string
    declare website: string
    declare description: string
    declare latitude: number
    declare longitude: number

    declare addMaterial: HasManyAddAssociationMixin<Material, number>
    declare addMaterials: HasManyAddAssociationsMixin<Material, number>
    declare getMaterials: HasManyGetAssociationsMixin<Material>
    declare setMaterials: HasManySetAssociationsMixin<Material, number>
}

CollectionPoint.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        hours: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        phone: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        website: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        latitude: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        longitude: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        tableName: "collection_points",
        sequelize,
    },
)

CollectionPoint.belongsToMany(Material, {
    through: "collection_point_materials",
})
Material.belongsToMany(CollectionPoint, {
    through: "collection_point_materials",
})
