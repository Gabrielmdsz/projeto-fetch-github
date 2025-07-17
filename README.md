# 🔍 GitHub User Finder

Este é um projeto simples de **consulta de usuários no GitHub**, que utiliza a [GitHub REST API](https://docs.github.com/pt/rest) para buscar e exibir dados públicos de um usuário, como nome, bio e seus repositórios mais recentes.

---


## 🚀 Funcionalidades

- 🔎 Busca por nome de usuário no GitHub
- 👤 Exibe foto, nome e bio do usuário
- 📂 Lista os 10 primeiros repositórios públicos
- ⚠️ Mensagem amigável caso o usuário não seja encontrado
- ⌨️ A busca pode ser feita via botão ou tecla Enter

---

## 🧪 Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- Módulos ES (import/export)

---

## 📁 Estrutura de Pastas

```
src/
│
├── css/
│   ├── reset.css
│   └── styles.css
│
├── scripts/
│   ├── index.js           # Script principal
│   ├── variables.js       # Variáveis globais (ex: base da API)
│   ├── user.js            # Função para buscar dados do usuário
│   ├── repositories.js    # Função para buscar repositórios
│   ├── screen.js          # Manipula o DOM para exibir as informações
│   └── objects/
│       ├── user.js        # Objeto com os dados do usuário
│       └── screen.js      # Objeto com as funções de renderização
```

---

## ▶️ Como executar o projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/github-user-finder.git
   cd github-user-finder
   ```

2. **Abra o `index.html` no navegador:**

   Você pode simplesmente dar dois cliques no arquivo `index.html` ou usar uma extensão como o Live Server no VSCode.

---

## 💡 Exemplos de uso

- Busque por `octocat` para testar com um perfil válido.
- Tente buscar um nome inexistente para testar o erro tratado.

---

## 📌 Observações

- Este projeto é didático e não utiliza nenhum framework.
- A API possui limite de requisições não autenticadas — evite muitas buscas seguidas.

---