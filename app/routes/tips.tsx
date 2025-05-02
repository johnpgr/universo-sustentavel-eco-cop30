import { Card, CardContent } from "~/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { ArrowLeft } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Link } from "react-router"
import ImgRecycleGlass from "~/assets/reciclagem-vidro.webp"
import ImgRecyclePlastic from "~/assets/reciclagem-plastico.webp"
import ImgRecyclePaper from "~/assets/reciclagem-papel.webp"
import ImgRecycleMetal from "~/assets/reciclagem-metal.webp"

export default function TipsPage() {
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
                        Dicas de Reciclagem
                    </h1>
                </div>

                <p className="text-gray-600 mb-2">
                    Aprenda sobre os diferentes tipos de materiais recicláveis e
                    como prepará-los corretamente para reciclagem.
                </p>

                <Tabs defaultValue="plastic" className="w-full">
                    <TabsList className="grid grid-cols-4 h-auto w-full">
                        <TabsTrigger value="plastic" className="text-xs text-red-500 py-2">
                            Plástico
                        </TabsTrigger>
                        <TabsTrigger value="paper" className="text-xs text-blue-500 py-2">
                            Papel
                        </TabsTrigger>
                        <TabsTrigger value="metal" className="text-xs text-yellow-500 py-2">
                            Metal
                        </TabsTrigger>
                        <TabsTrigger value="glass" className="text-xs text-green-500 py-2">
                            Vidro
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="plastic" className="mt-4">
                        <Card className="border-green-200">
                            <CardContent className="p-4">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden">
                                        <img
                                            src={ImgRecyclePlastic}
                                            alt="Ícone de plástico"
                                            className="w-16 h-16 object-cover"
                                        />
                                    </div>
                                </div>

                                <h2 className="font-medium text-green-800 text-center mb-4">
                                    Reciclagem de Plástico
                                </h2>

                                <div className="space-y-4 text-sm">
                                    <p>
                                        O plástico pode levar mais de 400 anos
                                        para se decompor na natureza. Reciclar
                                        plástico economiza petróleo e reduz a
                                        poluição.
                                    </p>

                                    <div>
                                        <h3 className="font-medium text-green-700 mb-1">
                                            Como preparar:
                                        </h3>
                                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                            <li>
                                                Lave as embalagens para remover
                                                resíduos
                                            </li>
                                            <li>
                                                Remova rótulos quando possível
                                            </li>
                                            <li>Separe tampas e embalagens</li>
                                            <li>
                                                Comprima as garrafas para ocupar
                                                menos espaço
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="font-medium text-green-700 mb-1">
                                            O que pode ser reciclado:
                                        </h3>
                                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                            <li>
                                                Garrafas PET (refrigerante,
                                                água)
                                            </li>
                                            <li>
                                                Embalagens de produtos de
                                                limpeza
                                            </li>
                                            <li>Potes de alimentos</li>
                                            <li>Sacos e sacolas plásticas</li>
                                            <li>Tubos e canos de PVC</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="font-medium text-green-700 mb-1">
                                            O que NÃO pode ser reciclado:
                                        </h3>
                                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                            <li>
                                                Embalagens metalizadas (como de
                                                salgadinhos)
                                            </li>
                                            <li>
                                                Plásticos muito sujos ou
                                                contaminados
                                            </li>
                                            <li>Adesivos e fitas plásticas</li>
                                            <li>Cabos de panela</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="paper" className="mt-4">
                        <Card className="border-green-200">
                            <CardContent className="p-4">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center overflow-hidden">
                                        <img
                                            src={ImgRecyclePaper}
                                            alt="Ícone de papel"
                                            className="w-16 h-16 object-cover"
                                        />
                                    </div>
                                </div>

                                <h2 className="font-medium text-green-800 text-center mb-4">
                                    Reciclagem de Papel
                                </h2>

                                <div className="space-y-4 text-sm">
                                    <p>
                                        Reciclar papel ajuda a preservar
                                        florestas e economiza água e energia.
                                        Uma tonelada de papel reciclado poupa
                                        cerca de 20 árvores.
                                    </p>

                                    <div>
                                        <h3 className="font-medium text-green-700 mb-1">
                                            Como preparar:
                                        </h3>
                                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                            <li>
                                                Remova grampos, clipes e fitas
                                                adesivas
                                            </li>
                                            <li>
                                                Separe por tipos (jornal,
                                                revista, papelão)
                                            </li>
                                            <li>Mantenha seco e limpo</li>
                                            <li>
                                                Dobre caixas de papelão para
                                                economizar espaço
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="font-medium text-green-700 mb-1">
                                            O que pode ser reciclado:
                                        </h3>
                                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                            <li>Jornais e revistas</li>
                                            <li>Caixas de papelão</li>
                                            <li>
                                                Folhas de caderno e impressão
                                            </li>
                                            <li>
                                                Envelopes (sem janela plástica)
                                            </li>
                                            <li>
                                                Embalagens longa vida (Tetra
                                                Pak)
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="font-medium text-green-700 mb-1">
                                            O que NÃO pode ser reciclado:
                                        </h3>
                                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                            <li>
                                                Papel higiênico e guardanapos
                                                usados
                                            </li>
                                            <li>
                                                Papel plastificado ou metalizado
                                            </li>
                                            <li>Papel carbono</li>
                                            <li>Fotografias</li>
                                            <li>Papel sujo de alimentos</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="metal" className="mt-4">
                        <Card className="border-green-200">
                            <CardContent className="p-4">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                                        <img
                                            src={ImgRecycleMetal}
                                            alt="Ícone de metal"
                                            className="w-16 h-16 object-cover"
                                        />
                                    </div>
                                </div>

                                <h2 className="font-medium text-green-800 text-center mb-4">
                                    Reciclagem de Metal
                                </h2>

                                <div className="space-y-4 text-sm">
                                    <p>
                                        Metais podem ser reciclados infinitas
                                        vezes sem perder suas propriedades. A
                                        reciclagem de alumínio economiza 95% da
                                        energia necessária para produzi-lo.
                                    </p>

                                    <div>
                                        <h3 className="font-medium text-green-700 mb-1">
                                            Como preparar:
                                        </h3>
                                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                            <li>
                                                Lave as embalagens para remover
                                                resíduos
                                            </li>
                                            <li>
                                                Comprima latas para economizar
                                                espaço
                                            </li>
                                            <li>
                                                Separe tampas metálicas de
                                                garrafas
                                            </li>
                                            <li>
                                                Remova rótulos quando possível
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="font-medium text-green-700 mb-1">
                                            O que pode ser reciclado:
                                        </h3>
                                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                            <li>
                                                Latas de alumínio (refrigerante,
                                                cerveja)
                                            </li>
                                            <li>
                                                Latas de aço (conservas, leite
                                                em pó)
                                            </li>
                                            <li>Tampas metálicas</li>
                                            <li>Panelas sem cabo</li>
                                            <li>Ferragens e pregos</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="font-medium text-green-700 mb-1">
                                            O que NÃO pode ser reciclado:
                                        </h3>
                                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                            <li>
                                                Embalagens de produtos tóxicos
                                            </li>
                                            <li>Latas de tinta</li>
                                            <li>
                                                Pilhas e baterias (precisam de
                                                coleta especial)
                                            </li>
                                            <li>
                                                Clipes e grampos (muito pequenos
                                                para o processo)
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="glass" className="mt-4">
                        <Card className="border-green-200">
                            <CardContent className="p-4">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center overflow-hidden">
                                        <img
                                            src={ImgRecycleGlass}
                                            alt="Ícone de vidro"
                                            className="w-16 h-16 object-cover"
                                        />
                                    </div>
                                </div>

                                <h2 className="font-medium text-green-800 text-center mb-4">
                                    Reciclagem de Vidro
                                </h2>

                                <div className="space-y-4 text-sm">
                                    <p>
                                        O vidro é 100% reciclável e pode ser
                                        reciclado infinitas vezes sem perder
                                        qualidade. Reciclar vidro economiza
                                        energia e reduz a extração de
                                        matérias-primas.
                                    </p>

                                    <div>
                                        <h3 className="font-medium text-green-700 mb-1">
                                            Como preparar:
                                        </h3>
                                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                            <li>
                                                Lave as embalagens para remover
                                                resíduos
                                            </li>
                                            <li>Remova tampas e rótulos</li>
                                            <li>
                                                Não quebre o vidro (facilita a
                                                coleta)
                                            </li>
                                            <li>
                                                Separe por cores quando possível
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="font-medium text-green-700 mb-1">
                                            O que pode ser reciclado:
                                        </h3>
                                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                            <li>Garrafas de bebidas</li>
                                            <li>Potes de alimentos</li>
                                            <li>Frascos de perfumes</li>
                                            <li>Vidros de conservas</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="font-medium text-green-700 mb-1">
                                            O que NÃO pode ser reciclado:
                                        </h3>
                                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                            <li>Espelhos</li>
                                            <li>Vidros de janelas</li>
                                            <li>
                                                Lâmpadas (precisam de coleta
                                                especial)
                                            </li>
                                            <li>Cristais</li>
                                            <li>
                                                Cerâmicas, porcelanas e louças
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    )
}
