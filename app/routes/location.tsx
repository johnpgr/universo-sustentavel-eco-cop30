import { useEffect, useState } from "react"
import { Card, CardContent } from "~/components/ui/card"
import {
    MapPin,
    Clock,
    ArrowLeft,
    Phone,
    Globe,
    ExternalLink,
} from "lucide-react"
import { Button } from "~/components/ui/button"
import type { Route } from "./+types/locations"
import { Link } from "react-router"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"
import { collectionPoints, type CollectionPoint } from "~/lib/data"

// fix leaflet default icon paths
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
})


export default function LocationDetailPage({ params }: Route.MetaArgs) {
    const { id } = params
    const [location, setLocation] = useState<CollectionPoint | null>(null)

    useEffect(() => {
        const foundLocation = collectionPoints.find((point) => point.id === id)
        if (foundLocation) {
            setLocation(foundLocation)
        }
    }, [id])

    if (!location) {
        return (
            <main className="flex min-h-screen flex-col p-6 bg-gradient-to-b from-green-50 to-green-100">
                <div className="w-full max-w-md mx-auto flex flex-col gap-4">
                    <div className="flex items-center mb-2">
                        <Link to="/locations">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-green-700"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </Button>
                        </Link>
                        <h1 className="text-xl font-bold text-green-800 ml-2">
                            Ponto de Coleta
                        </h1>
                    </div>
                    <p className="text-center py-8">
                        Carregando informações...
                    </p>
                </div>
            </main>
        )
    }

    return (
        <main className="flex min-h-screen flex-col p-6 bg-gradient-to-b from-green-50 to-green-100">
            <div className="w-full max-w-md mx-auto flex flex-col gap-4">
                <div className="flex items-center mb-2">
                    <Link to="/locations">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-green-700"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                    </Link>
                    <h1 className="text-xl font-bold text-green-800 ml-2">
                        Detalhes do Ponto
                    </h1>
                </div>

                <Card className="border-green-200">
                    <CardContent className="p-4">
                        <h2 className="font-bold text-xl text-green-800 mb-3">
                            {location.name}
                        </h2>

                        <div className="space-y-3 mb-4">
                            <div className="flex items-start gap-2 text-gray-600">
                                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-green-600" />
                                <span className="text-sm">
                                    {location.address}
                                </span>
                            </div>

                            <div className="flex items-start gap-2 text-gray-600">
                                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-green-600" />
                                <span className="text-sm">
                                    {location.hours}
                                </span>
                            </div>

                            {location.phone && (
                                <div className="flex items-start gap-2 text-gray-600">
                                    <Phone className="w-4 h-4 mt-0.5 shrink-0 text-green-600" />
                                    <span className="text-sm">
                                        {location.phone}
                                    </span>
                                </div>
                            )}

                            {location.website && (
                                <div className="flex items-start gap-2 text-gray-600">
                                    <Globe className="w-4 h-4 mt-0.5 shrink-0 text-green-600" />
                                    <a
                                        href={location.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-green-600 flex items-center gap-1 hover:underline"
                                    >
                                        Visitar site{" "}
                                        <ExternalLink className="w-3 h-3" />
                                    </a>
                                </div>
                            )}
                        </div>

                        <div className="mb-4">
                            <h3 className="font-medium text-green-700 mb-2">
                                Materiais aceitos:
                            </h3>
                            <div className="flex flex-wrap gap-1">
                                {location.materials.map((material) => (
                                    <span
                                        key={material}
                                        className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                                    >
                                        {material}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mb-4">
                            <h3 className="font-medium text-green-700 mb-2">
                                Sobre:
                            </h3>
                            <p className="text-sm text-gray-600">
                                {location.description}
                            </p>
                        </div>

                        <div className="mt-4 bg-gray-100 rounded-lg p-2 h-48 flex items-center justify-center">
                            <MapContainer
                                center={[location.latitude, location.longitude]}
                                zoom={15}
                                zoomControl={false}
                                attributionControl={false}
                                className="w-full h-48 rounded-lg"
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker
                                    position={[
                                        location.latitude,
                                        location.longitude,
                                    ]}
                                >
                                    <Popup>{location.name}</Popup>
                                </Marker>
                            </MapContainer>
                        </div>

                        <div className="mt-4">
                            <Button className="w-full bg-green-600 hover:bg-green-700">
                                Obter direções
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}
