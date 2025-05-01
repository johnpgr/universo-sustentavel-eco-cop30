import { Card, CardContent } from "~/components/ui/card"
import { MapPin, Clock, ArrowLeft } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Link } from "react-router"
import useGeolocation from "~/hooks/use-geolocation"
import { collectionPoints } from "~/lib/data"
import { getDistance } from "~/lib/distance"

export default function LocationsPage() {
    const userCoords = useGeolocation()

    return (
        <main className="flex min-h-screen flex-col p-6 bg-gradient-to-b from-green-50 to-green-100">
            <div className="w-full max-w-md mx-auto flex flex-col gap-4">
                <div className="flex items-center mb-2">
                    <Link to="/search">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-green-700"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                    </Link>
                    <h1 className="text-xl font-bold text-green-800 ml-2">
                        Pontos de Coleta
                    </h1>
                </div>

                <p className="text-gray-600 mb-4">
                    Encontre os pontos de coleta de resíduos recicláveis mais
                    próximos de você em Belém.
                </p>

                <div className="flex flex-col gap-4">
                    {collectionPoints.map((point) => (
                        <Link key={point.id} to={`/locations/${point.id}`}>
                            <Card className="border-green-200 hover:border-green-400 transition-colors">
                                <CardContent className="p-4">
                                    <div className="flex justify-between items-start">
                                        <h2 className="font-medium text-green-800">
                                            {point.name}
                                        </h2>
                                        <span className="text-sm text-gray-500">
                                            {userCoords
                                                ? `${getDistance(
                                                      userCoords.lat,
                                                      userCoords.lng,
                                                      point.latitude,
                                                      point.longitude
                                                  ).toFixed(1)} km`
                                                : "--"}
                                        </span>
                                    </div>

                                    <div className="flex items-start gap-2 mt-2 text-gray-600">
                                        <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-green-600" />
                                        <span className="text-sm">
                                            {point.address}
                                        </span>
                                    </div>

                                    <div className="flex items-start gap-2 mt-1 text-gray-600">
                                        <Clock className="w-4 h-4 mt-0.5 shrink-0 text-green-600" />
                                        <span className="text-sm">
                                            {point.hours}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-1 mt-3">
                                        {point.materials.map((material) => (
                                            <span
                                                key={material}
                                                className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                                            >
                                                {material}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    )
}
