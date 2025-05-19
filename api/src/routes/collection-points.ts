import { Router } from "express"
import { validateOrReject } from "class-validator"
import { CollectionPoint } from "../models/collection-point.ts"
import { Material } from "../models/material.ts"
import { CreateCollectionPointDto } from "../dto/create-collection-point-dto.ts"

const router = Router()

router.get("/", async (_, res) => {
    try {
        const points = await CollectionPoint.findAll({
            include: [Material],
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
        })

        const formattedPoints = points.map(point => ({
            id: point.id,
            name: point.name,
            address: point.address,
            //@ts-ignore
            materials: point.Materials.map(m => m.name),
            hours: point.hours,
            phone: point.phone,
            website: point.website,
            description: point.description,
            latitude: point.latitude,
            longitude: point.longitude
        }))

        res.json(formattedPoints)
    } catch (error) {
        console.error("Erro ao obter pontos de coleta:", error)
        res.status(500).json({ message: "Erro ao obter pontos de coleta." })
    }
})

router.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const point = await CollectionPoint.findByPk(id, {
            include: [Material],
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
        })
        if (point) {
            const formattedPoint = {
                id: point.id,
                name: point.name,
                address: point.address,
                //@ts-ignore
                materials: point.Materials.map((m) => m.name),
                hours: point.hours,
                phone: point.phone,
                website: point.website,
                description: point.description,
                latitude: point.latitude,
                longitude: point.longitude,
            }
            res.json(formattedPoint)
        } else {
            res.status(404).json({ message: "Ponto de coleta não encontrado." })
        }
    } catch (error) {
        console.error("Erro ao obter ponto de coleta:", error)
        res.status(500).json({ message: "Erro ao obter ponto de coleta." })
    }
})

router.post("/", async (req, res) => {
    try {
        const dto = new CreateCollectionPointDto(req.body)
        await validateOrReject(dto)

        const newPoint = await CollectionPoint.create({
            name: dto.name,
            address: dto.address,
            hours: dto.hours,
            phone: dto.phone,
            website: dto.website,
            description: dto.description,
            latitude: dto.latitude,
            longitude: dto.longitude,
        })

        if (dto.materials && dto.materials.length > 0) {
            const materialModels = await Material.findAll({
                where: {
                    name: dto.materials,
                },
            })
            await newPoint.setMaterials(materialModels)
        }

        const pointWithMaterials = await CollectionPoint.findByPk(newPoint.id, {
            include: [Material],
        })
        res.status(201).json(pointWithMaterials)
    } catch (error) {
        console.error("Erro na criação de ponto de coleta:", error)
        res.status(500).json({ message: "Erro na criação de ponto de coleta." })
    }
})

router.put("/:id", async (req, res) => {
    const { id } = req.params

    try {
        const dto = new CreateCollectionPointDto(req.body)
        await validateOrReject(dto)

        const point = await CollectionPoint.findByPk(id)
        if (point) {
            await point.update({
                name: dto.name,
                address: dto.address,
                hours: dto.hours,
                phone: dto.phone,
                website: dto.website,
                description: dto.description,
                latitude: dto.latitude,
                longitude: dto.longitude,
            })

            if (dto.materials && dto.materials.length > 0) {
                const materialModels = await Material.findAll({
                    where: {
                        name: dto.materials,
                    },
                })
                await point.setMaterials(materialModels)
            }

            const updatedPoint = await CollectionPoint.findByPk(id, {
                include: [Material],
            })
            res.json(updatedPoint)
        } else {
            res.status(404).json({ message: "Ponto de coleta não encontrado." })
        }
    } catch (error) {
        if (Array.isArray(error)) {
            res.status(400).json({
                message: "Validação falhou",
                errors: error.map((err) => ({
                    property: err.property,
                    constraints: err.constraints,
                })),
            })
        }
        console.error("Erro ao atualizar ponto de coleta:", error)
        res.status(500).json({ message: "Erro ao atualizar ponto de coleta." })
    }
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params

    try {
        const point = await CollectionPoint.findByPk(id)
        if (point) {
            await point.destroy()
            res.status(204).send()
        } else {
            res.status(404).json({ message: "Ponto de coleta não encontrado." })
        }
    } catch (error) {
        console.error("Erro ao excluir ponto de coleta:", error)
        res.status(500).json({ message: "Erro ao excluir ponto de coleta." })
    }
})

export { router as CollectionPointsRouter }
