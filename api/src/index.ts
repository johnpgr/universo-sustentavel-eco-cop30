import express from "express"
import cors from "cors"
import { sequelize } from "./config/database.ts"
import { Material } from "./models/material.ts"
import { CollectionPoint } from "./models/collection-point.ts"
import { CollectionPointsRouter } from "./routes/collection-points.ts"
import data from "../../data.json" with { type: "json" }

async function initializeDatabase() {
    await sequelize.sync()

    if ((await CollectionPoint.count()) === 0) {
        const uniqueMaterials = [
            ...new Set(data.flatMap((point) => point.materials)),
        ]
        await Material.bulkCreate(uniqueMaterials.map((name) => ({ name })))

        for (const point of data) {
            const createdPoint = await CollectionPoint.create({
                name: point.name,
                address: point.address,
                hours: point.hours,
                phone: point.phone,
                website: point.website,
                description: point.description,
                latitude: point.latitude,
                longitude: point.longitude,
            })

            const pointMaterials = await Material.findAll({
                where: {
                    name: point.materials,
                },
            })

            await createdPoint.addMaterials(pointMaterials)
        }
    }
}

async function main() {
    const app = express()
    const port = process.env.PORT || 3001

    app.use(cors())
    app.use(express.json())
    app.use("/api/collection-points", CollectionPointsRouter)

    try {
        await initializeDatabase()
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })
    } catch (error) {
        console.error("Failed to start the server:", error)
        process.exit(1)
    }
}

main()
