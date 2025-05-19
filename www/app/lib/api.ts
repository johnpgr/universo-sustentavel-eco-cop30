import type { CollectionPoint } from "~/lib/types"

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001"
const API_URL = `${BASE_URL}/api`

export async function getCollectionPoints(): Promise<CollectionPoint[]> {
    const response = await fetch(`${API_URL}/collection-points`)
    if (!response.ok) {
        throw new Error("Falha ao obter pontos de coleta")
    }
    return response.json()
}

export async function getCollectionPoint(id: string): Promise<CollectionPoint> {
    const response = await fetch(`${API_URL}/collection-points/${id}`)
    if (!response.ok) {
        throw new Error("Falha ao obter ponto de coleta")
    }
    return response.json()
}
