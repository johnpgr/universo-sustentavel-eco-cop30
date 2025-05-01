import { Button } from "~/components/ui/button"
import { Leaf } from "lucide-react"
import { Link } from "react-router"

export default function HomePage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-gradient-to-b from-green-50 to-green-100">
            <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center gap-8 py-12">
                <div className="flex flex-col items-center text-center">
                    <div className="relative w-32 h-32 mb-6">
                        <div className="absolute inset-0 flex items-center justify-center bg-green-500 rounded-full">
                            <Leaf className="w-16 h-16 text-white" />
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-green-800 mb-2">
                        Universo Sustentável
                    </h1>
                    <p className="text-lg text-green-700 mb-6">
                        Sustentabilidade para COP 30
                    </p>

                    <p className="text-gray-600 mb-2">
                        Ajudando a transformar Belém em um modelo de cidade
                        eco-eficiente através da educação sobre reciclagem e
                        descarte correto de resíduos.
                    </p>
                </div>

                <Link to="/search" className="w-full">
                    <Button className="w-full py-6 text-lg bg-green-600 hover:bg-green-700">
                        Começar
                    </Button>
                </Link>

                <div className="mt-8 text-sm text-gray-500 text-center">
                    <h2 className="font-medium text-green-700 mb-2">
                        Sobre o Universo Sustentável
                    </h2>
                    <p className="mb-4">
                        Este aplicativo foi desenvolvido para facilitar e educar
                        as pessoas sobre a separação e o descarte correto de
                        resíduos, fornecendo informações sobre os tipos de
                        materiais recicláveis e pontos de coleta disponíveis em
                        Belém.
                    </p>
                    <p>
                        Nossa iniciativa reforça o compromisso com a
                        sustentabilidade e ajuda a transformar a COP 30 em um
                        modelo de evento eco-eficiente.
                    </p>
                </div>
            </div>
        </main>
    )
}
