# Universo Sustentável ♻️

Bem-vindo ao Universo Sustentável! Este é um aplicativo web criado para ajudar os cidadãos de Belém a praticarem a sustentabilidade no dia a dia, com foco especial na COP 30.

## O que o projeto faz?

*   **Educação Ambiental:** Ensina sobre a importância da separação correta do lixo e como fazer isso.
*   **Dicas de Reciclagem:** Oferece guias práticos sobre como preparar diferentes materiais (plástico, papel, metal, vidro) para a reciclagem.
*   **Pontos de Coleta:** Ajuda a encontrar locais próximos para descartar corretamente os materiais recicláveis.
*   **Engajamento para a COP 30:** Incentiva práticas sustentáveis para tornar Belém um exemplo durante a conferência.

## Iniciar localmente

Para ver o projeto funcionando localmente, siga estes passos simples:

1.  **Clone o projeto:**
    Primeiro, você precisa baixar os arquivos do projeto. Abra o terminal e use o comando:
    ```bash
    git clone https://github.com/johnpgr/alta-performance-web-react.git
    ```
    Depois, entre na pasta que foi criada:
    ```bash
    cd alta-performance-web-react
    ```

2.  **Instale as dependências:**
    O projeto precisa de algumas ferramentas para funcionar. Use o comando `pnpm` (um gerenciador de pacotes rápido) para instalar tudo:
    ```bash
    pnpm install
    ```
    *Se você não tiver o `pnpm` instalado, pode instalá-lo seguindo as instruções em [pnpm.io](https://pnpm.io/installation).*

3.  **Inicie o aplicativo:**
    Agora é só rodar o comando para iniciar o servidor de desenvolvimento:
    ```bash
    pnpm dev
    ```

4.  **Acesse no navegador:**
    Abra seu navegador de internet (como Chrome, Firefox, etc.) e acesse o endereço que aparecer no terminal (geralmente `http://localhost:3000`).

Pronto! Agora você pode navegar pelo aplicativo Universo Sustentável na sua máquina.

## Arquitetura do Projeto

O projeto é dividido em duas partes principais:

*   **API (Backend):** Construída com Node.js, Express e Sequelize, responsável por gerenciar os dados dos pontos de coleta e materiais recicláveis.
*   **WWW (Frontend):** Um aplicativo React (usando Remix) que consome a API para exibir as informações aos usuários.

### API Endpoints

A API fornece os seguintes endpoints para gerenciar os pontos de coleta:

*   **`GET /api/collection-points`**: Lista todos os pontos de coleta.
    *   Retorna um array de objetos, cada um representando um ponto de coleta com seus detalhes e materiais aceitos.
*   **`GET /api/collection-points/:id`**: Obtém um ponto de coleta específico pelo seu ID.
    *   Retorna um objeto com os detalhes do ponto de coleta.
*   **`POST /api/collection-points`**: Cria um novo ponto de coleta.
    *   Corpo da requisição (JSON):
        ```json
        {
          "name": "Nome do Ponto",
          "address": "Endereço Completo",
          "materials": ["Plástico", "Papel"],
          "hours": "Seg-Sex: 08h-18h",
          "phone": "(91) 99999-9999",
          "website": "https://exemplo.com",
          "description": "Descrição adicional",
          "latitude": -1.4558,
          "longitude": -48.5038
        }
        ```
    *   Retorna o objeto do ponto de coleta criado com status 201.
*   **`PUT /api/collection-points/:id`**: Atualiza um ponto de coleta existente.
    *   Corpo da requisição (JSON): Similar ao `POST`.
    *   Retorna o objeto do ponto de coleta atualizado.

### Armazenamento de Dados (Banco de Dados)

O backend utiliza um banco de dados (configurado via Sequelize, por padrão SQLite para desenvolvimento) para persistir as informações. As principais entidades são:

*   **`CollectionPoint`**: Representa um ponto de coleta.
    *   Campos: `id`, `name`, `address`, `hours`, `phone`, `website`, `description`, `latitude`, `longitude`.
    *   Relacionamento: Possui uma relação de muitos-para-muitos com `Material`.
*   **`Material`**: Representa um tipo de material reciclável.
    *   Campos: `id`, `name`.
    *   Relacionamento: Associado a múltiplos `CollectionPoint`.
