import { Card, CardContent } from "~/components/ui/card"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "~/components/ui/accordion"
import { ArrowLeft } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Link } from "react-router"

export default function EducationPage() {
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
                        Separação de Resíduos
                    </h1>
                </div>

                <p className="text-gray-600 mb-4">
                    Aprenda como separar corretamente os resíduos em sua casa
                    para facilitar a reciclagem e contribuir para um meio
                    ambiente mais limpo.
                </p>

                <Card className="border-green-200 mb-4">
                    <CardContent className="p-4">
                        <h2 className="font-medium text-green-800 mb-3">
                            Por que separar os resíduos?
                        </h2>
                        <p className="text-sm text-gray-600">
                            A separação correta dos resíduos é o primeiro passo
                            para uma reciclagem eficiente. Quando separamos os
                            materiais, facilitamos o trabalho dos catadores e
                            das cooperativas de reciclagem, aumentamos a
                            quantidade de material que pode ser reciclado e
                            reduzimos a contaminação do meio ambiente.
                        </p>
                    </CardContent>
                </Card>

                <h2 className="font-medium text-green-800 mb-2">
                    Guia de Separação
                </h2>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-green-200">
                        <AccordionTrigger className="text-green-700 hover:text-green-800">
                            Separação por cores
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-gray-600">
                            <p className="mb-3">
                                No Brasil, a coleta seletiva segue um padrão de
                                cores estabelecido pelo CONAMA (Conselho
                                Nacional do Meio Ambiente):
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                                    <span>
                                        <strong>Azul:</strong> Papel e papelão
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                                    <span>
                                        <strong>Vermelho:</strong> Plástico
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                                    <span>
                                        <strong>Verde:</strong> Vidro
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                                    <span>
                                        <strong>Amarelo:</strong> Metal
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-brown-500 rounded-full"></div>
                                    <span>
                                        <strong>Marrom:</strong> Resíduos
                                        orgânicos
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                                    <span>
                                        <strong>Cinza:</strong> Resíduos não
                                        recicláveis
                                    </span>
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border-green-200">
                        <AccordionTrigger className="text-green-700 hover:text-green-800">
                            Separação em casa
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-gray-600">
                            <p className="mb-3">
                                Para facilitar a separação em casa, você pode
                                seguir estas dicas:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    <strong>Use lixeiras diferentes:</strong>{" "}
                                    Tenha pelo menos duas lixeiras em casa - uma
                                    para recicláveis e outra para não
                                    recicláveis.
                                </li>
                                <li>
                                    <strong>Limpe os materiais:</strong> Lave
                                    embalagens que tiveram contato com alimentos
                                    para evitar mau cheiro e atrair insetos.
                                </li>
                                <li>
                                    <strong>Separe corretamente:</strong> Não
                                    misture materiais recicláveis com orgânicos
                                    ou rejeitos.
                                </li>
                                <li>
                                    <strong>Reduza o volume:</strong> Amasse
                                    latas e caixas de papelão para economizar
                                    espaço.
                                </li>
                                <li>
                                    <strong>Separe tampas:</strong> Retire
                                    tampas de garrafas e frascos, pois
                                    geralmente são feitas de materiais
                                    diferentes.
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border-green-200">
                        <AccordionTrigger className="text-green-700 hover:text-green-800">
                            O que fazer com resíduos especiais
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-gray-600">
                            <p className="mb-3">
                                Alguns resíduos precisam de descarte especial:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    <strong>Pilhas e baterias:</strong> Devem
                                    ser entregues em postos de coleta
                                    específicos, como supermercados e lojas de
                                    eletrônicos.
                                </li>
                                <li>
                                    <strong>Eletrônicos:</strong> Computadores,
                                    celulares e outros aparelhos devem ser
                                    levados a pontos de coleta de lixo
                                    eletrônico.
                                </li>
                                <li>
                                    <strong>Medicamentos vencidos:</strong>{" "}
                                    Podem ser entregues em farmácias que possuem
                                    programas de coleta.
                                </li>
                                <li>
                                    <strong>Óleo de cozinha:</strong> Deve ser
                                    armazenado em garrafas PET e levado a pontos
                                    de coleta específicos.
                                </li>
                                <li>
                                    <strong>Lâmpadas:</strong> Fluorescentes e
                                    de LED devem ser entregues em pontos de
                                    coleta específicos.
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="border-green-200">
                        <AccordionTrigger className="text-green-700 hover:text-green-800">
                            Compostagem doméstica
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-gray-600">
                            <p className="mb-3">
                                A compostagem é uma ótima maneira de aproveitar
                                resíduos orgânicos:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    <strong>O que compostar:</strong> Cascas de
                                    frutas e legumes, borra de café, sachês de
                                    chá, cascas de ovos, folhas secas.
                                </li>
                                <li>
                                    <strong>O que não compostar:</strong>{" "}
                                    Carnes, laticínios, óleos, alimentos
                                    cozidos, fezes de animais.
                                </li>
                                <li>
                                    <strong>Como começar:</strong> Use uma
                                    composteira doméstica ou faça uma com
                                    baldes. Alterne camadas de resíduos
                                    orgânicos com folhas secas ou serragem.
                                </li>
                                <li>
                                    <strong>Benefícios:</strong> Reduz o volume
                                    de lixo enviado aos aterros e produz adubo
                                    natural para plantas.
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="border-green-200">
                        <AccordionTrigger className="text-green-700 hover:text-green-800">
                            Dicas para reduzir resíduos
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-gray-600">
                            <p className="mb-3">
                                Além de reciclar, é importante reduzir a geração
                                de resíduos:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    <strong>Use sacolas reutilizáveis:</strong>{" "}
                                    Evite sacolas plásticas descartáveis ao
                                    fazer compras.
                                </li>
                                <li>
                                    <strong>
                                        Evite produtos descartáveis:
                                    </strong>{" "}
                                    Prefira produtos duráveis e reutilizáveis.
                                </li>
                                <li>
                                    <strong>Compre a granel:</strong> Reduza
                                    embalagens comprando alimentos a granel.
                                </li>
                                <li>
                                    <strong>
                                        Repare em vez de substituir:
                                    </strong>{" "}
                                    Conserte objetos quebrados em vez de
                                    descartá-los.
                                </li>
                                <li>
                                    <strong>Doe o que não usa:</strong> Roupas,
                                    móveis e outros itens em bom estado podem
                                    ser doados.
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <Card className="border-green-200 mt-4">
                    <CardContent className="p-4">
                        <h2 className="font-medium text-green-800 mb-3">
                            Impacto da separação correta
                        </h2>
                        <div className="space-y-3 text-sm text-gray-600">
                            <p>
                                Quando separamos corretamente os resíduos,
                                contribuímos para:
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>
                                    Redução do volume de lixo enviado aos
                                    aterros sanitários
                                </li>
                                <li>Economia de recursos naturais e energia</li>
                                <li>
                                    Diminuição da poluição do solo, água e ar
                                </li>
                                <li>
                                    Geração de empregos na indústria da
                                    reciclagem
                                </li>
                                <li>
                                    Redução da emissão de gases de efeito estufa
                                </li>
                            </ul>
                            <p className="mt-3">
                                Lembre-se: pequenas ações individuais, quando
                                somadas, geram grandes impactos positivos para o
                                meio ambiente!
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}
