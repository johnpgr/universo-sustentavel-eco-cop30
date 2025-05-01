export const collectionPoints = [
    {
        id: "1",
        name: "Ecoponto Ver-o-Peso",
        address: "Av. Boulevard Castilhos França, s/n - Campina, Belém - PA",
        materials: ["Plástico", "Papel", "Metal", "Vidro"],
        hours: "Seg-Sex: 8h às 17h, Sáb: 8h às 12h",
        phone: "(91) 3283-5000",
        website: "https://belem.pa.gov.br/ecopontos",
        description:
            "O Ecoponto Ver-o-Peso é um dos principais pontos de coleta seletiva de Belém, localizado próximo ao famoso mercado Ver-o-Peso. Aceita diversos tipos de materiais recicláveis e possui uma equipe treinada para orientar sobre a separação correta dos resíduos.",
        latitude: -1.4524,
        longitude: -48.5035,
    },
    {
        id: "2",
        name: "Cooperativa Concaves",
        address: "Rua dos Mundurucus, 3600 - Cremação, Belém - PA",
        materials: ["Plástico", "Papel", "Metal"],
        hours: "Seg-Sex: 8h às 18h",
        phone: "(91) 3254-8721",
        website: "https://concaves.org.br",
        description:
            "A Cooperativa Concaves atua na coleta, triagem e comercialização de materiais recicláveis. Formada por catadores de materiais recicláveis, a cooperativa contribui para a geração de renda e para a preservação do meio ambiente.",
        latitude: -1.4612,
        longitude: -48.4789,
    },
    {
        id: "3",
        name: "Ecoponto Batista Campos",
        address:
            "Av. Governador José Malcher, 1500 - Batista Campos, Belém - PA",
        materials: ["Plástico", "Papel", "Metal", "Vidro", "Eletrônicos"],
        hours: "Seg-Sáb: 8h às 17h",
        phone: "(91) 3283-5010",
        website: "https://belem.pa.gov.br/ecopontos",
        description:
            "O Ecoponto Batista Campos é um dos mais completos da cidade, aceitando inclusive resíduos eletrônicos. Possui infraestrutura adequada para receber diferentes tipos de materiais e conta com contêineres específicos para cada categoria.",
        latitude: -1.4532,
        longitude: -48.4812,
    },
    {
        id: "4",
        name: "Ponto de Coleta Nazaré",
        address: "Av. Nazaré, 450 - Nazaré, Belém - PA",
        materials: ["Plástico", "Papel", "Metal", "Óleo de cozinha"],
        hours: "Ter-Dom: 9h às 16h",
        phone: "(91) 3242-5678",
        website: "https://reciclabelem.com.br",
        description:
            "O Ponto de Coleta Nazaré é especializado na coleta de óleo de cozinha usado, além de outros materiais recicláveis. O óleo coletado é transformado em biodiesel e sabão, evitando a contaminação da água e do solo.",
        latitude: -1.4589,
        longitude: -48.4876,
    },
    {
        id: "5",
        name: "Cooperativa Recicla Belém",
        address: "Rua dos Pariquis, 2800 - Jurunas, Belém - PA",
        materials: ["Plástico", "Papel", "Metal", "Vidro"],
        hours: "Seg-Sex: 7h às 17h",
        phone: "(91) 3225-9876",
        website: "https://reciclabelem.org",
        description:
            "A Cooperativa Recicla Belém é formada por catadores que trabalham na coleta seletiva de materiais recicláveis. Além da coleta, a cooperativa realiza ações de educação ambiental nas comunidades próximas, conscientizando sobre a importância da reciclagem.",
        latitude: -1.4702,
        longitude: -48.4923,
    },
]

export type CollectionPoint = (typeof collectionPoints)[number]
