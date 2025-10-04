# 📖 Bíblia Pura JS - Leitor Bíblico em HTML, CSS e JavaScript

Este é um projeto **mobile-first** que demonstra a construção de um leitor da Bíblia Sagrada totalmente funcional utilizando apenas **HTML5, CSS3 e JavaScript puro (Vanilla JS)**, sem o uso de *frameworks* ou bibliotecas externas.

O foco principal do projeto foi a **organização eficiente de dados** (JSON) e o **carregamento sob demanda** (*on-demand loading*) para garantir uma experiência rápida e fluida, mesmo em dispositivos móveis ou com conexões limitadas.

-----

## 🚀 Funcionalidades Principais

  * **Carregamento Assíncrono:** Os livros são carregados individualmente (via `fetch`) apenas quando o usuário os seleciona, otimizando o tempo de carregamento inicial.
  * **Temas Dinâmicos:** Suporte nativo a temas **Claro** e **Escuro**, com persistência da preferência no `localStorage`.
  * **Navegação Intuitiva:** Interface de navegação que permite selecionar a versão, o livro (lista), o capítulo (bullets) e avançar/retroceder entre capítulos.
  * **Busca Rápida:** Funcionalidade de busca por referência no formato **`XX C:V`** (Ex: `GN 1:1`), com rolagem automática até o versículo desejado.
  * **Design Mobile-First:** Layout responsivo otimizado para a leitura em *smartphones*.
  * **Destaque do Capítulo Ativo:** Indicação visual clara de qual capítulo está sendo lido na barra de navegação.

-----

## 💻 Estrutura do Projeto

O projeto é dividido em três arquivos principais e uma pasta de dados estruturada:

```
/
|-- index.html      # Estrutura e layout da aplicação.
|-- style.css       # Estilos, temas (claro/escuro) e layout mobile-first.
|-- script.js       # Toda a lógica: estado, navegação, fetch de dados, exibição.
|-- /data
    |-- /ACF        # Versão Almeida Corrigida e Fiel
        |-- genesis.json
        |-- exodo.json
        |-- ... (66 arquivos de livros JSON)
```

-----

## ⚙️ Decisões Técnicas e Implementação

As seguintes decisões foram tomadas para garantir o sucesso do projeto e a qualidade dos dados:

### 1\. Estrutura de Dados JSON

Para otimizar o carregamento e a eficiência do JavaScript, adotamos o seguinte formato de arquivo JSON por livro (Ex: `genesis.json`):

  * **Estrutura de Objetos Aninhados:** Evitamos *arrays* indexados por zero (que forçariam `index + 1` constante) em favor de objetos com chaves diretas.

<!-- end list -->

```json
// Exemplo: Estrutura final de dados em /data/ACF/livro.json
{
  "nome": "Gênesis",
  "livro_id": 1,
  "capitulos": {
    "1": {
      "1": "No princípio criou...",
      "2": "E a terra era sem forma...",
      // ...
    },
    // ...
  }
}
```

### 2\. Tratamento e Formatação dos Dados

Foi necessário utilizar comandos de terminal Linux (`sed`) para garantir que a formatação do JSON ficasse correta e legível, resolvendo problemas de quebra de linha em dados compactados.

  * **Comando de Formatação Essencial (exemplo):** O `sed` foi crucial para substituir sequências compactadas por quebras de linha reais (`\n`), como a substituição de `}},{` por `},\n{`, garantindo a separação visual de objetos no arquivo.

### 3\. Código JavaScript (`script.js`)

  * **Carregamento de Metadados:** A lista completa de 66 livros (`LISTA_DE_LIVROS`) é carregada no início, contendo os metadados (nome, abreviatura, capítulos).
  * **`carregarLivroEroolar()`:** Esta função é o coração do carregamento, que utiliza o `fetch()` assíncrono para buscar o JSON do livro solicitado e o exibe.
  * **`exibirCapitulo()`:** Foi ajustada para iterar sobre as **chaves** (strings de números) dos objetos de versículo e de capítulo, o que simplificou a lógica de exibição em relação ao uso de *arrays*.
  * **Regex Atualizada:** A função de busca (`buscarReferencia`) foi atualizada para aceitar abreviaturas mais longas (`[0-9A-Z]{2,3}`), garantindo a compatibilidade com livros como **`1CO`** ou **`2TM`**.

