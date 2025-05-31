# Roteiro de Vídeo: Universo Sustentável - Aplicação Web de Alta Performance

## **Introdução (0:00 - 0:45)**

**[Tela inicial com logo/título da aplicação]**

"Olá! Hoje vamos apresentar o **Universo Sustentável**, uma aplicação web de alta performance desenvolvida especialmente para a COP 30 em Belém. Nossa missão é transformar Belém em um modelo de cidade sustentável através da educação sobre reciclagem e descarte correto de resíduos."

**[Mostrar homepage da aplicação]**

"A aplicação foi pensada para ser rápida, eficiente e acessível, utilizando conceitos modernos de alta performance web para garantir uma experiência excepcional aos usuários."

---

## **Demonstração da Aplicação (0:45 - 2:30)**

**[Navegação pela homepage]**

"Vamos começar explorando a interface. Nossa homepage apresenta uma introdução clara sobre sustentabilidade e um botão 'Começar' que direciona para a funcionalidade principal."

**[Navegação para a página de busca]**

"Aqui temos nossa funcionalidade de busca de pontos de coleta, onde os usuários podem encontrar locais próximos para descartar materiais recicláveis."

**[Mostrar página de dicas - tips.tsx]**

"Na seção de dicas, organizamos informações detalhadas sobre reciclagem por categorias: plástico, papel, metal e vidro. Cada categoria apresenta informações sobre preparação, materiais aceitos e não aceitos."

**[Mostrar página de educação]**

"A página educativa explica o sistema de cores da coleta seletiva brasileira, seguindo padrões do CONAMA, e oferece informações sobre descarte especial de itens como pilhas, eletrônicos e medicamentos."

**[Demonstrar responsividade]**

"Observe como a aplicação se adapta perfeitamente a diferentes tamanhos de tela, garantindo uma experiência consistente em dispositivos móveis e desktop."

---

## **Arquitetura e Backend (2:30 - 3:45)**

**[Mostrar estrutura do projeto]**

"Nossa aplicação segue uma arquitetura moderna dividida em API (backend) e WWW (frontend). O backend foi construído com Node.js, Express e Sequelize."

**[Mostrar código da API - endpoints]**

```javascript
// API Endpoints para pontos de coleta
GET /api/collection-points      // Lista todos os pontos
GET /api/collection-points/:id  // Ponto específico
POST /api/collection-points     // Criar novo ponto
PUT /api/collection-points/:id  // Atualizar ponto
```

**[Mostrar modelo de dados]**

"O banco de dados utiliza duas entidades principais: CollectionPoint e Material, com relacionamento muitos-para-muitos, permitindo que cada ponto aceite múltiplos tipos de materiais."

**[Explicar conceitos de performance no backend]**

"Implementamos otimizações como queries eficientes no Sequelize, estrutura de dados normalizada e endpoints RESTful bem definidos para minimizar transferência de dados desnecessários."

---

## **Frontend e Conceitos de Alta Performance (3:45 - 5:15)**

**[Mostrar código React - root.tsx]**

```tsx
// Meta tags otimizadas para SEO e performance
export function meta({}: Route.MetaArgs) {
    return [
        { title: "Universo Sustentável - Sustentabilidade para COP 30" },
        {
            name: "description",
            content: "Aplicativo para promover práticas sustentáveis..."
        },
    ]
}
```

**[Mostrar CSS com variáveis customizadas]**

```css
/* Sistema de design com CSS custom properties */
:root {
    --sidebar: oklch(0.21 0.006 285.885);
    --sidebar-foreground: oklch(0.985 0 0);
    /* Cores otimizadas para acessibilidade */
}
```

**[Explicar conceitos de alta performance utilizados:]**

### **1. React Router com Code Splitting**
"Utilizamos React Router para navegação client-side, eliminando recarregamentos de página e melhorando a experiência do usuário."

### **2. CSS Moderno e Otimizado**
"Utilizamos Tailwind CSS e custom properties para um design system consistente e altamente performático."

### **3. Componentes Reutilizáveis**
**[Mostrar componente Card do shadcn/ui sendo reutilizado]**
"Adotamos componentes acessíveis e reutilizáveis do shadcn/ui, como Cards e Accordions, que facilita a manutenção do código."

### **4. Lazy Loading e Otimização de Imagens**
"As imagens são carregadas de forma otimizada com lazy loading implícito."

### **5. Meta Tags e SEO**
"Implementamos meta tags otimizadas para melhor indexação e compartilhamento social."

---

## **Diferenciais e Finalização (5:15 - 6:00)**

**[Voltar para a aplicação funcionando]**

"Nossos principais diferenciais são:

### **Performance Excepcional:**
- Navegação instantânea sem recarregamentos
- Bundle otimizado com code splitting
- CSS moderno e eficiente

### **Experiência do Usuário:**
- Interface intuitiva e responsiva
- Informações organizadas por categorias
- Sistema de cores padronizado (CONAMA)

### **Impacto Social:**
- Educação ambiental acessível
- Foco na COP 30 e sustentabilidade
- Incentivo a práticas eco-eficientes

### **Tecnologia de Ponta:**
- React com React Router
- API RESTful bem estruturada
- Banco de dados relacional otimizado
- Deploy moderno e escalável"

**[Tela final com call-to-action]**

"O Universo Sustentável representa a união entre tecnologia de alta performance e consciência ambiental. Nossa aplicação não apenas informa, mas transforma comportamentos, contribuindo para fazer de Belém um exemplo mundial de sustentabilidade durante a COP 30.

Juntos, podemos construir um futuro mais sustentável, uma reciclagem por vez!"

---

## **Conceitos de Alta Performance Destacados:**

1. **Client-Side Routing** (React Router)
2. **CSS Otimizado** (Custom Properties + Tailwind)
3. **Componentes Reutilizáveis** 
4. **Meta Tags SEO**
5. **Arquitetura API RESTful**
6. **Lazy Loading**
7. **Bundle Optimization**
8. **Responsive Design**

**Tempo total: ~6 minutos**