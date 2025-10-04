// ====================================================================
// 1. DADOS E ESTADO GLOBAL
// ====================================================================

// Lista de Livros (Mínima para a funcionalidade de busca)
const LISTA_DE_LIVROS = [
    // --- ANTIGO TESTAMENTO (39 Livros) ---
    {id: 1, nome: "Gênesis", abrev: "GN", testamento: "AT", capitulos: 50, arquivo: "genesis"},
    {id: 2, nome: "Êxodo", abrev: "EX", testamento: "AT", capitulos: 40, arquivo: "exodo"},
    {id: 3, nome: "Levítico", abrev: "LV", testamento: "AT", capitulos: 27, arquivo: "levitico"},
    {id: 4, nome: "Números", abrev: "NM", testamento: "AT", capitulos: 36, arquivo: "numeros"},
    {id: 5, nome: "Deuteronômio", abrev: "DT", testamento: "AT", capitulos: 34, arquivo: "deuteronomio"},
    {id: 6, nome: "Josué", abrev: "JS", testamento: "AT", capitulos: 24, arquivo: "josue"},
    {id: 7, nome: "Juízes", abrev: "JZ", testamento: "AT", capitulos: 21, arquivo: "juizes"},
    {id: 8, nome: "Rute", abrev: "RT", testamento: "AT", capitulos: 4, arquivo: "rute"},
    {id: 9, nome: "1 Samuel", abrev: "1SM", testamento: "AT", capitulos: 31, arquivo: "1samuel"},
    {id: 10, nome: "2 Samuel", abrev: "2SM", testamento: "AT", capitulos: 24, arquivo: "2samuel"},
    {id: 11, nome: "1 Reis", abrev: "1RS", testamento: "AT", capitulos: 22, arquivo: "1reis"},
    {id: 12, nome: "2 Reis", abrev: "2RS", testamento: "AT", capitulos: 25, arquivo: "2reis"},
    {id: 13, nome: "1 Crônicas", abrev: "1CR", testamento: "AT", capitulos: 29, arquivo: "1cronicas"},
    {id: 14, nome: "2 Crônicas", abrev: "2CR", testamento: "AT", capitulos: 36, arquivo: "2cronicas"},
    {id: 15, nome: "Esdras", abrev: "ED", testamento: "AT", capitulos: 10, arquivo: "esdras"},
    {id: 16, nome: "Neemias", abrev: "NE", testamento: "AT", capitulos: 13, arquivo: "neemias"},
    {id: 17, nome: "Ester", abrev: "ET", testamento: "AT", capitulos: 10, arquivo: "ester"},
    {id: 18, nome: "Jó", abrev: "JÓ", testamento: "AT", capitulos: 42, arquivo: "jo"},
    {id: 19, nome: "Salmos", abrev: "SL", testamento: "AT", capitulos: 150, arquivo: "salmos"},
    {id: 20, nome: "Provérbios", abrev: "PV", testamento: "AT", capitulos: 31, arquivo: "proverbios"},
    {id: 21, nome: "Eclesiastes", abrev: "EC", testamento: "AT", capitulos: 12, arquivo: "eclesiastes"},
    {id: 22, nome: "Cantares de Salomão", abrev: "CT", testamento: "AT", capitulos: 8, arquivo: "cantares"},
    {id: 23, nome: "Isaías", abrev: "IS", testamento: "AT", capitulos: 66, arquivo: "isaias"},
    {id: 24, nome: "Jeremias", abrev: "JR", testamento: "AT", capitulos: 52, arquivo: "jeremias"},
    {id: 25, nome: "Lamentações de Jeremias", abrev: "LM", testamento: "AT", capitulos: 5, arquivo: "lamentacoes"},
    {id: 26, nome: "Ezequiel", abrev: "EZ", testamento: "AT", capitulos: 48, arquivo: "ezequiel"},
    {id: 27, nome: "Daniel", abrev: "DN", testamento: "AT", capitulos: 12, arquivo: "daniel"},
    {id: 28, nome: "Oséias", abrev: "OS", testamento: "AT", capitulos: 14, arquivo: "oseias"},
    {id: 29, nome: "Joel", abrev: "JL", testamento: "AT", capitulos: 3, arquivo: "joel"},
    {id: 30, nome: "Amós", abrev: "AM", testamento: "AT", capitulos: 9, arquivo: "amos"},
    {id: 31, nome: "Obadias", abrev: "OB", testamento: "AT", capitulos: 1, arquivo: "obadias"},
    {id: 32, nome: "Jonas", abrev: "JN", testamento: "AT", capitulos: 4, arquivo: "jonas"},
    {id: 33, nome: "Miquéias", abrev: "MQ", testamento: "AT", capitulos: 7, arquivo: "miqueias"},
    {id: 34, nome: "Naum", abrev: "NA", testamento: "AT", capitulos: 3, arquivo: "naum"},
    {id: 35, nome: "Habacuque", abrev: "HC", testamento: "AT", capitulos: 3, arquivo: "habacuque"},
    {id: 36, nome: "Sofonias", abrev: "SF", testamento: "AT", capitulos: 3, arquivo: "sofonias"},
    {id: 37, nome: "Ageu", abrev: "AG", testamento: "AT", capitulos: 2, arquivo: "ageu"},
    {id: 38, nome: "Zacarias", abrev: "ZC", testamento: "AT", capitulos: 14, arquivo: "zacarias"},
    {id: 39, nome: "Malaquias", abrev: "ML", testamento: "AT", capitulos: 4, arquivo: "malaquias"},

    // --- NOVO TESTAMENTO (27 Livros) ---
    {id: 40, nome: "Mateus", abrev: "MT", testamento: "NT", capitulos: 28, arquivo: "mateus"},
    {id: 41, nome: "Marcos", abrev: "MC", testamento: "NT", capitulos: 16, arquivo: "marcos"},
    {id: 42, nome: "Lucas", abrev: "LC", testamento: "NT", capitulos: 24, arquivo: "lucas"},
    {id: 43, nome: "João", abrev: "JO", testamento: "NT", capitulos: 21, arquivo: "joao"},
    {id: 44, nome: "Atos dos Apóstolos", abrev: "AT", testamento: "NT", capitulos: 28, arquivo: "atos"},
    {id: 45, nome: "Romanos", abrev: "RM", testamento: "NT", capitulos: 16, arquivo: "romanos"},
    {id: 46, nome: "1 Coríntios", abrev: "1CO", testamento: "NT", capitulos: 16, arquivo: "1corintios"},
    {id: 47, nome: "2 Coríntios", abrev: "2CO", testamento: "NT", capitulos: 13, arquivo: "2corintios"},
    {id: 48, nome: "Gálatas", abrev: "GL", testamento: "NT", capitulos: 6, arquivo: "galatas"},
    {id: 49, nome: "Efésios", abrev: "EF", testamento: "NT", capitulos: 6, arquivo: "efesios"},
    {id: 50, nome: "Filipenses", abrev: "FP", testamento: "NT", capitulos: 4, arquivo: "filipenses"},
    {id: 51, nome: "Colossenses", abrev: "CL", testamento: "NT", capitulos: 4, arquivo: "colossenses"},
    {id: 52, nome: "1 Tessalonicenses", abrev: "1TS", testamento: "NT", capitulos: 5, arquivo: "1tessalonicenses"},
    {id: 53, nome: "2 Tessalonicenses", abrev: "2TS", testamento: "NT", capitulos: 3, arquivo: "2tessalonicenses"},
    {id: 54, nome: "1 Timóteo", abrev: "1TM", testamento: "NT", capitulos: 6, arquivo: "1timoteo"},
    {id: 55, nome: "2 Timóteo", abrev: "2TM", testamento: "NT", capitulos: 4, arquivo: "2timoteo"},
    {id: 56, nome: "Tito", abrev: "TT", testamento: "NT", capitulos: 3, arquivo: "tito"},
    {id: 57, nome: "Filemom", abrev: "FM", testamento: "NT", capitulos: 1, arquivo: "filemom"},
    {id: 58, nome: "Hebreus", abrev: "HB", testamento: "NT", capitulos: 13, arquivo: "hebreus"},
    {id: 59, nome: "Tiago", abrev: "TG", testamento: "NT", capitulos: 5, arquivo: "tiago"},
    {id: 60, nome: "1 Pedro", abrev: "1PE", testamento: "NT", capitulos: 5, arquivo: "1pedro"},
    {id: 61, nome: "2 Pedro", abrev: "2PE", testamento: "NT", capitulos: 3, arquivo: "2pedro"},
    {id: 62, nome: "1 João", abrev: "1JO", testamento: "NT", capitulos: 5, arquivo: "1joao"},
    {id: 63, nome: "2 João", abrev: "2JO", testamento: "NT", capitulos: 1, arquivo: "2joao"},
    {id: 64, nome: "3 João", abrev: "3JO", testamento: "NT", capitulos: 1, arquivo: "3joao"},
    {id: 65, nome: "Judas", abrev: "JD", testamento: "NT", capitulos: 1, arquivo: "judas"},
    {id: 66, nome: "Apocalipse", abrev: "AP", testamento: "NT", capitulos: 22, arquivo: "apocalipse"}
];

// Mapeamento rápido para busca de abreviaturas
const MAPA_ABREVIATURAS = {};
LISTA_DE_LIVROS.forEach(livro => {
    MAPA_ABREVIATURAS[livro.abrev] = livro;
});

// Estado atual da aplicação
let estado = {
    versao: 'ACF',
    livroSelecionado: null, // Objeto do livro
    nomeDoLivro :'',
    capituloAtual: 1,
    totalCapitulosLivro: 0
};


// ====================================================================
// 2. REFERÊNCIAS DO DOM
// ====================================================================

const navVersoes = document.getElementById('nav-versoes');
const navLivros = document.getElementById('nav-livros');
const navCapitulos = document.getElementById('nav-capitulos');
const btnVoltarLivros = document.getElementById('btn-voltar-livros');
const navAvancoCapitulos = document.getElementById('nav-avanco-capitulos');
const btnAnterior = document.getElementById('btn-capitulo-anterior');
const btnProximo = document.getElementById('btn-capitulo-proximo');
const inputReferencia = document.getElementById('input-referencia');
const tituloLeitura = document.getElementById('titulo-pagina-leitura');
const containerVersiculos = document.getElementById('conteudo-biblia');
const btnToggleTema = document.getElementById('toggle-tema');


// ====================================================================
// 3. FUNÇÕES DE TEMA (CLARO/ESCURO)
// ====================================================================

function carregarTemaSalvo() {
    const temaSalvo = localStorage.getItem('theme');
    if (temaSalvo === 'dark' ||
       (!temaSalvo && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark-theme');
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    btnToggleTema.textContent = isDark ? '🌙' : '💡';
}


// ====================================================================
// 4. FUNÇÕES DE NAVEGAÇÃO E SELEÇÃO
// ====================================================================

function renderizarListaLivros() {
    navLivros.innerHTML = '';

    LISTA_DE_LIVROS.forEach(livro => {
        const btn = document.createElement('button');
        btn.textContent = livro.nome;
        btn.classList.add(livro.testamento === 'AT' ? 'livro-at' : 'livro-nt');
        btn.dataset.arquivo = livro.arquivo;
        btn.dataset.capitulos = livro.capitulos;

        btn.addEventListener('click', () => selecionarLivro(livro));
        navLivros.appendChild(btn);
    });
}

function selecionarVersao(novaVersao) {
    if (estado.versao === novaVersao) return;

    estado.versao = novaVersao;
    localStorage.setItem('version', novaVersao);

    const botoes = navVersoes.querySelectorAll('.versao-btn');
    botoes.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.versao === novaVersao) {
            btn.classList.add('active');
        }
    });

    if (estado.livroSelecionado) {
        // Recarrega o conteúdo com a nova versão
        carregarLivroEroolar(estado.livroSelecionado.arquivo, estado.capituloAtual);
    } else {
        containerVersiculos.innerHTML = '<p>Selecione um livro para começar.</p>';
    }
}

function selecionarLivro(livro) {
    estado.nomeDoLivro = livro.nome;

    // Atualiza o estado
    estado.livroSelecionado = livro;
    estado.totalCapitulosLivro = livro.capitulos;
    estado.capituloAtual = 1; // Sempre começa no 1

    // Gerencia a visibilidade das barras
    navLivros.classList.add('hidden');
    navCapitulos.classList.remove('hidden');
    navAvancoCapitulos.classList.remove('hidden');
    document.getElementById('livro-selecionado-titulo').textContent = livro.nome;

    renderizarBulletsCapitulos(livro.capitulos);

    // Inicia o carregamento
    carregarLivroEroolar(livro.arquivo, estado.capituloAtual);
}

function voltarParaListaLivros() {
    navCapitulos.classList.add('hidden');
    navAvancoCapitulos.classList.add('hidden');
    navLivros.classList.remove('hidden');
    tituloLeitura.textContent = 'Selecione um Livro';
    containerVersiculos.innerHTML = '<p>Selecione um livro para continuar.</p>';
    estado.livroSelecionado = null; // Limpa o estado de livro
}


// ====================================================================
// 5. NAVEGAÇÃO ENTRE CAPÍTULOS E BULLETS
// ====================================================================

function atualizarBotoesAvanco() {
    const atual = estado.capituloAtual;
    const total = estado.totalCapitulosLivro;
    btnAnterior.disabled = (atual <= 1);
    btnProximo.disabled = (atual >= total);
}

function destacarCapituloAtivo(numCapitulo) {
    const todosBotoes = navCapitulos.querySelectorAll('button[data-capitulo]');
    todosBotoes.forEach(btn => {
        btn.classList.remove('active-capitulo');
    });

    const novoBotaoAtivo = navCapitulos.querySelector(`button[data-capitulo="${numCapitulo}"]`);
    if (novoBotaoAtivo) {
        novoBotaoAtivo.classList.add('active-capitulo');
    }
}

function renderizarBulletsCapitulos(totalCapitulos) {
    let container = document.getElementById('bullets-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'bullets-container';
        navCapitulos.appendChild(container);
    }
    container.innerHTML = '';

    for (let i = 1; i <= totalCapitulos; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        btn.dataset.capitulo = i;

        if (i === estado.capituloAtual) {
            btn.classList.add('active-capitulo');
        }

        btn.addEventListener('click', () => {
            estado.capituloAtual = i;
            carregarLivroEroolar(estado.livroSelecionado.arquivo, estado.capituloAtual);
        });
        container.appendChild(btn);
    }
}

function navegarCapitulo(delta) {
    const novoCapitulo = estado.capituloAtual + delta;

    if (novoCapitulo >= 1 && novoCapitulo <= estado.totalCapitulosLivro) {
        estado.capituloAtual = novoCapitulo;
        carregarLivroEroolar(estado.livroSelecionado.arquivo, estado.capituloAtual);
    }
}


// ====================================================================
// 6. FUNÇÕES DE CARREGAMENTO E EXIBIÇÃO
// ====================================================================

/**
 * Pega os dados do livro e insere no DOM, usando a estrutura de Objetos Aninhados.
 * @param {object} dadosLivro - O objeto JSON completo do livro (com { "1": { "1": "texto" } } ).
 * @param {number} numCapitulo - O número do capítulo (base 1) a ser exibido.
 */
function exibirCapitulo(dadosLivro, numCapitulo) {
    const containerVersiculos = document.getElementById('conteudo-biblia');
    containerVersiculos.innerHTML = '';

    // Acessa o objeto do capítulo pela chave (string)
    const capitulo = dadosLivro.capitulos[numCapitulo];

    if (!capitulo) {
        containerVersiculos.innerHTML = `Capítulo ${numCapitulo} não encontrado.`;
        tituloLeitura.textContent = `${estado.nomeDoLivro} (Erro no Cap. ${numCapitulo})`;
        return;
    }

    tituloLeitura.textContent = `${estado.nomeDoLivro} ${numCapitulo}`;

    // NOVO: Itera sobre as CHAVES (números de versículo) do objeto 'capitulo'
    // Object.keys() retorna um array de strings ["1", "2", "3", ...]
    Object.keys(capitulo).forEach(vNumStr => {

        // 'vNumStr' é o número do versículo como string (ex: "1", "2").
        const vNum = parseInt(vNumStr, 10);
        // Acessa o valor (o texto) usando a chave
        const versiculoTexto = capitulo[vNumStr];

        // Garante que o texto não é vazio antes de criar o elemento
        if (versiculoTexto) {
            const p = document.createElement('p');
            p.id = `v-${vNum}`; // ID para a função de rolagem (Busca Rápida)
            p.innerHTML = `<span class="numero-versiculo">${vNum}</span> ${versiculoTexto}`;
            containerVersiculos.appendChild(p);
        }
    });
}

async function carregarLivroEroolar(nomeArquivo, numCapitulo, versiculoParaRolar = null) {
    const caminho = `./data/${estado.versao}/${nomeArquivo}.json`;
    containerVersiculos.innerHTML = 'Carregando...';

    try {
        const response = await fetch(caminho);
        if (!response.ok) {
            throw new Error(`Erro ao carregar (Status: ${response.status})`);
        }
        const dadosLivro = await response.json();

        // Exibe o conteúdo
        exibirCapitulo(dadosLivro, numCapitulo);

        // Atualiza a navegação
        destacarCapituloAtivo(numCapitulo);
        atualizarBotoesAvanco();

        // Rola se um versículo específico foi solicitado
        if (versiculoParaRolar) {
            rolarParaVersiculo(versiculoParaRolar);
        }

    } catch (error) {
        console.error('Falha ao carregar o livro:', error);
        containerVersiculos.innerHTML = `Erro: Arquivo '${nomeArquivo}.json' na versão '${estado.versao}' não encontrado ou inválido.`;
    }
}


// ====================================================================
// 7. BUSCA RÁPIDA E ROLAGEM
// ====================================================================

function buscarReferencia(event) {
    if (event.key !== 'Enter') return;

    // Converte para maiúsculas e remove espaços
    const referenciaBruta = inputReferencia.value.trim().toUpperCase();

    // Regex: (Livro 2 letras) (Espaço opcional) (Capítulo) (:) (Versículo)
    //const regex = /^([A-Z]{2})\s*(\d+):(\d+)$/;
    const regex = /^([0-9A-Z]{2,3})\s*(\d+):(\d+)$/;
    const match = referenciaBruta.match(regex);

    if (!match) {
        alert('Formato inválido. Use: XX C:V (Ex: GN 1:1)');
        inputReferencia.value = '';
        return;
    }

    const abrevLivro = match[1];
    const numCapitulo = parseInt(match[2], 10);
    const numVersiculo = parseInt(match[3], 10);

    const livro = MAPA_ABREVIATURAS[abrevLivro];

    if (!livro) {
        alert(`Livro com abreviatura "${abrevLivro}" não encontrado.`);
        inputReferencia.value = '';
        return;
    }

    // 1. Atualiza o estado da aplicação
    estado.livroSelecionado = livro;
    estado.totalCapitulosLivro = livro.capitulos;
    estado.nomeDoLivro = livro.nome;

    // 2. Gerencia a visibilidade das barras (Simula o clique em um livro)
    navLivros.classList.add('hidden');
    navCapitulos.classList.remove('hidden');
    navAvancoCapitulos.classList.remove('hidden');
    document.getElementById('livro-selecionado-titulo').textContent = livro.nome;

    // 3. Renderiza os bullets (para ter a navegação correta)
    renderizarBulletsCapitulos(livro.capitulos);

    // 4. Carrega o livro e rola
    carregarLivroEroolar(livro.arquivo, numCapitulo, numVersiculo);
}

function rolarParaVersiculo(vNum) {
    const elementoVersiculo = document.getElementById(`v-${vNum}`);

    if (elementoVersiculo) {
        elementoVersiculo.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}


// ====================================================================
// 8. INICIALIZAÇÃO
// ====================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Inicialização do Tema
    carregarTemaSalvo();
    const isDark = document.body.classList.contains('dark-theme');
    btnToggleTema.textContent = isDark ? '🌙' : '💡';

    // Renderiza a lista de livros
    renderizarListaLivros();

    // Verifica a ultima versão usada
    let version = localStorage.getItem('version');
    if (!version) {
        localStorage.setItem('version', 'ACF');
        version = 'ACF';
    }
    selecionarVersao(version);

    // Listeners de Evento
    btnToggleTema.addEventListener('click', toggleTheme);
    navVersoes.addEventListener('click', (event) => {
        if (event.target.classList.contains('versao-btn')) {
            selecionarVersao(event.target.dataset.versao);
        }
    });
    btnVoltarLivros.addEventListener('click', voltarParaListaLivros);
    btnAnterior.addEventListener('click', () => navegarCapitulo(-1));
    btnProximo.addEventListener('click', () => navegarCapitulo(1));
    inputReferencia.addEventListener('keypress', buscarReferencia);
});