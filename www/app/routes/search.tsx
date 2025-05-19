import { useState } from "react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Card, CardContent } from "~/components/ui/card"
import { MapPin, Lightbulb, Recycle } from "lucide-react"
import { NavButton } from "~/components/nav-button"

export default function SearchPage() {
    const [searchQuery, setSearchQuery] = useState("")

    return (
        <main className="flex min-h-screen flex-col p-6 bg-gradient-to-b from-green-50 to-green-100">
            <div className="w-full max-w-md mx-auto flex flex-col gap-6">
                <h1 className="text-2xl font-bold text-green-800 text-center mt-4">
                    Universo Sustentável
                </h1>

                <Card className="border-green-200">
                    <CardContent>
                        <div className="space-y-4">
                            <h2 className="text-lg font-medium text-green-700">
                                Encontre pontos de coleta
                            </h2>
                            <div className="flex gap-2">
                                <Input
                                    type="text"
                                    placeholder="Buscar por bairro ou endereço..."
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                    className="border-green-300 focus-visible:ring-green-500"
                                />
                                <Button
                                    variant="outline"
                                    className="shrink-0 border-green-300 text-green-700"
                                >
                                    Buscar
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 gap-4 mt-4">
                    <NavButton
                        href="/locations"
                        icon={<MapPin className="w-5 h-5" />}
                        title="Pontos de Coleta"
                        description="Encontre locais para descarte de resíduos recicláveis em Belém"
                    />

                    <NavButton
                        href="/tips"
                        icon={<Lightbulb className="w-5 h-5" />}
                        title="Dicas de Reciclagem"
                        description="Aprenda sobre materiais recicláveis e como prepará-los"
                    />

                    <NavButton
                        href="/education"
                        icon={<Recycle className="w-5 h-5" />}
                        title="Separação de Resíduos"
                        description="Guia para separação adequada de materiais recicláveis"
                    />
                </div>
            </div>
        </main>
    )
}
