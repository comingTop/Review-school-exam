import { QuizQuestion } from '@/lib/quiz-questions';

const fuvest_2025_f1: QuizQuestion[] = [
  {
    id: 1,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Texto 1

“Afinal, depois de ver todas as coisas daquele museu, acabei
me perguntando se os brancos já não teriam começado a
adquirir também tantas de nossas coisas só porque nós,
Yanomami, já estamos começando também a desaparecer.
Por que ficam nos pedindo nossos cestos, nossos arcos e
nossos adornos de penas, enquanto garimpeiros e fazendeiros
invadem nossa terra?”

KOPENAWA, Davi; ALBERT, Bruce. Queda do céu: palavras de um xamã
yanomami. São Paulo: Companhia das Letras, 2015. p.429.

Texto 2

“Em seu trabalho, Glicéria debruça-se sobre a artesania do
manto tupinambá, símbolo das tradições ancestrais de seu
povo. A artista chama de cosmo-técnica a feitura do manto, e
hoje busca compreender qual era sua função cultural e social
em sua comunidade. Recentemente, a artista esteve na
Europa e encontrou mantos datados do século XVII, que foram
levados do Brasil ao longo da colonização, na Dinamarca.
Segundo Glicéria, ‘hoje, as pessoas entendem o manto como
arte, arte contemporânea, mas eu vejo muito além. É um
ancestral nosso’.”

Instituto Pipa. Ocupação dos artistas premiados do Pipa 2023: Glicéria
Tupinambá. Disponível em: https://www.premiopipa.com/2023/10/
(Adaptado).

A reflexão de Davi Kopenawa sobre a apropriação de objetos
indígenas por museus e a pesquisa de Glicéria Tupinambá
sobre o manto tupinambá em contextos europeus permitem explorar diversas dimensões da arte indígena.

Glicéria Tupinambá, Assojaba Tupinambá, 2021. Disponível em: https://dasartes.com.br/de-arte-a-z/.

Com base nos textos e na imagem, assinale a alternativa que relaciona corretamente as reflexões apresentadas à importância da
arte e dos artefatos culturais na discussão sobre questões indígenas no Brasil.`,
    images: [{ src: '/fuvest/2025/images/q01_artwork.jpg', width: 710, height: 1091 }],
    alternatives: [
      { id: 'A', type: 'text', value: `A arte indígena, ao ser exposta em museus europeus, perde seu significado original e se transforma apenas em objeto de
decoração, desvinculando-se completamente de suas raízes culturais e simbólicas, de acordo com David Kopenawa.` },
      { id: 'B', type: 'text', value: `Glicéria Tupinambá, ao retomar elementos tradicionais em suas obras, busca uma representação autêntica que resiste à
domesticação cultural imposta pelos colonizadores, valorizando o aspecto utilitário desses objetos.` },
      { id: 'C', type: 'text', value: `O trabalho de Glicéria Tupinambá, ao redescobrir os mantos tupinambá na Europa, revela como a arte indígena pode servir
como uma ponte para o entendimento e a valorização das culturas indígenas por sociedades que historicamente as
marginalizaram.` },
      { id: 'D', type: 'text', value: `Para David Kopenawa, a guarda de artefatos indígenas em museus da Europa é uma forma eficaz de preservação e valorização
da cultura indígena, pois demonstra reconhecimento da sua importância e esforço, por parte da sociedade, para proteger os
direitos territoriais desses povos.` },
      { id: 'E', type: 'text', value: `A arte, como mostrado por Glicéria Tupinambá, atua como um meio de resistência cultural, em que elementos tradicionais são
recontextualizados para contestar narrativas coloniais e reafirmar identidades indígenas em face de processos de
desapropriação e desaparecimento.` },
    ],
    correct: 'E',
    explanation: `Kopenawa denuncia a retirada de objetos indígenas enquanto seus povos sofrem invasões territoriais. Glicéria recupera o manto como ancestral e expressão de identidade, não como mera decoração ou utensílio. Essa recontextualização constitui resistência aos processos coloniais de desapropriação e apagamento cultural; por isso, a resposta é E.`,
    subject: ['fil'],
    topics: ['Movimentos sociais', 'Questões aleatórias'],
  },
  {
    id: 2,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Analise, na figura a seguir, os dados referentes a áreas de
garimpo ilegal localizadas em terras indígenas na Amazônia
brasileira e sua distância em relação a corpos d’água.

MapBiomas. 2024. Proximidade de Garimpos, Rios e Lagos na Amazônia
(Adaptado).

A partir dos dados apresentados e da realidade
socioambiental da Amazônia, é correto afirmar:`,
    images: [{ src: '/fuvest/2025/images/q02_chart.jpg', width: 721, height: 477 }],
    alternatives: [
      { id: 'A', type: 'text', value: `Os territórios indígenas encontram-se nas áreas mais
desmatadas da Amazônia; como o garimpo ilegal produz
forte impacto ambiental pelo intenso uso da água em seus
processos, tal atividade colabora com a desertificação do
bioma.` },
      { id: 'B', type: 'text', value: `O garimpo ilegal representa alto risco a populações
humanas e animais em geral, pela contaminação das águas
e dos alimentos por substâncias usadas na garimpagem e
porque tal atividade ocorre em áreas ainda muito
preservadas, aumentando o impacto ambiental.` },
      { id: 'C', type: 'text', value: `O garimpo ilegal na Amazônia não produz tanto impacto
para os corpos d’água, uma vez que as atividades
encontram-se distantes do rio Amazonas e de seus
afluentes, os maiores rios da região; seu maior impacto
ocorre devido ao desmatamento de extensas áreas de
floresta nativa.` },
      { id: 'D', type: 'text', value: `A proximidade dos corpos d’água deve-se a questões
estratégicas, e não ao garimpo ilegal propriamente, pois
este é de baixo impacto; porém traz conflitos territoriais
com as comunidades indígenas, e os rios constituem rotas
de fuga rápidas e eficientes para os garimpeiros.` },
      { id: 'E', type: 'text', value: `A relação entre garimpos e corpos d’água ocorre de forma
indireta, pois o garimpo amazônico não depende da água
em seus processos; os garimpeiros buscam esses
territórios porque as populações indígenas sabem onde
existe ouro e se desenvolvem próximas a rios e lagos.` },
    ],
    correct: 'B',
    explanation: `O garimpo utiliza água e pode liberar mercúrio, que contamina os ambientes aquáticos e se acumula nas cadeias alimentares. A proximidade dos rios amplia a exposição de pessoas e animais; a instalação em áreas preservadas também degrada esses ambientes. Esses efeitos justificam B, e não a ideia de baixo impacto ou independência da água.`,
    subject: ['geo'],
    topics: ['Meio ambiente', 'Questões aleatórias'],
  },
  {
    id: 3,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Jean Galvão. Disponível em https://cartum.folha.uol.com.br/.

Considerando a charge, é correto afirmar:`,
    images: [{ src: '/fuvest/2025/images/q03_charge.jpg', width: 736, height: 346 }],
    alternatives: [
      { id: 'A', type: 'text', value: `Há uma incoerência entre a imagem do segundo quadro e
o enunciado verbal do primeiro quadro, uma vez que a
posposição do adjunto adverbial “na água” anula qualquer
ambiguidade.` },
      { id: 'B', type: 'text', value: `Ao antecipar o objeto direto “o mercúrio” para o começo
da oração, o chargista chama a atenção para esse
elemento, estimulando o leitor a buscá-lo visualmente no
segundo quadro.` },
      { id: 'C', type: 'text', value: `Por meio da escolha do verbo “descartar”, mostra-se, de
forma crítica, a necessidade da criação de um local correto
para o depósito dos rejeitos provenientes do garimpo
ilegal.` },
      { id: 'D', type: 'text', value: `O uso da forma pronominal informal “a gente”, em
detrimento do pronome “nós”, empregado em situações
mais formais e sérias, atenua o teor crítico, o que colabora
para gerar efeito humorístico.` },
      { id: 'E', type: 'text', value: `O significado negativo do prefixo que aparece na palavra
“ilegal” reforça a precariedade do atendimento à saúde
nas comunidades indígenas.` },
    ],
    correct: 'B',
    explanation: `Em “O mercúrio a gente descarta na água”, “o mercúrio” é o objeto direto antecipado de “descarta”. A topicalização destaca a substância e orienta a leitura do segundo quadro, que evidencia as consequências do descarte. Assim, B relaciona corretamente a construção sintática ao recurso visual.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 4,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `“E assim como o branco e os mamelucos se aproveitaram não
raro das veredas dos índios, há motivo para pensar que estes,
por sua vez, foram, em muitos casos, simples sucessores dos
animais selvagens, do tapir especialmente, cujos carreiros ao
longo dos rios e riachos, ou em direção a nascentes de águas,
se adaptavam perfeitamente às necessidades e hábitos
daquelas populações.”

HOLANDA, Sergio Buarque de. Caminhos e fronteiras. Rio de Janeiro: José
Olympio, 1975. p.35.

De acordo com o excerto, a ocupação territorial da América
portuguesa pelos colonizadores foi inicialmente marcada`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `pela construção de caminhos que os afastassem dos
cursos dos rios.` },
      { id: 'B', type: 'text', value: `pela desconsideração das rotas de deslocamento abertas
pelos animais.` },
      { id: 'C', type: 'text', value: `pela utilização de picadas abertas pelas comunidades
indígenas.` },
      { id: 'D', type: 'text', value: `pelo emprego de tropas de muares, responsáveis por abrir
trilhas nas matas.` },
      { id: 'E', type: 'text', value: `pela exploração do transporte fluvial e marítimo por meio
de pirogas.` },
    ],
    correct: 'C',
    explanation: `O texto afirma que brancos e mamelucos aproveitaram veredas indígenas, por sua vez associadas a caminhos de animais. A ocupação colonial reutilizou percursos preexistentes, em vez de inaugurá-los ou evitá-los. Logo, C.`,
    subject: ['his'],
    topics: ['Brasil Colônia', 'Questões aleatórias'],
  },
  {
    id: 5,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Os quadrinhos a seguir são parte da obra Dois irmãos, de
Fábio Moon e Gabriel Bá (2015), uma adaptação do romance
Dois irmãos, de Milton Hatoum, para o universo das novelas
gráficas (graphic novels).

Considerando as características visuais dos quadrinhos e os
traços narrativos do romance Dois irmãos, de Milton Hatoum,
é correto afirmar:`,
    images: [{ src: '/fuvest/2025/images/q05_novel_a.jpg', width: 738, height: 384 }, { src: '/fuvest/2025/images/q05_novel_b.jpg', width: 736, height: 439 }, { src: '/fuvest/2025/images/q05_novel_c.jpg', width: 736, height: 500 }],
    alternatives: [
      { id: 'A', type: 'text', value: `O uso dos contrastes claro x escuro na novela gráfica
confere ênfase visual ao conflito entre diferentes formas
de privilégio e marginalização presentes no romance de
Hatoum, explicitadas pelo ponto de vista do narrador.` },
      { id: 'B', type: 'text', value: `Ao trabalhar com os contrastes claro x escuro em suas
imagens, a novela gráfica enfatiza a diferença étnica e
social que fundamenta a rivalidade fraterna entre Yaqub e
Omar, um dos eixos estruturais do romance.` },
      { id: 'C', type: 'text', value: `Ao utilizar procedimentos como a aproximação (zoom-in)
e a fragmentação das imagens, a novela gráfica recria o
fluxo de consciência e a atmosfera onírica da narrativa de
Hatoum.` },
      { id: 'D', type: 'text', value: `A novela gráfica demonstra, por meio de imagens, que o
romance Dois irmãos reinventa a tradição da literatura
regionalista do Brasil, retratando a opulência da cidade de
Manaus ao longo do século XX.` },
      { id: 'E', type: 'text', value: `Por meio de recursos estéticos como a fragmentação das
imagens, a novela gráfica recupera o ponto de vista
fraturado do romance de Hatoum, composto por vários
narradores ao longo da história.` },
    ],
    correct: 'A',
    explanation: `Os contrastes de luz e sombra dão forma visual às relações de privilégio e marginalização que atravessam o romance, narrado por Nael. Yaqub e Omar não pertencem a etnias ou classes distintas, e o romance não possui vários narradores. A corresponde à leitura conjunta da adaptação e da obra.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Análise de obras', 'Questões aleatórias'],
  },
  {
    id: 6,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Leia o texto e analise a charge a seguir.

“Se, compreendendo um outro ser humano, penetro
profundamente no horizonte do que lhe é próprio, então logo
me depararei com o fato de que, assim como o seu corpo se
encontra no meu campo de percepção, também o meu corpo
se encontra no dele, e que, em geral, ele me experiencia sem
mais como um outro para ele, tal como eu o experiencio como
outro para mim.”

HUSSERL, E. Meditações cartesianas. Rio de Janeiro: Forense Universitária,
2013.

Bira Dantas. Disponível em https://facebook.com/.

O filósofo Edmund Husserl propõe uma reflexão sobre como
cada pessoa estabelece relações com as outras. Ocorre uma
equiparação dos pontos de vista, de modo que cada uma
aparecerá às demais não como uma consciência
incomparável, mas justamente como uma outra pessoa. Essa
ideia ajuda a entender a perspectiva crítica contida na charge:
certas condições ou características que percebemos como
depreciativas em outras pessoas também podem ser
percebidas da mesma maneira pelos outros em nós.

Qual situação reproduz essa estrutura de equiparação exibida
na charge?`,
    images: [{ src: '/fuvest/2025/images/q06_charge.jpg', width: 730, height: 505 }],
    alternatives: [
      { id: 'A', type: 'text', value: `Torcedores de diversos times de futebol se reúnem
desanimados para assistir a um jogo da seleção.` },
      { id: 'B', type: 'text', value: `Religiosos conservadores sugerem banir livros eróticos
doados por desconhecidos para a sua comunidade.` },
      { id: 'C', type: 'text', value: `Com medo da violência, um homem passa a andar armado
na rua e assusta os transeuntes.` },
      { id: 'D', type: 'text', value: `Um homem acusa uma mulher de racismo e algumas
testemunhas confirmam a versão dele para a polícia.` },
      { id: 'E', type: 'text', value: `Um trabalhador denuncia ao chefe um colega por assédio
moral, mas esse último não é punido.` },
    ],
    correct: 'C',
    explanation: `A equiparação implica reconhecer no próprio comportamento aquilo que se teme ou deprecia no outro. O homem que anda armado por medo da violência passa a ser percebido pelos transeuntes como ameaça: ele reproduz o que teme. Essa reciprocidade caracteriza C.`,
    subject: ['fil'],
    topics: ['Filosofia Moderna', 'Questões aleatórias'],
  },
  {
    id: 7,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Disponível em https://screenrant.com/funniest-peanuts-comics-charlie-
brown-vs-lucy/.

Falácias são argumentos que podem até parecer à primeira
vista bem construídos logicamente, mas são falhos, seja em
termos do uso da linguagem, de pertinência temática ou de
correção formal. Os primeiros estudos sistemáticos das
falácias foram feitos pelo filósofo Aristóteles, que classificou
alguns dos argumentos falaciosos mais comuns.

No terceiro quadrinho da história, uma personagem se serve
de um argumento falacioso bastante conhecido a fim de
persuadir o outro. Esse argumento pode ser classificado como
um caso de qual tipo de falácia?`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Ataque à pessoa.` },
      { id: 'B', type: 'text', value: `Apelo à piedade.` },
      { id: 'C', type: 'text', value: `Apelo à força.` },
      { id: 'D', type: 'text', value: `Ambiguidade.` },
      { id: 'E', type: 'text', value: `Apelo à ignorância.` },
    ],
    correct: 'C',
    explanation: `Lucy ameaça bater em Charlie Brown com o banco se ele pedir uma segunda opinião. A ameaça substitui uma justificativa para aceitar a primeira opinião: é apelo à força, ou argumentum ad baculum. Por isso, C; não se trata de piedade, ataque pessoal, ambiguidade ou ignorância.`,
    subject: ['fil'],
    topics: ['Filosofia Antiga', 'Questões aleatórias'],
  },
  {
    id: 8,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `“Eu não venero a criação mais do que o Criador, mas venero a
criatura criada como eu sou, adotando a criação de maneira
livre e espontânea, de modo que Ele possa elevar nossa
natureza e nos tornar partícipes de Sua natureza divina. Sendo
assim, eu me atrevo a fazer uma imagem do Deus invisível não
como invisível, mas como tendo se tornado visível por nossa
causa, tornando-se carne e sangue. Eu não faço uma imagem
da divindade imortal. Eu pinto a carne visível de Deus, pois é
impossível representar o espírito e ainda mais Deus, que dá
vida ao espírito.”

John Damascene. On holy images. Disponível em
https://www.gutenberg.org/files/49917/ (Adaptado).

Nessa citação, João Damasceno (675-749), monge e teólogo
cristão do período medieval, dirige-se contra o movimento
iconoclasta ao`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `colocar a criatura no mesmo nível do Criador.` },
      { id: 'B', type: 'text', value: `reduzir a divindade a seus elementos materiais.` },
      { id: 'C', type: 'text', value: `identificar a imagem visível com a natureza divina.` },
      { id: 'D', type: 'text', value: `negar o dogma da divindade de Jesus Cristo.` },
      { id: 'E', type: 'text', value: `justificar a veneração de imagens sagradas.` },
    ],
    correct: 'E',
    explanation: `João Damasceno distingue a divindade invisível da carne visível assumida por Deus. A encarnação permite representar essa manifestação sem afirmar que uma imagem material esgota a natureza divina. O argumento legitima a veneração de imagens sagradas contra a iconoclastia: E.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias'],
  },
  {
    id: 9,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `“A mídia digital é uma mídia da presença. A sua
temporalidade é o presente imediato. A comunicação digital
se caracteriza pelo fato de que informações são produzidas,
enviadas e recebidas sem mediação por meio de
intermediários. Mediação e representação são interpretadas
como não transparência e ineficiência, como
congestionamento de tempo e de informação.
Uma mídia eletrônica de massa clássica como o rádio só
permite uma comunicação unilateral. O destinatário da
mensagem é condenado à passividade.
Hoje não somos mais destinatários e consumidores
passivos de informação, mas sim remetentes e produtores
ativos. Não nos contentamos mais em consumir informações
passivamente, mas sim queremos produzi-las e comunicá-las
ativamente nós mesmos. Somos simultaneamente
consumidores e produtores.”

HAN, Byung-Chul. No enxame: Perspectivas do digital. São Paulo: Editora
Vozes, 2018. p.35-36 (Adaptado).

Segundo o texto, a mídia digital distingue-se da mídia de
massa tradicional por`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `reforçar a separação entre consumidor e produtor,
resultante da ampliação da comunicação unilateral na
internet.` },
      { id: 'B', type: 'text', value: `apostar na passividade do público, que precisa de um
mediador para poder comunicar informações ativamente.` },
      { id: 'C', type: 'text', value: `gerar excesso de informação, que consolida estrutura
capaz de condenar todos os consumidores à passividade.` },
      { id: 'D', type: 'text', value: `provocar presentificação, decorrente da dissolução dos
intermediários e da combinação dos papéis de
consumidor e produtor.` },
      { id: 'E', type: 'text', value: `dissolver a distinção entre produtor e consumidor,
causadora de congestionamento de tempo e de
informação.` },
    ],
    correct: 'D',
    explanation: `O rádio exemplifica a comunicação unilateral, enquanto a mídia digital reúne no mesmo usuário a recepção e a produção de informações. A comunicação imediata reduz a mediação e privilegia o presente. Esses dois aspectos estão reunidos em D.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 10,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `“O que torna possível o surgimento de uma ‘cultura do
cancelamento’ é um cenário em que os detentores de poder
econômico e/ou político vislumbram a utilização de valores
morais como valores de mercado, seja no campo da
publicidade, seja no campo da responsabilidade social da
empresa.
O conjunto de valores defendidos pelos movimentos sociais
que lutam por reconhecimento e respeito à diversidade
tornam-se atributos exigidos por diversas empresas como
elemento fundamental nas suas escolhas de investimento.
Sendo assim, a sanção específica realizada pelos agentes do
‘cancelamento’ procura atingir não a liberdade do sujeito que
supostamente ofende valores morais relevantes, que seria o
instrumento coercitivo tradicionalmente previsto no direito
penal, ou mesmo buscar reparações indenizatórias,
instrumento de resposta a atos ilícitos no direito civil, mas sim
impedir, restringir ou infligir danos na trajetória econômica
e/ou profissional do sujeito ‘cancelado’.
Nesse contexto, a ‘cultura do cancelamento’ representa um
mecanismo de eliminação do mercado, em casos considerados
graves, ou, em outros casos, de mera diminuição relativa do
capital, de sujeitos ineficientes em fator competitivo específico,
como inadequação de valores morais ostentados, por atos e/ou
palavras, em determinados ambientes sociais.”

MARTINS, Tamires de Assis Lima; CORDEIRO, Ana Paula. A cultura do
cancelamento: contribuições de um olhar sociológico. Extraprensa, v.15,
n. esp., p.39, mai.2022 (Adaptado).

Segundo o texto, a cultura do “cancelamento”`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `busca punir transgressões a valores morais caros aos
canceladores com danos à vida econômica do cancelado.` },
      { id: 'B', type: 'text', value: `aplica os instrumentos coercitivos do direito penal ao
contexto da internet para impedir o crescimento
profissional do cancelado.` },
      { id: 'C', type: 'text', value: `é uma resposta natural à emergência de movimentos
sociais que lutam por respeito à diversidade e por mais
poder econômico.` },
      { id: 'D', type: 'text', value: `elimina profissionais do mercado com o objetivo de
desmoralizar as empresas contratantes, causando-lhes
prejuízos.` },
      { id: 'E', type: 'text', value: `visa a aumentar a competição entre as empresas, que se
valem do cancelamento para eliminar valores morais que
consideram irresponsáveis.` },
    ],
    correct: 'A',
    explanation: `O texto distingue a sanção do cancelamento das penas de prisão e das indenizações: ela atinge a trajetória econômica e profissional de quem viola os valores defendidos pelos canceladores. Por isso, A identifica corretamente o alvo e a motivação da punição.`,
    subject: ['fil'],
    topics: ['Sociologia', 'Questões aleatórias'],
  },
  {
    id: 11,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `“O que torna possível o surgimento de uma ‘cultura do
cancelamento’ é um cenário em que os detentores de poder
econômico e/ou político vislumbram a utilização de valores
morais como valores de mercado, seja no campo da
publicidade, seja no campo da responsabilidade social da
empresa.
O conjunto de valores defendidos pelos movimentos sociais
que lutam por reconhecimento e respeito à diversidade
tornam-se atributos exigidos por diversas empresas como
elemento fundamental nas suas escolhas de investimento.
Sendo assim, a sanção específica realizada pelos agentes do
‘cancelamento’ procura atingir não a liberdade do sujeito que
supostamente ofende valores morais relevantes, que seria o
instrumento coercitivo tradicionalmente previsto no direito
penal, ou mesmo buscar reparações indenizatórias,
instrumento de resposta a atos ilícitos no direito civil, mas sim
impedir, restringir ou infligir danos na trajetória econômica
e/ou profissional do sujeito ‘cancelado’.
Nesse contexto, a ‘cultura do cancelamento’ representa um
mecanismo de eliminação do mercado, em casos considerados
graves, ou, em outros casos, de mera diminuição relativa do
capital, de sujeitos ineficientes em fator competitivo específico,
como inadequação de valores morais ostentados, por atos e/ou
palavras, em determinados ambientes sociais.”

MARTINS, Tamires de Assis Lima; CORDEIRO, Ana Paula. A cultura do
cancelamento: contribuições de um olhar sociológico. Extraprensa, v.15,
n. esp., p.39, mai.2022 (Adaptado).

Em relação aos conectivos sublinhados no texto, é correto
afirmar:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `seja...seja evidencia a dúvida das autoras quanto aos
campos afetados pelo cancelamento.` },
      { id: 'B', type: 'text', value: `que é utilizado para intensificar o valor dos movimentos
sociais na luta pela diversidade.` },
      { id: 'C', type: 'text', value: `sendo assim indica adesão autoral diante das formas de
sanção aplicadas pelos agentes do cancelamento.` },
      { id: 'D', type: 'text', value: `mas sim ressalta a diferença entre como se pune na
cultura do cancelamento e no direito penal.` },
      { id: 'E', type: 'text', value: `como introduz uma comparação entre distintas ações
passíveis de gerar cancelamento.` },
    ],
    correct: 'D',
    explanation: `A expressão “mas sim” opõe os instrumentos tradicionais de punição ao dano econômico ou profissional buscado no cancelamento. Ela corrige a expectativa criada pela negação anterior e ressalta a diferença entre essas formas de sanção. Assim, D.`,
    subject: ['por'],
    topics: ['Gramática', 'Questões aleatórias'],
  },
  {
    id: 12,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Texto 1

“Em Big Tech: a ascensão dos dados e a morte da política,
Morozov estabelece ‘um paralelo com os setores extrativistas
de recursos naturais, como o petróleo’, colocando ‘no centro
da discussão o modo de produção dessa economia, que ele
chama de ‘extrativismo de dados’. Apesar de a frase ‘os dados
são o novo petróleo’ ser um chavão fraco em termos
conceituais, Morozov acha o modismo útil para debatermos a
matriz extrativista desse modo de produção, em especial a
forma como as grandes empresas de tecnologia ‘continuam
escavando a nossa psique tal como as empresas de petróleo
escavam o solo’.”

ZANATTA, Rafael. “Extrativismo Digital”. Quatro Cinco Um, 01/04/2019.
Disponível em: https://quatrocincoum.com.br/resenhas/ (Adaptado).

Texto 2

“Colonialismo de dados é um modo de configurar o mundo
inteiro, de tal forma que um recurso novo possa ser extraído
– e esse recurso é a vida humana a partir da qual se pode
extrair um valor econômico. Sustentamos que os modos nos
quais este novo colonialismo opera, as escalas nas quais opera
diferem do colonialismo histórico que tão bem entendemos.
Mas a função, a finalidade subjacente, o núcleo deste novo
colonialismo é exatamente o mesmo do colonialismo
histórico. É o de despossuir, apropriar-se dos recursos do
mundo para o bem de uns poucos, de uma parte do mundo.”

COULDRY, Nick. Colonialismo de Dados e Esvaziamento da Vida Social Antes
e Pós Pandemia de Covid-19. In: Homo Digitalis. A Escalada da
Algoritmização da Vida em Tempos de Pandemia. Anais do XIX Simpósio
Internacional Instituto Humanitas Unisinos (Adaptado).

Considerando os excertos apresentados, é correto afirmar
que extrativismo de dados e colonialismo de dados são
conceitos desenvolvidos por Morozov e Couldry para nomear
e descrever fenômenos`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `baseados em mecanismos inéditos de acumulação de
dados na história, de amplo alcance, complementares e
centrais para diferenciar a atual fase do modo de
produção capitalista.` },
      { id: 'B', type: 'text', value: `essencialmente diferentes, pois, enquanto o extrativismo
trata de uma relação das empresas de tecnologia com a
psique, o colonialismo trata de uma relação dessas
empresas com a vida humana.` },
      { id: 'C', type: 'text', value: `cuja lógica de apropriação é diferente daquela verificada
em relação ao petróleo, o que explica os limites da
comparação entre os dados produzidos por usuários da
internet e o petróleo.` },
      { id: 'D', type: 'text', value: `correspondentes a duas formas análogas de apreender
transformações do capitalismo contemporâneo,
referindo-se a práticas que surgiram no passado,
colonização e extrativismo, e com os quais compartilham
finalidades.` },
      { id: 'E', type: 'text', value: `que abrem possibilidades para que alguns países
desprovidos de recursos naturais valiosos se apropriem de
dados produzidos por usuários, sem autorização prévia
destes, para extrair lucros.` },
    ],
    correct: 'D',
    explanation: `Os dois conceitos aproximam a exploração de dados de práticas históricas de apropriação de recursos. Mudam os meios e as escalas, mas permanece a finalidade de concentrar benefícios pela extração e despossessão. D exprime essa analogia, sem considerar os fenômenos inteiramente inéditos ou essencialmente opostos.`,
    subject: ['fil'],
    topics: ['Sociologia', 'Questões aleatórias'],
  },
  {
    id: 13,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `As formas de colonização ibérica e inglesa na América foram,
durante muito tempo, consideradas processos isolados,
estruturados em dois modelos opostos: as colônias de
exploração e as de povoamento, respectivamente. No
entanto, elas constituíram um emaranhado de experiências
compartilhadas pelos impérios atlânticos. Os aspectos
comuns a essas formas de colonização foram a`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `partida dos colonizadores da metrópole, da qual saíram
por fatores religiosos, e a adoção do trabalho livre como
base da produção.` },
      { id: 'B', type: 'text', value: `dominação e a exploração dos povos originários e o
emprego sistemático do trabalho forçado dessas
populações.` },
      { id: 'C', type: 'text', value: `introdução de colonos sem interesse na ocupação
demográfica e o objetivo exclusivo da extração de riquezas
minerais.` },
      { id: 'D', type: 'text', value: `produção local organizada em pequenas propriedades e a
utilização primordial da força de trabalho familiar.` },
      { id: 'E', type: 'text', value: `falta de interesse metropolitano pela exploração comercial
e a inexistência de benefícios financeiros para a metrópole.` },
    ],
    correct: 'B',
    explanation: `A oposição rígida entre povoamento e exploração oculta práticas comuns aos impérios coloniais. Tanto na colonização ibérica quanto na inglesa houve dominação de povos originários e uso de trabalho forçado. B identifica esse traço compartilhado sem generalizar trabalho livre ou pequenas propriedades.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias'],
  },
  {
    id: 14,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `“Brasileiros! (...) está conhecida nossa ilusão ou engano em
adotarmos um sistema de governo defeituoso em sua origem,
e mais defeituoso em suas partes componentes. As
constituições, as leis e todas as instituições humanas são
feitas para os povos e não os povos para elas. Eia, pois,
brasileiros, tratemos de constituirmos de um modo análogo
às luzes do século em que vivemos; o sistema americano deve
ser idêntico; desprezemos instituições oligárquicas, só cabidas
na encanecida Europa.”

ANDRADE, Manoel de Carvalho Paes de. Manifesto de proclamação da
Confederação do Equador. Apud TORRES, João Camillo de Oliveira. A
democracia coroada: Teoria política do Império do Brasil. Petrópolis: Vozes,
1964. p.522 (Adaptado).

O excerto apresenta trecho do manifesto divulgado pelos
rebeldes da Confederação do Equador (1824) e reage
explicitamente`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `à dissolução da Assembleia Constituinte e à outorga de
uma constituição elaborada pelo Conselho de Estado.` },
      { id: 'B', type: 'text', value: `ao distanciamento do governo brasileiro em relação à
Coroa Portuguesa e à política europeia do período.` },
      { id: 'C', type: 'text', value: `ao caráter descentralizador do regime monárquico e ao
aumento da autonomia das províncias.` },
      { id: 'D', type: 'text', value: `ao poder exercido pelos produtores nordestinos de
algodão e pelos cafeicultores paulistas.` },
      { id: 'E', type: 'text', value: `à adoção de regime republicano pela Constituição e ao
fechamento do parlamento nacional.` },
    ],
    correct: 'A',
    explanation: `A Confederação do Equador reagiu ao autoritarismo de D. Pedro I: a Constituinte foi dissolvida em 1823 e a Constituição de 1824 foi outorgada. O manifesto critica esse arranjo monárquico centralizador e defende uma alternativa republicana. A corresponde ao contexto.`,
    subject: ['his'],
    topics: ['Brasil Império', 'Questões aleatórias'],
  },
  {
    id: 15,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `“justice, each getting what he or she is due. Formal justice is
the impartial and consistent application of principles, whether
or not the principles themselves are just. Substantive justice
is closely associated with rights, i.e., with what individuals can
legitimately demand of one another or what they can
legitimately demand of their government (e.g., with respect
to the protection of liberty or the promotion of equality).
Retributive justice concerns when and why punishment is
justified. Debate continues over whether punishment is
justified as retribution for past wrongdoing or because it
deters future wrongdoing. Those who stress retribution as the
justification for punishment usually believe human beings
have libertarian free will, while those who stress deterrence
usually accept determinism.
At least since Aristotle, justice has commonly been identified
both with obeying law and with treating everyone with
fairness. But if law is, and justice is not, entirely a matter of
convention, then justice cannot be identified with obeying
law.”

The Cambridge Dictionary of Philosophy. General Editor Robert Audi,
Cambridge, U.K.: C.U.P., 1999. p.456.

Conforme o verbete, a justiça substantiva pode ser definida
como a`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `aplicação imparcial e consistente de princípios éticos e
morais.` },
      { id: 'B', type: 'text', value: `promoção de punições rigorosas para qualquer tipo de
crime.` },
      { id: 'C', type: 'text', value: `distribuição de recursos econômicos de maneira
equitativa, com ênfase no coletivo.` },
      { id: 'D', type: 'text', value: `garantia de que todos recebam o que lhes é devido,
contemplando direitos individuais.` },
      { id: 'E', type: 'text', value: `proteção exclusiva dos direitos das minorias, aumentando
sua visibilidade social.` },
    ],
    correct: 'D',
    explanation: `O verbete associa substantive justice aos direitos e às exigências legítimas que indivíduos podem dirigir uns aos outros e ao governo. Não se trata apenas da aplicação imparcial de regras, definida como justiça formal. A garantia do que é devido a cada um, incluindo direitos individuais, corresponde a D.`,
    subject: ['fil'],
    topics: ['Política', 'Teoria do conhecimento', 'Questões aleatórias'],
  },
  {
    id: 16,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `A construção de uma rampa que seja acessível a usuários de
cadeira de rodas deve seguir a norma ABNT NBR 9050. Esse
documento regulamenta a inclinação que a rampa deve ter a
depender do desnível máximo de cada segmento de rampa,
conforme o seguinte quadro:

Inclinação e desnível máximo de cada segmento de rampa
Desnível h (em m) | Inclinação i admissível (em %)
1 < h ≤ 1,5 | 5
0,8 < h ≤ 1 | 5 < i ≤ 6,25
0 < h ≤ 0,8 | 6,25 < i ≤ 8,33

Acessibilidade a edificações, mobiliário, espaços e equipamentos urbanos.
Disponível em https://www.prefeitura.sp.gov.br/cidade/ (Adaptado).

A inclinação i da rampa em porcentagem (%) é calculada
dividindo a altura h do desnível do segmento da rampa, em
metros, pelo comprimento da projeção horizontal c, em
metros, e multiplicando o resultado por 100. A figura a seguir
mostra uma rampa de dois segmentos.

Determinada rampa de dois segmentos foi construída da
seguinte maneira:

- o primeiro segmento possui projeção horizontal de 10 m e
inclinação de 6%;
- o segundo segmento possui projeção horizontal de 7 m e
desnível de 0,5 m.

Com base no que foi apresentado sobre a normativa, o que é
correto afirmar sobre a adequação dessa rampa à norma de
acessibilidade?`,
    images: [{ src: '/fuvest/2025/images/q16_ramp.jpg', width: 599, height: 563 }],
    alternatives: [
      { id: 'A', type: 'text', value: `A rampa não está adequada, pois os dois segmentos não
estão de acordo com a norma.` },
      { id: 'B', type: 'text', value: `A rampa está adequada, pois os dois segmentos estão de
acordo com a norma.` },
      { id: 'C', type: 'text', value: `A rampa não está adequada, pois o primeiro segmento
não está de acordo com a norma.` },
      { id: 'D', type: 'text', value: `A rampa não está adequada, pois o segundo segmento não
está de acordo com a norma.` },
      { id: 'E', type: 'text', value: `A rampa está adequada, pois, apesar de o segundo
segmento não estar de acordo com a norma, o primeiro
está.` },
    ],
    correct: 'C',
    explanation: `No primeiro segmento, h = 10 × 6/100 = 0,6 m. Para 0 < h ≤ 0,8 m, a tabela exige 6,25% < i ≤ 8,33%; portanto, 6% não atende à faixa. No segundo, i = 100 × 0,5/7 ≈ 7,14%, admissível para h = 0,5 m. Só o primeiro segmento está inadequado: C.`,
    subject: ['mat'],
    topics: ['Geometria', 'Questões aleatórias'],
  },
  {
    id: 17,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `A imagem a seguir mostra um cruzamento da Rua da
Consolação, na região central da cidade de São Paulo, em que
há faixas de pedestre em diferentes direções. Essas faixas
agilizam a travessia das ruas. Uma pessoa parte do ponto O e
deseja chegar ao ponto C. Para tanto, percorre o trajeto pela
faixa que liga O a B e, em seguida, utiliza a faixa que liga B a C.
Considere que as coordenadas dos pontos indicados na figura,
em metros, são: O(0,0), B(13,-15) e C(29,-8).

Seja d a distância, em metros, que essa pessoa deixaria de
percorrer se tivesse optado por fazer a travessia pela faixa de
pedestre que liga O a C. Nesse contexto, é correto afirmar:`,
    images: [{ src: '/fuvest/2025/images/q17_street_map.jpg', width: 736, height: 398 }],
    alternatives: [
      { id: 'A', type: 'text', value: `d < 2` },
      { id: 'B', type: 'text', value: `2 ≤ d < 5` },
      { id: 'C', type: 'text', value: `5 ≤ d ≤ 8` },
      { id: 'D', type: 'text', value: `8 < d ≤ 11` },
      { id: 'E', type: 'text', value: `11 < d` },
    ],
    correct: 'C',
    explanation: `OB = √(13² + 15²) = √394 ≈ 19,85 m; BC = √(16² + 7²) = √305 ≈ 17,46 m; OC = √(29² + 8²) = √905 ≈ 30,08 m. A economia é d = OB + BC − OC ≈ 7,23 m, no intervalo 5 ≤ d ≤ 8. Portanto, C.`,
    subject: ['mat'],
    topics: ['Geometria', 'Questões aleatórias'],
  },
  {
    id: 18,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `No dia 26 de março de 2024, à 1h29min, aproximadamente, o
navio cargueiro MV Dali colidiu com a ponte Francis Scott Key
em Baltimore, EUA. O impacto causou o colapso da ponte,
tornando-se um dos maiores acidentes marítimos da história
norte-americana.

A figura a seguir mostra os dados da velocidade do navio em
função da hora local. A colisão ocorreu no intervalo de 38
segundos, marcado por linhas pontilhadas no gráfico.

Disponível em https://www.nytimes.com/ (Adaptado).

Assumindo que a massa do navio no momento do impacto
seja de 100 mil toneladas e, tendo por base os dados do
gráfico, a magnitude da força média atuando sobre o navio
durante a colisão é de, aproximadamente,

Note e adote:
Considere que a força atuando sobre o navio durante a colisão seja
constante e igual à força média.

Utilize 1 m.p.h. = 0,5 m/s.`,
    images: [{ src: '/fuvest/2025/images/q18_ship_graph.jpg', width: 736, height: 603 }],
    alternatives: [
      { id: 'A', type: 'text', value: `7 × 10⁻² N.` },
      { id: 'B', type: 'text', value: `7 × 10⁰ N.` },
      { id: 'C', type: 'text', value: `7 × 10² N.` },
      { id: 'D', type: 'text', value: `7 × 10⁴ N.` },
      { id: 'E', type: 'text', value: `7 × 10⁶ N.` },
    ],
    correct: 'E',
    explanation: `O gráfico indica redução de 7,82 para 2,5 mph em 38 s. Assim, |Δv| = 5,32 × 0,5 = 2,66 m/s. Com m = 100 mil toneladas = 10⁸ kg, |F média| = m|Δv|/Δt ≈ 10⁸ × 2,66/38 = 7 × 10⁶ N. Logo, E.`,
    subject: ['fis'],
    topics: ['Leis de Newton e dinâmica', 'Questões aleatórias'],
  },
  {
    id: 19,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `O efeito Compton, descoberto na década de 1920, é hoje
amplamente utilizado durante tratamentos radioterápicos. O
efeito relaciona-se à mudança no comprimento de onda de
fótons de raios X quando interagem com partículas como
elétrons ou prótons, conforme ilustrado na figura a seguir.

Quando um fóton com comprimento de onda λ₀ incide sobre
uma partícula, ele emerge dessa interação formando um
ângulo θ com sua direção inicial de movimento, e seu novo
comprimento de onda λ′ é dado pela relação

λ′ = λ₀ + (α/m)(1 − cos θ),
em que α é uma constante positiva e m é a massa da partícula.

Com base nessas informações e em seus conhecimentos
sobre a propagação das ondas eletromagnéticas, assinale a
alternativa correta.`,
    images: [{ src: '/fuvest/2025/images/q19_compton.jpg', width: 736, height: 250 }],
    alternatives: [
      { id: 'A', type: 'text', value: `A maior variação no comprimento de onda do fóton ocorre
quando o ângulo θ é igual a 90°.` },
      { id: 'B', type: 'text', value: `Se o ângulo θ é igual a 30°, o fóton emergente tem
frequência menor do que a frequência inicial.` },
      { id: 'C', type: 'text', value: `Quando θ = 0, a velocidade do fóton emergente é menor
do que a do fóton incidente, devido à conservação da
quantidade de movimento.` },
      { id: 'D', type: 'text', value: `Se o ângulo θ é igual a 60°, a variação no comprimento de
onda do fóton é menor se a partícula for um elétron do
que se a partícula for um próton.` },
      { id: 'E', type: 'text', value: `Um fóton que emergiu perpendicularmente à sua direção
inicial não sofreu mudança em sua frequência.` },
    ],
    correct: 'B',
    explanation: `Para θ = 30°, 1 − cos θ > 0 e, portanto, λ′ > λ₀. Como a velocidade da luz é c e f = c/λ, a frequência emergente é menor, como afirma B. O deslocamento máximo ocorre a 180°, e sua magnitude é inversamente proporcional à massa da partícula.`,
    subject: ['fis'],
    topics: ['Ondulatória', 'Questões aleatórias'],
  },
  {
    id: 20,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `A figura a seguir apresenta a evolução dos modelos atômicos,
desde o primeiro, proposto por Dalton em 1803, até o de
Bohr, proposto em 1913.

Sobre os quatro modelos atômicos apresentados, é correto
afirmar:`,
    images: [{ src: '/fuvest/2025/images/q20_atomic_models.jpg', width: 658, height: 666 }],
    alternatives: [
      { id: 'A', type: 'text', value: `Todos os modelos previram a presença de cargas positivas
no núcleo atômico.` },
      { id: 'B', type: 'text', value: `O modelo proposto por Thomson, por prever a existência
de nêutrons, não poderia explicar a radiação alfa (α).` },
      { id: 'C', type: 'text', value: `Diferentemente do modelo de Dalton, o modelo de
Rutherford não explica a estrutura de cátions e ânions.` },
      { id: 'D', type: 'text', value: `Apenas o modelo de Bohr, com o advento de balanças de
precisão, considerou a diferença de massa entre os
elementos.` },
      { id: 'E', type: 'text', value: `Elementos radioativos não poderiam ser explicados pelo
modelo proposto por Dalton.` },
    ],
    correct: 'E',
    explanation: `Dalton descrevia o átomo como indivisível e indestrutível nas transformações consideradas por seu modelo. Emissões radioativas e transformações nucleares contrariam essa descrição. E é correta; núcleo e partículas subatômicas não estavam presentes em todos os modelos.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 21,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Baterias íon-lítio (íon-Li) armazenam energia por meio de um
processo de intercalação iônica, no qual íons Li+ penetram e
se acomodam entre camadas de grafite no ânodo da bateria.
A quantidade de energia armazenada é diretamente
proporcional ao número de íons Li+ intercalados no ânodo,
que, entre outros aspectos, é limitado pelo espaço disponível
para a sua alocação. Uma recente inovação tecnológica em
baterias é a substituição de Li por Na, formando baterias íon-
sódio (íon-Na). O mecanismo de funcionamento se baseia no
processo de intercalação, com a vantagem de que o Na é mais
abundante do que o Li no planeta.

Considerando que a única diferença entre baterias de mesma
massa e volume seja o íon utilizado (Na+ ou Li+) e que a
densidade de energia é a quantidade de energia armazenada
na bateria por unidade de massa e volume, é correto afirmar
que a densidade de energia de uma bateria íon-Na é

Note e adote:
Distribuição eletrônica: Li = 1s², 2s¹; Na = 1s², 2s², 2p⁶, 3s¹.
Massa atômica (u): Li = 7; Na = 23.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `maior do que de uma bateria íon-Li, pois o Na+ tem maior
massa e menor raio iônico do que o Li+.` },
      { id: 'B', type: 'text', value: `menor do que de uma bateria íon-Li, pois o Na+ tem maior
massa e maior raio iônico do que o Li+.` },
      { id: 'C', type: 'text', value: `maior do que de uma bateria íon-Li, pois o Na+ tem menor
massa e maior raio iônico do que o Li+.` },
      { id: 'D', type: 'text', value: `menor do que de uma bateria íon-Li, pois o Na+ tem menor
massa e menor raio iônico do que o Li+.` },
      { id: 'E', type: 'text', value: `igual à de uma bateria íon-Li, pois ambos os íons são
monovalentes.` },
    ],
    correct: 'B',
    explanation: `Na⁺ possui mais camadas eletrônicas e maior raio que Li⁺, além de massa maior (23 contra 7 u). No mesmo espaço disponível, íons maiores limitam a quantidade intercalada; a maior massa também desfavorece a energia por unidade de massa. Nas condições propostas, a densidade energética é menor: B.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 22,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Uma das possíveis tecnologias para a produção de telas
sensíveis ao toque aproveita a reflexão interna total da luz.
Esse tipo de reflexão ocorre quando um raio luminoso viaja do
interior de um meio 1, com índice de refração n₁, em direção
a um meio 2, com índice de refração n₂, formando com a
direção perpendicular à interface entre os meios um ângulo θ
maior do que um certo valor limite θL , tal que sen θL = n₂/n₁.
Quando um objeto (como um dedo) se aproxima da interface
entre os meios, a reflexão total não ocorre, o que é captado
por sensores, revelando a posição do objeto. Suponha que se
deseje projetar uma tela sensível ao toque que, conforme
mostra a figura, funcione com uma fonte luminosa F fixa na
borda. A tabela a seguir indica os índices de refração de alguns
materiais candidatos à utilização no meio 1.

Material Índice de refração n₁
A 1,0002
B 1,0003
C 1,1503
D 1,3204
E 1,4889

Tratando o meio 2 sempre como tendo índice de refração
n₂=1,0003, o material que permite o maior intervalo de
ângulos de incidência que produzem reflexão total é:`,
    images: [{ src: '/fuvest/2025/images/q22_touchscreen.jpg', width: 762, height: 326 }, { src: '/fuvest/2025/images/q22_optics.jpg', width: 334, height: 330 }],
    alternatives: [
      { id: 'A', type: 'text', value: `Material A.` },
      { id: 'B', type: 'text', value: `Material B.` },
      { id: 'C', type: 'text', value: `Material C.` },
      { id: 'D', type: 'text', value: `Material D.` },
      { id: 'E', type: 'text', value: `Material E.` },
    ],
    correct: 'E',
    explanation: `A reflexão total exige n₁ > n₂ e θ > θL, com sen θL = n₂/n₁. Aumentar n₁ reduz θL e amplia o intervalo entre θL e 90°. O material E tem o maior índice, 1,4889, e oferece o maior intervalo. Resposta E.`,
    subject: ['fis'],
    topics: ['Óptica', 'Questões aleatórias'],
  },
  {
    id: 23,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Considere o texto a seguir.

The Event Horizon Telescope Collaboration.

“Com observações feitas pela primeira vez em luz
polarizada, a nova imagem do buraco negro que se esconde
no coração da Via Láctea revelou um campo magnético com
uma estrutura muito semelhante à de outro buraco negro
situado no centro da galáxia M87, sugerindo que campos
magnéticos intensos podem ser comuns a todos os buracos
negros.
A luz é uma onda eletromagnética que nos permite ver
objetos. Por vezes, os campos elétrico e magnético associados
à onda oscilam em direções preferenciais, definindo o que
chamamos de luz polarizada. Apesar de estarmos rodeados
por luz polarizada, aos olhos humanos essa luz é indistinguível
da luz dita ‘normal’. No plasma que rodeia estes buracos
negros, as partículas que giram em torno das linhas de campo
magnético conferem-lhe um padrão de polarização com
orientação na direção perpendicular ao campo magnético do
buraco negro, o que permite aos astrônomos ver com muitos
detalhes o que se passa nas regiões dos buracos negros e
mapear as suas linhas de campo magnético.”

“Astrônomos descobrem campos magnéticos em espiral nas bordas de
buraco negro da Via Láctea”, Jornal da USP 29/03/2024. Disponível em
https://jornal.usp.br/ciencias/ (Adaptado).

Com base no texto e em seus conhecimentos, é correto
afirmar:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `A medida do padrão de polarização da luz mencionada no
texto permite somente o mapeamento das linhas de
campos magnéticos na direção paralela à direção da
polarização.` },
      { id: 'B', type: 'text', value: `O olho humano pode discriminar as diferentes direções da
luz polarizada dos buracos negros, mapeando suas linhas
de campo.` },
      { id: 'C', type: 'text', value: `Campos magnéticos como os mencionados no texto são
criados apenas por cargas elétricas em repouso no plasma
que rodeia os buracos negros.` },
      { id: 'D', type: 'text', value: `O plasma é formado por partículas eletricamente
carregadas, dado que essas partículas exibem um
movimento circular perpendicular à direção do campo
magnético.` },
      { id: 'E', type: 'text', value: `O processo de mapeamento das linhas de campo
magnético mencionado no texto pode ser realizado por
meio da detecção de qualquer tipo de onda
eletromagnética gerada em buracos negros.` },
    ],
    correct: 'D',
    explanation: `A força magnética sobre uma carga em movimento é perpendicular à velocidade e ao campo; pode atuar como força centrípeta. O movimento descrito indica partículas carregadas no plasma, como afirma D. A polarização permite inferir o campo perpendicular à sua orientação, não paralelamente, e não é distinguida diretamente pelo olho humano.`,
    subject: ['fis'],
    topics: ['Ondulatória', 'Questões aleatórias'],
  },
  {
    id: 24,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Na zona sul da cidade de São Paulo, há uma esquina formada
pelas ruas Cloreto de Sódio e Relíquia do Oceano.

A coincidência do encontro dessas ruas chama a atenção, pois
o cloreto de sódio`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `praticamente não está presente no oceano, apesar de este
ser salgado.` },
      { id: 'B', type: 'text', value: `é insolúvel na água do oceano por apresentar ligação
iônica.` },
      { id: 'C', type: 'text', value: `utilizado no Brasil é quase todo proveniente do oceano.` },
      { id: 'D', type: 'text', value: `obtido do oceano apresenta ligação covalente, enquanto
o extraído do sal-gema, ligação iônica.` },
      { id: 'E', type: 'text', value: `retirado do oceano tem mais átomos de cloro ligados ao
sódio do que o oriundo de outras fontes.` },
    ],
    correct: 'C',
    explanation: `No Brasil, a produção de sal comum é predominantemente marinha, obtida pela evaporação da água do mar em salinas. O NaCl é solúvel em água e mantém sua natureza iônica e proporção química independentemente da origem. Logo, C.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 25,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `“Historiadores encontraram um mapa antigo onde não era
possível identificar a escala do mapa. Com algum esforço e
apoio de Geógrafos, foi possível avaliar a distância no mapa
entre duas localidades como sendo de 20 centímetros.
Buscando elementos na paisagem, foi possível quantificar a
distância entre elas como equivalente a 40 quilômetros.”

FITZ, Paulo Roberto. Cartografia Básica. São Paulo: Oficina de Textos, 2008
(Adaptado).

Com base nessas medidas, a escala numérica do mapa
corresponde a`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `1:20.000.` },
      { id: 'B', type: 'text', value: `1:200.000.` },
      { id: 'C', type: 'text', value: `1:2.000.000.` },
      { id: 'D', type: 'text', value: `1:2.200.000.` },
      { id: 'E', type: 'text', value: `1:20.000.000.` },
    ],
    correct: 'B',
    explanation: `Convertemos 40 km em 4.000.000 cm. A escala é 20/4.000.000 = 1/200.000, pois as duas distâncias devem estar na mesma unidade. Portanto, B.`,
    subject: ['geo'],
    topics: ['Cartografia', 'Questões aleatórias'],
  },
  {
    id: 26,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Atualmente 80% do comércio mundial transita pelos mares, principalmente em rotas que passam pelos Canais do Panamá e de
Suez. Com a redução das calotas polares, novas rotas estão surgindo no Ártico. Mesmo com sua fragilidade ambiental, a região
passou a ser uma nova fronteira para o comércio mundial.

Carto Le monde en cartes, n.59, maio-junho 2020 (Adaptado).

Com base no texto, na leitura do mapa e em seus conhecimentos sobre as rotas marítimas, assinale a alternativa correta.`,
    images: [{ src: '/fuvest/2025/images/q26_arctic_map.jpg', width: 1151, height: 1255 }, { src: '/fuvest/2025/images/q26_arctic_legend.jpg', width: 1057, height: 239 }],
    alternatives: [
      { id: 'A', type: 'text', value: `A rota que liga os portos de Murmansk a Churchill é vantajosa em razão da facilidade de acesso e de não interferir na Zona
Econômica Exclusiva, evitando conflitos territoriais.` },
      { id: 'B', type: 'text', value: `Os percursos advindos das rotas Noroeste e Nordeste possibilitam maior estratégia geopolítica dos países pertencentes à
região, que utilizam, para isso, todas as zonas turísticas como sítios para bases militares.` },
      { id: 'C', type: 'text', value: `A rota Nordeste, que liga Roterdã a Shangai, aumenta a distância percorrida pelas frotas marítimas e ainda pode ser ameaçada
pela ampliação da cobertura de gelo no futuro.` },
      { id: 'D', type: 'text', value: `A rota Noroeste, que liga Ásia a América, é percurso já consagrado pelo tráfego marítimo intenso, por sua menor distância e
por percorrer muitos portos comerciais e bases militares.` },
      { id: 'E', type: 'text', value: `O fluxo comercial possibilitado pelas rotas Noroeste e Nordeste tende a se concentrar no Estreito de Bering, reduzindo a
distância a ser percorrida em relação aos trajetos via Canais do Panamá e de Suez.` },
    ],
    correct: 'E',
    explanation: `As passagens árticas Noroeste e Nordeste permitem percursos menores entre áreas dos oceanos Atlântico e Pacífico, em comparação com trajetos pelos canais do Panamá e de Suez. O Estreito de Bering conecta o Ártico ao Pacífico e tende a concentrar esses fluxos. Isso corresponde a E, sem eliminar riscos ambientais ou disputas territoriais.`,
    subject: ['geo'],
    topics: ['Geopolítica', 'Questões aleatórias'],
  },
  {
    id: 27,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Climate change is messing with time

“The melting of polar ice due to global warming is affecting
Earth’s rotation and could impact on precision timekeeping,
according to a recent study.
The planet is not about to jerk to a halt, nor speed up so
rapidly that everyone gets flung into space. But timekeeping
is an exact science in a highly technological society, which is
why global authorities more than half a century ago felt
compelled by the slight changes in Earth’s rotation to invent
the concept of the ‘leap second’.
Climate change makes these calculations even more
complicated: Soon it may be necessary to insert a ‘negative
leap second’ into the calendar to get the planet’s rotation in
sync with Coordinated Universal Time.
Timekeeping is based on an astronomical basis. Earth is a
type of a clock. In simpler times, the planet would spin one full
revolution on its axis, and everyone would call it a day.
But Earth doesn’t spin at a perfectly constant speed. Our
planet is in a complicated gravitational dance with the moon,
the sun, the oceanic tides, Earth’s own atmosphere and the
motion of the planet’s solid inner core.
The planet’s fluctuating spin rate is carefully tracked by the
International Earth Rotation and Reference Systems Service.
In the early 1970s, Earth was clearly slowing down in its
rotation, and a gap was forming between atomic time and
astronomical time. Thus, was born the ‘leap second’ to adjust
for the fact that the ‘day’ was getting a bit longer.
The melting of the ice caps in Antarctica and Greenland
shifts mass — meltwater — toward the equator. That process
increases the equatorial bulge of the planet. Meanwhile, at
the poles, the land that had been pressed down by ice rises,
and Earth becomes more spherical.
According to the study, although the core is causing the
planet to spin faster, the planetary shape changes caused by
a warming climate are slowing that process. Absent this
effect, the overall acceleration of the planet’s rotation might
require timekeepers to insert a ‘negative leap second’ at the
end of 2026. Because of climate change, that might not be
necessary until 2029.”

Disponível em https://www.washingtonpost.com/science/2024/03/27/
(Adaptado).

Segundo o texto, o processo de derretimento das calotas
polares`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `põe em dúvida a necessidade do conceito de segundo
bissexto.` },
      { id: 'B', type: 'text', value: `desloca o fluxo de água para regiões afastadas da linha do
Equador.` },
      { id: 'C', type: 'text', value: `deve antecipar em três anos o ajuste dos relógios
atômicos.` },
      { id: 'D', type: 'text', value: `ultrapassa o alcance do sistema do Tempo Universal
Coordenado.` },
      { id: 'E', type: 'text', value: `tende a reduzir a velocidade de rotação da Terra.` },
    ],
    correct: 'E',
    explanation: `O texto afirma que a água do degelo se redistribui em direção ao Equador, alterando a distribuição de massa e retardando a aceleração da rotação. Esse efeito adia a possível necessidade do segundo negativo de 2026 para 2029. Assim, E, e não a antecipação do ajuste.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 28,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Climate change is messing with time

“The melting of polar ice due to global warming is affecting
Earth’s rotation and could impact on precision timekeeping,
according to a recent study.
The planet is not about to jerk to a halt, nor speed up so
rapidly that everyone gets flung into space. But timekeeping
is an exact science in a highly technological society, which is
why global authorities more than half a century ago felt
compelled by the slight changes in Earth’s rotation to invent
the concept of the ‘leap second’.
Climate change makes these calculations even more
complicated: Soon it may be necessary to insert a ‘negative
leap second’ into the calendar to get the planet’s rotation in
sync with Coordinated Universal Time.
Timekeeping is based on an astronomical basis. Earth is a
type of a clock. In simpler times, the planet would spin one full
revolution on its axis, and everyone would call it a day.
But Earth doesn’t spin at a perfectly constant speed. Our
planet is in a complicated gravitational dance with the moon,
the sun, the oceanic tides, Earth’s own atmosphere and the
motion of the planet’s solid inner core.
The planet’s fluctuating spin rate is carefully tracked by the
International Earth Rotation and Reference Systems Service.
In the early 1970s, Earth was clearly slowing down in its
rotation, and a gap was forming between atomic time and
astronomical time. Thus, was born the ‘leap second’ to adjust
for the fact that the ‘day’ was getting a bit longer.
The melting of the ice caps in Antarctica and Greenland
shifts mass — meltwater — toward the equator. That process
increases the equatorial bulge of the planet. Meanwhile, at
the poles, the land that had been pressed down by ice rises,
and Earth becomes more spherical.
According to the study, although the core is causing the
planet to spin faster, the planetary shape changes caused by
a warming climate are slowing that process. Absent this
effect, the overall acceleration of the planet’s rotation might
require timekeepers to insert a ‘negative leap second’ at the
end of 2026. Because of climate change, that might not be
necessary until 2029.”

Disponível em https://www.washingtonpost.com/science/2024/03/27/
(Adaptado).

Conforme o texto, os fenômenos naturais que desempenham
papel significativo na complexa interação gravitacional que
afeta a rotação da Terra são`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `terremotos.` },
      { id: 'B', type: 'text', value: `vulcões.` },
      { id: 'C', type: 'text', value: `avalanches.` },
      { id: 'D', type: 'text', value: `marés dos oceanos.` },
      { id: 'E', type: 'text', value: `ciclones.` },
    ],
    correct: 'D',
    explanation: `O texto enumera a Lua, o Sol, as marés oceânicas, a atmosfera e o núcleo interno entre os fatores envolvidos na variação da rotação. Entre as alternativas, apenas as marés dos oceanos constam dessa enumeração. Logo, D.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 29,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Climate change is messing with time

“The melting of polar ice due to global warming is affecting
Earth’s rotation and could impact on precision timekeeping,
according to a recent study.
The planet is not about to jerk to a halt, nor speed up so
rapidly that everyone gets flung into space. But timekeeping
is an exact science in a highly technological society, which is
why global authorities more than half a century ago felt
compelled by the slight changes in Earth’s rotation to invent
the concept of the ‘leap second’.
Climate change makes these calculations even more
complicated: Soon it may be necessary to insert a ‘negative
leap second’ into the calendar to get the planet’s rotation in
sync with Coordinated Universal Time.
Timekeeping is based on an astronomical basis. Earth is a
type of a clock. In simpler times, the planet would spin one full
revolution on its axis, and everyone would call it a day.
But Earth doesn’t spin at a perfectly constant speed. Our
planet is in a complicated gravitational dance with the moon,
the sun, the oceanic tides, Earth’s own atmosphere and the
motion of the planet’s solid inner core.
The planet’s fluctuating spin rate is carefully tracked by the
International Earth Rotation and Reference Systems Service.
In the early 1970s, Earth was clearly slowing down in its
rotation, and a gap was forming between atomic time and
astronomical time. Thus, was born the ‘leap second’ to adjust
for the fact that the ‘day’ was getting a bit longer.
The melting of the ice caps in Antarctica and Greenland
shifts mass — meltwater — toward the equator. That process
increases the equatorial bulge of the planet. Meanwhile, at
the poles, the land that had been pressed down by ice rises,
and Earth becomes more spherical.
According to the study, although the core is causing the
planet to spin faster, the planetary shape changes caused by
a warming climate are slowing that process. Absent this
effect, the overall acceleration of the planet’s rotation might
require timekeepers to insert a ‘negative leap second’ at the
end of 2026. Because of climate change, that might not be
necessary until 2029.”

Disponível em https://www.washingtonpost.com/science/2024/03/27/
(Adaptado).

Considerando os seres vivos atuais, as informações trazidas
pelo texto e os princípios da Teoria Sintética da Evolução, é
correto afirmar que`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `as espécies necessariamente se adaptarão às novas
mudanças do planeta.` },
      { id: 'B', type: 'text', value: `somente espécies de dias longos, ou seja, aquelas que
precisam de mais horas de luz, sobreviverão às mudanças
previstas.` },
      { id: 'C', type: 'text', value: `é difícil prever como se dará a evolução das espécies,
porque esse é um processo mediado pelo acaso.` },
      { id: 'D', type: 'text', value: `nenhuma espécie sobreviverá às mudanças na Terra e
novas espécies surgirão em seu lugar.` },
      { id: 'E', type: 'text', value: `espécies aquáticas terão vantagem adaptativa sobre
espécies terrestres, uma vez que todos os continentes
submergirão com o derretimento das geleiras.` },
    ],
    correct: 'C',
    explanation: `Na síntese evolutiva, mutações e recombinação produzem variação sem direcionamento às necessidades futuras; a seleção atua sobre essa variação. Componentes aleatórios e mudanças ambientais impedem prever com certeza o destino das espécies. C é correta; adaptação e sobrevivência não são garantidas.`,
    subject: ['bio'],
    topics: ['Evolução', 'Questões aleatórias'],
  },
  {
    id: 30,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `A imagem a seguir ilustra o aparecimento de uma barreira que
promoveu separação de uma população de rinocerontes e
consequente redução no tamanho das populações resultantes.

Disponível em https://kids.frontiersin.org/articles/10.3389/ (Adaptado).

É correto afirmar que, nas populações fragmentadas, ocorre`,
    images: [{ src: '/fuvest/2025/images/q30_rhino.jpg', width: 736, height: 462 }],
    alternatives: [
      { id: 'A', type: 'text', value: `maior variabilidade genética.` },
      { id: 'B', type: 'text', value: `maior risco de aparecimento de doenças genéticas
recessivas.` },
      { id: 'C', type: 'text', value: `menor frequência de mutações.` },
      { id: 'D', type: 'text', value: `seleção natural dos indivíduos com características
genéticas dominantes.` },
      { id: 'E', type: 'text', value: `favorecimento da mistura entre elas.` },
    ],
    correct: 'B',
    explanation: `A fragmentação reduz o tamanho populacional e o fluxo gênico. O cruzamento entre aparentados pode aumentar a homozigose e a manifestação de alelos recessivos deletérios. Portanto, cresce o risco de doenças genéticas recessivas, como indica B; não há seleção automática de características dominantes.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 31,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Alguns corais contêm, em sua estrutura, algas fornecedoras
de carboidratos que auxiliam no crescimento e na construção
do esqueleto do coral. Os corais, por sua vez, fornecem um
ambiente de proteção e importantes nutrientes às algas. As
mudanças climáticas globais têm provocado a morte dessas
algas e, em muitos casos, a morte dos corais.

Assinale a alternativa que representa a relação ecológica
entre os corais e as algas, assim como o impacto imediato
causado pela morte dos corais.

`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Predação — Formação das marés vermelhas e desoxigenação das águas oceânicas.` },
      { id: 'B', type: 'text', value: `Mutualismo — Perda de habitat para diversas espécies marinhas, assim como diminuição de suas fontes de proteção e alimento.` },
      { id: 'C', type: 'text', value: `Colônia — Aumento de habitats e nichos ecológicos para espécies que passam a viver no local antes ocupado pelos corais.` },
      { id: 'D', type: 'text', value: `Competição — Invasão biológica por espécies que ocupam o nicho deixado vago pelos corais.` },
      { id: 'E', type: 'text', value: `Comensalismo — Enriquecimento das águas oceânicas por cálcio e nitrogênio, favorecendo o desenvolvimento de algas marinhas.` },
    ],
    correct: 'B',
    explanation: `Corais e algas se beneficiam mutuamente: as algas fornecem produtos da fotossíntese e recebem proteção e nutrientes. A morte dos corais elimina estruturas que oferecem abrigo e alimento a numerosas espécies. A combinação mutualismo e perda de habitat corresponde a B.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 32,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `O fenômeno físico conhecido como iridescência ocorre nas
asas de certas espécies de borboletas e caracteriza-se pela
variação das cores de acordo com o ângulo de observação. A
existência de faixas coloridas na superfície das asas das
borboletas ocorre devido a diferentes formas de superposição
entre raios luminosos refletidos por uma fina camada de
substância transparente existente na superfície das asas.

Disponível em https://www.pbs.org/wgbh/.

Os fenômenos físicos diretamente relacionados com a
iridescência são`,
    images: [{ src: '/fuvest/2025/images/q32_butterfly.jpg', width: 709, height: 398 }],
    alternatives: [
      { id: 'A', type: 'text', value: `dilatação e reflexão.` },
      { id: 'B', type: 'text', value: `interferência e dilatação.` },
      { id: 'C', type: 'text', value: `dissipação e difração.` },
      { id: 'D', type: 'text', value: `convecção e dispersão.` },
      { id: 'E', type: 'text', value: `reflexão e interferência.` },
    ],
    correct: 'E',
    explanation: `Raios refletidos nas interfaces de uma película fina se superpõem. Conforme o ângulo, as diferenças de percurso favorecem interferência construtiva para certas cores e destrutiva para outras. A iridescência envolve, portanto, reflexão e interferência: E.`,
    subject: ['fis'],
    topics: ['Óptica', 'Ondulatória', 'Questões aleatórias'],
  },
  {
    id: 33,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `WASSENBERGH, Sam Van; MIELKE, Maia. Physics Today, vol. 77 (2024)
(Adaptado).

Em um estudo relatado no periódico Physics Today, cientistas
belgas mostraram que os pica-paus não dispõem de
mecanismos de absorção de choques em seus ossos do crânio,
ao contrário do que se acreditava anteriormente. Nos
experimentos realizados, verificou-se que o cérebro de um
pica-pau pode experimentar desacelerações instantâneas de
até 400 g, sendo g o módulo da aceleração da gravidade.
Suponha que, durante uma batida em um tronco de árvore, o
crânio do pica-pau, suposto perfeitamente rígido, sofra uma
desaceleração constante de 200 g ao longo de um tempo de
2,0 milissegundos. Qual é a distância percorrida pelo crânio do
pica-pau durante esse tempo, até atingir momentaneamente
o repouso?

Note e adote:
Aceleração da gravidade: g = 10 m/s2.`,
    images: [{ src: '/fuvest/2025/images/q33_woodpecker.jpg', width: 736, height: 393 }],
    alternatives: [
      { id: 'A', type: 'text', value: `2,0 mm` },
      { id: 'B', type: 'text', value: `4,0 mm` },
      { id: 'C', type: 'text', value: `8,0 mm` },
      { id: 'D', type: 'text', value: `16 mm` },
      { id: 'E', type: 'text', value: `32 mm` },
    ],
    correct: 'B',
    explanation: `A desaceleração é 200g = 2.000 m/s² e o intervalo é 0,002 s. Para chegar ao repouso, a velocidade inicial é v₀ = aΔt = 4 m/s. A distância é a velocidade média vezes o tempo: Δs = (4 + 0)/2 × 0,002 = 0,004 m = 4 mm. Logo, B.`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 34,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `“São os ratos!... Vai escutar com atenção, a respiração
meio parada. Hão de ser muitos: há várias fontes daquele
guinchinho, e de quando em quando, no forro, em vários
pontos, o rufar...
A casa está cheia de ratos...”

Dyonélio Machado. Os ratos.

A obra Os ratos (1935), de Dyonélio Machado, narra o dia em
que Naziazeno saiu pela cidade de Porto Alegre no intuito de
conseguir dinheiro para pagar a conta do leiteiro. Os animais
que dão título à narrativa apenas aparecem em seus últimos
capítulos e ocupam o tempo reservado para o descanso do
protagonista. É possível, então, afirmar:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Naziazeno, inconformado com sua condição de devedor,
perambula pela cidade, encontrando refúgio junto aos
ratos que o acolhem.` },
      { id: 'B', type: 'text', value: `Os ratos são os credores de Naziazeno zoomorfizados, que
se encontram à espreita para a cobrança de outras dívidas.` },
      { id: 'C', type: 'text', value: `Os “guinchinhos”, que ressoam nos ouvidos de Naziazeno,
são o eco de seu dia de perambulação, como se
lembrassem os obstáculos que venceu.` },
      { id: 'D', type: 'text', value: `Os ruídos dos roedores mostram que Naziazeno, ao pagar
a sua dívida, esquece os obstáculos que venceu.` },
      { id: 'E', type: 'text', value: `O contraste entre o repouso de Naziazeno e o
aparecimento dos roedores denuncia a permanência da
sua situação de penúria social e financeira.` },
    ],
    correct: 'E',
    explanation: `Mesmo depois de conseguir o dinheiro, Naziazeno não encontra descanso: teme que os ratos destruam o valor destinado ao leiteiro. A ameaça prolonga sua insegurança e evidencia que a solução pontual não elimina a pobreza. E explica a permanência da penúria social e financeira.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Análise de obras', 'Questões aleatórias'],
  },
  {
    id: 35,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `“Ele vê o gesto do advogado Dr. Otávio Conti, no café,
metendo a mão no bolso, tirando uma cédula de cem mil-
réis e entregando-a ao Duque: ‘— Vá levantar esta letra. Você
me devolve depois.’ Não é bem caridade... Ele não sabe
explicar... Há nisso um certo tom de versatilidade... de
facilidade... de um tal ou qual afrouxamento do caráter... Ele
vê o Andrade tirando, com o gesto do Dr. Otávio Conti, a
‘mesma’ cédula do bolso e entregando-lha... A casa
aristocrática acha-se perto. A numeração já está em quase
trezentos. Uma pequena aragem que sopra levemente nesta
parte alta da rua passa-lhe pelas mãos e esfria-as... O seu
corpo suado fica como que um bloco gelado e dá-lhe a
sensação de que se encolhe, se retrai dentro da sua roupa
quente e assoleada, que dela se despega como duma
carapaça. Ao mesmo tempo o coração, que batia lá no fundo
do peito, veio palpitar bem à superfície, quase à flor da pele,
meio engasgando-o.”
Dyonélio Machado. Os ratos.

Dentre as frases em destaque, a que caracteriza os efeitos
fisiológicos em Naziazeno da reação de luta ou fuga pela
ativação do sistema nervoso simpático é:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Ele vê o gesto do advogado Dr. Otávio Conti, no café,
metendo a mão no bolso, tirando uma cédula de cem mil-
réis e entregando-a ao Duque.` },
      { id: 'B', type: 'text', value: `Ele não sabe explicar... Há nisso um certo tom de
versatilidade... de facilidade... de um tal ou qual
afrouxamento do caráter...` },
      { id: 'C', type: 'text', value: `Ele vê o Andrade tirando, com o gesto do Dr. Otávio Conti,
a “mesma” cédula do bolso e entregando-lha...` },
      { id: 'D', type: 'text', value: `Uma pequena aragem que sopra levemente nesta parte
alta da rua passa-lhe pelas mãos e esfria-as.` },
      { id: 'E', type: 'text', value: `Ao mesmo tempo o coração, que batia lá no fundo do
peito, veio palpitar bem à superfície, quase à flor da pele,
meio engasgando-o.` },
    ],
    correct: 'E',
    explanation: `A ativação simpática de luta ou fuga aumenta a frequência e a força das contrações cardíacas, preparando o organismo para agir. O trecho em que o coração passa a palpitar intensamente expressa esse efeito fisiológico. Portanto, E.`,
    subject: ['bio'],
    topics: ['Fisiologia humana', 'Questões aleatórias'],
  },
  {
    id: 36,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `“Madala pensou que devia dizer qualquer coisa ao Djimo,
mas não se lembrou de repetir a pergunta para si mesmo e
por isso não soube o que dizer.
O capataz fazia sinais à Maria, mas esta parecia não
entender.
A planta que Madala segurava na mão oferecia ao seu
esforço uma resistência exagerada. Por isso, o punho de
Madala tremia.
(...)
O tom da voz de Djimo revelava certo nervosismo:
- Madala...
Mas o nervosismo desapareceu logo. Djimo deu uma
ordem:
- Madala, não olhes para lá!
Dentro de Madala, qualquer coisa se crispou. Mas não
eram os fios da sua doença.”

Luís Bernardo Honwana. “Dina”. In: Nós matamos o cão tinhoso!.

Considerando o papel da antologia Nós matamos o cão
tinhoso! na literatura moçambicana e como a sociedade de
Moçambique dos anos 1950 e 1960 se configura
literariamente no conto “Dina”, é correto afirmar:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `O conto apresenta, de modo documental e objetivo, a
condição econômico-social de uma família, mediante a
enumeração de objetos que conotam a vida difícil dos
moçambicanos em busca de um lugar na hierarquia
preestabelecida pelo colonizador europeu.` },
      { id: 'B', type: 'text', value: `O conto demonstra como Luís Bernardo Honwana recria
consistentemente a estrutura do português do
colonizador a partir das línguas originárias de
Moçambique, fazendo da linguagem um instrumento de
luta anticolonial.` },
      { id: 'C', type: 'text', value: `O conto retrata as primeiras reações dos trabalhadores do
campo, como Madala e Djimbo, que se levantam em
armas contra os aparelhos repressivos do Estado
português e a violência nas relações de trabalho,
representados no texto pelo capataz.` },
      { id: 'D', type: 'text', value: `No conto, a sociedade moçambicana vai sendo
apresentada sob o ponto de vista do colonizador, de modo
a comprovar o ideal civilizatório da colonização
portuguesa na África e a convivência equilibrada entre
colonizadores e colonizados.` },
      { id: 'E', type: 'text', value: `No conto, embora perceba ter ultrapassado um limite
moral ao descobrir o parentesco entre Maria e Madala, o
capataz personifica a imposição da violência e do
patriarcalismo metropolitanos aos homens e mulheres de
Moçambique.` },
    ],
    correct: 'E',
    explanation: `O capataz exerce poder colonial e sexual sobre Maria, e a descoberta de seu parentesco com Madala evidencia a violência dessa relação, sem desfazer a dominação. E reconhece a imposição do patriarcalismo e da violência coloniais. Não há no trecho uma insurreição armada nem uma convivência equilibrada.`,
    subject: ['por'],
    topics: ["Análise de obras","Questões aleatórias"],
  },
  {
    id: 37,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Bem-vinda!

“Eram faíscas suas palavras que me queimavam em
doses homeopáticas
durante todas as noites...
Foram longos anos, dia após dia perdendo um pouco
mais minha autoestima,
abrindo mão das roupas que gostava, dos estudos, do
trabalho e das amigas
fazendo de tudo pra evitar brigas,
mas ele sempre dizia que a culpa era minha.
Até que um dia, me empurrou, me acuou
como se eu pudesse caber em qualquer fresta,
encurralada,
me mandou ficar calada e, com medo, obedeci.
Eu pedia desculpa toda vez depois de falar
como se fosse um defeito de nascença querer me
colocar.
A minha casa se tornou um ambiente tão hostil e eu,
prisioneira das minhas próprias ideias,
acreditando que o amor era isso, esse abismo, onde só
um fala e o outro, fica omisso.
Precisei tirar forças de lugares sagrados
pra me afastar e reagir, recolher meus pedaços.
Meus olhos encheram de mar, eu desaguei,
decidi não mais me calar, denunciei!
E depois do silêncio quebrado, meus pensamentos em
guerra cessaram,
recuperei o fôlego e ouvi meu coração sendo grato.
Encontrei em mim um porto seguro, entendi que meu
corpo é meu lar
e, no caminho até ele, escolho quem anda comigo e
quem convido pra entrar.
Hoje, quando olho pra dentro, vejo uma nova mulher
renascendo,
eu celebro sua chegada e contemplo essa nova vida.
Sem medo, abro a janela de casa
e, com olhar de quem há tanto tempo esperava,
te pego pela mão e digo:
Seja bem-vinda!”

Mel Duarte. Colmeia - Poemas Reunidos.

A expressão bem-vinda usada no título e repetida no último
verso faz alusão`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `ao aprisionamento da mulher que não consegue se
libertar do poderio masculino.` },
      { id: 'B', type: 'text', value: `à guerra interior e à falta de forças da mulher oprimida,
que aceita sua condição.` },
      { id: 'C', type: 'text', value: `ao renascimento da mulher que alcança, após a opressão,
coragem para encontrar-se a si mesma.` },
      { id: 'D', type: 'text', value: `ao rebaixamento da mulher que se cala e se desculpa,
perdendo aos poucos sua autoestima.` },
      { id: 'E', type: 'text', value: `à força da mulher que, mesmo hostilizada, tem poder para
fazer entrar em sua casa quem a encurralava.` },
    ],
    correct: 'C',
    explanation: `O poema descreve a perda da autoestima, a violência e, depois, a denúncia e a recuperação da autonomia. A saudação final acolhe a própria mulher que renasce após romper com a opressão. Assim, “bem-vinda” remete ao reencontro consigo mesma: C.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 38,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Bem-vinda!

“Eram faíscas suas palavras que me queimavam em
doses homeopáticas
durante todas as noites...
Foram longos anos, dia após dia perdendo um pouco
mais minha autoestima,
abrindo mão das roupas que gostava, dos estudos, do
trabalho e das amigas
fazendo de tudo pra evitar brigas,
mas ele sempre dizia que a culpa era minha.
Até que um dia, me empurrou, me acuou
como se eu pudesse caber em qualquer fresta,
encurralada,
me mandou ficar calada e, com medo, obedeci.
Eu pedia desculpa toda vez depois de falar
como se fosse um defeito de nascença querer me
colocar.
A minha casa se tornou um ambiente tão hostil e eu,
prisioneira das minhas próprias ideias,
acreditando que o amor era isso, esse abismo, onde só
um fala e o outro, fica omisso.
Precisei tirar forças de lugares sagrados
pra me afastar e reagir, recolher meus pedaços.
Meus olhos encheram de mar, eu desaguei,
decidi não mais me calar, denunciei!
E depois do silêncio quebrado, meus pensamentos em
guerra cessaram,
recuperei o fôlego e ouvi meu coração sendo grato.
Encontrei em mim um porto seguro, entendi que meu
corpo é meu lar
e, no caminho até ele, escolho quem anda comigo e
quem convido pra entrar.
Hoje, quando olho pra dentro, vejo uma nova mulher
renascendo,
eu celebro sua chegada e contemplo essa nova vida.
Sem medo, abro a janela de casa
e, com olhar de quem há tanto tempo esperava,
te pego pela mão e digo:
Seja bem-vinda!”

Mel Duarte. Colmeia - Poemas Reunidos.

Assinale a alternativa que apresenta uma correspondência
correta entre os versos destacados e os recursos utilizados
para evidenciar a dor expressa no poema.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `“Eram faíscas suas palavras que me queimavam em/ doses
homeopáticas/ durante todas as noites...” − conotação: o
predicativo “faíscas” e a forma verbal “queimavam” estão
sendo usados em sentido figurado, enfatizando seu
sofrimento.` },
      { id: 'B', type: 'text', value: `“Até que um dia, me empurrou, me acuou/como se eu
pudesse caber em qualquer fresta, /encurralada”
− antítese: os elementos “empurrou”, “acuou” e
“encurralada” potencializam de forma contraditória seu
sofrimento.` },
      { id: 'C', type: 'text', value: `“acreditando que o amor era isso, esse abismo, onde só/
um fala e o outro, fica omisso” − metonímia: o uso do
aposto “esse abismo”, referindo-se a “amor”, expressa
literalmente seu sofrimento.` },
      { id: 'D', type: 'text', value: `“Precisei tirar forças de lugares sagrados/ pra me afastar e
reagir, recolher meus pedaços” − pleonasmo: o
complemento “meus pedaços” reforça o significado do
verbo “recolher”, acentuando seu sofrimento.` },
      { id: 'E', type: 'text', value: `“Meus olhos encheram de mar, eu desaguei, /decidi não
mais me calar, denunciei!” − paronímia: os verbos
“encher” e “desaguar” são elementos de significação
próxima que dão ênfase a seu sofrimento.` },
    ],
    correct: 'A',
    explanation: `Palavras não são literalmente faíscas nem queimam como fogo: essas imagens transferem o efeito da queimadura para a dor provocada pela violência verbal. A identifica corretamente a conotação. As outras alternativas atribuem nomes inadequados aos recursos citados.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Gramática', 'Questões aleatórias'],
  },
  {
    id: 39,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `PALACIO, Ángela. Privilegiados. Libro de lectura inicial. Buenos Aires:
Kapelusz, 1954. Apud CAPELATO, Maria Helena. Multidões em cena.
Propaganda política no varguismo e no peronismo. Campinas: Papirus, 1998.
p.88-91.

As imagens mostram páginas de uma cartilha de alfabetização
produzida durante o governo de Juan Domingo Perón na
Argentina (1946-1955). As ilustrações`,
    images: [{ src: '/fuvest/2025/images/q39_peron.jpg', width: 762, height: 1077 }],
    alternatives: [
      { id: 'A', type: 'text', value: `atribuem valor idêntico à presença de homens e de
mulheres nas esferas pública e privada.` },
      { id: 'B', type: 'text', value: `revelam a neutralidade do material no que diz respeito às
posições políticas e às relações entre gêneros.` },
      { id: 'C', type: 'text', value: `ressaltam a importância da formação intelectual das
mulheres oriundas dos setores populares.` },
      { id: 'D', type: 'text', value: `fazem propaganda do regime político e demarcam as
funções da mulher como mãe e esposa.` },
      { id: 'E', type: 'text', value: `desenvolvem crítica político-partidária à estrutura
patriarcal e à política popular.` },
    ],
    correct: 'D',
    explanation: `A cartilha integra a propaganda peronista e apresenta papéis femininos vinculados à maternidade e à condição de esposa. O material escolar não é neutro nem propõe igualdade de funções entre os gêneros. A interpretação correta é D.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias'],
  },
  {
    id: 40,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Atingir a igualdade de gênero é uma das
metas do Objetivo de Desenvolvimento
Sustentável (ODS) de número 5 da Agenda
2030, adotada pela ONU em 2015.

No cenário esportivo, é possível
identificar alguns avanços em relação ao
alcance dessa meta, conforme reconheceu a jogadora
brasileira de futebol Marta:

“Quando as atletas do sexo feminino têm a chance de se
destacar, os resultados são enormes. E para isso, a Copa do
Mundo Feminina de 2019 foi realmente uma virada no jogo. A
audiência global do torneio ultrapassou 1 bilhão de pessoas.”

Disponível em https://brasil.un.org/.

A Olimpíada de Paris 2024, por sua vez, estabeleceu, pela
primeira vez na história, a paridade de gênero em todos os
esportes olímpicos, com 5.250 vagas destinadas a cada sexo.
Apesar das conquistas, o caminho rumo à igualdade de gênero
continua.

Com base no exposto, é correto afirmar:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `As práticas esportivas devem ser consideradas como
práticas sociais, pois claramente refletem em sua
realidade as potencialidades e os retrocessos da
sociedade. Sendo assim, as mulheres já atingiram o
mesmo nível de destaque que os homens na sociedade
contemporânea, haja vista a ascensão e visibilidade
feminina no cenário esportivo.` },
      { id: 'B', type: 'text', value: `Os grandes eventos esportivos conferem às mulheres uma
visibilidade muitas vezes camuflada na sociedade. A
visibilidade gerada para as atletas em cenário esportivo, a
partir dos grandes eventos, demonstra o quanto elas já
atingiram em totalidade seu status social e caminham no
sentido de alcançar a agenda dos ODS.` },
      { id: 'C', type: 'text', value: `As mulheres atletas têm, vagarosamente, alcançado mais
possibilidades de inclusão e participação junto ao mundo
esportivo, porém a igualdade de gênero ainda se mostra
uma meta distante de ser alcançada quando se observa a
baixa proporção de mulheres ocupando cargos de gestão
e liderança no cenário esportivo.` },
      { id: 'D', type: 'text', value: `O mundo esportivo não tem implicação direta junto ao
alcance das metas dos ODS, uma vez que possui
organização e regramento específicos, além de uma
constituição social própria. Dessa maneira, a instituição
esportiva não deve ser padrão de referência para revelar
avanços ou retrocessos da sociedade como um todo.` },
      { id: 'E', type: 'text', value: `O esporte tem sido importante fenômeno de promoção
das mulheres, mas sua influência é limitada à prática
profissional de modalidades esportivas mais populares,
sem potencial de contribuir para a igualdade de
oportunidades para as mulheres em todos os níveis de
tomada de decisão na vida política, econômica e pública.` },
    ],
    correct: 'C',
    explanation: `Aumento da participação e da visibilidade das atletas não equivale a igualdade em todas as instâncias. A baixa presença de mulheres em gestão e liderança esportivas mostra a persistência de desigualdades. C reconhece os avanços sem declarar a meta já alcançada.`,
    subject: ['fil'],
    topics: ['Direitos humanos', 'Questões aleatórias'],
  },
  {
    id: 41,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `“Quick, quick, tell me something awful
Like you are a poet trapped inside the body of a finance guy
Tell me all your secrets, all you'll ever be is
My eternal consolation prize
You see, I was a debutante in another life, but
Now I seem to be scared to go outside
If comfort is a construct, I don't believe in good luck
Now that I know what's what

I hate it here so I will go to secret gardens in my mind
People need a key to get to, the only one is mine
I read about it in a book when I was a precocious child
No mid-sized city hopes and small-town fears
I'm there most of the year 'cause I hate it here
I hate it here

My friends used to play a game where
We would pick a decade
We wished we could live in instead of this
I'd say the 1830s but without all the racists
And getting married off for the highest bid
Everyone would look down 'cause it wasn't fun now
Seems like it was never even fun back then
Nostalgia is a mind's trick
If I'd been there, I'd hate it
It was freezing in the palace”

“I hate it here”, Taylor Swift, do álbum The Tortured Poets Department,
2024 (Adaptado).

Na letra da música, o verso “Like you are a poet trapped inside
the body of a finance guy”`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `enaltece a romantização e idealização de épocas passadas.` },
      { id: 'B', type: 'text', value: `destaca o papel de contextos externos no manejo de
frustrações.` },
      { id: 'C', type: 'text', value: `expressa o sentimento de insatisfação ou inadequação em
relação às expectativas sociais.` },
      { id: 'D', type: 'text', value: `critica a revelação de segredos e o rompimento de
fronteiras pessoais.` },
      { id: 'E', type: 'text', value: `enfatiza a importância da sorte e de elementos culturais
como mitos e rituais.` },
    ],
    correct: 'C',
    explanation: `A imagem de um poeta aprisionado no corpo de um profissional de finanças opõe desejos e identidade pessoal a um papel social. Expressa inadequação às expectativas e insatisfação com a vida concreta. Essa leitura corresponde a C.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 42,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `“Quick, quick, tell me something awful
Like you are a poet trapped inside the body of a finance guy
Tell me all your secrets, all you'll ever be is
My eternal consolation prize
You see, I was a debutante in another life, but
Now I seem to be scared to go outside
If comfort is a construct, I don't believe in good luck
Now that I know what's what

I hate it here so I will go to secret gardens in my mind
People need a key to get to, the only one is mine
I read about it in a book when I was a precocious child
No mid-sized city hopes and small-town fears
I'm there most of the year 'cause I hate it here
I hate it here

My friends used to play a game where
We would pick a decade
We wished we could live in instead of this
I'd say the 1830s but without all the racists
And getting married off for the highest bid
Everyone would look down 'cause it wasn't fun now
Seems like it was never even fun back then
Nostalgia is a mind's trick
If I'd been there, I'd hate it
It was freezing in the palace”

“I hate it here”, Taylor Swift, do álbum The Tortured Poets Department,
2024 (Adaptado).

No texto, a percepção de “conforto como construto” indica
que o eu lírico vê o conforto como`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `refúgio mental para apaziguar as pressões e o
descontentamento da vida.` },
      { id: 'B', type: 'text', value: `concepção ligada às experiências infantis em mecanismos
de enfrentamento.` },
      { id: 'C', type: 'text', value: `conceito pressuposto, dependente da realidade concreta
das pessoas.` },
      { id: 'D', type: 'text', value: `dificuldade de ter autoafirmação, por conta de questões
internas pendentes.` },
      { id: 'E', type: 'text', value: `algo criado pela sociedade, produzindo falsa sensação de
segurança.` },
    ],
    correct: 'E',
    explanation: `“Construct” designa algo construído, e não uma garantia natural de bem-estar. Ao questionar o conforto como construto, o eu lírico põe em dúvida uma segurança produzida socialmente. E traduz essa crítica, enquanto o refúgio mental aparece como outra imagem da letra.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 43,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Carlos Drummond de Andrade foi o criador de uma obra lírica
que, ao mesmo tempo, se aproxima e se afasta do
Modernismo de 1922, propondo, a partir de traços desse
movimento, uma poética original. Com base no exposto, em
Alguma poesia (1930),`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `os aspectos prosaicos da linguagem modernista ganham
expressão lírica a partir de um sujeito poético que
repropõe, em versos livres, a nostalgia romântica da
infância idealizada.` },
      { id: 'B', type: 'text', value: `o sujeito poético incorpora, sob a perspectiva de uma lírica
de raiz subjetiva, vários procedimentos estilísticos das
vanguardas modernistas, em especial a escrita automática
e o surrealismo.` },
      { id: 'C', type: 'text', value: `a tópica literária do desconcerto do mundo ganha uma
reconfiguração moderna, a partir de um sujeito poético
que, mais do que revelar um mundo às avessas, focaliza o
seu desajuste frente à realidade.` },
      { id: 'D', type: 'text', value: `o nacionalismo literário, tão típico da revisão
empreendida pela primeira geração modernista sobre a
realidade brasileira, apresenta-se como eixo temático de
cunho ufanista.` },
      { id: 'E', type: 'text', value: `a paisagem mineira, no espaço literário, é configurada
pelo sujeito poético como ambiente bucólico e refúgio
privilegiado para os seus desajustes frente ao “vasto
mundo”.` },
    ],
    correct: 'C',
    explanation: `Em Alguma poesia, a linguagem moderna e o cotidiano se articulam a um sujeito gauche, que experimenta o próprio desajuste diante do mundo. O desconcerto passa pela inadequação do eu, e não por um nacionalismo ufanista ou refúgio bucólico idealizado. Logo, C.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Escolas literárias', 'Questões aleatórias'],
  },
  {
    id: 44,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Disponível em https://br.pinterest.com/.

“Quem negaria que os futuros ainda não são? Mas já está na
mente a espera dos futuros. E quem negaria que os passados
já não são? Todavia, ainda está na mente a memória dos
passados. E quem negaria que o tempo presente não tem
extensão temporal, porque passa em um instante? Todavia,
perdura a atenção, pela qual o que está presente se
encaminha para a ausência.”

Agostinho de Hipona. Confissões.

Ao propor uma aproximação entre a fala da personagem
Calvin no quadrinho e o trecho citado das Confissões de
Agostinho, é possível encontrar semelhanças com relação à
descrição do tempo e sua compreensão filosófica. Dentre as
afirmativas a seguir, qual delas pode ser considerada
verdadeira para ambos os casos?`,
    images: [{ src: '/fuvest/2025/images/q44_calvin.jpg', width: 632, height: 667 }],
    alternatives: [
      { id: 'A', type: 'text', value: `A passagem do tempo é ilusória.` },
      { id: 'B', type: 'text', value: `O tempo desfaz a mudança.` },
      { id: 'C', type: 'text', value: `Há um paradoxo na compreensão do tempo.` },
      { id: 'D', type: 'text', value: `Os momentos do tempo identificam-se entre si.` },
      { id: 'E', type: 'text', value: `Há ruptura completa entre o tempo presente e o futuro.` },
    ],
    correct: 'C',
    explanation: `Agostinho observa que o passado já não existe, o futuro ainda não existe e o presente passa instantaneamente, mas memória, expectativa e atenção permitem experienciá-los. A aproximação com Calvin evidencia a dificuldade paradoxal de pensar o tempo. C não nega a passagem temporal nem identifica todos os momentos.`,
    subject: ['fil'],
    topics: ['Filosofia Antiga', 'Questões aleatórias'],
  },
  {
    id: 45,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Considere que a expectativa de vida no Brasil à idade de 19
anos pode ser calculada, de forma aproximada, como a média
aritmética simples entre a expectativa de vida estimada à
mesma idade dos homens e das mulheres. O mesmo pode ser
feito à idade de 20 anos.

Segundo dados do IBGE, em 2022, a expectativa de vida
estimada no Brasil à idade de 19 anos era 58, e a expectativa
de vida estimada dos homens à mesma idade era 54,7.

Sabe-se que a diferença entre a expectativa de vida estimada
dos homens e a das mulheres se manteve à idade de 20 anos
e que a expectativa de vida estimada dos homens a essa idade
(EVH20) era 53,8.

Com base nos dados apresentados, assinale a alternativa que
apresenta a expectativa de vida estimada das mulheres à
idade de 19 anos (EVM19) e a expectativa de vida estimada à
idade de 20 anos no Brasil (EVB20) em 2022.
`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `EVM19 = 54,7; EVB20 = 54,7` },
      { id: 'B', type: 'text', value: `EVM19 = 54,7; EVB20 = 58` },
      { id: 'C', type: 'text', value: `EVM19 = 60; EVB20 = 54` },
      { id: 'D', type: 'text', value: `EVM19 = 61,3; EVB20 = 56` },
      { id: 'E', type: 'text', value: `EVM19 = 61,3; EVB20 = 57,1` },
    ],
    correct: 'E',
    explanation: `Da média (54,7 + EVM19)/2 = 58 resulta EVM19 = 61,3. A diferença entre mulheres e homens é 6,6 anos. Aos 20, EVM20 = 53,8 + 6,6 = 60,4; logo, EVB20 = (53,8 + 60,4)/2 = 57,1. A dupla pedida está em E.`,
    subject: ['mat'],
    topics: ['Estatística', 'Questões aleatórias'],
  },
  {
    id: 46,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `A maior parte da alimentação humana é constituída por grãos
e cereais, que, em sua maioria, correspondem às sementes, em
termos botânicos. Esse consumo é adequado, uma vez que as
sementes`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `constituem o único órgão de reserva de amido das plantas,
substância altamente energética para os seres vivos em
geral.` },
      { id: 'B', type: 'text', value: `armazenam todas as vitaminas e nutrientes necessários
para a planta e, portanto, também ao ser humano.` },
      { id: 'C', type: 'text', value: `possuem DNA da planta-mãe e do embrião, que constituem
nutrientes sem os quais a espécie humana não sobrevive.` },
      { id: 'D', type: 'text', value: `contêm substâncias de reserva provedoras de energia para
o desenvolvimento do embrião vegetal, que também
servem de fonte energética aos seres humanos.` },
      { id: 'E', type: 'text', value: `possuem enzimas digestivas de amido e de proteínas, que
disponibilizam energia ao embrião vegetal e também são
usadas para promover a digestão em seres humanos.` },
    ],
    correct: 'D',
    explanation: `Sementes armazenam carboidratos, lipídios e/ou proteínas que sustentam o embrião durante a germinação. Essas reservas também podem ser utilizadas na nutrição e no metabolismo energético humanos. D é correta; sementes não são o único órgão de reserva e não fornecem necessariamente todos os nutrientes humanos.`,
    subject: ['bio'],
    topics: ['Botânica', 'Questões aleatórias'],
  },
  {
    id: 47,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `A figura a seguir representa os níveis médios de consumo de
gordura saturada na dieta para adultos com idade ≥20 anos.

MICHA, R. et al., (2014). British Medical Journal, v. 348. g2272. DOI:
10.1136/bmj.g2272.

Considerando apenas os dados da figura, os habitantes da
Austrália e da Rússia apresentam maiores riscos de
desenvolver doenças`,
    images: [{ src: '/fuvest/2025/images/q47_fat_map.jpg', width: 762, height: 569 }],
    alternatives: [
      { id: 'A', type: 'text', value: `renais.` },
      { id: 'B', type: 'text', value: `respiratórias.` },
      { id: 'C', type: 'text', value: `cardiovasculares.` },
      { id: 'D', type: 'text', value: `cerebrais.` },
      { id: 'E', type: 'text', value: `neuromusculares.` },
    ],
    correct: 'C',
    explanation: `O elevado consumo de gorduras saturadas é fator associado ao aumento de LDL e ao risco de aterosclerose e outras doenças cardiovasculares. Os níveis indicados para Austrália e Rússia sustentam C. O mapa não permite diagnosticar indivíduos, mas comparar esse fator de risco alimentar.`,
    subject: ['bio'],
    topics: ['Fisiologia humana', 'Questões aleatórias'],
  },
  {
    id: 48,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Os gráficos a seguir apresentam a evolução do abate de
bovinos e da participação de machos e fêmeas, por trimestre
(indicado por algarismo romano), segundo informações
obtidas pelo IBGE.

Evolução do abate de bovinos no Brasil por trimestre (2019-2024)

Evolução da participação de machos e fêmeas no abate de bovinos
no Brasil por trimestre (2019-2024)

IBGE: Diretoria de Pesquisas. Coordenação de Estatísticas Agropecuárias.
Pesquisa Trimestral do Abate de Animais 2019-2024 (Adaptado).

A partir dos dados observados nos gráficos, é correto afirmar:`,
    images: [{ src: '/fuvest/2025/images/q48_cattle_a.jpg', width: 754, height: 424 }, { src: '/fuvest/2025/images/q48_cattle_b.jpg', width: 754, height: 393 }],
    alternatives: [
      { id: 'A', type: 'text', value: `No primeiro trimestre de 2023, a diferença entre as
quantidades de machos e fêmeas abatidos foi menor que
a do primeiro trimestre de 2019.` },
      { id: 'B', type: 'text', value: `No primeiro trimestre de 2023, a quantidade de fêmeas
abatidas foi de, aproximadamente, 2 milhões.` },
      { id: 'C', type: 'text', value: `No primeiro trimestre de 2021 e de 2022, a diferença entre
as quantidades de machos e fêmeas abatidos foi igual.` },
      { id: 'D', type: 'text', value: `No primeiro trimestre de 2024, a quantidade de fêmeas
abatidas foi de, aproximadamente, 4,3 milhões.` },
      { id: 'E', type: 'text', value: `No primeiro trimestre de 2024, a quantidade de fêmeas
abatidas foi igual à do primeiro trimestre de 2019.` },
    ],
    correct: 'D',
    explanation: `No primeiro trimestre de 2024, o total abatido é de aproximadamente 9,3 milhões de bovinos e a participação feminina é próxima de 46%. O produto 9,3 × 0,46 ≈ 4,28 milhões confirma cerca de 4,3 milhões de fêmeas, como indica D. É necessário combinar os dois gráficos, e não confundir porcentagem com quantidade absoluta.`,
    subject: ["mat"],
    topics: ["Estatística","Questões aleatórias"],
  },
  {
    id: 49,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Observe as imagens de satélite que indicam o desmatamento
de 12.272 hectares no município de Formosa do Rio Preto
(BA), região do MATOPIBA, composta pelos estados do
Maranhão, Tocantins, Piauí e Bahia, no período 2019-2022.
MapBiomas. 2023. Relatório de desmatamento no Brasil (Adaptado).

Com base na análise temporal das imagens, assinale a
alternativa que apresenta, respectivamente, o bioma
correspondente à região do MATOPIBA, a atividade
econômica desenvolvida nesse local e o possível impacto
ambiental negativo decorrente de tal atividade.`,
    images: [{ src: '/fuvest/2025/images/q49_deforestation.jpg', width: 737, height: 971 }],
    alternatives: [
      { id: 'A', type: 'text', value: `Cerrado, agropecuária e processos erosivos.` },
      { id: 'B', type: 'text', value: `Cerrado, silvicultura e contaminação do solo.` },
      { id: 'C', type: 'text', value: `Amazônia, mineração e poluição das águas.` },
      { id: 'D', type: 'text', value: `Caatinga, pastagem e impermeabilização da superfície.` },
      { id: 'E', type: 'text', value: `Caatinga, extrativismo e perda de biodiversidade.` },
    ],
    correct: 'A',
    explanation: `O MATOPIBA abrange uma frente de expansão agropecuária no Cerrado. A retirada da cobertura vegetal para lavouras e pastagens deixa o solo mais exposto à ação da chuva e favorece processos erosivos. A reúne bioma, atividade e impacto coerentes.`,
    subject: ['geo'],
    topics: ['Meio ambiente', 'Questões aleatórias'],
  },
  {
    id: 50,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Neste bioma, a vegetação nativa apresenta-se intercalada por
extensas monoculturas de soja e de arroz. Em alguns lugares,
a vegetação campestre original tem sido substituída por
vegetação florestal, formada por árvores de eucaliptos. Em
vários locais, observa-se a expansão de grandes areais, em
que os solos arenosos ficam expostos e suscetíveis a uma
intensa erosão. Este é o bioma brasileiro menos protegido por
Unidades de Conservação, embora esteja entre aqueles que
mais perderam vegetação nativa nas últimas três décadas.

A descrição da paisagem impactada por ações humanas
refere-se ao bioma`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Caatinga.` },
      { id: 'B', type: 'text', value: `Cerrado.` },
      { id: 'C', type: 'text', value: `Mata Atlântica.` },
      { id: 'D', type: 'text', value: `Pampas.` },
      { id: 'E', type: 'text', value: `Pantanal.` },
    ],
    correct: 'D',
    explanation: `Campos nativos, expansão de arroz e soja, silvicultura com eucaliptos e formação de areais caracterizam os impactos descritos no Pampa. A arenização de solos frágeis é especialmente associada ao sudoeste gaúcho. A alternativa correspondente é D.`,
    subject: ['geo'],
    topics: ['Geografia física', 'Questões aleatórias'],
  },
  {
    id: 51,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `A figura a seguir representa a variação espacial da
temperatura do ar por tipo de área, considerando diferentes
padrões de uso e ocupação do solo de um município.

Revista Pesquisa FAPESP – Setembro/2023 (Adaptado).

A explicação para as características desse perfil de
temperatura do ar deve-se`,
    images: [{ src: '/fuvest/2025/images/q51_heat_island.jpg', width: 736, height: 385 }],
    alternatives: [
      { id: 'A', type: 'text', value: `à maior ocorrência de áreas verdes nas periferias, que
absorvem mais radiação solar e aquecem o ambiente,
ultrapassando os 32 °C.` },
      { id: 'B', type: 'text', value: `à maior absorção de radiação solar nas áreas centrais das
cidades, compostas em sua maioria por asfalto, vidro e
concreto.` },
      { id: 'C', type: 'text', value: `ao efeito de sombreamento dos edifícios nas áreas
centrais, com maior disponibilidade de radiação solar e
temperaturas inferiores a 30 °C.` },
      { id: 'D', type: 'text', value: `à presença de áreas comerciais e residenciais ao longo de
todo perfil, que elevam a temperatura acima dos 32 °C e
reduzem a umidade.` },
      { id: 'E', type: 'text', value: `à maior reflexão da radiação solar nas áreas centrais pelo
asfalto, por apresentarem albedo menor que as
superfícies vegetadas.` },
    ],
    correct: 'B',
    explanation: `Asfalto e outros materiais urbanos absorvem e armazenam energia, enquanto a escassez de vegetação reduz o resfriamento por evapotranspiração. Isso favorece temperaturas maiores nas áreas centrais, caracterizando a ilha de calor. B corresponde ao perfil; menor albedo significa menor reflexão, não maior.`,
    subject: ['geo'],
    topics: ['Urbanização', 'Questões aleatórias'],
  },
  {
    id: 52,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `As enchentes ocorridas no Rio Grande do Sul, em maio de
2024, prejudicaram a infraestrutura de comunicação. A
população afetada era informada sobre as notícias relativas às
enchentes ao sintonizar, por rádio de pilhas, frequências de
onda AM, cujo alcance é maior.

Uma onda AM é modelada matematicamente por equações
que envolvem a função cosseno, cuja variável independente é
o tempo t, que aparece multiplicado pela frequência f da
onda.

Como exemplo, pode-se considerar a equação referente ao
processo de modulação de uma onda AM:

s(t)=A [1 +k m(t)]cos (2π f t) ,

em que A é a amplitude, f a frequência, k a constante da
sensibilidade à amplitude e m(t) o sinal que contém a
informação.

Quando a frequência f é multiplicada por 3, o comprimento
da onda sofre alteração. Por causa dessa multiplicação, qual
transformação ocorre no gráfico da função cosseno original?`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Expansão vertical.` },
      { id: 'B', type: 'text', value: `Translação horizontal.` },
      { id: 'C', type: 'text', value: `Expansão horizontal.` },
      { id: 'D', type: 'text', value: `Contração horizontal.` },
      { id: 'E', type: 'text', value: `Contração vertical.` },
    ],
    correct: 'D',
    explanation: `Em cos(2πft), substituir f por 3f faz cada oscilação ocorrer em um terço do tempo: o período passa de T para T/3. O gráfico sofre contração horizontal, sem alteração necessária da amplitude. Portanto, D.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 53,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `A Estação Meteorológica Mirante de Santana é a principal
referência do Instituto Nacional de Meteorologia (INMET) no
município de São Paulo - SP. O climograma a seguir apresenta
dados referentes ao mês de fevereiro de 2023. Neste mesmo
mês, o Centro de Gerenciamento de Emergências Climáticas
detectou 11 pontos de alagamentos no dia 19 e 14 pontos no
dia 21.

Disponível em https://portal.inmet.gov.br/noticias/ (Adaptado).

Com base no texto e no gráfico, assinale a alternativa correta.`,
    images: [{ src: '/fuvest/2025/images/q53_climogram.jpg', width: 736, height: 452 }],
    alternatives: [
      { id: 'A', type: 'text', value: `A menor amplitude térmica ocorreu no dia 19, quando foi
observado um dos maiores volumes de chuva do mês.` },
      { id: 'B', type: 'text', value: `Os quatro dias mais chuvosos apresentaram as menores
temperaturas mínimas.` },
      { id: 'C', type: 'text', value: `A temperatura máxima no período variou entre 21,5 °C e
17,8 °C.` },
      { id: 'D', type: 'text', value: `Os cinco dias mais quentes correspondem às maiores
precipitações.` },
      { id: 'E', type: 'text', value: `Os pontos de alagamento nos dias 19 e 21 foram
provocados pela chuva acumulada de 428,9 mm.` },
    ],
    correct: 'A',
    explanation: `A amplitude térmica diária é a diferença entre as temperaturas máxima e mínima, não a temperatura isolada. No dia 19, essas curvas estão mais próximas, e o gráfico registra um dos maiores volumes diários de precipitação. Essa associação confirma A; o acumulado mensal não é a chuva exclusiva dos dias de alagamento.`,
    subject: ['geo'],
    topics: ['Geografia física', 'Questões aleatórias'],
  },
  {
    id: 54,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `“A distribuição dos mosquitos, a frequência de suas picadas e
o tempo de eclosão de seus ovos são afetados pela
temperatura, pluviosidade e velocidade do vento, além de
outros fatores, como deslocamento e densidade
populacionais. Por exemplo, com uma temperatura de 27 °C,
o período de incubação dos ovos é de dez dias; no entanto, a
37 °C, esse período passa a ser de sete dias. Além disso, a
intermitência das chuvas no final da estação do verão e os
ventos calmos acentuam a proliferação e a atuação do vetor.”

MENDONÇA, Francisco de Assis. Aquecimento Global e Saúde: uma
perspectiva geográfica – notas introdutórias. Terra Livre, 2003 (Adaptado).

Com base no texto, assinale a alternativa correta.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `A elevação da temperatura e o aumento da pluviosidade,
somados ao desmatamento, à urbanização e à circulação
de pessoas em várias áreas, potencializam a expansão da
dengue.` },
      { id: 'B', type: 'text', value: `A dengue é um problema nacional e está relacionada ao
fato de o Brasil ser um país tropical com áreas de florestas,
aspectos que, combinados à dispersão da população,
contribuem para minimizar a epidemia.` },
      { id: 'C', type: 'text', value: `A proliferação do mosquito Aedes aegypti ocorre em
áreas pouco povoadas nos centros urbanos, associada às
baixas temperaturas que intensificam a transmissão da
doença.` },
      { id: 'D', type: 'text', value: `No território brasileiro, as áreas com baixas temperaturas
reduzem o tempo necessário para eclosão dos ovos,
aumentando a proliferação do mosquito Aedes aegypti e
a frequência de picadas.` },
      { id: 'E', type: 'text', value: `A dengue é um problema de saúde pública em escala
mundial e sua disseminação está associada à diminuição
de temperatura, aumento da velocidade do vento e
redução da precipitação.` },
    ],
    correct: 'A',
    explanation: `O aquecimento acelera a eclosão dos ovos nas condições apresentadas, e a disponibilidade de água favorece criadouros. Urbanização, desmatamento e circulação de pessoas ampliam condições de proliferação e disseminação. A reúne esses fatores; frio e ventos fortes não são os fatores favorecedores descritos.`,
    subject: ['geo'],
    topics: ['Meio ambiente', 'Questões aleatórias'],
  },
  {
    id: 55,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Dentre os animais invertebrados, alguns grupos apresentam o
sistema circulatório fechado, enquanto outros apresentam o
sistema circulatório aberto, o que leva a diferenças em
processos fisiológicos.

Nos invertebrados, o sistema circulatório`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `fechado apresenta uma menor pressão do sangue /
hemolinfa em relação ao sistema circulatório aberto.` },
      { id: 'B', type: 'text', value: `aberto apresenta o coração dividido em quatro cavidades:
dois átrios e dois ventrículos.` },
      { id: 'C', type: 'text', value: `fechado permite maior eficiência no transporte de
oxigênio em relação ao sistema circulatório aberto.` },
      { id: 'D', type: 'text', value: `aberto facilita a distribuição dos nutrientes aos tecidos em
relação ao sistema circulatório fechado.` },
      { id: 'E', type: 'text', value: `fechado mistura mais facilmente os gases respiratórios:
oxigênio e dióxido de carbono.` },
    ],
    correct: 'C',
    explanation: `No sistema fechado, o fluido circula por vasos, permitindo maior pressão, controle da distribuição e transporte mais eficiente de oxigênio nos grupos em que a circulação cumpre essa função. Essa comparação corresponde a C. Não implica mistura dos gases nem coração universalmente dividido em quatro cavidades.`,
    subject: ['bio'],
    topics: ["Zoologia","Questões aleatórias"],
  },
  {
    id: 56,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `O processo de mumificação usado pelos egípcios começava
com a retirada dos órgãos e desidratação do corpo utilizando
uma mistura natural, obtida em leito de lagos, de sais solúveis
de sódio, como carbonato, hidrogenocarbonato, cloreto e
sulfato. Após a desidratação, o corpo era preenchido com uma
mistura de serragem e ervas aromáticas como canela, cássia,
mirra e até mesmo cebola, que, por conterem álcoois e
aldeídos com propriedades antimicrobianas, dificultavam a
decomposição do corpo. Por fim, o corpo era envolvido em
tecido embebido em resinas insolúveis em água, como
betume ou óleo de cedro, que, após seco, formava uma
camada impermeabilizante.

A partir dessas informações, assinale a alternativa correta.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Os sais de sódio mencionados, por serem hidrofílicos,
repelem a água.` },
      { id: 'B', type: 'text', value: `Propanona e hexano são exemplos de álcoois e aldeídos
antimicrobianos.` },
      { id: 'C', type: 'text', value: `Assim como o betume e óleo de cedro, qualquer outro
composto orgânico serviria como impermeabilizante.` },
      { id: 'D', type: 'text', value: `Todo sal iônico poderia ser utilizado em substituição aos
sais de sódio mencionados.` },
      { id: 'E', type: 'text', value: `A impermeabilidade conferida pelas resinas se deve às
suas características apolares ou muito pouco polares.` },
    ],
    correct: 'E',
    explanation: `A água é polar, enquanto as resinas descritas são apolares ou pouco polares; a baixa afinidade com a água favorece a barreira impermeabilizante. Por isso, E. Hidrofílico significa afinidade com água, e nem todo composto orgânico ou sal tem as propriedades exigidas.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 57,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Em países frios, é comum o uso de pequenos aquecedores de
mãos, normalmente descartáveis, que podem ser colocados
dentro de luvas. Uma alternativa mais sustentável é o
aquecedor de mão reutilizável, que é constituído por uma
solução aquosa supersaturada de acetato de sódio
armazenada em um reservatório maleável, conforme
mostrado na figura a seguir.

Um choque mecânico nesse reservatório perturba a solução
supersaturada e leva à precipitação do sal, resultando no seu
aquecimento. Após o uso, o aquecedor pode ser regenerado
por imersão em água quente, que dissolve o sal, deixando-o
pronto para ser reutilizado.

Em relação à operação desse aquecedor, é correto afirmar:`,
    images: ['/fuvest/2025/images/fuvest_2025_q57.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A precipitação do acetato de sódio é exotérmica e sua
solubilização é endotérmica.` },
      { id: 'B', type: 'text', value: `A diminuição da temperatura aumenta a solubilidade do
acetato de sódio.` },
      { id: 'C', type: 'text', value: `A solubilização do acetato de sódio para a regeneração do
aquecedor libera energia, aquecendo o banho de água.` },
      { id: 'D', type: 'text', value: `Quando o aquecedor é regenerado, a solução interna
passa de supersaturada para uma solução diluída.` },
      { id: 'E', type: 'text', value: `A concentração de acetato de sódio na solução dentro do
reservatório não muda durante a regeneração do aquecedor.` },
    ],
    correct: 'A',
    explanation: `A cristalização desencadeada pelo choque libera calor, sendo exotérmica. Para regenerar o dispositivo, fornece-se calor que dissolve o sal, processo endotérmico nas condições descritas. Esses processos inversos correspondem a A; a solução supersaturada não é simplesmente uma solução diluída.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 58,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `A toxicidade do Pb e o risco de sua ingestão ganharam
notoriedade na mídia devido à presença desse elemento em
copos térmicos amplamente comercializados. A exposição ao
Pb, no entanto, pode ocorrer também por fontes naturais,
como a ingestão de água em contato prolongado com
minérios como a anglesita, rico em PbSO₄ (Kps = 1,0 × 10⁻⁸).
Sabendo que a legislação estabelece a concentração máxima
de Pb de 0,01 mg/L para água potável, assinale a alternativa
correta em relação à ingestão de água que tenha contato
prolongado com a anglesita.

Note e adote:
Massa molar (g/mol): Pb = 207`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Não é segura, pois a concentração de Pb na água será de 2,07 × 10¹ mg/L, maior que o valor permitido.` },
      { id: 'B', type: 'text', value: `É segura, pois a concentração de Pb na água será de 1 × 10⁻⁴ mg/L, menor que o valor permitido.` },
      { id: 'C', type: 'text', value: `Não é segura, pois a concentração de Pb na água será de 1 × 10⁻⁸ mg/L, menor que o valor permitido.` },
      { id: 'D', type: 'text', value: `É segura, pois a concentração de Pb na água será de 1 × 10⁻² mg/L, igual ao valor permitido.` },
      { id: 'E', type: 'text', value: `É segura, pois a concentração de Pb na água será de 2,07 × 10⁻⁶ mg/L, maior que o valor permitido.` },
    ],
    correct: 'A',
    explanation: `Para PbSO₄(s) ⇌ Pb²⁺ + SO₄²⁻ em água, Kps = s² = 10⁻⁸, logo s = 10⁻⁴ mol/L. A concentração mássica de Pb é 207 × 10⁻⁴ g/L = 20,7 mg/L = 2,07 × 10¹ mg/L. Esse valor supera 0,01 mg/L, tornando a água imprópria segundo o limite informado. Portanto, A.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 59,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Quando uma barra de um certo material é aquecida até
uma temperatura T a partir de uma temperatura inicial T₀,
seu comprimento inicial L₀ sofre um aumento ΔL dado por
ΔL=α L₀ (T−T₀), sendo α o coeficiente de expansão
linear, que depende do material. O gráfico a seguir mostra
curvas de expansão linear para barras feitas de três
materiais distintos.

Com base no gráfico e nas informações apresentadas, é
correto afirmar:`,
    images: [{ src: '/fuvest/2025/images/q59_expansion.jpg', width: 762, height: 499 }],
    alternatives: [
      { id: 'A', type: 'text', value: `O gráfico mostra curvas para três barras que possuem o
mesmo comprimento à temperatura de 30°C.` },
      { id: 'B', type: 'text', value: `Em um processo de aquecimento entre 100°C e 200°C, o
comprimento da barra de cobre aumenta em 0,1 m.` },
      { id: 'C', type: 'text', value: `O coeficiente de expansão linear do alumínio é maior do
que o do cobre.` },
      { id: 'D', type: 'text', value: `Partindo de 0°C, aumentar em 10 cm o comprimento da
barra de polietileno requer elevar sua temperatura até
50°C.` },
      { id: 'E', type: 'text', value: `Duas barras de comprimentos 5 m e 10 m a 0°C, feitas do
mesmo material, sofrem iguais incrementos de
comprimento quando levadas de 0°C a 100°C.` },
    ],
    correct: 'D',
    explanation: `No gráfico, a barra de polietileno mede 10,0 m a 0 °C e 10,1 m a 50 °C. O acréscimo é 0,1 m = 10 cm, como afirma D. As inclinações indicam expansão maior do cobre que do alumínio, e barras de comprimentos iniciais diferentes não têm necessariamente a mesma dilatação absoluta.`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias'],
  },
  {
    id: 60,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `As massas de duas barras, uma de ferro e outra de aço
inoxidável, armazenadas em um mesmo ambiente úmido e na
presença de oxigênio, foram monitoradas ao longo do tempo.
Assinale a alternativa que representa a variação das massas
de ambas as barras ao longo do tempo.

Ferro Aço inoxidável`,
    images: [{"src":"/fuvest/2025/images/q60_options.png","width":506,"height":894}],
    alternatives: [
      { id: 'A', type: 'text', value: `Gráficos A: massas constantes para ferro e aço inoxidável.` },
      { id: 'B', type: 'text', value: `Gráficos B: massas crescentes para ferro e aço inoxidável.` },
      { id: 'C', type: 'text', value: `Gráficos C: massa decrescente para ferro e constante para aço inoxidável.` },
      { id: 'D', type: 'text', value: `Gráficos D: massa crescente para ferro e constante para aço inoxidável.` },
      { id: 'E', type: 'text', value: `Gráficos E: massa crescente para ferro e decrescente para aço inoxidável.` },
    ],
    correct: 'D',
    explanation: `O ferro incorpora oxigênio ao formar produtos de corrosão, aumentando a massa acompanhada no experimento. O aço inoxidável é protegido por uma camada passivante e mantém a massa aproximadamente constante. D mostra a massa do ferro crescente e a do aço inoxidável constante.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 61,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Os versos a seguir pertencem à canção Fall on Me, da banda
norte-americana R.E.M., lançada em 1986.

“There's a problem, feathers, iron
Bargain buildings, weights and pulleys
Feathers hit the ground before the weight can leave the air”

Bill Berry, Peter Buck, Mike Mills e Michael Stipe.

A qual episódio (real ou hipotético) da história da física o
trecho da música faz alusão?`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `À queda de uma maçã, que teria inspirado Newton à
descoberta da gravitação universal.` },
      { id: 'B', type: 'text', value: `À observação de um pássaro em voo, que teria levado
Einstein a formular a teoria da relatividade.` },
      { id: 'C', type: 'text', value: `Aos experimentos com objetos de massas diferentes, que
teriam indicado a Galileu os princípios da queda livre.` },
      { id: 'D', type: 'text', value: `Ao transbordamento da água em uma banheira, que teria
sugerido a Arquimedes o conceito de empuxo.` },
      { id: 'E', type: 'text', value: `À queda de um bloco de ferro ligado a uma hélice, que
teria levado Joule à equivalência entre calor e energia.` },
    ],
    correct: 'C',
    explanation: `A menção a penas, ferro e queda remete à comparação de objetos com massas diferentes nos estudos atribuídos a Galileu. Na queda livre ideal, sem resistência do ar, a aceleração não depende da massa do corpo. O episódio corresponde a C, não às experiências de Newton, Arquimedes ou Joule.`,
    subject: ['fis'],
    topics: ['Leis de Newton e dinâmica', 'Questões aleatórias'],
  },
  {
    id: 62,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Um brinquedo bastante comum em parques de diversões, a
montanha-russa, utiliza-se da transformação parcial de
energia potencial em energia cinética (e vice-versa) como
princípio de funcionamento. Uma das montanhas-russas mais
famosas do mundo, a Takabisha, cuja pista possui mais de
1 km de extensão, localiza-se no Japão e tem vista para o
Monte Fuji. Nela, a subida inicial até o ponto mais alto, situado
a uma altura aproximada de 50 m do solo, é feita sob ângulo
de aproximadamente 90 graus, seguida de uma descida
vertiginosa, cuja velocidade, no ponto mais baixo desse
trecho, atinge cerca de 30 m/s em poucos segundos.

Montanha-russa Takabisha.

Considerando um carrinho ocupado com massa total de 300 kg
em repouso na posição de altura máxima, a energia mecânica
perdida durante a descida inicial é, aproximadamente,

Note e adote:
Aceleração da gravidade: g = 10 m/s2.`,
    images: [{ src: '/fuvest/2025/images/q62_rollercoaster.jpg', width: 704, height: 467 }],
    alternatives: [
      { id: 'A', type: 'text', value: `1200 J.` },
      { id: 'B', type: 'text', value: `2500 J.` },
      { id: 'C', type: 'text', value: `5000 J.` },
      { id: 'D', type: 'text', value: `15000 J.` },
      { id: 'E', type: 'text', value: `20000 J.` },
    ],
    correct: 'D',
    explanation: `No alto, a energia é mgh = 300 × 10 × 50 = 150.000 J. No ponto mais baixo, Ec = mv²/2 = 300 × 30²/2 = 135.000 J. A diferença dissipada é 15.000 J. Portanto, D.`,
    subject: ['fis'],
    topics: ['Trabalho, energia e potência', 'Questões aleatórias'],
  },
  {
    id: 63,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `A utilização de matrizes energéticas limpas, tais como aquelas
que não aumentam a concentração de CO₂(g) na atmosfera, é
essencial para evitar a escalada das alterações climáticas
causadas pela emissão de gases de efeito estufa. Considere a
proposta apresentada na figura a seguir para a produção de
uma matriz energética limpa.

(I) Capturar o CO₂(g) atmosférico utilizando NaOH(aq) para formar
Na₂CO₃(aq). (II) Tratar essa solução, na presença de um catalisador,
com H₂(g) oriundo de fontes renováveis, para gerar CH₄(g), um gás
combustível.

Com base nessas informações e em seus conhecimentos,
assinale a alternativa correta.`,
    images: [{ src: '/fuvest/2025/images/q63_chemistry.jpg', width: 762, height: 295 }],
    alternatives: [
      { id: 'A', type: 'text', value: `O catalisador participa da reação de produção de metano
e se decompõe em NaOH.` },
      { id: 'B', type: 'text', value: `A combustão do CH₄ não emite CO₂, motivo pelo qual a
proposta se configura como uma matriz energética limpa.` },
      { id: 'C', type: 'text', value: `A proposta não representa uma matriz energética limpa,
pois a combustão completa de 1 mol de CH₄ emite mais
CO₂ do que o que é utilizado para a sua síntese.` },
      { id: 'D', type: 'text', value: `A retirada de CO₂ da atmosfera seria maior se a proposta
de usar uma matriz energética limpa se resumisse
unicamente em utilizar o H2 como combustível.` },
      { id: 'E', type: 'text', value: `Em relação ao ciclo do carbono, a proposta é semelhante
ao uso do etanol como combustível veicular.` },
    ],
    correct: 'E',
    explanation: `O carbono liberado na combustão do metano foi previamente capturado da atmosfera na produção do combustível. Esse ciclo se assemelha ao do etanol, cujo carbono é incorporado pela fotossíntese antes de ser liberado na queima. Logo, E. Ambos emitem CO₂ na combustão; a avaliação proposta considera o balanço do ciclo.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 64,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Alguns motores de foguetes espaciais usam metano como
combustível e oxigênio como comburente. Ambos os
compostos são armazenados em estado líquido no próprio
foguete, o que permite o seu armazenamento em maior
quantidade do que se estivessem no estado gasoso. Sabe-se
que o foguete armazena um volume de oxigênio líquido
1,5 vez maior do que de metano líquido e que ambos são
completamente consumidos na combustão, conforme a
equação CH₄(l) + 2 O₂(l) → CO₂(g) + 2 H₂O(g).
Nessas condições, é correto afirmar que a razão entre a
densidade do metano líquido e a densidade do oxigênio
líquido é igual a

Note e adote:
Massa molar (g/mol): H = 1; C = 12; O = 16`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `0,186.` },
      { id: 'B', type: 'text', value: `0,375.` },
      { id: 'C', type: 'text', value: `0,75.` },
      { id: 'D', type: 'text', value: `1,5.` },
      { id: 'E', type: 'text', value: `3.` },
    ],
    correct: 'B',
    explanation: `A estequiometria exige 1 mol de CH₄ (16 g) para 2 mol de O₂ (64 g), de modo que mCH₄/mO₂ = 1/4. Como VO₂/VCH₄ = 1,5, a razão de densidades é (mCH₄/mO₂) × (VO₂/VCH₄) = 0,25 × 1,5 = 0,375. Resposta B.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 65,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Da moenda para a célula a combustível: caldo de cana é
usado para produzir energia elétrica

“Pesquisadores do Instituto de Pesquisas Energéticas e
Nucleares (Ipen), órgão associado à USP, testaram o uso de
caldo de cana para gerar energia elétrica em células a
combustível. O processo dispensa a transformação do caldo in
natura em etanol, feita nas usinas de álcool, impedindo a
formação de resíduos nocivos ao meio ambiente. Após o êxito
dos experimentos em laboratório, os cientistas vão
desenvolver a aplicação da técnica em escala industrial.
‘A célula a combustível tem o mesmo princípio de
funcionamento de uma pilha. A diferença é que o combustível
serve como reagente para ser consumido e gerar
eletricidade’, explica o pesquisador do Ipen, Almir Oliveira
Neto, que coordenou a pesquisa. ‘No dispositivo que foi
desenvolvido na pesquisa, a oxidação do caldo de cana
acontece no ânodo e a redução de oxigênio no cátodo. O
objetivo do experimento era obter energia da biomassa com
o mínimo impacto ambiental possível. Para isso, utilizou-se o
caldo de cana em uma célula a combustível para gerar energia
elétrica’, diz o pesquisador. ‘O uso do caldo de cana direto
evita a formação de vinhaça, um resíduo ambientalmente
perigoso decorrente da produção de etanol, contribuindo,
assim, para a preservação do meio ambiente’.”

Disponível em https://jornal.usp.br/ciencias/ (Adaptado).

De acordo com o texto, a pesquisa com caldo de cana
apresentou resultados promissores em relação à
sustentabilidade ambiental, porque`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `o caldo in natura é obtido com facilidade, demandando
somente a utilização das moendas, o que barateia os
custos do processo.` },
      { id: 'B', type: 'text', value: `a energia elétrica proveniente da célula a combustível é
considerada limpa, já que esse dispositivo dispensa o uso de
pilhas, cujo descarte constitui um problema ambiental.` },
      { id: 'C', type: 'text', value: `a vinhaça, resíduo danoso ao meio ambiente, deixa de ser
produzida ao se evitar a transformação do caldo de cana
em álcool.` },
      { id: 'D', type: 'text', value: `a célula a combustível se destaca pela economia energética
gerada ao funcionar como uma pilha, reduzindo a
quantidade de caldo de cana utilizada.` },
      { id: 'E', type: 'text', value: `o Ipen não produz o caldo de cana em escala industrial, o
que diminui a produção da vinhaça poluidora do meio
ambiente.` },
    ],
    correct: 'C',
    explanation: `A técnica utiliza diretamente o caldo na célula a combustível, dispensando a etapa de produção de etanol que gera vinhaça. Evitar esse resíduo é a vantagem ambiental explicitada no texto. Assim, C, e não a simples substituição de pilhas ou uma redução de custo não demonstrada.`,
    subject: ["por"],
    topics: ["Interpretação de texto","Questões aleatórias"],
  },
  {
    id: 66,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Da moenda para a célula a combustível: caldo de cana é
usado para produzir energia elétrica

“Pesquisadores do Instituto de Pesquisas Energéticas e
Nucleares (Ipen), órgão associado à USP, testaram o uso de
caldo de cana para gerar energia elétrica em células a
combustível. O processo dispensa a transformação do caldo in
natura em etanol, feita nas usinas de álcool, impedindo a
formação de resíduos nocivos ao meio ambiente. Após o êxito
dos experimentos em laboratório, os cientistas vão
desenvolver a aplicação da técnica em escala industrial.
‘A célula a combustível tem o mesmo princípio de
funcionamento de uma pilha. A diferença é que o combustível
serve como reagente para ser consumido e gerar
eletricidade’, explica o pesquisador do Ipen, Almir Oliveira
Neto, que coordenou a pesquisa. ‘No dispositivo que foi
desenvolvido na pesquisa, a oxidação do caldo de cana
acontece no ânodo e a redução de oxigênio no cátodo. O
objetivo do experimento era obter energia da biomassa com
o mínimo impacto ambiental possível. Para isso, utilizou-se o
caldo de cana em uma célula a combustível para gerar energia
elétrica’, diz o pesquisador. ‘O uso do caldo de cana direto
evita a formação de vinhaça, um resíduo ambientalmente
perigoso decorrente da produção de etanol, contribuindo,
assim, para a preservação do meio ambiente’.”

Disponível em https://jornal.usp.br/ciencias/ (Adaptado).

Ao empregar o pronome se em “utilizou-se o caldo de cana
em uma célula a combustível para gerar energia elétrica”, o
pesquisador`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `indetermina o sujeito, tentando mostrar que desconhece
a real autoria do experimento.` },
      { id: 'B', type: 'text', value: `valoriza o objeto “caldo de cana”, enfatizando a
importância desse produto para o experimento.` },
      { id: 'C', type: 'text', value: `chama a atenção para o verbo transitivo “utilizar”,
valorizando a importância de se experimentar
diretamente o caldo de cana.` },
      { id: 'D', type: 'text', value: `faz uso da voz passiva, construção em que “caldo de cana”
atua como sujeito, deixando de haver menção a quem
realizou o experimento.` },
      { id: 'E', type: 'text', value: `escolhe uma construção reflexiva em que “caldo de cana”
é, ao mesmo tempo, o agente e o objeto do experimento
realizado.` },
    ],
    correct: 'D',
    explanation: `“Utilizou-se o caldo de cana” equivale a “o caldo de cana foi utilizado”. O se é partícula apassivadora, e “o caldo de cana” é sujeito paciente, enquanto o agente não é expresso. Logo, D; não se trata de voz reflexiva nem de sujeito indeterminado.`,
    subject: ['por'],
    topics: ['Gramática', 'Questões aleatórias'],
  },
  {
    id: 67,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Pesquisas e terapias com células-tronco têm se mostrado cada
vez mais promissoras pela possibilidade de seu uso no
tratamento de diferentes tipos de doenças, como câncer e
doenças degenerativas. As células-tronco podem se diferenciar
em células especializadas, conforme exemplificado a seguir.

Disponível em https://upload.wikimedia.org/wikipedia/ (Adaptado).

As células especializadas que derivam de uma mesma célula-
tronco possuem os(as) mesmos(as)`,
    images: [{ src: '/fuvest/2025/images/q67_stemcell.jpg', width: 736, height: 460 }],
    alternatives: [
      { id: 'A', type: 'text', value: `genes.` },
      { id: 'B', type: 'text', value: `RNAs.` },
      { id: 'C', type: 'text', value: `proteínas.` },
      { id: 'D', type: 'text', value: `lipídeos.` },
      { id: 'E', type: 'text', value: `organelas.` },
    ],
    correct: 'A',
    explanation: `A diferenciação celular resulta principalmente de padrões distintos de expressão gênica, não da aquisição de um conjunto inteiramente novo de genes. As células derivadas da mesma célula-tronco conservam o mesmo conjunto gênico, mas podem produzir RNAs e proteínas diferentes e apresentar organelas distintas. Portanto, A.`,
    subject: ['bio'],
    topics: ['Citologia', 'Questões aleatórias'],
  },
  {
    id: 68,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `O gráfico a seguir apresenta dados do Produto Interno Bruto
(PIB) por pessoa e dados de publicações científicas por milhão
de habitantes para um grupo selecionado de países, além de
destacar o estado de São Paulo.

Revista Pesquisa FAPESP – Agosto/2022 (Adaptado).

A partir da análise do gráfico e do texto, é correto afirmar:`,
    images: [{ src: '/fuvest/2025/images/q68_publications.jpg', width: 762, height: 750 }],
    alternatives: [
      { id: 'A', type: 'text', value: `Irã, Tunísia e África do Sul possuem um PIB por pessoa
abaixo da média mundial e apresentam um número de
publicações científicas por milhão de habitantes superior
ao da média mundial.` },
      { id: 'B', type: 'text', value: `O estado de São Paulo possui uma quantidade de publicações
por milhão de habitantes abaixo da média mundial, enquanto
o Brasil, com um PIB por pessoa maior que o do estado
paulista, tem uma quantidade de publicações maior.` },
      { id: 'C', type: 'text', value: `Índia e Indonésia possuem um PIB por pessoa acima da
média mundial, no entanto, o número de publicações por
milhão de habitantes desses países é superior ao da média
mundial.` },
      { id: 'D', type: 'text', value: `Os países do Norte Global, embora tenham um PIB por
pessoa maior que a média mundial, possuem uma
quantidade menor de publicações por milhão de
habitantes, se comparados com a média mundial.` },
      { id: 'E', type: 'text', value: `Argentina, Tailândia e México, apesar de possuírem um
PIB por pessoa abaixo da média mundial, apresentam
produção científica por milhão de habitantes acima da
média mundial.` },
    ],
    correct: 'A',
    explanation: `No gráfico, Irã, Tunísia e África do Sul situam-se à esquerda da linha da média mundial de PIB por pessoa e acima da linha da média mundial de publicações por milhão. A descreve corretamente as duas coordenadas simultaneamente. Não se deve confundir o tamanho dos círculos, ligado ao número absoluto de publicações, com o eixo vertical.`,
    subject: ['geo'],
    topics: ['Geopolítica', 'Questões aleatórias'],
  },
  {
    id: 69,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `No plano cartesiano Oxy, o gráfico que melhor representa a função f(x) = |x² + 5x − 6| − 5x + 6 é dado por`,
    images: [{"src":"/fuvest/2025/images/q69_options.png","width":506,"height":1344}],
    alternatives: [
      { id: 'A', type: 'text', value: `Gráfico A da figura.` },
      { id: 'B', type: 'text', value: `Gráfico B da figura.` },
      { id: 'C', type: 'text', value: `Gráfico C da figura.` },
      { id: 'D', type: 'text', value: `Gráfico D da figura.` },
      { id: 'E', type: 'text', value: `Gráfico E da figura.` },
    ],
    correct: 'B',
    explanation: `O polinômio x² + 5x − 6 = (x + 6)(x − 1) é não negativo fora de [−6,1]. Nesses trechos, f(x) = x²; dentro do intervalo, f(x) = −x² − 10x + 12 = 37 − (x + 5)². O arco central tem vértice (−5,37) e liga (−6,36) a (1,1), continuando pela parábola x² fora do intervalo. O gráfico B tem essa forma.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 70,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Seja (aₙ) uma progressão aritmética cujo primeiro termo é a₁ e a razão r, ambos números reais. É possível construir uma outra sequência (bₙ), em que o primeiro termo é um número real b₁ e com a seguinte lei de formação

bₙ₊₁ = bₙ + aₙ,

sendo n > 0 um número natural.
Por exemplo, se b₁ = 0 e
(aₙ) = (1, 3, 5, 7, 9, 11, …),
tem-se
(bₙ) = (0, 1, 4, 9, 16, 25, …).

Com base em tais informações, os valores de a₁ e r foram escolhidos de forma que (bₙ) também seja uma progressão aritmética de razão r′. Nessas condições, é correto afirmar:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `r′ = a₁` },
      { id: 'B', type: 'text', value: `r′ = 2a₁` },
      { id: 'C', type: 'text', value: `r′ = r` },
      { id: 'D', type: 'text', value: `r′ = 2r` },
      { id: 'E', type: 'text', value: `r′ = b₁ − a₁` },
    ],
    correct: 'A',
    explanation: `Pela recorrência, bₙ₊₁ − bₙ = aₙ. Para que bₙ seja uma PA, essa diferença deve ser constante; portanto, aₙ é constante, r = 0 e aₙ = a₁ para todo n. A razão de bₙ é r′ = a₁, independentemente de b₁. Assim, A.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 71,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Aumenta nos hospitais brasileiros a presença de bactérias
resistentes a antibióticos

“A disseminação de bactérias resistentes a antibióticos é
um pesadelo mundial. Ela avança rapidamente e representa
uma ameaça a uma das maiores conquistas da medicina
moderna: a capacidade de eliminar infecções. Sem
antibióticos eficientes, fica quase impossível realizar cirurgias,
transplantes e outros tratamentos em segurança.
Expostas à concentração adequada dos antibióticos e por
tempo suficiente, as bactérias facilmente morrem. Se a
dosagem e duração do tratamento forem inferiores ao
necessário para aniquilá-las, uma parte pode sobreviver e se
multiplicar, acumulando alterações no material genético que
lhes permitem escapar à ação dos fármacos.
As bactérias estão em todos os lugares: na água, no solo,
no ar e nas superfícies, inclusive no nosso corpo. Com o uso
intensivo de antibióticos na saúde humana e na produção de
alimentos, as bactérias são continuamente expostas a esses
fármacos. Esse contato favorece a seleção das variedades
resistentes.”
Revista Pesquisa FAPESP – Janeiro/2024 (Adaptado).

O gráfico a seguir ilustra o crescimento de uma espécie de
bactéria em meio de cultura, com e sem antibiótico. Foram
testados três antibióticos diferentes (1, 2 e 3).
Considerando o texto e o gráfico, sobre a resistência de
bactérias a antibióticos, é correto afirmar:`,
    images: [{ src: '/fuvest/2025/images/q71_antibiotics.jpg', width: 736, height: 441 }],
    alternatives: [
      { id: 'A', type: 'text', value: `A combinação de mais de um antibiótico durante um
tratamento reduz a quantidade de antibióticos lançada na
rede de esgoto e as chances de surgirem bactérias
mutantes na natureza.` },
      { id: 'B', type: 'text', value: `Para reduzir as chances de seleção de bactérias
resistentes, é necessário aumentar a concentração de
antibióticos presentes na natureza e matar as bactérias
patogênicas livres.` },
      { id: 'C', type: 'text', value: `Mutações aleatórias que acontecem nas bactérias,
associadas à exposição prolongada a antibióticos,
contribuem para a seleção de bactérias resistentes a
antibióticos.` },
      { id: 'D', type: 'text', value: `O antibiótico 3 será eficiente, nas mesmas concentrações
utilizadas no experimento, para tratar infecções causadas
pelas linhagens de bactérias presentes no dia 16 de cultivo.` },
      { id: 'E', type: 'text', value: `Dentre todos os antibióticos testados, o 2 é o mais
eficiente para combater a bactéria do experimento
relatado, enquanto o 1 é o menos eficiente.` },
    ],
    correct: 'C',
    explanation: `Mutações surgem aleatoriamente em relação à necessidade de resistência. O antibiótico atua como pressão seletiva: variantes resistentes sobrevivem e deixam descendentes, aumentando sua frequência. C descreve esse mecanismo; não é o uso do fármaco que produz de forma dirigida a mutação necessária.`,
    subject: ['bio'],
    topics: ['Genética', 'Evolução', 'Questões aleatórias'],
  },
  {
    id: 72,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `A reação do antibiótico sulfanilamida com halogênios leva à
reação de substituição com o halogênio em duas posições
distintas do anel aromático, como representado na equação
não balanceada a seguir.

Em um experimento, 1 L de uma solução de sulfanilamida de
pH 5 reagiu com Br2 em excesso, obtendo-se pH 4 após reação
total. Considerando que o volume se manteve inalterado após
a adição do halogênio, quantos mols de sulfanilamida
reagiram com bromo?`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `4,5 × 10⁻⁵` },
      { id: 'B', type: 'text', value: `9,0 × 10⁻⁵` },
      { id: 'C', type: 'text', value: `1,0 × 10⁻⁴` },
      { id: 'D', type: 'text', value: `5,0 × 10⁻²` },
      { id: 'E', type: 'text', value: `1,0 × 10⁻¹` },
    ],
    correct: 'A',
    explanation: `A concentração de H⁺ aumenta de 10⁻⁵ para 10⁻⁴ mol/L. Em 1 L, o aumento é 9 × 10⁻⁵ mol. Cada molécula de sulfanilamida sofre duas substituições e gera duas moléculas de HBr, fornecendo dois H⁺. Logo, reagiram (9 × 10⁻⁵)/2 = 4,5 × 10⁻⁵ mol. Alternativa A.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 73,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Um artigo publicado em 2018, na Revista Brasileira de Ensino
de Física, reporta um curioso estudo sobre a pressão interna
de “foguetes de garrafa PET”, propulsionados a partir da
reação química entre ácido acético e bicarbonato de sódio.[1]
Uma mistura de vinagre (que contém ácido
acético, CH₃COOH) com bicarbonato de sódio (NaHCO₃)
produz gás carbônico (CO₂) por meio da reação química
representada pela seguinte equação:

CH₃COOH + NaHCO₃ → CH₃COONa + CO₂ + H₂O

A reação ocorre no interior de uma
garrafa PET de 2 L de volume útil total,
da qual foi retirado todo o ar. Insere-se
na garrafa um volume inicial Vvin de
vinagre líquido e bicarbonato de sódio,
sendo a garrafa posteriormente selada
com uma tampa acoplada a um
manômetro. A reação produzirá gás
carbônico que ocupará um volume VCO₂
e exercerá uma pressão PCO₂ sobre a
tampa da garrafa, medida pelo
manômetro, como mostra a figura.

[1] FONSECA et al, RBEF, vol. 40, no 3, e3504
(2018). Disponível em
http://dx.doi.org/10.1590/1806-9126-RBEF-
2017-0340.

Suponha que a reação produza 2 mols de CO₂ para cada 3
litros de vinagre. Nas condições do experimento, em que o
volume de líquido é 1/3 de litro à temperatura T = 300 K, a
pressão PCO₂ medida pelo manômetro será por volta de

Note e adote:
Considere o CO₂ como um gás ideal.
Constante dos gases ideais: R = 0,08 atm.L/(K.mol).
Assuma que todo o ácido acético do vinagre reagiu com o bicarbonato de
sódio e que o líquido resultante da reação ocupa aproximadamente o
mesmo volume do vinagre antes da reação (Vvin).`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `3,2 atm.` },
      { id: 'B', type: 'text', value: `4,1 atm.` },
      { id: 'C', type: 'text', value: `6,2 atm.` },
      { id: 'D', type: 'text', value: `9,0 atm.` },
      { id: 'E', type: 'text', value: `12 atm.` },
    ],
    correct: 'A',
    explanation: `Para 1/3 L de vinagre, nCO₂ = (2/3) × (1/3) = 2/9 mol. O gás ocupa 2 − 1/3 = 5/3 L, pois o líquido permanece na garrafa. Pela equação dos gases ideais, P = nRT/V = (2/9 × 0,08 × 300)/(5/3) = 3,2 atm. Logo, A.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 74,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Um artigo publicado em 2018, na Revista Brasileira de Ensino
de Física, reporta um curioso estudo sobre a pressão interna
de “foguetes de garrafa PET”, propulsionados a partir da
reação química entre ácido acético e bicarbonato de sódio.[1]
Uma mistura de vinagre (que contém ácido
acético, CH₃COOH) com bicarbonato de sódio (NaHCO₃)
produz gás carbônico (CO₂) por meio da reação química
representada pela seguinte equação:

CH₃COOH + NaHCO₃ → CH₃COONa + CO₂ + H₂O

A reação ocorre no interior de uma
garrafa PET de 2 L de volume útil total,
da qual foi retirado todo o ar. Insere-se
na garrafa um volume inicial Vvin de
vinagre líquido e bicarbonato de sódio,
sendo a garrafa posteriormente selada
com uma tampa acoplada a um
manômetro. A reação produzirá gás
carbônico que ocupará um volume VCO₂
e exercerá uma pressão PCO₂ sobre a
tampa da garrafa, medida pelo
manômetro, como mostra a figura.

[1] FONSECA et al, RBEF, vol. 40, no 3, e3504
(2018). Disponível em
http://dx.doi.org/10.1590/1806-9126-RBEF-
2017-0340.

Considere agora um outro experimento feito em condições
semelhantes, em que o manômetro indica uma pressão de
5 atm e, sem que a pressão no interior da garrafa se altere, ele
é cuidadosamente substituído por uma rolha de 10 g de massa
e 2 cm de diâmetro (igual ao diâmetro interno do bocal da
garrafa). Logo após a rolha ser encaixada no local, ela é
expelida devido à pressão interna da garrafa ser maior que a
pressão atmosférica.

A aceleração da rolha no momento em que ela é expelida é
de, aproximadamente,

Note e adote:
Assuma que a pressão atmosférica seja de 1 atm = 105 Pa.

Utilize π = 3.

Considere que as forças relevantes atuando sobre a rolha no momento
em que é expelida são apenas aquelas relativas à diferença de pressão
entre os seus lados interno e externo.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `12 m/s2.` },
      { id: 'B', type: 'text', value: `120 m/s2.` },
      { id: 'C', type: 'text', value: `1200 m/s2.` },
      { id: 'D', type: 'text', value: `12000 m/s2.` },
      { id: 'E', type: 'text', value: `120000 m/s2.` },
    ],
    correct: 'D',
    explanation: `A diferença de pressão é (5 − 1) atm = 4 × 10⁵ Pa. O raio da rolha é 1 cm = 0,01 m e a área é πr² = 3 × 10⁻⁴ m². A força é ΔP A = 120 N. Com massa 0,01 kg, a aceleração é 120/0,01 = 12.000 m/s². Portanto, D.`,
    subject: ['fis'],
    topics: ['Leis de Newton e dinâmica', 'Questões aleatórias'],
  },
  {
    id: 75,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Um designer de produtos deseja fabricar um vaso para flores
conforme a figura a seguir.

Sabe-se que a base e o topo do vaso são uma circunferência
de raio R que mede 10 cm, a parte central é uma
circunferência de raio r de 5 cm e a medida h mede 12 cm.
Qual é a capacidade volumétrica desse vaso em cm3?`,
    images: ['/fuvest/2025/images/fuvest_2025_q75.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1400π` },
      { id: 'B', type: 'text', value: `2100π` },
      { id: 'C', type: 'text', value: `2400π` },
      { id: 'D', type: 'text', value: `2600π` },
      { id: 'E', type: 'text', value: `2800π` },
    ],
    correct: 'A',
    explanation: `O vaso reúne dois troncos de cone iguais, cada um de altura 12 cm e raios 10 e 5 cm. O volume de cada tronco é πh(R² + Rr + r²)/3 = 4π(100 + 50 + 25) = 700π cm³. A capacidade total é 1.400π cm³, alternativa A.`,
    subject: ['mat'],
    topics: ['Geometria', 'Questões aleatórias'],
  },
  {
    id: 76,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Considere um cilindro C de altura h > 0 e cujo raio das circunferências, do topo e da base, é r > 0; um cilindro C₁ cujo raio é igual ao de C e altura igual a h/2; e um cilindro C₂ com altura h e raio igual a r/2.

Sendo V, V₁ e V₂ os volumes e A, A₁ e A₂ as áreas laterais dos cilindros C, C₁ e C₂, respectivamente, é correto afirmar:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `V = V₁ + V₂ e A = A₁ + A₂` },
      { id: 'B', type: 'text', value: `V = V₁ + V₂ e A = A₁ + 2A₂` },
      { id: 'C', type: 'text', value: `V = V₁ + 2V₂ e A = A₁ + 2A₂` },
      { id: 'D', type: 'text', value: `V = V₁ + 2V₂ e A = A₁ + A₂` },
      { id: 'E', type: 'text', value: `V = 2V₁ + 2V₂ e A = 2A₁ + 2A₂` },
    ],
    correct: 'D',
    explanation: `Para o cilindro original, V = πr²h e A = 2πrh. Metade da altura dá V₁ = V/2 e A₁ = A/2; metade do raio dá V₂ = V/4 e A₂ = A/2. Portanto, V₁ + 2V₂ = V e A₁ + A₂ = A. Isso corresponde a D.`,
    subject: ['mat'],
    topics: ['Geometria', 'Questões aleatórias'],
  },
  {
    id: 77,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Em relação ao plano cartesiano Oxy, é correto afirmar que as
equações x²+y²−4x=−3 e x²+y²−4y=−3
representam`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `duas circunferências com raios de mesma medida e que se
interceptam em dois pontos.` },
      { id: 'B', type: 'text', value: `duas circunferências com raios de medidas diferentes e
que se interceptam em dois pontos.` },
      { id: 'C', type: 'text', value: `duas circunferências que se interceptam em um único
ponto.` },
      { id: 'D', type: 'text', value: `duas circunferências concêntricas e que não se
interceptam.` },
      { id: 'E', type: 'text', value: `duas circunferências com centros distintos e que não se
interceptam.` },
    ],
    correct: 'E',
    explanation: `Completando quadrados, as equações ficam (x − 2)² + y² = 1 e x² + (y − 2)² = 1. Os centros são (2,0) e (0,2), ambos com raio 1. A distância entre os centros é √8 > 2, soma dos raios, de modo que as circunferências não se interceptam. Logo, E.`,
    subject: ['mat'],
    topics: ['Geometria', 'Questões aleatórias'],
  },
  {
    id: 78,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Disponível em https://andertoons.com/math/cartoon/7359/.

Contribui para o efeito de comicidade do cartum a`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `atitude do docente diante da apatia do grupo, incapaz de
produzir uma resposta.` },
      { id: 'B', type: 'text', value: `certeza do aluno em seu argumento, desafiando a
autoridade do professor.` },
      { id: 'C', type: 'text', value: `interpretação por parte do discente de símbolos
matemáticos ligados à teoria dos conjuntos.` },
      { id: 'D', type: 'text', value: `adoção pelo professor de duas formas semelhantes e
eficazes de resolver a mesma equação.` },
      { id: 'E', type: 'text', value: `rivalidade entre os colegas para determinar quem possui
mais conhecimento.` },
    ],
    correct: 'B',
    explanation: `O professor usa x como incógnita em 4 + x = 10, enquanto o aluno o confunde com o algarismo romano X, de valor 10. Convicto desse significado aprendido anteriormente, ele contesta o resultado x = 6 e desafia o professor. A certeza de seu argumento equivocado produz o humor, como indica B.`,
    subject: ['por'],
    topics: ["Interpretação de texto","Questões aleatórias"],
  },
  {
    id: 79,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Migrações e invasões no Império Romano, séculos IV e V.

Disponível em https://www.britannica.com/ (Adaptado).

A análise do mapa permite identificar deslocamentos de
povos não romanos caracterizados`,
    images: [{ src: '/fuvest/2025/images/q79_roman_map.jpg', width: 736, height: 533 }],
    alternatives: [
      { id: 'A', type: 'text', value: `pela concentração de rotas migratórias em território
bizantino.` },
      { id: 'B', type: 'text', value: `pela inexistência de invasões direcionadas para o norte da
África.` },
      { id: 'C', type: 'text', value: `pela inexpressiva diversidade de povos das correntes
migratórias.` },
      { id: 'D', type: 'text', value: `pela proeminência de migrações na porção ocidental do
Império Romano.` },
      { id: 'E', type: 'text', value: `pelo predomínio de invasões por rotas marítimas em
detrimento das rotas terrestres.` },
    ],
    correct: 'D',
    explanation: `O mapa concentra os trajetos de vários povos em direção aos territórios ocidentais do Império Romano, incluindo deslocamentos até o norte da África. Predominam rotas terrestres, e não apenas marítimas ou bizantinas. D identifica essa concentração ocidental.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias'],
  },
  {
    id: 80,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Leia o excerto a seguir de A Ética Protestante e o Espírito do
Capitalismo, de Max Weber.

“Temos de nos emancipar da seguinte visão: que se pode
deduzir a Reforma das transformações econômicas como algo
‘necessário em termos de desenvolvimento histórico’. Por
outro lado, não se deve de forma alguma defender uma tese
tão disparatadamente doutrinária que afirmasse que o
‘espírito capitalista’ pôde surgir somente como resultado de
determinados influxos da Reforma.
Em face da enorme barafunda de influxos recíprocos entre
as bases materiais, as formas de organização social e política
e o conteúdo espiritual das épocas culturais da Reforma,
procederemos tão-só de modo a examinar de perto se, e em
quais pontos, podemos reconhecer determinadas ‘afinidades
eletivas’ entre certas formas da fé religiosa e certas formas da
ética profissional. Por esse meio serão elucidados o efeito
que, em virtude de tais afinidades eletivas, o movimento
religioso exerceu sobre o desenvolvimento da cultura
material.”

WEBER, Max. A Ética Protestante e o Espírito do Capitalismo. São Paulo:
Companhia das Letras, 2004, p.82-83 (Adaptado).

A partir da ideia expressa no excerto acerca da relação entre
o desenvolvimento do capitalismo e alguns elementos da
doutrina calvinista, é correto afirmar que`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `as ideias calvinistas impulsionaram o capitalismo e
levaram os comerciantes germânicos a buscar a
acumulação irrestrita de capitais.` },
      { id: 'B', type: 'text', value: `o crescimento acelerado dos mercados consumidores
facilitou, no século XVI, a aceitação das ideias calvinistas
pelos banqueiros e negociantes europeus.` },
      { id: 'C', type: 'text', value: `as condições materiais, sociais e políticas da Europa
Central contribuíram, no século XVI, para a expansão do
capitalismo e para a repressão do calvinismo.` },
      { id: 'D', type: 'text', value: `a união entre os comerciantes contra o Sacro Império
Romano Germânico e contra o Papado determinou a
adoção de práticas capitalistas e calvinistas na Europa
medieval.` },
      { id: 'E', type: 'text', value: `a defesa calvinista do trabalho árduo e o estímulo ao
comportamento austero do crente tiveram impactos
positivos na formação de condutas adequadas ao
desenvolvimento do capitalismo.` },
    ],
    correct: 'E',
    explanation: `Weber propõe afinidades eletivas, e não uma causalidade única ou inevitável. A valorização calvinista do trabalho disciplinado e da austeridade favorece condutas compatíveis com a organização capitalista da vida econômica. E exprime essa relação sem reduzir a Reforma à economia ou fazer dela a causa exclusiva do capitalismo.`,
    subject: ['fil'],
    topics: ['Filosofia Moderna', 'Questões aleatórias'],
  },
  {
    id: 81,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `“O eixo econômico do país, que já havia se deslocado para a
zona de mineração, caminhou mais uma vez, deslocando-se
em direção às ondulações do planalto paulista, que foram se
recobrindo pelo verde escuro dos cafezais. Enquanto outras
regiões brasileiras vegetavam ou iniciavam mesmo um
processo de decadência econômica, a Província, logo depois
estado de São Paulo, apresentava uma ascensão esplêndida e
vigorosa.”

PETRONE, Pasquale. As indústrias paulistanas e os fatores de sua expansão.
Terra Livre. 1953, p. 27 (Adaptado).

Sobre a industrialização no território brasileiro, é correto
afirmar:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Tal como São Paulo, a Zona Franca de Manaus teve a
expansão de suas indústrias dada pelo potencial do
mercado consumidor local dos produtos resultantes da
industrialização.` },
      { id: 'B', type: 'text', value: `O Nordeste teve sua expansão industrial durante o Estado
Novo, em razão da alta concentração de capitais dos
estados da região, permitindo conexões dos seus polos
industriais já consolidados.` },
      { id: 'C', type: 'text', value: `O boom industrial que aconteceu na região Sul, a partir da
década de 1980, foi similar ao desenvolvimento ocorrido
no Sudeste, onde a mão de obra especializada aumentou
a produção.` },
      { id: 'D', type: 'text', value: `A concentração industrial no Sudeste ocorreu devido à
existência de mercado consumidor, de capitais, de mão de
obra disponível e de maior capacidade dos meios de
transporte.` },
      { id: 'E', type: 'text', value: `A região Centro-Oeste contou com a facilidade de
obtenção de energia, por meio de hidrelétricas e
termoelétricas, além da densa malha viária para o seu
desenvolvimento industrial.` },
    ],
    correct: 'D',
    explanation: `A economia cafeeira contribuiu para acumulação de capitais, infraestrutura de transportes, oferta de trabalhadores e formação de mercado consumidor no Sudeste. Esse conjunto favoreceu a concentração industrial, especialmente paulista. D reúne os fatores históricos e territoriais relevantes.`,
    subject: ['geo'],
    topics: ['Urbanização', 'Questões aleatórias'],
  },
  {
    id: 82,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Mais de uma vez, o brasileiro Machado de Assis e o português
Eça de Queirós foram aproximados porque traçaram linhas de
compreensão das suas respectivas sociedades, em um mesmo
tempo historicamente situado. Os protagonistas Rubião, de
Quincas Borba (1891), e Gonçalo, de A Ilustre Casa de Ramires
(1900),`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `representam, respectivamente, a ascensão política da
burguesia brasileira durante a segunda metade do século
XIX e a decadência da aristocracia portuguesa no mesmo
período.` },
      { id: 'B', type: 'text', value: `têm suas aspirações de grandeza e reconhecimento social
frustradas diretamente pelo envolvimento de ambos com
as políticas partidárias nacionais, introduzindo reformas
substanciais que alteram a situação periférica de cada país.` },
      { id: 'C', type: 'text', value: `buscam reconhecimento social, continuamente frustrados
nesse propósito por se inserirem em meios sociais que
privilegiam a grandeza moral e as virtudes humanas.` },
      { id: 'D', type: 'text', value: `comprometem-se com a superação dos atrasos civilizacionais
de seus países. Apesar de terem destinos diferentes,
confrontam-se com o descompromisso de suas respectivas
sociedades quanto às transformações sociais e econômicas.` },
      { id: 'E', type: 'text', value: `são vítimas de suas ideias ambiciosas de modernização
nacional, seja por Rubião promover ideias políticas
“modernas”, seja por Gonçalo insistir na restauração da
grandeza de sua família. Ao final, atingem seus objetivos.` },
    ],
    correct: 'D',
    explanation: `Rubião e Gonçalo permitem examinar as promessas de progresso e as contradições de sociedades periféricas. Seus percursos distintos confrontam projetos de superação do atraso com relações sociais pouco comprometidas com transformações efetivas. D estabelece essa aproximação; os romances não apresentam ambos como vencedores de reformas nacionais bem-sucedidas.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Literatura portuguesa', 'Questões aleatórias'],
  },
  {
    id: 83,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `O funcionário público como personagem literário ganha
destaque na literatura brasileira a partir dos anos 1930. Uma
explicação para esse fenômeno está na tematização, por parte
dos escritores, das mudanças do papel do Estado brasileiro na
constituição do mercado de trabalho assalariado e como
agente da modernização do país:

“De 1930 em diante, foram criadas dezenas de comissões,
instituições e órgãos de planejamento e/ou de promoção das
atividades econômicas, notadamente as ligadas às atividades
agrícolas e àquelas voltadas para a industrialização.”

MATTOS, Fernando Augusto Mansor de. A trajetória do emprego público no
Brasil desde o início do século XX. Ensaios FEE, v.36, n.1, p.95, jun.2015.

No romance Os ratos, de Dyonélio Machado, o funcionalismo
público configura-se como`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `solução final para o conflito básico da narrativa, uma vez
que é a partir de seu emprego público que o protagonista
do romance obtém recursos para superar as limitações
financeiras que, inicialmente, impulsionam sua
perambulação pela cidade.` },
      { id: 'B', type: 'text', value: `principal opção de sobrevivência para os homens livres da
sociedade brasileira recém-saída da escravidão, em
especial para os personagens negros, a quem era
impossível, de outro modo, alçar posições nos estratos
sociais mais elevados.` },
      { id: 'C', type: 'text', value: `retrato da constituição de uma cultura organizacional
ligada ao Estado, cuja dinâmica conduz, ao longo do século
XX, ao desenvolvimento econômico do país e à vertiginosa
ascensão social das classes médias, apontada pelo
desfecho positivo do romance.` },
      { id: 'D', type: 'text', value: `opção de ocupação para as camadas médias da sociedade
brasileira, que, embora constitua meio legítimo de
sobrevivência, acaba por marginalizá-las pela precarização
dos ganhos e a desvalorização do trabalho, como retrata a
trajetória do protagonista.` },
      { id: 'E', type: 'text', value: `estrutura de trabalho de cunho patrimonialista, cujas
posições de autoridade são ocupadas pelas camadas
proprietárias e na qual a distribuição de cargos públicos,
entre os quais o do protagonista, objetivava a garantia de
apoio político e social.` },
    ],
    correct: 'D',
    explanation: `Naziazeno possui emprego público, mas os ganhos insuficientes não lhe garantem segurança material. Sua busca de dinheiro expõe a precariedade dessa inserção das camadas médias no trabalho assalariado. D corresponde ao romance, que não termina em ascensão social assegurada pelo cargo.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Análise de obras', 'Questões aleatórias'],
  },
  {
    id: 84,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Leia os trechos das obras Marília de Dirceu e Romanceiro da
Inconfidência:

Lira VII (Parte II)

“Meu prezado Glauceste,
Se fazes o conceito
Que, bem que réu, abrigo
A cândida Virtude no meu peito;
Se julgas, digo, que mereço ainda
Da tua mão socorro;
Ah! Vem dar-mo agora,
Agora, sim, que morro!

Não quero que, montado
No Pégaso fogoso,
Venhas com dura lança
Ao monstro infame traspassar, raivoso.
Deixa que viva a pérfida calúnia,
E forje o meu tormento:
Com menos, meu Glauceste,
Com menos me contento.”

Tomás Antônio Gonzaga. Marília de Dirceu.

Romance LXVI ou De Outros Maldizentes

“- Que fica, na fortaleza,
daquele poeta Gonzaga?
- Um par de esporas, somente.
Um par de esporas de prata.
(...)
Dizem que tinha um cavalo
que Pégaso se chamava.
Não pisava neste mundo,
mas nos planaltos da Arcádia!”

Cecília Meireles. Romanceiro da Inconfidência.

Considerando o substantivo Pégaso, presente nos dois
excertos, é correto afirmar:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `No poema de Cecília Meireles, a referência tem por
objetivo destacar o animal mítico, enquanto na lira de
Gonzaga o substantivo se refere a um animal real.` },
      { id: 'B', type: 'text', value: `No poema de Gonzaga, a referência ao animal mitológico
serve para aludir às características heroicas de Glauceste,
enquanto, no poema de Cecília Meireles, Pégaso alude à
criação poética.` },
      { id: 'C', type: 'text', value: `Por pretender um tom épico, Cecília Meireles usa o animal
mitológico para distinguir a condição heroica do poeta,
enquanto Gonzaga se refere às suas diferenças com
Glauceste.` },
      { id: 'D', type: 'text', value: `No poema de Cecília Meireles, a metáfora do cavalo alado
indica a evasão da realidade, típica dos poetas árcades,
enquanto, no poema de Gonzaga, a referência ao animal
serve para aludir às suas próprias características heroicas.` },
      { id: 'E', type: 'text', value: `A referência ao cavalo alado provoca um efeito de
estranhamento no leitor, tendo em vista as características
específicas de cada obra poética.` },
    ],
    correct: 'B',
    explanation: `Na lira de Gonzaga, o pedido dirigido a Glauceste evoca Pégaso numa imagem de ação heroica, embora dispense esse socorro grandioso. Em Cecília Meireles, o cavalo que não pisa neste mundo e percorre os planaltos da Arcádia associa-se à criação poética. Portanto, B.`,
    subject: ['por'],
    topics: ['Escolas literárias', 'Análise de obras', 'Questões aleatórias'],
  },
  {
    id: 85,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `“Se a derrama for lançada,
há levante, com certeza.
Corre-se por essas ruas?
Corta-se alguma cabeça?
Do cimo de alguma escada,
profere-se alguma arenga?
Que bandeira se desdobra?
Com que figura ou legenda?
Coisas da Maçonaria,
do Paganismo ou da Igreja?
A Santíssima Trindade?
Um gênio a quebrar algemas?
Atrás de portas fechadas,
à luz de velas acesas,
entre sigilo e espionagem,
acontece a Inconfidência.”

Os versos de Cecília Meireles, no Romanceiro da
Inconfidência, remetem`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `à insurreição promovida por maçons e reinóis, adeptos do
iluminismo, contra a cobrança do quinto real sobre a
exploração de diamantes na Capitania de Minas Gerais.` },
      { id: 'B', type: 'text', value: `à possibilidade de sublevação motivada pela defesa da
liberdade, por indivíduos de diferentes setores de Minas
Gerais, ante a ameaça de cobrança de impostos
metropolitanos.` },
      { id: 'C', type: 'text', value: `à disputa entre católicos apoiadores do recolhimento do
dízimo nas Minas Gerais e republicanos defensores da
suspensão de impostos cobrados pelo Estado e pela Igreja.` },
      { id: 'D', type: 'text', value: `ao movimento de setores reacionários da sociedade
mineira, responsáveis por conspirar contra os
idealizadores da Conjuração e denunciar os seus planos de
revolução.` },
      { id: 'E', type: 'text', value: `à trapaça e delação, que fizeram parte da Conjuração e
ocorreram em razão das discrepâncias ideológicas dos
denunciantes em relação aos rebelados.` },
    ],
    correct: 'B',
    explanation: `A derrama era a cobrança compulsória de tributos atrasados ligados à mineração aurífera. Sua ameaça contribuiu para a articulação de grupos de Minas Gerais em torno de uma possível ruptura com a metrópole. B relaciona o projeto de liberdade à pressão fiscal, sem confundir o quinto do ouro com tributação de diamantes.`,
    subject: ['his'],
    topics: ['Brasil Colônia', 'Questões aleatórias'],
  },
  {
    id: 86,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `No texto intitulado Tarsila, a pesquisadora Aracy Amaral
transcreve um trecho das impressões de Tarsila do Amaral
sobre a viagem às cidades históricas coloniais mineiras, que
realizara em 1924 com o grupo modernista, liderado por
Mário de Andrade: “(...) As decorações murais de um modesto
corredor de hotel; o forro das salas, feito de taquarinhas
coloridas e trançadas; as pinturas das igrejas, simples e
comoventes, executadas com amor e devoção por artistas
anônimos; o Aleijadinho, nas suas estátuas e nas linhas geniais
da sua arquitetura religiosa, tudo era motivo para as nossas
exclamações admirativas. Encontrei em Minas as cores que
adorava em criança. Ensinaram-me depois que eram feias e
caipiras. Segui o ramerrão do gosto apurado... Mas depois
vinguei-me da opressão passando-as para as minhas telas:
azul puríssimo, rosa violáceo, amarelo vivo, verde cantante,
tudo em gradações mais ou menos fortes, conforme a mistura
de branco. Pintura limpa, sobretudo, sem medo de cânones
convencionais. Liberdade e sinceridade, uma certa estilização
que a adaptava à época moderna.”

AMARAL, Tarsila, 1939. Apud AMARAL, Aracy. Tarsila, In: Tarsila do Amaral.
São Paulo: Fundação Finambras, s.d, p.4.

Tarsila do Amaral, O mamoeiro, 1925, óleo s/ tela, 65,0 cm x 70,0 cm.
Coleção Mário de Andrade - Instituto de Estudos Brasileiros da Universidade
de São Paulo. Reprodução fotográfica: Rômulo Fialdini. Disponível em:
https://enciclopedia.itaucultural.org.br/.

Considerando a obra O Mamoeiro, de Tarsila do Amaral, qual
é o principal elemento que caracteriza a influência do
movimento modernista brasileiro na pintura?`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `O emprego de recursos pictóricos que realçam os efeitos
de luz e sombra na cena retratada.` },
      { id: 'B', type: 'text', value: `A representação de aspectos da cultura brasileira,
valorizando uma paisagem local.` },
      { id: 'C', type: 'text', value: `A simplificação de formas geométricas abstratas.` },
      { id: 'D', type: 'text', value: `A inspiração na arte africana e na produção simbólica de
povos originários.` },
      { id: 'E', type: 'text', value: `A incorporação da colagem e de técnicas mistas como
procedimentos artísticos centrais.` },
    ],
    correct: 'B',
    explanation: `O depoimento de Tarsila valoriza cores e motivos antes desqualificados como caipiras. Em O mamoeiro, a paisagem e os elementos da vida brasileira são reelaborados por linguagem moderna. A valorização de aspectos locais da cultura nacional corresponde a B, não à abstração pura ou à colagem.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias'],
  },
  {
    id: 87,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `Tecidos de Ijebu

“Os ijebus vestem-se quase sempre com panos produzidos
por eles próprios. São fazendas de algodão, matéria-prima
que obtêm localmente. Nas famílias, as tarefas de colher
algodão, fiá-lo, tecê-lo e tingi-lo estão costumeiramente a
cargo das mulheres, e sabe-se ser muito grande a quantidade
de tecidos manufaturados em Ijebu e dali exportados, não
apenas para os países vizinhos, mas até mesmo para o Brasil,
cujos navios vêm buscar em Lagos essa mercadoria tão
apreciada pela gente de origem africana transplantada para
aquela terra distante. As cores mais comuns, depois da branca
e da azul, são a amarela, a vermelha, a carmesim e a verde.
Alguns panos são de uma só cor, outros são multicoloridos.”

OSIFEKUNDE. Notícia sobre o país e o povo dos Ijebus. In: COSTA E SILVA,
Alberto. Imagens da África. São Paulo: Penguin, 2012. p.361.

O texto é parte de um relato das memórias de um ex-
escravizado natural de Ijebu, na atual Nigéria, trazido ao Brasil
no início do século XIX. O excerto faz menção`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `à existência de um comércio de produtos manufaturados
entre a África e a América.` },
      { id: 'B', type: 'text', value: `à prerrogativa masculina na produção de tecidos naquela
região da África.` },
      { id: 'C', type: 'text', value: `à baixa qualidade das manufaturas africanas em
comparação com as da Europa.` },
      { id: 'D', type: 'text', value: `à impossibilidade de acesso, por africanos e
afrodescendentes, a produtos vindos da África.` },
      { id: 'E', type: 'text', value: `ao comércio de africanos escravizados para o trabalho nas
plantações de algodão.` },
    ],
    correct: 'A',
    explanation: `O relato descreve tecidos de algodão manufaturados em Ijebu e exportados inclusive para o Brasil, onde eram apreciados por pessoas de origem africana. Demonstra, portanto, comércio de manufaturas entre África e América. A é correta; o texto destaca o trabalho feminino, não uma prerrogativa masculina.`,
    subject: ['his'],
    topics: ["História Geral","Questões aleatórias"],
  },
  {
    id: 88,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `“Consiste em uma faixa de terra semiárida e árida que contorna
a borda sul do Deserto do Saara e percorre a extensão da África
no sentido leste-oeste. Atua como um cinturão que divide o
continente africano em dois, a África majoritariamente
islâmica, ao norte, e a cristã, ao sul. Englobando ao menos onze
países, a região é lar para dezenas de grupos étnicos.”

VAGEN, Tor-Gunnar; GUMBRICHT, Thomas. UNEP/ONU, 2012 (Adaptado).

O texto descreve características da região denominada de`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Chifre da África.` },
      { id: 'B', type: 'text', value: `África Meridional.` },
      { id: 'C', type: 'text', value: `África Setentrional.` },
      { id: 'D', type: 'text', value: `Rift Valley.` },
      { id: 'E', type: 'text', value: `Sahel.` },
    ],
    correct: 'E',
    explanation: `O Sahel é a faixa de transição semiárida ao sul do Saara, estendida no sentido leste-oeste e marcada por grande diversidade de povos. As características apresentadas correspondem a E, não ao Chifre da África ou ao vale do Rift.`,
    subject: ['geo'],
    topics: ['Geografia física', 'Questões aleatórias'],
  },
  {
    id: 89,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `“Aconteceu num debate, num país europeu. Da
assistência alguém me lançou a seguinte pergunta:
- Para si, o que é ser africano?
Falava-se, inevitavelmente, de identidade versus
globalização. Respondi com uma pergunta:
- E para si, o que é ser europeu?
O homem gaguejou. Não sabia responder. Mas o
interessante é que, para ele, a questão da identidade se
colocava naturalmente para os africanos. Não para os
europeus. Ele nunca tinha colocado a questão no espelho.
Recordo o episódio porque me parece que ele toca uma
questão central: quando se fala de África, de qual África
estamos falando? Terá o continente africano uma essência
facilmente capturável? Haverá uma substância exótica que os
caçadores de identidades possam recolher como sendo a
alma africana?”

COUTO, Mia. “Um retrato sem moldura”. In: HERNANDEZ, Leila Leite. A
África na sala de aula: visita à história contemporânea. São Paulo: Selo
Negro, 2008. p.11.

Ao relatar e comentar o episódio, o escritor moçambicano Mia
Couto apresenta a África como`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `uma construção histórica proporcionada pela ação
humanitária dos colonizadores europeus.` },
      { id: 'B', type: 'text', value: `um resultado natural da luta dos povos do continente
contra a dominação estrangeira.` },
      { id: 'C', type: 'text', value: `uma região historicamente afetada por graves problemas
demográficos e sanitários.` },
      { id: 'D', type: 'text', value: `um continente definido a partir de critérios políticos e
geográficos deterministas.` },
      { id: 'E', type: 'text', value: `um mosaico composto por relações econômicas, políticas
e culturais instáveis.` },
    ],
    correct: 'E',
    explanation: `Mia Couto questiona a busca de uma essência africana única e a assimetria de exigir essa definição apenas aos africanos. Sua reflexão aponta para uma realidade plural, historicamente constituída por relações econômicas, políticas e culturais mutáveis. E traduz essa diversidade, em oposição a uma identidade fixa ou determinista.`,
    subject: ['por'],
    topics: ["Interpretação de texto","Questões aleatórias"],
  },
  {
    id: 90,
    exam: 'fuvest',
    year: 2025,
    phase: 1,
    text: `“Brasil, meu Brasil brasileiro
Meu mulato inzoneiro
Vou cantar-te nos meus versos
O Brasil, samba que dá
Bamboleio, que faz gingar
O Brasil do meu amor
Terra de Nosso Senhor
Brasil, pra mim
Ô, abre a cortina do passado
Tira a mãe preta do cerrado
Bota o Rei Congo no congado
Brasil, pra mim (...)
Ô! Esse coqueiro que dá coco
Onde eu amarro a minha rede
Nas noites claras de luar
Brasil, pra mim
Ô! Ouve essas fontes murmurantes
Onde eu mato a minha sede
E onde a lua vem brincar
Ô! Este Brasil lindo e trigueiro
É o meu Brasil, brasileiro
Terra de samba e pandeiro
Brasil, pra mim”

A canção Aquarela do Brasil foi composta por Ari Barroso e
lançada no ano de 1939. Sua letra permite identificar temas
que guardam afinidades com a política cultural do Estado
Novo, podendo ser destacada a`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `discriminação em relação a afrodescendentes.` },
      { id: 'B', type: 'text', value: `exaltação das virtudes naturais e nacionais.` },
      { id: 'C', type: 'text', value: `concepção civilizatória assentada na religião católica.` },
      { id: 'D', type: 'text', value: `valorização da cultura cabocla e do regionalismo.` },
      { id: 'E', type: 'text', value: `escolha do malandro como símbolo nacional.` },
    ],
    correct: 'B',
    explanation: `A letra elogia a paisagem, o samba e elementos apresentados como símbolos da brasilidade. Essa celebração ufanista das riquezas naturais e nacionais tem afinidade com a política cultural nacionalista do Estado Novo. Portanto, B; a questão não exige afirmar que a canção foi uma encomenda oficial.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias'],
  },
];

export default fuvest_2025_f1;
