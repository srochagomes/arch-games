# Arch Games 🎮

Sistema de gamificação corporativa para gerenciamento de atividades, pontuação e rankings de equipes e participantes.

## 📋 Sobre o Projeto

O **Arch Games** é uma plataforma web desenvolvida para promover engajamento e competição saudável entre equipes através de um sistema de gamificação. O sistema permite que participantes registrem diferentes tipos de atividades (exercícios físicos, aprendizado de idiomas, treinamentos profissionais, entre outros), que são automaticamente processadas, pontuadas e exibidas em rankings competitivos.

### Funcionalidades Principais

- 📤 **Upload de Imagens**: Sistema de upload de imagens com suporte a drag-and-drop, colagem (Ctrl+V) e múltiplos arquivos
- 🤖 **Processamento Automatizado**: Integração com n8n para processamento automático de imagens e extração de dados usando IA
- 📊 **Sistema de Pontuação**: Cálculo automático de pontuações baseado em diferentes categorias de atividades
- 🏆 **Rankings**: Geração de rankings de equipes e participantes com histórico de variações
- 📈 **Dashboard**: Visualização de estatísticas, gráficos e distribuição de pontuações
- 🔍 **Gestão de Atividades**: CRUD completo de atividades com filtros avançados e busca
- 👥 **Gestão de Equipes e Participantes**: Sistema completo de gerenciamento de equipes e membros

## 🛠️ Tecnologias

### Frontend
- **Next.js 14** - Framework React com App Router
- **React 18** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis (Dialog, Select, Tabs)
- **Recharts** - Biblioteca para gráficos e visualizações
- **React Hot Toast** - Notificações toast
- **Zod** - Validação de schemas

### Backend
- **Next.js API Routes** - API RESTful integrada ao frontend
- **Prisma** - ORM para PostgreSQL
- **PostgreSQL** - Banco de dados relacional
- **n8n** - Automação de workflows e processamento de imagens

### Infraestrutura
- **Docker Compose** - Orquestração de containers (PostgreSQL e n8n)
- **Node.js** - Runtime JavaScript

### Bibliotecas Auxiliares
- **date-fns** - Manipulação de datas
- **crypto-js** - Geração de hashes para deduplicação de imagens
- **formidable** - Processamento de uploads multipart/form-data
- **uuid** - Geração de identificadores únicos

## 📁 Estrutura do Projeto

```
arch-games/
├── front-end/                 # Aplicação Next.js
│   ├── app/                   # App Router do Next.js
│   │   ├── activities/        # Páginas e componentes de atividades
│   │   ├── api/               # Rotas da API
│   │   │   ├── activities/    # Endpoints de atividades
│   │   │   ├── upload/        # Endpoint de upload de imagens
│   │   │   ├── rankings/      # Endpoints de rankings
│   │   │   ├── teams/         # Endpoints de equipes
│   │   │   └── participants/  # Endpoints de participantes
│   │   ├── dashboard/         # Dashboard principal
│   │   ├── form/              # Formulário de upload
│   │   ├── rankings/          # Páginas de rankings
│   │   └── participants/      # Gestão de participantes
│   ├── components/            # Componentes reutilizáveis
│   ├── lib/                   # Bibliotecas e utilitários
│   ├── prisma/                # Schema e migrações do Prisma
│   └── utils/                 # Funções utilitárias
├── docker-compose.yml         # Configuração Docker
├── n8n_data/                  # Dados do n8n
└── backups/                   # Backups do banco de dados
```

## 🎯 Casos de Uso

### 1. Registro de Atividades Físicas
**Cenário**: Um participante realiza uma corrida de 5km e deseja registrar a atividade.

**Fluxo**:
1. Acessa o formulário de upload
2. Seleciona sua equipe e participantes envolvidos
3. Informa data e horário da atividade
4. Faz upload de imagens (fotos da corrida, tela do app de fitness, etc.)
5. O sistema envia as imagens para o n8n que processa e extrai dados (distância, duração, etc.)
6. A atividade é criada automaticamente com pontuação calculada
7. A pontuação é adicionada ao ranking da equipe e do participante

### 2. Aprendizado de Idiomas (Duolingo)
**Cenário**: Um participante completa uma lição no Duolingo e quer registrar os pontos.

**Fluxo**:
1. Faz upload de screenshot do Duolingo
2. O n8n processa a imagem e extrai informações (pontos, idioma, nível)
3. Sistema calcula pontuação baseada nos pontos obtidos
4. Atividade é registrada e pontuação adicionada aos rankings

### 3. Treinamento Profissional
**Cenário**: Um participante completa um curso online e recebe certificado.

**Fluxo**:
1. Faz upload do certificado e informações do curso
2. Sistema valida e registra a atividade
3. Pontuação é calculada considerando duração e certificação
4. Atividade aparece no histórico e contribui para o ranking

### 4. Geração de Rankings
**Cenário**: Administrador deseja gerar rankings atualizados.

**Fluxo**:
1. Acessa a página de Rankings
2. Clica em "Generate Rankings"
3. Sistema calcula pontuações totais de todas as equipes e participantes
4. Gera rankings com posições e variações em relação ao ranking anterior
5. Rankings são exibidos em tabelas interativas com gráficos

### 5. Gestão de Atividades
**Cenário**: Administrador precisa revisar ou corrigir uma atividade.

**Fluxo**:
1. Acessa a página de Atividades
2. Usa filtros para encontrar a atividade específica
3. Visualiza detalhes completos da atividade
4. Pode atualizar pontuações (base_score, multiplier)
5. Sistema registra histórico de mudanças
6. Rankings são atualizados automaticamente

### 6. Visualização de Dashboard
**Cenário**: Líder de equipe quer ver estatísticas da sua equipe.

**Fluxo**:
1. Acessa o Dashboard
2. Visualiza gráficos de evolução de pontuação
3. Analisa distribuição de pontuações por categoria
4. Compara performance entre equipes
5. Identifica tendências e áreas de melhoria

## 🎮 Tipos de Atividades Suportadas

1. **Atividade Física** (`physical_activity`)
   - Corridas, caminhadas, ciclismo
   - Pontuação baseada em distância e duração

2. **Duolingo** (`duolingo`)
   - Lições e práticas de idiomas
   - Pontuação baseada em pontos e nível

3. **Treinamento Profissional** (`professional_training`)
   - Cursos, workshops, certificações
   - Pontuação baseada em duração e certificação

4. **Reunião Corporativa** (`corporate_meeting`)
   - Reuniões de equipe, apresentações
   - Pontuação baseada em duração e participantes

5. **Happy Hour** (`happy_hour`)
   - Eventos sociais e networking
   - Pontuação baseada em participação

6. **Livros** (`books`)
   - Leitura de livros com resumo
   - Pontuação baseada em páginas e resumo submetido

7. **Jogos** (`games`)
   - Competições e torneios
   - Pontuação baseada em posição no ranking

8. **Amigo de Valor** (`amigo_de_valor`)
   - Reconhecimento entre colegas
   - Pontuação fixa por reconhecimento

9. **Doação de Sangue** (`blood_donation`)
   - Doações realizadas
   - Pontuação baseada em certificado fornecido

10. **Evento Lacre** (`lacre_event`)
    - Participação em eventos especiais
    - Pontuação baseada em posição no evento

## 🔄 Fluxo de Processamento

1. **Upload**: Usuário faz upload de imagens através do formulário
2. **Validação**: Sistema valida dados do formulário e imagens
3. **Armazenamento**: Imagens são salvas no sistema de arquivos
4. **Webhook n8n**: Dados e imagens são enviados para n8n via webhook
5. **Processamento IA**: n8n processa imagens usando IA para extrair dados
6. **Criação de Atividade**: n8n retorna dados processados que são salvos como atividade
7. **Cálculo de Pontuação**: Sistema calcula pontuação baseada na categoria
8. **Atualização de Rankings**: Rankings são atualizados automaticamente

## 🗄️ Modelo de Dados

### Principais Entidades

- **team**: Equipes participantes
- **participant**: Participantes individuais
- **activity**: Atividades registradas
- **image**: Imagens enviadas e processadas
- **RankingTeam**: Rankings históricos de equipes
- **RankingParticipant**: Rankings históricos de participantes
- **ScoreChangeHistory**: Histórico de alterações de pontuação
- **TeamScoreHistory**: Histórico de pontuações de equipes

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- Docker e Docker Compose
- PostgreSQL (ou usar o container Docker)

### Instalação

1. Clone o repositório
```bash
git clone <repository-url>
cd arch-games
```

2. Instale as dependências
```bash
cd front-end
npm install
```

3. Configure as variáveis de ambiente
```bash
cp .env.example .env
# Edite o arquivo .env com suas configurações
```

4. Inicie os serviços Docker (PostgreSQL e n8n)
```bash
docker-compose up -d
```

5. Execute as migrações do Prisma
```bash
cd front-end
npx prisma migrate dev
```

6. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

7. Acesse a aplicação em `http://localhost:5446`

## 📝 Variáveis de Ambiente

```env
DATABASE_URL="postgresql://user:password@localhost:5433/n8n"
N8N_WEBHOOK_URL="http://localhost:5678/webhook/..."
N8N_USERNAME="admin"
N8N_PASSWORD="archgames1234"
```

## 🔐 Segurança

- Autenticação básica para webhooks do n8n
- Validação de tipos de arquivo no upload
- Hash de imagens para prevenção de duplicatas
- Validação de dados com Zod
- Sanitização de inputs

## 📊 Funcionalidades de Ranking

- **Rankings de Equipes**: Classificação baseada na soma de todas as pontuações dos participantes
- **Rankings de Participantes**: Classificação individual
- **Variações**: Mostra mudanças de posição em relação ao ranking anterior
- **Histórico**: Mantém histórico de todos os rankings gerados
- **Distribuição de Pontuações**: Visualização de como as pontuações estão distribuídas

## 🎨 Interface

- Design responsivo com Tailwind CSS
- Componentes acessíveis com Radix UI
- Feedback visual com React Hot Toast
- Gráficos interativos com Recharts
- Upload de imagens com drag-and-drop e colagem

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é privado e de uso interno.

## 👥 Equipe

Desenvolvido para promover engajamento e competição saudável entre equipes através de gamificação.

---

**Arch Games** - Transformando atividades em competição saudável! 🏆

