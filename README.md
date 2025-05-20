# Feed Instagram

Este projeto é uma aplicação web desenvolvida com Next.js, TypeScript e Tailwind CSS, que simula um feed do Instagram, no qual são renderizados 20 posts com username, avatar, img, descrição e quantidade de likes.

## Como Executar

1. Clone o repositório:
```bash
   git clone https://github.com/lucasterencio/feed_instagram.git
```

2. Instalando dependências
```bash
   npm install || yarn install
```

3. Inicie o servidor de desenvolvimento:
```bash 
  npm run dev || yarn dev

  Abra http://localhost:3000 no seu navegador para visualizar a aplicação.
```

## Funcionalidades

- **Visualização de Feed**: Exibe uma lista de postagens simulando um feed do Instagram.
- **Componentes Reutilizáveis**: Utiliza componentes modulares para facilitar a manutenção e reutilização do código.
- **Estilização com Tailwind CSS**: Aplica estilos de forma eficiente e responsiva utilizando Tailwind CSS.

## Tecnologias Utilizadas

- **Next.js**: Framework React para desenvolvimento de aplicações web.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Tailwind CSS**: Framework de utilitários CSS para estilização rápida e responsiva.
- **PostCSS**: Ferramenta para transformar estilos CSS com plugins.
- **ESLint**: Ferramenta para análise de código estático, identificando padrões problemáticos.

## Estrutura do Projeto

- `public/`: Arquivos públicos, como imagens e ícones.
- `src/`: Código-fonte da aplicação, incluindo componentes e páginas.
- `data.ts`: Arquivo contendo dados simulados para o feed.
- `next.config.ts`: Configurações do Next.js.
- `tailwind.config.js`: Configurações do Tailwind CSS.
