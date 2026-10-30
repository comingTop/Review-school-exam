import { QuizQuestion } from '@/lib/quiz-questions';

const fuvest_2021_f1: QuizQuestion[] = [
  {
    id: 1,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `A figura ilustra graficamente uma região de um bairro, com ruas
ortogonais entre si. O ponto X indica um condomínio
residencial, e o ponto Y indica a entrada de um parque. Três
moradores realizam caminhos diferentes para chegar ao ponto Y,
partindo do ponto X, ilustrados com cores diferentes. Se a, b e
c representam as distâncias percorridas por esses moradores
nesses caminhos, é correto afirmar que`,
    images: [{"src":"/fuvest/2021/images/q01_map.jpg","width":493,"height":454}],
    alternatives: [
      { id: 'A', type: 'text', value: `a = b = c.` },
      { id: 'B', type: 'text', value: `b = c < a.` },
      { id: 'C', type: 'text', value: `c < b < a.` },
      { id: 'D', type: 'text', value: `b < c = a.` },
      { id: 'E', type: 'text', value: `c < a = b.` },
    ],
    correct: 'B',
    explanation: `Os caminhos b e c fazem o mesmo deslocamento horizontal total e o mesmo deslocamento vertical total, sem retorno. O caminho a acrescenta um desvio vertical. Portanto b = c < a.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 2,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Qual dos gráficos representa uma relação entre as grandezas x
e y em que y sempre diminui na medida em que x aumenta?`,
    images: [{"src":"/fuvest/2021/images/q02_options.jpg","width":630,"height":816}],
    alternatives: [
      { id: 'A', type: 'text', value: `Alternativa A da figura.` },
      { id: 'B', type: 'text', value: `Alternativa B da figura.` },
      { id: 'C', type: 'text', value: `Alternativa C da figura.` },
      { id: 'D', type: 'text', value: `Alternativa D da figura.` },
      { id: 'E', type: 'text', value: `Alternativa E da figura.` },
    ],
    correct: 'E',
    explanation: `Para y diminuir sempre que x aumenta, o gráfico deve ser estritamente decrescente em todo o intervalo. Apenas E satisfaz essa condição; os demais apresentam crescimento ou trechos constantes.`,
    subject: ['mat'],
    topics: ['Trigonometria', 'Questões aleatórias'],
  },
  {
    id: 3,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `O quadrinho aborda o tema de números primos, sobre os quais
é correto afirmar:`,
    images: [{"src":"/fuvest/2021/images/q03_comic.jpg","width":605,"height":724}],
    alternatives: [
      { id: 'A', type: 'text', value: `Todos os números primos são ímpares.` },
      { id: 'B', type: 'text', value: `Existem, no máximo, 7 trilhões de números primos.
”` },
      { id: 'C', type: 'text', value: `Todo número da forma 2ⁿ + 1, n ∈ ℕ, é primo.` },
      { id: 'D', type: 'text', value: `Entre 24 e 36, existem somente 2 números primos.` },
      { id: 'E', type: 'text', value: `O número do quadrinho, 143, é um número primo.` },
    ],
    correct: 'D',
    explanation: `Entre 24 e 36, os únicos primos são 29 e 31. As outras afirmações são falsas: 2 é primo par; existem infinitos primos; 2ⁿ + 1 pode ser composto; e 143 = 11 × 13.`,
    subject: ['mat'],
    topics: ['Análise combinatória', 'Questões aleatórias'],
  },
  {
    id: 4,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Três triângulos equiláteros e dois quadrados formam uma
figura plana, como ilustrado. Seus centros são os vértices de um
pentágono irregular, que está destacado na figura. Se T é a área
de cada um dos triângulos e Q a área de cada um dos
quadrados, a área desse pentágono é`,
    images: [{"src":"/fuvest/2021/images/q04_pentagon.jpg","width":433,"height":355}],
    alternatives: [
      { id: 'A', type: 'text', value: `T + Q.` },
      { id: 'B', type: 'text', value: `T/2 + Q/2.` },
      { id: 'C', type: 'text', value: `T + Q/2.` },
      { id: 'D', type: 'text', value: `T/3 + Q/4.` },
      { id: 'E', type: 'text', value: `T/3 + Q/2.` },
    ],
    correct: 'C',
    explanation: `Ligando os centros aos vértices comuns das figuras, o pentágono se decompõe em três parcelas que correspondem a um terço de cada triângulo equilátero e duas parcelas de um quarto de cada quadrado. Sua área é 3(T/3) + 2(Q/4) = T + Q/2.`,
    subject: ['mat'],
    topics: ['Geometria', 'Questões aleatórias'],
  },
  {
    id: 5,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Um comerciante adotou como forma de pagamento uma
máquina de cartões, cuja operadora cobra uma taxa de 6% em
cada venda. Para continuar recebendo exatamente o mesmo
valor por cada produto, ele resolveu aplicar um reajuste nos
preços de todos os produtos da loja. Se P era o valor de uma
mercadoria antes da adoção da máquina, o novo valor V deve
ser calculado por`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `V = P + 0,06` },
      { id: 'B', type: 'text', value: `V = 0,94 · 1,06 · P` },
      { id: 'C', type: 'text', value: `V = 1,6 · P` },
      { id: 'D', type: 'text', value: `V = P/0,94` },
      { id: 'E', type: 'text', value: `V = 0,94 · P` },
    ],
    correct: 'D',
    explanation: `Após a taxa de 6%, o comerciante recebe 94% do valor cobrado. Para receber P, deve valer 0,94V = P, logo V = P/0,94. Um reajuste simples de 6% não compensaria integralmente a taxa.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 6,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Uma treinadora de basquete aplica o seguinte sistema de
pontuação em seus treinos de arremesso a cesta: cada jogadora
recebe 5 pontos por arremesso acertado e perde 2 pontos por
arremesso errado. Ao fim de 50 arremessos, uma das jogadoras
contabilizou 124 pontos. Qual é a diferença entre as quantidades
de arremessos acertados e errados dessa jogadora?`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `12` },
      { id: 'B', type: 'text', value: `14` },
      { id: 'C', type: 'text', value: `16` },
      { id: 'D', type: 'text', value: `18` },
      { id: 'E', type: 'text', value: `20` },
    ],
    correct: 'B',
    explanation: `Se a são acertos e e são erros, a + e = 50 e 5a − 2e = 124. Substituindo e = 50 − a, obtém-se 7a = 224, logo a = 32 e e = 18. A diferença é 14.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 7,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Alice quer construir um paralelepípedo reto retângulo de
dimensões 60 cm x 24 cm x 18 cm, com a menor quantidade
possível de cubos idênticos cujas medidas das arestas são
números naturais. Quantos cubos serão necessários para
construir esse paralelepípedo?`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `60` },
      { id: 'B', type: 'text', value: `72` },
      { id: 'C', type: 'text', value: `80` },
      { id: 'D', type: 'text', value: `96` },
      { id: 'E', type: 'text', value: `120` },
    ],
    correct: 'E',
    explanation: `A maior aresta inteira que divide as três dimensões é mdc(60,24,18) = 6 cm. Assim, são necessários (60/6)(24/6)(18/6) = 10 × 4 × 3 = 120 cubos.`,
    subject: ['mat'],
    topics: ['Geometria', 'Questões aleatórias'],
  },
  {
    id: 8,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Um aplicativo de videoconferências estabelece, para cada reunião,
um código de 10 letras, usando um alfabeto completo de 26 letras.
A quantidade de códigos distintos possíveis está entre

Note e adote: log₁₀ 13 = 1,114; 1 bilhão = 10⁹.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `10 bilhões e 100 bilhões.` },
      { id: 'B', type: 'text', value: `100 bilhões e 1 trilhão.` },
      { id: 'C', type: 'text', value: `1 trilhão e 10 trilhões.` },
      { id: 'D', type: 'text', value: `10 trilhões e 100 trilhões.` },
      { id: 'E', type: 'text', value: `100 trilhões e 1 quatrilhão.` },
    ],
    correct: 'E',
    explanation: `Cada uma das dez posições admite 26 letras, inclusive repetidas: há 26¹⁰ códigos. Como log₁₀26 = log₁₀2 + log₁₀13 ≈ 1,415, o total é aproximadamente 10¹⁴·¹⁵, entre 100 trilhões e 1 quatrilhão.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 9,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Na figura, os segmentos AC e DE são paralelos entre si e
perpendiculares ao segmento CD; o ponto B pertence ao
segmento AC; F é o ponto médio do segmento AB; e ABE é um
triângulo equilátero. Além disso, o segmento BC mede 10
unidades de comprimento e o segmento AE mede 6 unidades
de comprimento. A medida do segmento DF, em unidades de
comprimento, é igual a`,
    images: [{"src":"/fuvest/2021/images/q09_figure.jpg","width":540,"height":228}],
    alternatives: [
      { id: 'A', type: 'text', value: `14.` },
      { id: 'B', type: 'text', value: `15.` },
      { id: 'C', type: 'text', value: `16.` },
      { id: 'D', type: 'text', value: `17.` },
      { id: 'E', type: 'text', value: `18.` },
    ],
    correct: 'A',
    explanation: `O triângulo equilátero tem lado 6 e altura 3√3. Como F é o ponto médio de AB, FC = 3 + 10 = 13. O triângulo retângulo FCD tem catetos 13 e 3√3; portanto DF = √(169 + 27) = 14.`,
    subject: ['mat'],
    topics: ['Geometria', 'Questões aleatórias'],
  },
  {
    id: 10,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `A região hachurada do plano cartesiano xOy contida no círculo
de centro na origem O e raio 1, mostrada na figura, pode ser
descrita por

Note e adote: O círculo de centro O e raio 1 é o conjunto de todos os pontos do plano que estão a uma distância de O menor do que ou igual a 1.`,
    images: [{"src":"/fuvest/2021/images/q10_circle.jpg","width":524,"height":497}],
    alternatives: [
      { id: 'A', type: 'text', value: `{(x,y); x² + y² ≤ 1 e y − x ≤ 1}.` },
      { id: 'B', type: 'text', value: `{(x,y); x² + y² ≥ 1 e y + x ≥ 1}.` },
      { id: 'C', type: 'text', value: `{(x,y); x² + y² ≤ 1 e y − x ≥ 1}.` },
      { id: 'D', type: 'text', value: `{(x,y); x² + y² ≤ 1 e y + x ≥ 1}.` },
      { id: 'E', type: 'text', value: `{(x,y); x² + y² ≥ 1 e y + x ≤ 1}.` },
    ],
    correct: 'C',
    explanation: `A região pertence ao disco de raio 1, logo x² + y² ≤ 1. A outra fronteira é a reta y = x + 1, e a hachura está no semiplano y − x ≥ 1. A interseção dessas condições corresponde a C.`,
    subject: ['mat'],
    topics: ['Geometria', 'Questões aleatórias'],
  },
  {
    id: 11,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Se f: ℝ → ℝ e g: ℝ → ℝ são funções dadas por f(x) = c + x², onde c ∈ ℝ, e g(x) = x, seus gráficos se intersectam quando, e somente quando,`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `c ≤ 1/4.` },
      { id: 'B', type: 'text', value: `c ≥ 1/4.` },
      { id: 'C', type: 'text', value: `c ≤ 1/2.` },
      { id: 'D', type: 'text', value: `c ≥ 1/2.` },
      { id: 'E', type: 'text', value: `c ≤ 1.` },
    ],
    correct: 'A',
    explanation: `As interseções satisfazem x² + c = x, ou x² − x + c = 0. Existem soluções reais se, e somente se, Δ = 1 − 4c ≥ 0, isto é, c ≤ 1/4. A tangência também conta como interseção.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 12,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Um marceneiro possui um pedaço de madeira no formato de
um triângulo retângulo, cujos catetos medem 12 cm e 35 cm. A
partir desta peça, ele precisa extrair o maior quadrado possível,
de tal forma que um dos ângulos retos do quadrado coincida
com o ângulo reto do triângulo. A medida do lado do quadrado
desejado pelo marceneiro está mais próxima de`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `8,0 cm.` },
      { id: 'B', type: 'text', value: `8,5 cm.` },
      { id: 'C', type: 'text', value: `9,0 cm.` },
      { id: 'D', type: 'text', value: `9,5 cm.` },
      { id: 'E', type: 'text', value: `10,0 cm.` },
    ],
    correct: 'C',
    explanation: `Se o lado do quadrado é s, a semelhança dos triângulos dá s/12 + s/35 = 1. Logo s = 420/47 ≈ 8,94 cm, valor mais próximo de 9,0 cm.`,
    subject: ['mat'],
    topics: ['Geometria', 'Questões aleatórias'],
  },
  {
    id: 13,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Suponha, para simplificar, que a Terra é perfeitamente esférica e
que a linha do Equador mede 40.000 km. O trajeto que sai do
Polo Norte, segue até a linha do Equador pelo meridiano de
Greenwich, depois se desloca ao longo da linha do Equador até o
meridiano 45° L e então retorna ao Polo Norte por esse meridiano
tem comprimento total de`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `15.000 km.` },
      { id: 'B', type: 'text', value: `20.000 km.` },
      { id: 'C', type: 'text', value: `25.000 km.` },
      { id: 'D', type: 'text', value: `30.000 km.` },
      { id: 'E', type: 'text', value: `35.000 km.` },
    ],
    correct: 'C',
    explanation: `Cada trecho entre polo e equador mede um quarto da circunferência terrestre, ou 10.000 km. O arco equatorial de 45° mede 45/360 × 40.000 = 5.000 km. O total é 25.000 km.`,
    subject: ['mat'],
    topics: ['Geometria', 'Questões aleatórias'],
  },
  {
    id: 14,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Projeção de Mercator — Apresentada pela primeira vez no século XVI.
Projeção de Gall-Peters — Elaborada pela primeira vez no século XIX.
Projeção de Robinson — Elaborada em 1963.

Sobre as projeções cartográficas apresentadas, suas formas e
dimensões, é correto afirmar:`,
    images: [{"src":"/fuvest/2021/images/q11_figure.jpg","width":416,"height":284},{"src":"/fuvest/2021/images/q12_figure.jpg","width":415,"height":284},{"src":"/fuvest/2021/images/q14_projections.jpg","width":549,"height":284}],
    alternatives: [
      { id: 'A', type: 'text', value: `Interesses geopolíticos e comerciais forçaram distorções na
projeção de Mercator, para fazer parecer mais curto o
caminho ao novo continente, elemento corrigido a partir do
século XIX, na projeção de Gall-Peters.` },
      { id: 'B', type: 'text', value: `As três projeções apresentam distorções, uma vez que a
Terra tem forma aproximada de um geoide e sua projeção
num plano ficará distorcida.` },
      { id: 'C', type: 'text', value: `As projeções de Mercator e Gall-Peters apresentam
distorções pela falta de recursos técnicos no período em
que foram feitas, mas o avanço computacional do século XX
permitiu o fim das distorções na projeção de Robinson.` },
      { id: 'D', type: 'text', value: `A projeção de Gall-Peters não apresentava distorções no
momento de sua elaboração, mas a descoberta da Antártica
e da Oceania, logo após sua proposição, forçou a adaptação
e induziu distorções.` },
      { id: 'E', type: 'text', value: `Todas as projeções apresentam distorções, uma vez que o
formato da Terra não era conhecido até o século XX, o que
gerou dúvidas sobre como essa projeção deveria ser
executada.` },
    ],
    correct: 'B',
    explanation: `A superfície curva da Terra não pode ser representada integralmente no plano conservando simultaneamente áreas, formas e distâncias. Assim, Mercator, Gall-Peters e Robinson apresentam distorções, ainda que preservem propriedades diferentes.`,
    subject: ['geo'],
    topics: ['Cartografia', 'Questões aleatórias'],
  },
  {
    id: 15,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `A criação do Banco da Amazônia e da Superintendência do
Desenvolvimento da Amazônia (SUDAM) preconizou uma política
de concessão de incentivos fiscais aos empresários, especialmente
das regiões mais ricas do país, para que deixassem de pagar 50%
do imposto de renda, desde que o dinheiro fosse depositado
naquele banco para financiar projetos de desenvolvimento no
estado do Amazonas. Os investimentos orientaram-se de
preferência para a agropecuária, de modo que um grande número
de empresários e de empresas, especialmente do Sudeste do Brasil,
sem tradição no ramo, tornaram-se proprietários de terras e
empresários rurais. Em princípio a aquisição de terras pelos
grandes capitalistas do Sudeste animou o mercado imobiliário.
José de Sousa Martins. O Poder do Atraso. Adaptado.
Assinale a alternativa que apresenta a combinação correta
entre o período a que se refere o texto e as implicações,
territoriais e sociais, observadas nas áreas onde a política de
incentivos fiscais entrou em operação.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Brasil Império — Expansão dos sistemas agroflorestais e preservação da vegetação nativa — Aprovação do direito de sindicalização do trabalhador rural.` },
      { id: 'B', type: 'text', value: `Primeira República — Expansão da área voltada à pecuária e redução da Mata Atlântica — Aumento do número de assalariados no campo.` },
      { id: 'C', type: 'text', value: `Estado Novo — Expansão da economia extrativista e concentração fundiária — Eliminação dos direitos trabalhistas na cidade e no campo.` },
      { id: 'D', type: 'text', value: `Ditadura Militar — Aumento da grilagem e avanço do desmatamento — Aumento dos conflitos violentos no campo.` },
      { id: 'E', type: 'text', value: `Nova República — Aumento da área de vegetação nativa e reforma agrária massiva — Melhora na distribuição fundiária e dos níveis de consumo interno.` },
    ],
    correct: 'D',
    explanation: `Os incentivos da SUDAM e do Banco da Amazônia se inserem na política de integração territorial da ditadura militar. A expansão da grande propriedade e da agropecuária favoreceu grilagem, desmatamento e conflitos violentos no campo.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias'],
  },
  {
    id: 16,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Observe o mapa com dados de 2020:
Os países destacados em amarelo no mapa referem-se:`,
    images: [{"src":"/fuvest/2021/images/q16_map.jpg","width":615,"height":233},{"src":"/fuvest/2021/images/q16_legend.jpg","width":615,"height":116}],
    alternatives: [
      { id: 'A', type: 'text', value: `Ao bloco dos BRICS.` },
      { id: 'B', type: 'text', value: `Aos novos integrantes da OCDE.` },
      { id: 'C', type: 'text', value: `A países excluídos da OMC.` },
      { id: 'D', type: 'text', value: `A países da OPEP.` },
      { id: 'E', type: 'text', value: `A países membros da OTAN.` },
    ],
    correct: 'D',
    explanation: `A distribuição dos países destacados corresponde à Organização dos Países Exportadores de Petróleo, a OPEP. Não coincide com os membros de BRICS, OCDE, OMC ou OTAN.`,
    subject: ['geo'],
    topics: ['Cartografia', 'Questões aleatórias'],
  },
  {
    id: 17,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Terremoto no estado da Bahia
Disponível em https://www.instagram.com/CEhFFU/. Adaptado.
O terremoto indicado na figura ocorreu no estado da Bahia no
dia 30/08/2020, com magnitude 4,6 na escala Richter, atingindo
cidades do Vale do Jiquiriçá e do Recôncavo Baiano. Sobre
terremotos em geral, e sobre este especificamente, é correto
afirmar:`,
    images: [{"src":"/fuvest/2021/images/q17_earthquake.jpg","width":472,"height":442}],
    alternatives: [
      { id: 'A', type: 'text', value: `São gerados por intrusões e maremotos, cuja violência
durante as movimentações provoca fissuras na superfície.` },
      { id: 'B', type: 'text', value: `São gerados em razão da presença de falhas geológicas e seu
estudo traz conhecimento da geologia do território brasileiro.` },
      { id: 'C', type: 'text', value: `Têm início pelo soerguimento da crosta, e o do dia
30/08/2020 teve sua origem na Bacia Amazônica.` },
      { id: 'D', type: 'text', value: `Têm início com a divergência da crosta continental, e o do
Recôncavo Baiano provocou impactos até na Serra Gaúcha.` },
      { id: 'E', type: 'text', value: `São gerados pela abertura de falhas, importante para o
conhecimento do núcleo do planeta Terra explorado na região.` },
    ],
    correct: 'B',
    explanation: `O território brasileiro possui falhas antigas que podem ser reativadas por tensões internas da placa. Isso produz sismos intraplaca, como o da Bahia, e seu estudo ajuda a conhecer a estrutura geológica do país.`,
    subject: ['geo'],
    topics: ['Geografia física', 'Questões aleatórias'],
  },
  {
    id: 18,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `A linha de fronteira hoje possui uma definição essencialmente econômica — como a fronteira da lucratividade — mas adquire uma
expressão geográfica bastante acentuada em diferentes escalas espaciais. Isto é, basicamente, o que a fronteira do século XIX e a
assim chamada fronteira urbana têm em comum. Na realidade, ambas estão associadas a acumulação e expansão do capital.
Mas enquanto a fronteira do século XIX representou a realização de uma expansão geográfica absoluta na escala do território
como a principal expressão espacial da acumulação de capital, a renovação urbana representa o exemplo mais desenvolvido da
rediferenciação do espaço geográfico com vista ao mesmo resultado.
Neil Smith. Gentrificação, a fronteira e a reestruturação do espaço urbano, 1986. Adaptado.
O excerto relaciona a dinâmica geográfica dos Estados Unidos no século XIX a do final do século XX. As imagens correspondentes
a cada um dos momentos apresentados pelo excerto são identificadas em:`,
    images: [{"src":"/fuvest/2021/images/q18_options.jpg","width":953,"height":1538}],
    alternatives: [
      { id: 'A', type: 'text', value: `Marcha para o Oeste / Revitalização de áreas centrais.` },
      { id: 'B', type: 'text', value: `Independência dos EUA / Suburbanização.` },
      { id: 'C', type: 'text', value: `Festa do chá de Boston / Vale do Silício.` },
      { id: 'D', type: 'text', value: `Guerra de Secessão / Construção do muro que separa EUA e México.` },
      { id: 'E', type: 'text', value: `Descobrimento dos EUA / O gueto e a segregação urbana.` },
    ],
    correct: 'A',
    explanation: `A fronteira do século XIX corresponde à expansão territorial da Marcha para o Oeste. No fim do século XX, a expansão da lucratividade se manifesta também na revalorização e renovação de áreas centrais. As duas imagens de A representam esses processos.`,
    subject: ['geo'],
    topics: ['Geografia física', 'Questões aleatórias'],
  },
  {
    id: 19,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Henri Lefebvre. A revolução urbana. Adaptado.
O esquema apresenta a linha de urbanização da sociedade,
que vai do 0 ao 100%. Considerando os referenciais trazidos
no esquema, fazem parte do contexto identificado na
chamada “zona crítica”:`,
    images: [{"src":"/fuvest/2021/images/q19_scheme.jpg","width":594,"height":205},{"src":"/fuvest/2021/images/q19_source_2.jpg","width":594,"height":102}],
    alternatives: [
      { id: 'A', type: 'text', value: `Monetarismo; Revolução Industrial; lei Bill Aberdeen.` },
      { id: 'B', type: 'text', value: `Comunismo; centralização do poder; New Deal.` },
      { id: 'C', type: 'text', value: `Neoliberalismo; elevada urbanização; crise hipotecária de
2008.` },
      { id: 'D', type: 'text', value: `Neocolonialismo; Revolução Agrária; quebra da Bolsa de
Nova Iorque.` },
      { id: 'E', type: 'text', value: `Mercantilismo; financeirização da economia; Acordo de
Vestfália.` },
    ],
    correct: 'C',
    explanation: `A zona crítica corresponde à sociedade amplamente urbanizada e às contradições recentes da reprodução do capital. Neoliberalismo e crise hipotecária de 2008 pertencem a esse contexto, ao contrário dos acontecimentos mais antigos das demais alternativas.`,
    subject: ['geo'],
    topics: ['Geografia física', 'Questões aleatórias'],
  },
  {
    id: 20,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `O acordo entre o Mercosul e a União Europeia está sendo
discutido há cerca de 20 anos e prevê, entre outros
elementos, a redução progressiva das tarifas de exportação
entre os blocos. O Brasil, que é um grande exportador de
produtos de origem agrícola para o mercado europeu, teria
redução tarifária para a exportação de produtos como carnes,
açúcar e etanol, dentre outros.
Para a ratificação do acordo, o parlamento europeu aprovou
uma resolução que manifesta a importância do compromisso
dos países do Mercosul com a implementação do Acordo de
Paris. A relutância em ratificar o acordo entre Mercosul e
União Europeia, por parte de alguns países da UE em 2020,
deveu-se, entre outros fatores,

Note e adote:
OMC: Organização Mundial do Comércio
PRONAF: Programa Nacional de Fortalecimento da Agricultura Familiar
SAFs: Sistemas Agroflorestais
UE: União Europeia`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `a desigual condição climática para produção de vinhos nos
dois continentes.` },
      { id: 'B', type: 'text', value: `as políticas de incentivo a agricultura familiar na América
Latina e especialmente ao PRONAF no Brasil.` },
      { id: 'C', type: 'text', value: `a difusão de SAFs, criados com o propósito de produção
para consumo humano no Cone Sul.` },
      { id: 'D', type: 'text', value: `as declarações que cogitaram a retirada do Brasil da OMC
meses antes da aprovação da resolução.` },
      { id: 'E', type: 'text', value: `aos graves problemas ambientais no Brasil, tais como
desmatamento e queimadas.` },
    ],
    correct: 'E',
    explanation: `A preocupação europeia com a implementação do Acordo de Paris relacionou-se ao desmatamento e às queimadas no Brasil. Esses problemas ambientais dificultaram a ratificação do acordo comercial entre os blocos.`,
    subject: ['geo'],
    topics: ['Geopolítica', 'Questões aleatórias'],
  },
  {
    id: 21,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `O Sistema Aquífero Guarani abrange parte dos territórios da
Argentina, do Brasil, do Paraguai e do Uruguai. Possui um
volume acumulado de 37.000 km³ e área estimada de
1.087.000 km² . Na parte brasileira estende-se por oito
Estados: Goiás, Mato Grosso, Mato Grosso do Sul, Minas
Gerais, Paraná, Rio Grande do Sul, Santa Catarina e São Paulo.
Disponível em https://www.mma.gov.br/.
Sobre os aquíferos e seus usos para atividades humanas, é
correto afirmar:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Ocorrem em formações geológicas que contêm água em
quantidades significativas que se movimentam no seu
interior em condições naturais, permitindo seu uso para
abastecimento público e estâncias turísticas de águas
minerais e termais.` },
      { id: 'B', type: 'text', value: `Consistem em reservatórios de águas superficiais
formados a partir de processos de vulcanismo e
tectonismo em áreas de intensa atividade sísmica; seus
fluxos são passíveis de uso na produção de energia
geotérmica obtida por meio do calor proveniente do
interior do planeta Terra.` },
      { id: 'C', type: 'text', value: `Os aquíferos apresentam volume de águas de grandes
proporções, contudo, os custos de bombeamento e
tratamento inviabilizam sua utilização e seus usos para
atividades humanas, limitando-se atualmente a
dessedentação animal.` },
      { id: 'D', type: 'text', value: `Os aquíferos são formados pela ação dos ventos que
acumulam areia na superfície, facilitando a infiltração e
acúmulo de água nas camadas mais profundas; seus usos
para atividades humanas dependem da escavação de poços
muito profundos com uso de tecnologia indisponível no país.` },
      { id: 'E', type: 'text', value: `Os aquíferos estão em profundidades que impossibilitam
seu uso para atividades humanas, incluindo aqueles usos
destinados a fins menos nobres, como lavagem de
calçadas e praças.` },
    ],
    correct: 'A',
    explanation: `Aquíferos são formações geológicas que armazenam e permitem a circulação de água subterrânea em poros ou fraturas. Podem abastecer populações e alimentar usos turísticos de águas minerais e termais.`,
    subject: ['geo'],
    topics: ['Geografia física', 'Questões aleatórias'],
  },
  {
    id: 22,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `O Monte Everest é o pico mais elevado do planeta, localizado na
cordilheira do Himalaia, na fronteira da China e Nepal, com 8.848
metros de altitude. Possui cinco estações meteorológicas em
diferentes altitudes funcionando desde 2019, entre elas a estação
mais elevada do planeta (8.430 m), que registra dados valiosos
para a climatologia. Esse projeto foi liderado pelo Dr. Paul
Andrew Mayewski, geógrafo e climatologista, cuja equipe
projetou e treinou por meses para instalar a estação
meteorológica em tal condição adversa em menos de 90 minutos.
Disponível em https://www.climadeensinar.com.br/. Adaptado.
A dificuldade de instalação da estação na altitude citada deve-se`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `as elevadas condições de umidade provenientes do
derretimento de neve.` },
      { id: 'B', type: 'text', value: `a ocorrência de chuvas intensas, que aumentam os riscos
de avalanches.` },
      { id: 'C', type: 'text', value: `as temperaturas reduzidas e a baixa concentração de
oxigênio nessa altitude.` },
      { id: 'D', type: 'text', value: `aos dias mais curtos nessa altitude, o que reduz o brilho
solar.` },
      { id: 'E', type: 'text', value: `a elevada pressão atmosférica, que produz ventos
intensos nessa altitude.` },
    ],
    correct: 'C',
    explanation: `Na grande altitude do Everest, a baixa temperatura dificulta o trabalho e a menor pressão atmosférica reduz a disponibilidade de oxigênio por volume de ar. Essas condições tornam a instalação rápida dos equipamentos especialmente exigente.`,
    subject: ['geo'],
    topics: ['Geografia física', 'Questões aleatórias'],
  },
  {
    id: 23,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Segundo o Atlas de Serpentes Brasileiras, a jararaca (nome
científico Bothrops jararaca) encontra-se com as ocorrências
registradas em uma extensa faixa do Brasil relativa a diferentes
Biomas, onde se alimenta de anfíbios, roedores e outros animais.
A espécie ocorre nas áreas apontadas, sendo encontrada em
zonas florestadas ou modificadas pela ação humana.
Brasil: Distribuição da Bothrops jararaca
Fonte: Atlas de Serpentes Brasileiras (2019) e IBGE (2020).
Adaptado.
Sobre as serpentes Bothrops jararaca e os principais biomas
de ocorrência, é correto afirmar:`,
    images: [{"src":"/fuvest/2021/images/q25_graph.jpg","width":672,"height":157},{"src":"/fuvest/2021/images/q23_source_2.jpg","width":672,"height":261},{"src":"/fuvest/2021/images/q23_source_3.jpg","width":672,"height":53}],
    alternatives: [
      { id: 'A', type: 'text', value: `São típicas das áreas que alcançam até 500 m de altitude,
nos Biomas do Pantanal, Pampa, Cerrado e Caatinga; as
áreas do Pampa são as mais degradadas do país em função
da urbanização crescente, ameaçando a ocorrência da
jararaca.` },
      { id: 'B', type: 'text', value: `São generalizadas nos mais diversos biomas, concentrando-se na Caatinga; esse bioma encontra-se atualmente como o
mais ameaçado pela expansão das fronteiras agrícolas na
produção para exportação.` },
      { id: 'C', type: 'text', value: `São típicas das áreas mais planas da faixa leste do Brasil, cujos
terrenos são recobertos pelo Bioma do Cerrado; a ocorrência
desta espécie deve-se as áreas com ocupação humana, o que
atrai ratos que fazem parte da alimentação da jararaca.` },
      { id: 'D', type: 'text', value: `Possuem área de ocorrência restrita ao Bioma da
Amazônia, caracterizado pela ocorrência de sapos; nesse
bioma, as planícies fluviais favorecem a proliferação da
jararaca.` },
      { id: 'E', type: 'text', value: `São típicas da Mata Atlântica, podendo ocorrer também
em áreas de Pampa, Cerrado e Caatinga e ocupar terrenos
que alcançam até 1000 m de altitude; o Bioma da Mata
Atlântica encontra-se atualmente ameaçado pela
ocupação humana.` },
    ],
    correct: 'E',
    explanation: `O mapa concentra a ocorrência na Mata Atlântica, com presença também em áreas de outros biomas e altitudes de até aproximadamente 1000 m. A ocupação humana ameaça os habitats desse bioma, conforme E.`,
    subject: ['bio'],
    topics: ['Fisiologia humana', 'Questões aleatórias'],
  },
  {
    id: 24,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Na transição do Cerrado para a Mata Atlântica, ocorre uma
substituição da vegetação, que resulta em mudanças na
frequência de certas características das plantas.
Identifique duas mudanças decorrentes dessa transição.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Aumento da frequência de caules e galhos tortuosos;
aumento da frequência de plantas que apresentam folhas
largas.` },
      { id: 'B', type: 'text', value: `Aumento da frequência de plantas que germinam e
crescem melhor sob a luz direta do sol; diminuição da
frequência de plantas que apresentam folhas largas.` },
      { id: 'C', type: 'text', value: `Diminuição da frequência de caules e galhos tortuosos;
aumento da frequência de plantas que apresentam folhas
largas.` },
      { id: 'D', type: 'text', value: `Diminuição da frequência de plantas epífitas; diminuição
da frequência de plantas com adaptações a queimadas.` },
      { id: 'E', type: 'text', value: `Diminuição da frequência de plantas que germinam e
crescem melhor sob a luz direta do sol; aumento da
frequência de plantas com adaptações a queimadas.` },
    ],
    correct: 'C',
    explanation: `O Cerrado apresenta muitas plantas de caules tortuosos e adaptações à seca e ao fogo. Na transição para a floresta úmida, diminui a frequência desses caules e aumenta a de folhas largas, favorecidas pela maior disponibilidade de água.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 25,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `O tempo de decomposição dos diferentes resíduos sólidos
condiciona a destinação de cada tipo, visando a diminuir os
impactos ambientais causados por seu descarte. O gráfico
mostra dois grupos de resíduos sólidos (X e Y) produzidos pela
população humana, com diferentes tempos de
decomposição.
Com base nessas informações e nos seus conhecimentos, é
correto afirmar que as

Note e adote:
Considere que os resíduos dos grupos X e Y foram expostos às mesmas
condições, sem decomposição acelerada.`,
    images: [{"src":"/fuvest/2021/images/q23_map.jpg","width":493,"height":391}],
    alternatives: [
      { id: 'A', type: 'text', value: `garrafas PET fazem parte do grupo Y, e sua destinação
recomendada é o reuso e a reciclagem.` },
      { id: 'B', type: 'text', value: `embalagens de papel fazem parte do grupo Y, e sua
destinação recomendada é a incineração.` },
      { id: 'C', type: 'text', value: `garrafas PET fazem parte do grupo X, e sua destinação
recomendada é o aterro sanitário.` },
      { id: 'D', type: 'text', value: `embalagens de papel fazem parte do grupo Y, e sua
destinação recomendada é o reuso e a reciclagem.` },
      { id: 'E', type: 'text', value: `garrafas de vidro fazem parte do grupo X, e sua destinação
recomendada é a incineração.` },
    ],
    correct: 'A',
    explanation: `Garrafas PET têm decomposição lenta e pertencem ao grupo Y. Reutilização e reciclagem são destinos adequados para reduzir o descarte e a demanda por matéria-prima.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 26,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Os gráficos mostram a variação nas taxas de emigração,
imigração, mortalidade e natalidade de uma dada população
de mamíferos ao longo de 20 anos.
Com base nesses gráficos, o tamanho dessa população deve`,
    images: [{"src":"/fuvest/2021/images/q26_graphs.jpg","width":631,"height":330},{"src":"/fuvest/2021/images/q26_source_2.jpg","width":631,"height":83}],
    alternatives: [
      { id: 'A', type: 'text', value: `diminuir nos 5 primeiros anos e manter-se constante no
restante do período considerado.` },
      { id: 'B', type: 'text', value: `manter-se constante nos 5 primeiros anos e diminuir no
restante do período considerado.` },
      { id: 'C', type: 'text', value: `diminuir continuamente ao longo do período considerado.` },
      { id: 'D', type: 'text', value: `manter-se constante ao longo do período considerado.` },
      { id: 'E', type: 'text', value: `aumentar nos 5 primeiros anos e diminuir no restante do
período considerado.` },
    ],
    correct: 'D',
    explanation: `A variação populacional é dada por natalidade + imigração − mortalidade − emigração. Nos gráficos, a soma das entradas equilibra a das saídas em todo o período. Portanto o tamanho da população se mantém constante.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 27,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Uma variedade de milho (Milho Bt) foi modificada com a
inserção de genes da bactéria Bacillus thuringiensis, que
produzem proteínas Cry, tóxicas para insetos como as lagartas
que atacam suas lavouras. Essas proteínas bloqueiam o trato
digestório dos insetos, levando-os a morte. Em aves e
mamíferos que também se alimentam de milho, as proteínas
Cry são inativadas durante a digestão ácida, perdendo sua
ação sobre esses animais.
A alternativa que indica corretamente um aspecto positivo e
um negativo dos efeitos desta modificação genética do milho
para o ser humano é:
Aspecto positivo Aspecto negativo`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Aumento do valor nutricional do milho. / Possibilidade de desenvolvimento de alergia à proteína Cry em pessoas vulneráveis.` },
      { id: 'B', type: 'text', value: `Menor tempo de maturação dos grãos. / Possibilidade de invasão da vegetação nativa pela planta transgênica.` },
      { id: 'C', type: 'text', value: `Facilitação da polinização das plantas. / Risco de extinção local de aves e mamíferos insetívoros.` },
      { id: 'D', type: 'text', value: `Economia de água pela redução da irrigação. / Maior exposição dos agricultores a agrotóxicos.` },
      { id: 'E', type: 'text', value: `Maior produtividade das lavouras de milho. / Possibilidade de surgimento de lagartas resistentes à proteína Cry.` },
    ],
    correct: 'E',
    explanation: `A proteção contra lagartas reduz perdas e pode aumentar a produtividade. Por outro lado, a pressão de seleção pode favorecer lagartas resistentes à proteína Cry, reduzindo sua eficácia ao longo das gerações.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 28,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `A genealogia a seguir representa uma família em que
aparecem pessoas afetadas por adrenoleucodistrofia. A
mulher III.2 está grávida e ainda não sabe o sexo do bebê.
A relação correta entre o padrão de herança desta forma de
adrenoleucodistrofia e a probabilidade de que a criança seja
afetada é:
Padrão de herança Probabilidade de ser afetada`,
    images: [{"src":"/fuvest/2021/images/q27_corn.jpg","width":496,"height":228}],
    alternatives: [
      { id: 'A', type: 'text', value: `Ligado ao X recessivo 50% caso seja menino` },
      { id: 'B', type: 'text', value: `Ligado ao X recessivo 25% caso seja menino` },
      { id: 'C', type: 'text', value: `Ligado ao Y 100% caso seja menino` },
      { id: 'D', type: 'text', value: `Autossômico recessivo 75% em qualquer caso` },
      { id: 'E', type: 'text', value: `Autossômico recessivo 12,5% em qualquer caso` },
    ],
    correct: 'B',
    explanation: `O heredograma é compatível com herança recessiva ligada ao X. III.2 tem probabilidade de 1/2 de ser portadora; se tiver um menino, a chance de transmitir o X mutante é 1/2. A probabilidade condicional de um filho menino afetado é 1/2 × 1/2 = 25%.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 29,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Considere dois genes (A e B) localizados em cromossomos
diferentes e seus respectivos alelos (A, a, B, b). Uma
representação possível desses alelos durante a mitose,
imediatamente antes da metáfase, é:`,
    images: [{"src":"/fuvest/2021/images/q29_options.jpg","width":658,"height":606}],
    alternatives: [
      { id: 'A', type: 'text', value: `Alternativa A da figura.` },
      { id: 'B', type: 'text', value: `Alternativa B da figura.` },
      { id: 'C', type: 'text', value: `Alternativa C da figura.` },
      { id: 'D', type: 'text', value: `Alternativa D da figura.` },
      { id: 'E', type: 'text', value: `Alternativa E da figura.` },
    ],
    correct: 'A',
    explanation: `Antes da metáfase, os cromossomos já estão duplicados. As cromátides-irmãs devem apresentar os mesmos alelos, e genes situados em cromossomos diferentes devem aparecer em pares cromossômicos distintos. O esquema A respeita essa organização.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 30,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `O gás carbônico atmosférico reage com a água do mar
conforme detalhado em (I):
(I) CO₂ + H₂O ⇌ H₂CO₃ ⇌ HCO₃⁻ + H⁺

As condições ambientais causadas pelo aumento de gás
carbônico na atmosfera influenciam em processos
caracterizados pela reação (II) durante o desenvolvimento de
diversos organismos marinhos:
(II) Ca²⁺ + CO₃²⁻ ⇌ CaCO₃

Tendo por base essas afirmações, assinale a alternativa
correta:

Note e adote: Considere o bicarbonato solúvel e o carbonato de cálcio insolúvel.

Note e adote:
Considere o bicarbonato solúvel e o carbonato de cálcio insolúvel.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `O processo (I) resulta em diminuição da alcalinidade da
água do mar, comprometendo a estruturação de recifes
por interferir na formação dos esqueletos calcários dos
corais, conforme a reação (II).` },
      { id: 'B', type: 'text', value: `O processo (I) resulta em aumento da alcalinidade da água
do mar, comprometendo processos de contração
muscular de vertebrados marinhos por diminuir o cálcio
livre disponível, como demonstrado em (II).` },
      { id: 'C', type: 'text', value: `O processo (I) não altera a alcalinidade da água do mar,
mas compromete o processo de formação de conchas de
moluscos marinhos, nos quais a estrutura básica é o
carbonato de cálcio, produto da reação (II).` },
      { id: 'D', type: 'text', value: `O processo (I) resulta em diminuição da alcalinidade da
água do mar, aumentando o pH e beneficiando o processo
demonstrado em (II), o que favorece o crescimento de
recifes de algas calcárias.` },
      { id: 'E', type: 'text', value: `O processo (I) resulta em aumento da alcalinidade da água
do mar, beneficiando os processos de fermentação por
bactérias marinhas em regiões de recifes de coral, que são
formados pelo processo (II).` },
    ],
    correct: 'A',
    explanation: `O aumento de CO₂ dissolvido favorece a formação de ácido carbônico e a liberação de H⁺, reduzindo o pH. Isso dificulta a formação e favorece a dissolução de estruturas de carbonato de cálcio, prejudicando os esqueletos dos corais. É a relação descrita em A.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },

  {
    id: 31,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Considere três espécies de plantas (X, Y e Z) e suas
características:
- A planta X não possui flores, mas é polinizada pelo vento.
Além disso, não possui frutos, mas suas sementes são
dispersas por aves.
- A planta Y não possui flores, nem sementes, nem frutos.
- A planta Z possui flores e é polinizada por aves. Além disso,
possui frutos e suas sementes são dispersas por aves.
A que grupos pertencem as plantas X, Y e Z, respectivamente?`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Pteridófitas, angiospermas e gimnospermas.` },
      { id: 'B', type: 'text', value: `Gimnospermas, pteridófitas e angiospermas.` },
      { id: 'C', type: 'text', value: `Pteridófitas, gimnospermas e angiospermas.` },
      { id: 'D', type: 'text', value: `Angiospermas, gimnospermas e pteridófitas.` },
      { id: 'E', type: 'text', value: `Gimnospermas, angiospermas e pteridófitas.` },
    ],
    correct: 'B',
    explanation: `X tem sementes, mas não flores nem frutos: gimnosperma. Y não apresenta flores, sementes ou frutos e corresponde às pteridófitas entre os grupos oferecidos. Z apresenta flores e frutos: angiosperma.`,
    subject: ['bio'],
    topics: ['Botânica', 'Questões aleatórias'],
  },
  {
    id: 32,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `A determinação do sexo em embriões de tartaruga-de-couro
depende da temperatura a que o ovo foi exposto. Isso está
relacionado a ação da enzima aromatase, que converte a
testosterona em estradiol. A expressão gênica e a atividade
dessa enzima nas gônadas são dependentes da temperatura,
conforme indicado na figura.
Fonte: doi: 10.3389/fphys.2020.00035
Sobre a determinação do sexo em tartarugas-de-couro, é
correto afirmar:`,
    images: [{"src":"/fuvest/2021/images/q32_graph.jpg","width":598,"height":214},{"src":"/fuvest/2021/images/q32_source_2.jpg","width":598,"height":107}],
    alternatives: [
      { id: 'A', type: 'text', value: `A atividade máxima da aromatase determina
diferenciação sexual masculina.` },
      { id: 'B', type: 'text', value: `O maior nível de transcrição do gene da aromatase
coincide com a menor atividade da enzima.` },
      { id: 'C', type: 'text', value: `Em temperaturas entre 28 e 30 °C, a maioria dos embriões
diferenciam-se em fêmeas.` },
      { id: 'D', type: 'text', value: `Há equilíbrio no nascimento de machos e fêmeas a 26 °C.` },
      { id: 'E', type: 'text', value: `A atividade da aromatase depende da quantidade de
estradiol disponível.` },
    ],
    correct: 'C',
    explanation: `Maior atividade da aromatase converte mais testosterona em estradiol e favorece a diferenciação feminina. O gráfico situa esse predomínio entre 28 e 30 °C, conforme C.`,
    subject: ['bio'],
    topics: ['Fisiologia humana', 'Questões aleatórias'],
  },
  {
    id: 33,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `No que diz respeito a infecções sexualmente transmissíveis
(ISTs), identifique a relação correta entre grupo causador, um
dos seus sintomas e se possui ou não vacina preventiva.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Gonorreia — Neisseria gonorrhoeae (bactéria) — Ardor na uretra e secreção purulenta — Sim.` },
      { id: 'B', type: 'text', value: `Hepatite C — HCV (bactéria) — Comprometimento da função do fígado — Não.` },
      { id: 'C', type: 'text', value: `AIDS — HIV (vírus) — Erupção cutânea — Sim.` },
      { id: 'D', type: 'text', value: `Sífilis — Treponema pallidum (verme) — Ferida na genitália externa (cancro) — Não.` },
      { id: 'E', type: 'text', value: `Condiloma acuminado (crista de galo) — HPV (vírus) — Verrugas na região genital — Sim.` },
    ],
    correct: 'E',
    explanation: `O condiloma acuminado é causado pelo HPV, um vírus, pode produzir verrugas genitais e possui prevenção por vacina. As outras linhas combinam incorretamente agente, sintoma ou disponibilidade de vacina.`,
    subject: ['bio'],
    topics: ['Fisiologia humana', 'Questões aleatórias'],
  },
  {
    id: 34,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Canto V Estância 81
E foi que, de doença crua e feia,
A mais que eu nunca vi, desampararam
Muitos a vida, e em terra estranha e alheia
Os ossos para sempre sepultaram.
Quem haverá que, sem ver, o creia?
Que tão disformemente ali lhe incharam
As gengivas na boca, que crescia
A carne e juntamente apodrecia?
Luís Vaz de Camées, Os Lusiadas.
É correto afirmar que Camões, neste trecho, descreveu
sintomas de`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `peste bubônica, zoonose transmitida por ratos que
assolou populações europeias e asiáticas no século XIV,
propagada pelas viagens comerciais.` },
      { id: 'B', type: 'text', value: `escorbuto, deficiência em vitamina C, doença comum nas
viagens ultramarinas europeias dos séculos XV e XVI, como
a de Vasco da Gama em busca das Índias.` },
      { id: 'C', type: 'text', value: `malária, doença de ampla ocorrência nas viagens de
exploradores para a África e Américas nos séculos XV e
XVI.` },
      { id: 'D', type: 'text', value: `varíola, doença viral disseminada no Velho Mundo e
trazida pelos navegantes dos séculos XV e XVI as colônias,
onde dizimou populações nativas.` },
      { id: 'E', type: 'text', value: `leishmaniose, parasitose transmitida por mosquitos e
contraída pelos primeiros exploradores da Amazônia e dos
Andes durante o século XVI.` },
    ],
    correct: 'B',
    explanation: `Inchaço e deterioração das gengivas durante longas viagens marítimas caracterizam escorbuto. A doença resulta da deficiência de vitamina C, associada à falta prolongada de alimentos frescos.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 35,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `A exploração da prata americana pelos espanhóis no século
XVI teve grande importância na história mundial porque`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `incentivou a exploração metálica em outras regiões do
globo, como Austrália e Ásia, além de facilitar a Revolução
Industrial inglesa.` },
      { id: 'B', type: 'text', value: `contribuiu para o declínio do império asteca, além de
causar impacto ambiental no litoral da América com a
formação de cidades em áreas até então despovoadas.` },
      { id: 'C', type: 'text', value: `acelerou a extinção de formas de acúmulo de capital
mercantil em escala global, substituindo-o pelo capital
industrial e financeiro.` },
      { id: 'D', type: 'text', value: `conectou o continente americano com partes do extremo
oriente, onde a prata também era explorada, além de
atrair grandes contingentes de africanos escravizados ao
Caribe.` },
      { id: 'E', type: 'text', value: `aumentou a circulação de moeda nas redes mundiais da
economia europeia, além de impactar as estruturas sociais
indígenas pelo crescimento da exploração de seu trabalho.` },
    ],
    correct: 'E',
    explanation: `A prata americana abasteceu os circuitos monetários e comerciais mundiais articulados à economia europeia. Sua extração intensificou a exploração do trabalho indígena e alterou as estruturas sociais das populações submetidas.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias'],
  },
  {
    id: 36,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `A base física do Brasil, ao principiar o século XVIII, era
profundamente diversa daquela que, mesmo numa
interpretação liberal do Tratado de Tordesilhas, fora
assentada no diploma de 1494. A expansão ao longo do litoral
levara ao Oiapoc, no norte, e ao Prata, no sul. O rush do ouro
estava determinando a ampliação da área oeste do mesmo
modo por que a “droga do sertão” explicava a façanha da
incorporação do mundo amazônico. Toda uma geografia
nova, política, social e econômica se estava escrevendo na
América portuguesa [...].
Arthur F. Reis. “Os tratados de limites”. História geral da civilização
brasileira, t.I, v.1, p.396.
A partir da leitura do trecho e de seus conhecimentos, é
correto afirmar:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `O Tratado de Tordesilhas representou uma permanente
barreira a exploração econômica dos sertões portugueses
da América, e só foi ultrapassada no século XVIII por
sertanistas que passaram a agir junto a coroa portuguesa.` },
      { id: 'B', type: 'text', value: `A ocupação da Amazônia foi determinante na formação do
território português da América porque as drogas do sertão
puderam ser exploradas por longos períodos, ao contrário
do efêmero ouro de Minas Gerais, Goiás e Mato Grosso.` },
      { id: 'C', type: 'text', value: `Embora a mineração tenha interiorizado a presença
portuguesa no continente, a definição das fronteiras
territoriais do Brasil só se completaria definitivamente
muito depois, no começo do século XX.` },
      { id: 'D', type: 'text', value: `Mesmo com o rush minerador, a economia colonial
portuguesa continuou isolada em relação aos principais
circuitos econômicos europeus de sua época, situação que
só se alteraria na primeira década do século XIX.` },
      { id: 'E', type: 'text', value: `A realidade econômica de Portugal e Espanha nos séculos
XVII e XVIII tornou o Tratado de Tordesilhas obsoleto, uma
vez que, nesse período, importava menos o comércio
extrativista e mais a produção industrial.` },
    ],
    correct: 'C',
    explanation: `A mineração e as drogas do sertão contribuíram para a interiorização da ocupação portuguesa. Contudo, a definição territorial não terminou no período colonial: negociações e incorporações prosseguiram até o início do século XX.`,
    subject: ['his'],
    topics: ['Brasil Colônia', 'Questões aleatórias'],
  },
  {
    id: 37,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `A economia do Império do Brasil foi caracterizada por:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Prevalecimento do trabalho assalariado imigrante e
investimentos estatais na indústria primária.` },
      { id: 'B', type: 'text', value: `Desenvolvimento de relações comerciais e diplomáticas
com países americanos, em detrimento das relações com
os países europeus.` },
      { id: 'C', type: 'text', value: `Conjugação entre desenvolvimento agrícola e industrial,
responsável por tornar o Brasil a 4ª maior economia do
mundo.` },
      { id: 'D', type: 'text', value: `Crescimento progressivo da dívida externa e
preponderância de uma economia agroexportadora.` },
      { id: 'E', type: 'text', value: `Redução contínua do tráfico de escravos e políticas
públicas voltadas a alfabetização e capacitação
profissional de trabalhadores pobres.` },
    ],
    correct: 'D',
    explanation: `A economia imperial permaneceu predominantemente agroexportadora, com destaque para o café, e recorreu a empréstimos externos. O crescimento da dívida externa e o peso das exportações agrícolas são características centrais do período.`,
    subject: ['his'],
    topics: ['Brasil Império', 'Questões aleatórias'],
  },
  {
    id: 38,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `A Cabanagem foi uma revolta social ocorrida no norte do
Brasil entre 1835 e 1840 e se insere em um contexto
frequentemente chamado de “Período Regencial”. Trata-se
de uma revolta que, junto a outras do mesmo período, tipifica`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `o impacto, no Brasil, de conflitos de fronteira com os
países hispânicos recém-formados na América.` },
      { id: 'B', type: 'text', value: `a expansão de interesses imperialistas franceses e
alemães em meio a geopolítica da Segunda Revolução
Industrial.` },
      { id: 'C', type: 'text', value: `a capacidade negociadora das elites imperiais em evitar
que questões regionais desembocassem em conflitos
armados.` },
      { id: 'D', type: 'text', value: `a persistência, no contexto nacional brasileiro, de disputas
entre jesuítas e governantes em torno da exploração do
trabalho escravo.` },
      { id: 'E', type: 'text', value: `o caráter violento e socialmente excludente do processo
de formação do Estado nacional brasileiro.` },
    ],
    correct: 'E',
    explanation: `A Cabanagem evidencia a violência e a exclusão social presentes na construção do Estado nacional. A repressão atingiu amplos setores populares e mostra que a unidade política não se formou por negociação pacífica e inclusiva.`,
    subject: ['his'],
    topics: ['Brasil Império', 'Questões aleatórias'],
  },
  {
    id: 39,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Uma das folhas de ontem estampou (...) o programa da
recepção presidencial em que, diante do corpo diplomático, da
mais fina sociedade do Rio de Janeiro, aqueles que deviam dar
ao país o exemplo das maneiras mais distintas e dos costumes
mais reservados elevaram o Corta-jaca a altura de uma
instituição social. Mas o Corta-jaca de que eu ouvira falar há
muito tempo, que vem a ser ele, Sr. Presidente? A mais baixa,
a mais chula, a mais grosseira de todas as danças selvagens,
a irmã gêmea do batuque, do cateretê e do samba. Mas nas
recepções presidenciais o “Corta-jaca” é executado com todas
as honras da música de Wagner, e não se quer que a
consciência deste país se revolte, que as nossas faces se
enrubesçam e que a mocidade se ria!
Discurso do senador Rui Barbosa, Didrio do Congresso Nacional,
8/11/1914, p. 2789.
A partir do texto, identifique a alternativa correta:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `A crítica permite compreender que, apesar da mudança de
regime político, as elites republicanas permaneceram
adeptas da cultura cosmopolita e europeia.` },
      { id: 'B', type: 'text', value: `O discurso elogia os esforços para compatibilizar a cultura
republicana com as práticas e tradições dos grupos
populares.` },
      { id: 'C', type: 'text', value: `A eclosão da Primeira Guerra Mundial contribuiu para a
difusão de uma política cultural de caráter nacionalista e
excludente.` },
      { id: 'D', type: 'text', value: `O programa musical adotado na recepção revelava
tendências modernistas ao conferir status de arte as
danças populares.` },
      { id: 'E', type: 'text', value: `A apresentação do maxixe Corta-jaca indicava uma
resposta para contornar a xenofobia e eugenia presentes
na cultura oficial.` },
    ],
    correct: 'A',
    explanation: `Rui Barbosa desqualifica danças populares e as opõe à música europeia legitimada como refinada. A crítica revela a permanência de padrões culturais europeizados entre as elites, apesar da mudança para o regime republicano.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias'],
  },
  {
    id: 40,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `A ascensão de regimes autoritários na Europa nas primeiras
décadas do século XX teve o amparo de milícias que
arregimentaram uma legião de indivíduos de origem social
heterogênea. Dentre estes grupos, destaca(m)-se:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `A Tropa de Proteção (SS), que foi uma organização
paramilitar incumbida de organizar as manifestações de
massa em apoio ao nazismo.` },
      { id: 'B', type: 'text', value: `Os Camisas Negras, que usaram ações violentas,
intimidação e assassinatos contra opositores políticos de
Mussolini.` },
      { id: 'C', type: 'text', value: `A Seção de Assalto (SA), que foi uma organização
paramilitar responsável por assegurar os interesses
nazistas nos territórios ocupados.` },
      { id: 'D', type: 'text', value: `As Falanges espanholas, que foram empregadas na
realização de atentados contra monarquistas e membros
da comunidade judaica.` },
      { id: 'E', type: 'text', value: `As milícias salazaristas, que atuaram para garantir a
resistência contra os interesses portugueses na Asia.` },
    ],
    correct: 'B',
    explanation: `Os Camisas Negras foram grupos fascistas que recorreram à intimidação e à violência contra adversários de Mussolini. Sua atuação contribuiu para a ascensão e consolidação do fascismo italiano.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias'],
  },
  {
    id: 41,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `A imagem é considerada uma das referências do movimento
artístico e cultural denominado Renascimento. Analise-a
atentamente.
A Primavera, Sandro Botticelli, século XV.
Essa imagem pode ser considerada renascentista porque`,
    images: [{"src":"/fuvest/2021/images/q41_botticelli.jpg","width":653,"height":427}],
    alternatives: [
      { id: 'A', type: 'text', value: `representa as personagens de forma simbólica e recorre a
temas da doutrina cristã.` },
      { id: 'B', type: 'text', value: `reforça a perspectiva teocêntrica, ao representar a Virgem
Maria no centro da composição pictórica.` },
      { id: 'C', type: 'text', value: `retoma o tema da pureza da alma feminina estabelecendo
uma releitura da narrativa sobre o pecado original.` },
      { id: 'D', type: 'text', value: `adota o contraste dramático entre tons claros e escuros
em sintonia com as tensões religiosas do período.` },
      { id: 'E', type: 'text', value: `utiliza a técnica da perspectiva tridimensional, que
provoca a ilusão de profundidade e de espaço.` },
    ],
    correct: 'E',
    explanation: `A composição organiza figuras e planos de modo a produzir sensação de profundidade e espaço, característica valorizada pelo Renascimento. A temática mitológica de A Primavera também afasta as interpretações teocêntricas apresentadas nas outras alternativas.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias'],
  },
  {
    id: 42,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Leia com atenção os dados do quadro e da tabela, relativos à epidemia de gripe espanhola na cidade de São Paulo, em 1918.

Fonte: Claudio Bertolli Filho. A gripe espanhola em São Paulo, 1918. Epidemia e sociedade. Rio de Janeiro: Paz e Terra, 2003, p. 47 e p. 91 (adaptado).

Considerando as informações apresentadas, é correto afirmar:`,
    images: [{"src":"/fuvest/2021/images/q42_tables.jpg","width":1283,"height":771}],
    alternatives: [
      { id: 'A', type: 'text', value: `A mortalidade gripal verificada nos distritos do Belenzinho e da Mooca foi resultado da alta concentração demográfica associada
as condições de habitação e de serviços.` },
      { id: 'B', type: 'text', value: `Os mais elevados índices de óbitos foram verificados entre os distritos que concentravam o maior contingente demográfico,
independentemente do tipo de moradia e dos benefícios existentes.` },
      { id: 'C', type: 'text', value: `O número de óbitos gripais colhido no Bom Retiro atesta que não há correlação entre a topografia, o tipo de moradia e as
origens sociais dos infectados.` },
      { id: 'D', type: 'text', value: `Apesar da semelhança entre as condições sanitárias e residenciais nos distritos da Sé e da Liberdade, o índice de mortalidade
verificado é significativamente distinto.` },
      { id: 'E', type: 'text', value: `Os dados indicam que a epidemia alastrou-se por toda a cidade, com igual impacto sobre a população, não importando a classe,
a profissão ou a topografia do distrito.` },
    ],
    correct: 'A',
    explanation: `Belenzinho e Mooca apresentam mortalidade elevada e integram áreas proletárias, com habitação coletiva e serviços sanitários precários. Os dados relacionam o impacto da gripe às condições sociais e de moradia, não apenas ao número absoluto de habitantes.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias'],
  },
  {
    id: 43,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Leia o texto:
A corrupção nos costumes das mulheres é ainda uma
coisa prejudicial ao fim que se propõe o governo, e a boa
conservação das leis do Estado (...). É o que aconteceu em
Esparta (...).
Tais são as observações feitas entre os lacedemônios:
no tempo da sua dominação as mulheres resolviam quase todas
as questões. De resto, que diferença existe em que as mulheres
governem, ou que os magistrados sejam governados por
mulheres? (...) as mulheres dos lacedemônios, mesmo no caso
de perigo, fizeram-lhes o maior mal possível.
Aristóteles, A politica. Rio de Janeiro: Ediouro, s./d., p. 79-80.
É correto afirmar sobre as mulheres na Grécia Antiga:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Obtiveram o direito a educação e acesso as escolas filosóficas
da cidade-Estado de Atenas durante o período clássico.` },
      { id: 'B', type: 'text', value: `Em Esparta, recebiam educação física na infância, tinham
direito a herança e administravam as propriedades na
ausência dos maridos.` },
      { id: 'C', type: 'text', value: `Adquiriram poderes políticos como cidadãs apenas com o
estabelecimento do Império Macedônico, sob a liderança
de Alexandre Magno.` },
      { id: 'D', type: 'text', value: `Em Atenas, podiam participar de algumas discussões na
Eclésia e possuíam direitos políticos durante o período da
democracia.` },
      { id: 'E', type: 'text', value: `Tornaram-se legisladoras e integrantes do conselho dos
mais velhos na cidade-Estado de Tebas.` },
    ],
    correct: 'B',
    explanation: `Em Esparta, as mulheres recebiam preparação física e podiam herdar e administrar propriedades, especialmente na ausência dos homens. Isso não equivalia à cidadania política plena, mas distinguia sua posição da observada em Atenas.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias'],
  },
  {
    id: 44,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `[No Brasil], a transição da predominância indígena para a
africana na composição da força de trabalho escrava ocorreu
aos poucos ao longo de aproximadamente meio século. Quando
os senhores de engenho, individualmente, acumulavam
recursos financeiros suficientes, compravam alguns cativos
africanos, e iam acrescentando outros a medida que capital e
crédito tornavam-se disponíveis. Em fins do século XVI, a mão
de obra dos engenhos era mista do ponto de vista racial, e a
proporção foi mudando crescentemente em favor dos africanos
importados e sua prole.
Stuart Schwartz, Segredos internos. Sao Paulo: Companhia das Letras,
1988, p.68.
Com base na leitura do trecho e em seus conhecimentos, pode-se afirmar corretamente que, no Brasil,`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `a implementação da escravidão de origem africana não fez
desaparecer a escravidão indígena, pois o emprego de
ambas podia variar segundo épocas e regiões específicas.` },
      { id: 'B', type: 'text', value: `do ponto de vista senhorial, valia a pena pagar mais caro por
escravos africanos porque estes viviam mais do que os
escravos indígenas, que eram mais baratos.` },
      { id: 'C', type: 'text', value: `o comércio de escravos africanos foi incompatível com o
comércio de indígenas porque eram exercidos por
diferentes traficantes, que concorriam entre si.` },
      { id: 'D', type: 'text', value: `havia créditos disponíveis para a compra de escravos
africanos, mas não de escravos indígenas, pois a Igreja
estava interessada na manutenção de boas relações com os
nativos.` },
      { id: 'E', type: 'text', value: `a escravização dos indígenas pelos portugueses foi
inviabilizada pelo fato de que os povos nativos americanos
eram contrários ao aprisionamento de seres humanos.` },
    ],
    correct: 'A',
    explanation: `O crescimento da escravidão africana não eliminou imediatamente a indígena. As duas coexistiram, com peso variável conforme a região, a atividade econômica e o período histórico.`,
    subject: ['his'],
    topics: ['Brasil Colônia', 'Questões aleatórias'],
  },
  {
    id: 45,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Considere as seguintes afirmações:
I. Uma pessoa em um trampolim é lançada para o alto. No
ponto mais alto de sua trajetória, sua aceleração será nula,
o que dá a sensação de “gravidade zero”.
II. A resultante das forças agindo sobre um carro andando em
uma estrada em linha reta a uma velocidade constante tem
módulo diferente de zero.
III. As forças peso e normal atuando sobre um livro em repouso
em cima de uma mesa horizontal formam um par açãoreação.
De acordo com as Leis de Newton:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Somente as afirmações I e II são corretas.` },
      { id: 'B', type: 'text', value: `Somente as afirmações I e III são corretas.` },
      { id: 'C', type: 'text', value: `Somente as afirmações II e III são corretas.` },
      { id: 'D', type: 'text', value: `Todas as afirmações são corretas.` },
      { id: 'E', type: 'text', value: `Nenhuma das afirmações é correta.` },
    ],
    correct: 'E',
    explanation: `No ponto mais alto do salto, a velocidade vertical é instantaneamente nula, mas a aceleração gravitacional não é. Movimento retilíneo uniforme exige resultante nula. Peso e normal atuam no mesmo livro e não formam par ação-reação. Nenhuma afirmação é correta.`,
    subject: ['fis'],
    topics: ['Leis de Newton e dinâmica', 'Questões aleatórias'],
  },
  {
    id: 46,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Um vídeo bastante popular na Internet mostra um curioso
experimento em que uma garrafa de água pendurada por uma
corda é mantida suspensa por um palito de dente apoiado em
uma mesa.
O “truque” só é possível pelo uso de outros palitos, formando um
tipo de treliça. A figura a direita da foto mostra uma visão lateral
do conjunto, destacando duas das forças que atuam sobre o
palito 1.
Nesta figura, F é a força que o palito 2 exerce sobre o palito 1
(aplicada a uma distância L do ponto A na borda da mesa), P é a
componente vertical da força que a corda exerce sobre o palito 1
(aplicada a uma distância d do ponto A) e θ é o ângulo entre a
direção da força F e a vertical. Para que o conjunto se mantenha
estático, porém na iminência de rotacionar, a relação entre os
módulos de F e P deve ser:

Note e adote: Despreze o peso dos palitos em relação aos módulos das forças F⃗ e P⃗.`,
    images: [{"src":"/fuvest/2021/images/q46_figure.jpg","width":572,"height":390}],
    alternatives: [
      { id: 'A', type: 'text', value: `|F⃗| = |P⃗|d/(L cos θ)` },
      { id: 'B', type: 'text', value: `|F⃗| = |P⃗|d/(L sen θ)` },
      { id: 'C', type: 'text', value: `|F⃗| = |P⃗| cos θ` },
      { id: 'D', type: 'text', value: `|F⃗| = |P⃗|L cos θ/d` },
      { id: 'E', type: 'text', value: `|F⃗| = |P⃗|L sen θ/d` },
    ],
    correct: 'A',
    explanation: `O equilíbrio de torques em torno de A exige que o momento de P, de módulo Pd, iguale o da componente vertical de F, de módulo F cos θ, aplicada a L. Assim, FL cos θ = Pd e F = Pd/(L cos θ).`,
    subject: ['fis'],
    topics: ['Leis de Newton e dinâmica', 'Questões aleatórias'],
  },
  {
    id: 47,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Os smartphones modernos vêm equipados com um acelerômetro,
dispositivo que mede acelerações a que o aparelho está
submetido.
O gráfico foi gerado a partir de dados extraídos por um aplicativo
do acelerômetro de um smartphone pendurado por um fio e
colocado para oscilar sob a ação da gravidade. O gráfico mostra os
dados de uma das componentes da aceleração (corrigidos por um
valor de referência constante) em função do tempo.
Com base nos dados do gráfico e considerando que o movimento
do smartphone seja o de um pêndulo simples a ângulos pequenos,
o comprimento do fio é de aproximadamente:

Note e adote: Use π = 3. Aceleração da gravidade: g = 10 m/s².`,
    images: [{"src":"/fuvest/2021/images/q47_graph.jpg","width":462,"height":378}],
    alternatives: [
      { id: 'A', type: 'text', value: `5 cm` },
      { id: 'B', type: 'text', value: `10 cm` },
      { id: 'C', type: 'text', value: `50 cm` },
      { id: 'D', type: 'text', value: `100 cm` },
      { id: 'E', type: 'text', value: `150 cm` },
    ],
    correct: 'C',
    explanation: `O período lido no gráfico é aproximadamente 1,4 s. Para um pêndulo simples, L = g(T/2π)². Usando g = 10 m/s² e π ≈ 3, obtém-se L ≈ 10(1,4/6)² ≈ 0,54 m, cerca de 50 cm.`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 48,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Uma comunidade rural tem um consumo de energia elétrica de
2 MWh por mês. Para suprir parte dessa demanda, os
moradores têm interesse em instalar uma miniusina
hidrelétrica em uma queda d’água de 15 m de altura com vazão
de 10 litros por segundo. O restante do consumo seria
complementado com painéis de energia solar que produzem
40 kWh de energia por mês cada um.
Considerando que a miniusina hidrelétrica opere 24h por dia
com 100% de eficiência, o número mínimo de painéis solares
necessários para suprir a demanda da comunidade seria de:

Note e adote: Densidade da água = 1 kg/litro; 1 mês = 30 dias; aceleração da gravidade g = 10 m/s².`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `12` },
      { id: 'B', type: 'text', value: `23` },
      { id: 'C', type: 'text', value: `30` },
      { id: 'D', type: 'text', value: `45` },
      { id: 'E', type: 'text', value: `50` },
    ],
    correct: 'B',
    explanation: `A vazão corresponde a 10 kg/s, fornecendo potência 10 × 10 × 15 = 1500 W = 1,5 kW. Em 720 horas, a usina gera 1080 kWh. Faltam 2000 − 1080 = 920 kWh, que exigem 920/40 = 23 painéis.`,
    subject: ['fis'],
    topics: ['Trabalho, energia e potência', 'Questões aleatórias'],
  },
  {
    id: 49,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Ondas estacionárias podem ser produzidas de diferentes
formas, dentre elas esticando-se uma corda homogênea, fixa
em dois pontos separados por uma distância L, e pondo-a a
vibrar. A extremidade a direita é acoplada a um gerador de
frequências, enquanto a outra extremidade está sujeita a uma
força tensional produzida ao se pendurar a corda um objeto de
massa m₀ mantido em repouso. O arranjo experimental é
ilustrado na figura. Ajustando a frequência do gerador para f₁,
obtém-se na corda uma onda estacionária que vibra em seu
primeiro harmônico.
Ao trocarmos o objeto pendurado por outro de massa M, observa-se que a frequência do gerador para que a corda continue a vibrar
no primeiro harmônico deve ser ajustada para 2f₁. Com isso, é
correto concluir que a razão M/m₀ deve ser:

Note e adote: A velocidade da onda propagando-se em uma corda é diretamente proporcional à raiz quadrada da tensão sob a qual a corda está submetida.`,
    images: [{"src":"/fuvest/2021/images/q49_wave.jpg","width":497,"height":223}],
    alternatives: [
      { id: 'A', type: 'text', value: `1/4` },
      { id: 'B', type: 'text', value: `1/2` },
      { id: 'C', type: 'text', value: `1` },
      { id: 'D', type: 'text', value: `2` },
      { id: 'E', type: 'text', value: `4` },
    ],
    correct: 'E',
    explanation: `Para a mesma corda e o mesmo comprimento, a frequência fundamental é proporcional à velocidade de propagação, que é proporcional à raiz quadrada da tensão. Dobrar a frequência exige quadruplicar a tensão e, portanto, a massa suspensa: M/m₀ = 4.`,
    subject: ['fis'],
    topics: ['Leis de Newton e dinâmica', 'Questões aleatórias'],
  },
  {
    id: 50,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Um mol de um gás ideal percorre o processo cíclico ABCA em
um diagrama P-V, conforme mostrado na figura, sendo que a
etapa AB é isobárica, a etapa BC é isocórica e a etapa CA é
isotérmica.
Considere as seguintes afirmações:
I. O gás libera calor tanto na etapa BC quanto na etapa CA.
II. O módulo do trabalho realizado pelo gás é não nulo tanto
na etapa AB quanto na etapa BC.
III. O gás tem sua temperatura aumentada tanto na etapa AB
quanto na etapa CA.
É correto o que se afirma em:`,
    images: [{"src":"/fuvest/2021/images/q50_pv.jpg","width":462,"height":288}],
    alternatives: [
      { id: 'A', type: 'text', value: `Nenhuma delas.` },
      { id: 'B', type: 'text', value: `Apenas I.` },
      { id: 'C', type: 'text', value: `Apenas II.` },
      { id: 'D', type: 'text', value: `Apenas III.` },
      { id: 'E', type: 'text', value: `Apenas I e II.` },
    ],
    correct: 'B',
    explanation: `Em BC, o volume é constante e a temperatura diminui, de modo que o gás libera calor. Em CA, a compressão isotérmica também libera calor. Em BC o trabalho é zero, e em CA a temperatura não varia. Apenas I é verdadeira.`,
    subject: ['fis'],
    topics: ['Trabalho, energia e potência', 'Questões aleatórias'],
  },
  {
    id: 51,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `O olho humano constitui uma complexa estrutura capaz de
controlar a luz recebida e produzir imagens nítidas. Em pessoas
com visão normal, o olho é capaz de acomodar o cristalino para
focalizar sobre a retina a luz que vem dos objetos, desde que
não estejam muito próximos. Pessoas míopes, por outro lado,
apresentam dificuldades em enxergar de longe. Ao focalizar
objetos situados além do chamado ponto remoto (PR), a
imagem forma-se a frente da retina, conforme ilustrado na
figura.
Neste caso, lentes corretivas são necessárias a fim de que o
indivíduo observe o objeto de forma nítida.
Qual arranjo esquemático melhor descreve a correção
realizada por uma lente receitada por um oftalmologista no
caso de um indivíduo míope?`,
    images: [{"src":"/fuvest/2021/images/q51_myopia.jpg","width":463,"height":163},{"src":"/fuvest/2021/images/q51_alts.jpg","width":633,"height":991}],
    alternatives: [
      { id: 'A', type: 'text', value: `Alternativa A da figura.` },
      { id: 'B', type: 'text', value: `Alternativa B da figura.` },
      { id: 'C', type: 'text', value: `Alternativa C da figura.` },
      { id: 'D', type: 'text', value: `Alternativa D da figura.` },
      { id: 'E', type: 'text', value: `Alternativa E da figura.` },
    ],
    correct: 'B',
    explanation: `A miopia é corrigida com lente divergente, que faz os raios de um objeto distante parecerem vir do ponto remoto do olho. Com isso, o sistema ocular consegue focalizar a imagem sobre a retina. O arranjo B representa essa correção.`,
    subject: ['fis'],
    topics: ['Óptica', 'Questões aleatórias'],
  },
  {
    id: 52,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Dois balões negativamente carregados são utilizados para induzir
cargas em latas metálicas, alinhadas e em contato, que,
inicialmente, estavam eletricamente neutras.
Conforme mostrado na figura, os balões estão próximos, mas
jamais chegam a tocar as latas. Nessa configuração, as latas 1, 2
e 3 terão, respectivamente, carga total:

Note e adote:
O contato entre dois objetos metálicos permite a passagem de cargas
elétricas entre um e outro.
Suponha que o ar no entorno seja um isolante perfeito.`,
    images: [{"src":"/fuvest/2021/images/q52_cans.jpg","width":489,"height":192}],
    alternatives: [
      { id: 'A', type: 'text', value: `1: zero; 2: negativa; 3: zero.` },
      { id: 'B', type: 'text', value: `1: positiva; 2: zero; 3: positiva.` },
      { id: 'C', type: 'text', value: `1: zero; 2: positiva; 3: zero.` },
      { id: 'D', type: 'text', value: `1: positiva; 2: negativa; 3: positiva.` },
      { id: 'E', type: 'text', value: `1: zero; 2: zero; 3: zero.` },
    ],
    correct: 'D',
    explanation: `Os balões negativos repelem elétrons das extremidades para a lata central, enquanto as latas estão em contato. As latas 1 e 3 ficam positivas, e a lata 2 fica negativa; a carga total do conjunto continua nula.`,
    subject: ['fis'],
    topics: ['Eletricidade', 'Questões aleatórias'],
  },
  {
    id: 53,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Em uma luminária de mesa, há duas lâmpadas que podem ser
acesas individualmente ou ambas ao mesmo tempo, com cada
uma funcionando sob a tensão nominal determinada pelo
fabricante, de modo que a intensidade luminosa de cada
lâmpada seja sempre a mesma. Entre os circuitos
apresentados, indique aquele que corresponde a um arranjo
que permite o funcionamento conforme essa descrição.

Note e adote: Suponha que as lâmpadas funcionem de maneira ôhmica, ou seja, da mesma forma que um resistor.`,
    images: [{"src":"/fuvest/2021/images/q53_circuits.jpg","width":653,"height":453}],
    alternatives: [
      { id: 'A', type: 'text', value: `Circuito (1)` },
      { id: 'B', type: 'text', value: `Circuito (2)` },
      { id: 'C', type: 'text', value: `Circuito (3)` },
      { id: 'D', type: 'text', value: `Circuito (4)` },
      { id: 'E', type: 'text', value: `Circuito (5)` },
    ],
    correct: 'B',
    explanation: `As lâmpadas devem estar em paralelo com a fonte, cada uma com seu próprio interruptor em série no respectivo ramo. Assim podem ser acionadas independentemente e recebem a mesma tensão nominal. Esse arranjo é o circuito 2.`,
    subject: ['fis'],
    topics: ['Eletricidade', 'Questões aleatórias'],
  },
  {
    id: 54,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Uma esfera metálica de massa m e carga elétrica +q descansa
sobre um piso horizontal isolante, em uma região em que há
um campo elétrico uniforme e também horizontal, de
intensidade E, conforme mostrado na figura. Em certo
instante, com auxílio de uma barra isolante, a esfera é erguida
ao longo de uma linha vertical, com velocidade constante e
contra a ação da gravidade, a uma altura total h, sem nunca
abandonar a região de campo elétrico uniforme.
Ao longo do movimento descrito, os trabalhos realizados pela
força gravitacional e pela força elétrica sobre a esfera são,
respectivamente:`,
    images: [{"src":"/fuvest/2021/images/q54_figure.jpg","width":462,"height":93},{"src":"/fuvest/2021/images/q54_source_2.jpg","width":462,"height":93},{"src":"/fuvest/2021/images/q54_source_3.jpg","width":462,"height":93}],
    alternatives: [
      { id: 'A', type: 'text', value: `mgh e qEh` },
      { id: 'B', type: 'text', value: `—mgh e 0` },
      { id: 'C', type: 'text', value: `0 e —qEh` },
      { id: 'D', type: 'text', value: `—mgh e —qEh` },
      { id: 'E', type: 'text', value: `mgh e 0` },
    ],
    correct: 'B',
    explanation: `O deslocamento vertical é contrário ao peso, cujo trabalho é −mgh. A força elétrica é horizontal e perpendicular ao deslocamento, realizando trabalho nulo. Logo os trabalhos são −mgh e 0.`,
    subject: ['fis'],
    topics: ['Leis de Newton e dinâmica', 'Questões aleatórias'],
  },
  {
    id: 55,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `A energia irradiada pelo Sol provém da conversão de massa em
energia durante reações de fusão de núcleos de hidrogênio
para produzir núcleos de hélio. Atualmente, essas reações
permitem ao Sol emitir radiação luminosa a uma potência de
aproximadamente 4 × 10²⁶ W. Supondo que essa potência
tenha sido mantida desde o nascimento do Sol, cerca de 5 × 10⁹
anos atrás, a massa correspondente aquela perdida pelo Sol até
hoje é mais próxima de

Note e adote: Velocidade da luz no vácuo = 3 × 10⁸ m/s. Considere que um ano tem cerca de 3 × 10⁷ s.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `10⁷ kg.` },
      { id: 'B', type: 'text', value: `10¹⁷ kg.` },
      { id: 'C', type: 'text', value: `10²⁷ kg.` },
      { id: 'D', type: 'text', value: `10³⁷ kg.` },
      { id: 'E', type: 'text', value: `10⁴⁷ kg.` },
    ],
    correct: 'C',
    explanation: `O tempo é aproximadamente 5 × 10⁹ × 3 × 10⁷ = 1,5 × 10¹⁷ s. A energia emitida é E = Pt ≈ 6 × 10⁴³ J. Pela relação E = mc², a massa perdida é cerca de 6 × 10⁴³/(9 × 10¹⁶) ≈ 6,7 × 10²⁶ kg, mais próxima de 10²⁷ kg.`,
    subject: ['fis'],
    topics: ['Trabalho, energia e potência', 'Questões aleatórias'],
  },
  {
    id: 56,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `As astronomers gaze into the depths of space, they do so with
unease: They don’t know precisely what the universe is made of.
Surprisingly, no one knows the stars’ exact chemical
composition: how many carbon, nitrogen and oxygen atoms
they have relative to hydrogen, the most common element.
These numbers are crucial, because they affect how stars
live and die, what types of planets form and even how readily
life might arise on other worlds.
Twenty years ago, astronomers expressed confidence in the
numbers they had been working with. Now, not so much. The
problem lies not in the far corners of the cosmos, but much
closer to home. Astonishingly, scientists don’t know exactly
what the sun is made of. As a result, they don’t know what the
other stars are made of, either.
“The sun is a fundamental yardstick,” says Martin Asplund,
an astrophysicist at the Max Planck Institute for Astrophysics, in
Germany. “When we determine the abundance of a certain
element in a star or a galaxy or a gas cloud anywhere in the
universe, we use the sun as a reference point.”
The sun’s location in the Milky Way also makes it a good
representative of the entire galaxy. Most stars reside in giant
galaxies like the Milky Way, which makes the sun a touchstone
for the entire cosmos.
For nearly a century, astronomers have judged stars normal
or not by seeing whether their chemical compositions match the
sun’s. Most stars near us do; some don’t.
Scientific American. 1 July 2020. Adaptado.

Segundo o texto, conhecer a composição de elementos
químicos que constituem as estrelas é fundamental, pois ela,
entre outros aspectos,`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `fornece evidências da ligação entre as idades das estrelas.` },
      { id: 'B', type: 'text', value: `sugere a existência de planetas rochosos formados por
elementos pesados.` },
      { id: 'C', type: 'text', value: `influencia na possibilidade de presença de vida em outros
locais do universo.` },
      { id: 'D', type: 'text', value: `determina condições cosmológicas da evolução de
aglomerados estelares.` },
      { id: 'E', type: 'text', value: `possibilita a síntese de moléculas em nuvens de gás e poeira
cósmica.` },
    ],
    correct: 'C',
    explanation: `O texto afirma que a composição química das estrelas afeta, entre outros aspectos, a facilidade com que a vida pode surgir em outros mundos. Portanto conhecer essa composição é relevante para avaliar a possibilidade de vida no universo.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 57,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `As astronomers gaze into the depths of space, they do so with
unease: They don’t know precisely what the universe is made of.
Surprisingly, no one knows the stars’ exact chemical
composition: how many carbon, nitrogen and oxygen atoms
they have relative to hydrogen, the most common element.
These numbers are crucial, because they affect how stars
live and die, what types of planets form and even how readily
life might arise on other worlds.
Twenty years ago, astronomers expressed confidence in the
numbers they had been working with. Now, not so much. The
problem lies not in the far corners of the cosmos, but much
closer to home. Astonishingly, scientists don’t know exactly
what the sun is made of. As a result, they don’t know what the
other stars are made of, either.
“The sun is a fundamental yardstick,” says Martin Asplund,
an astrophysicist at the Max Planck Institute for Astrophysics, in
Germany. “When we determine the abundance of a certain
element in a star or a galaxy or a gas cloud anywhere in the
universe, we use the sun as a reference point.”
The sun’s location in the Milky Way also makes it a good
representative of the entire galaxy. Most stars reside in giant
galaxies like the Milky Way, which makes the sun a touchstone
for the entire cosmos.
For nearly a century, astronomers have judged stars normal
or not by seeing whether their chemical compositions match the
sun’s. Most stars near us do; some don’t.
Scientific American. 1 July 2020. Adaptado.

No texto, o astrofísico Martin Asplund emprega a frase “The
sun is a fundamental yardstick” (L. 15), por considerar o Sol`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `um mistério.` },
      { id: 'B', type: 'text', value: `uma estrutura.` },
      { id: 'C', type: 'text', value: `um processo.` },
      { id: 'D', type: 'text', value: `um sistema.` },
      { id: 'E', type: 'text', value: `um parâmetro.` },
    ],
    correct: 'E',
    explanation: `Yardstick significa padrão de comparação. Como o Sol serve de referência para medir a abundância de elementos em outros astros, a expressão o caracteriza como um parâmetro.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 58,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `As astronomers gaze into the depths of space, they do so with
unease: They don’t know precisely what the universe is made of.
Surprisingly, no one knows the stars’ exact chemical
composition: how many carbon, nitrogen and oxygen atoms
they have relative to hydrogen, the most common element.
These numbers are crucial, because they affect how stars
live and die, what types of planets form and even how readily
life might arise on other worlds.
Twenty years ago, astronomers expressed confidence in the
numbers they had been working with. Now, not so much. The
problem lies not in the far corners of the cosmos, but much
closer to home. Astonishingly, scientists don’t know exactly
what the sun is made of. As a result, they don’t know what the
other stars are made of, either.
“The sun is a fundamental yardstick,” says Martin Asplund,
an astrophysicist at the Max Planck Institute for Astrophysics, in
Germany. “When we determine the abundance of a certain
element in a star or a galaxy or a gas cloud anywhere in the
universe, we use the sun as a reference point.”
The sun’s location in the Milky Way also makes it a good
representative of the entire galaxy. Most stars reside in giant
galaxies like the Milky Way, which makes the sun a touchstone
for the entire cosmos.
For nearly a century, astronomers have judged stars normal
or not by seeing whether their chemical compositions match the
sun’s. Most stars near us do; some don’t.
Scientific American. 1 July 2020. Adaptado.

Conforme o texto, um critério tradicionalmente utilizado por
astrônomos para avaliar estrelas envolve`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `verificar se sua composição se assemelha a do Sol.` },
      { id: 'B', type: 'text', value: `selecionar galáxias compostas por estrelas padrão.` },
      { id: 'C', type: 'text', value: `calcular níveis de radiação estelar e de energia gravitacional.` },
      { id: 'D', type: 'text', value: `medir a densidade e grau de opacidade de nêutrons.` },
      { id: 'E', type: 'text', value: `testar a circulação atmosférica em torno dos astros.` },
    ],
    correct: 'A',
    explanation: `Segundo o último parágrafo, há quase um século os astrônomos avaliam se estrelas são normais comparando sua composição química com a do Sol. A semelhança com o Sol constitui o critério descrito.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 59,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `I knew TikTok existed, but I didn’t fully understand what it
was until a few months ago. I also realized that something
radical, yet largely invisible, is happening on the internet — with
implications we still don’t understand.
When I was growing up, I took it for granted that the people
who became famous enough to be listened to by a crowd had
worked hard for that accolade and generally operated with the
support of an institution or an established industry.
The idea that I, as a teenager in my bedroom, might
suddenly communicate with 100,000 people or more, would
have seemed bizarre.
Today’s kids no longer see life in these hierarchical and
institutional terms. Yes, their physical worlds are often
constrained by parental controls, a lack of access to the
outdoors and insane over-scheduling.
But despite that (or, more accurately, in reaction to that),
they see the internet as a constantly evolving frontier, where it
is still possible for a bold and lucky pioneer to grab some land or
find a voice. Most voices on the internet never travel beyond a
relatively small network, and much of the content that goes
viral on platforms such as TikTok, YouTube or Instagram does
so because of unseen institutions at work (for example, a public
relations team aiming to boost a celebrity’s profile).
Fame can suddenly appear — and then just as suddenly be
taken away again, because the audience gets bored, the
platform’s algorithms change or the cultural trend that a
breakout video has tapped into goes out of fashion.
For a teenager, social media can seem like a summer garden
at dusk filled with fireflies: spots of lights suddenly flare up and
then die down, moving in an unpredictable, capricious display.
Is this a bad thing? We will not know for several years.
Financial Times. 5 February 2020. Adaptado.

Conforme o texto, um aspecto associado ao caráter efêmero da
popularidade de um usuário da internet, relativo ao uso de
plataformas como TikTok, é`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `a falta de conhecimento técnico dos adolescentes para o
manejo de hardware.` },
      { id: 'B', type: 'text', value: `a perda de interesse do público pelas publicações até então
atrativas.` },
      { id: 'C', type: 'text', value: `a competição entre usuários com atitudes pouco éticas.` },
      { id: 'D', type: 'text', value: `a variedade limitada dos vídeos postados, em razão do
tratamento precário das imagens.` },
      { id: 'E', type: 'text', value: `a alta capacidade dos vídeos para viralizar entre grupos com
interesses conflitantes.` },
    ],
    correct: 'B',
    explanation: `O texto afirma que a fama pode desaparecer porque o público se cansa, os algoritmos mudam ou a tendência sai de moda. A perda de interesse da audiência nas publicações é uma das causas explicitamente citadas.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 60,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `I knew TikTok existed, but I didn’t fully understand what it
was until a few months ago. I also realized that something
radical, yet largely invisible, is happening on the internet — with
implications we still don’t understand.
When I was growing up, I took it for granted that the people
who became famous enough to be listened to by a crowd had
worked hard for that accolade and generally operated with the
support of an institution or an established industry.
The idea that I, as a teenager in my bedroom, might
suddenly communicate with 100,000 people or more, would
have seemed bizarre.
Today’s kids no longer see life in these hierarchical and
institutional terms. Yes, their physical worlds are often
constrained by parental controls, a lack of access to the
outdoors and insane over-scheduling.
But despite that (or, more accurately, in reaction to that),
they see the internet as a constantly evolving frontier, where it
is still possible for a bold and lucky pioneer to grab some land or
find a voice. Most voices on the internet never travel beyond a
relatively small network, and much of the content that goes
viral on platforms such as TikTok, YouTube or Instagram does
so because of unseen institutions at work (for example, a public
relations team aiming to boost a celebrity’s profile).
Fame can suddenly appear — and then just as suddenly be
taken away again, because the audience gets bored, the
platform’s algorithms change or the cultural trend that a
breakout video has tapped into goes out of fashion.
For a teenager, social media can seem like a summer garden
at dusk filled with fireflies: spots of lights suddenly flare up and
then die down, moving in an unpredictable, capricious display.
Is this a bad thing? We will not know for several years.
Financial Times. 5 February 2020. Adaptado.

No texto, a referência a um jardim de verão ao entardecer,
repleto de vagalumes, sugere que, para os adolescentes, as
mídias sociais`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `são fonte de pressão e tensão na família.` },
      { id: 'B', type: 'text', value: `favorecem a comunicação dos mais tímidos.` },
      { id: 'C', type: 'text', value: `são pautadas por certa imprevisibilidade.` },
      { id: 'D', type: 'text', value: `garantem a funcionalidade de grupos.` },
      { id: 'E', type: 'text', value: `promovem igualdade de expressão.` },
    ],
    correct: 'C',
    explanation: `A comparação com vagalumes que acendem e apagam de modo caprichoso destaca a oscilação imprevisível da visibilidade nas redes. A fama pode surgir e desaparecer rapidamente.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 61,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `I ain't gonna work on Maggie's farm no more
I ain't gonna work on Maggie's farm no more
Well, I wake up in the morning
Fold my hands and pray for rain
I got a head full of ideas
That are drivin' me insane
It's a shame the way she makes me scrub the floor
I ain't gonna work on Maggie's farm no more
I ain't gonna work for Maggie's brother no more
I ain't gonna work for Maggie's brother no more
Well, he hands you a nickel
He hands you a dime
He asks you with a grin
If you're havin' a good time
Then he fines you every time you slam the door
I ain't gonna work for Maggie's brother no more
I ain't gonna work for Maggie's pa no more
No, I ain't gonna work for Maggie's pa no more
Well, he puts his cigar out in your face just for kicks
His bedroom window it is made out of bricks
The National Guard stands around his door
Ah, I ain't gonna work for Maggie's pa no more, alright
Bob Dylan, “Maggie’s Farm”, do album Bringing it all back home, 1965.
Nestas estrofes, o conjunto de cenas descritas mostra que a
principal dificuldade experimentada pela pessoa cuja história é
contada na letra da música refere-se`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `ao relacionamento difícil com familiares e amigos.` },
      { id: 'B', type: 'text', value: `a falta de criatividade diante das exigências do trabalho.` },
      { id: 'C', type: 'text', value: `as restrições impostas a sua liberdade e expressão pessoal.` },
      { id: 'D', type: 'text', value: `a competição por salários mais altos com colegas de trabalho.` },
      { id: 'E', type: 'text', value: `as dificuldades de viver fora de um grande centro urbano.` },
    ],
    correct: 'C',
    explanation: `As cenas mostram trabalho imposto, punições e violência, em contraste com a vontade e as ideias do narrador. A dificuldade central é a restrição à liberdade e à expressão pessoal.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 62,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Leia os provérbios:
A alternativa que melhor expressa a ideia contida em cada um
dos três provérbios, na ordem em que aparecem, é:`,
    images: [{"src":"/fuvest/2021/images/q62_source_1.jpg","width":538,"height":234}],
    alternatives: [
      { id: 'A', type: 'text', value: `Esperteza; desconfiança; foco.` },
      { id: 'B', type: 'text', value: `Precipitação; ingratidão; esperança.` },
      { id: 'C', type: 'text', value: `Observação; certeza; experiência.` },
      { id: 'D', type: 'text', value: `Exagero; harmonia; desaprovação.` },
      { id: 'E', type: 'text', value: `Orgulho; desprezo; teimosia.` },
    ],
    correct: 'B',
    explanation: `Os três provérbios apontam, na ordem apresentada, para agir antes da hora, desprezar um benefício recebido e preservar a expectativa de um resultado melhor. Correspondem a precipitação, ingratidão e esperança.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 63,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Uma última gargalhada estrondosa. E depois, o silêncio. O palhaço
jazia imóvel no chão. Mas seu rosto continua sorrindo, para
sempre. Porque a carreira original do Coringa era para durar
apenas 30 páginas. O tempo de envenenar Gotham, sequestrar
Robin, enfiar um par de sopapos no Homem-Morcego e disparar
o primeiro “vou te matar” da sua relação. Na briga final do
Batman nO 1, o “horripilante bufão” sofria um final digno de sua
desumana ironia: ao tropeçar, cravava sua própria adaga no
peito. Assim decidiram e desenharam seus pais, os artistas Bill
Finger, Bob Kane e Jerry Robinson. Entretanto, o criminoso
mostrou, já em sua primeira aventura, um enorme talento para
se rebelar contra a ordem estabelecida. Seu carisma seduziu a
editora DC Comics, que impôs o acréscimo de um quadrinho. Já
dentro da ambulância, vinha a tona “um dado desconcertante”.
E então um médico sentenciava: “Continua vivo. E vai
sobreviver!”.
Tommaso Koch. “O Coringa completa 80 anos e na Espanha ganha duas HQs,
que inspiram debates filosdficos sobre a liberdade”. El Pais. Junho/2020.

No fragmento “ao tropeçar, cravava sua própria adaga no
peito.” (L. 8-9), a oração em negrito abrange, simultaneamente,
as noções de`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `proporção e explicação.` },
      { id: 'B', type: 'text', value: `causa e proporção.` },
      { id: 'C', type: 'text', value: `tempo e consequência.` },
      { id: 'D', type: 'text', value: `explicação e consequência.` },
      { id: 'E', type: 'text', value: `tempo e causa.` },
    ],
    correct: 'E',
    explanation: `Ao tropeçar indica tanto o momento em que o ferimento acontece quanto sua causa. A oração reduzida expressa simultaneamente tempo e causa.`,
    subject: ['por'],
    topics: ['Gramática', 'Questões aleatórias'],
  },
  {
    id: 64,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Uma última gargalhada estrondosa. E depois, o silêncio. O palhaço
jazia imóvel no chão. Mas seu rosto continua sorrindo, para
sempre. Porque a carreira original do Coringa era para durar
apenas 30 páginas. O tempo de envenenar Gotham, sequestrar
Robin, enfiar um par de sopapos no Homem-Morcego e disparar
o primeiro “vou te matar” da sua relação. Na briga final do
Batman nO 1, o “horripilante bufão” sofria um final digno de sua
desumana ironia: ao tropeçar, cravava sua própria adaga no
peito. Assim decidiram e desenharam seus pais, os artistas Bill
Finger, Bob Kane e Jerry Robinson. Entretanto, o criminoso
mostrou, já em sua primeira aventura, um enorme talento para
se rebelar contra a ordem estabelecida. Seu carisma seduziu a
editora DC Comics, que impôs o acréscimo de um quadrinho. Já
dentro da ambulância, vinha a tona “um dado desconcertante”.
E então um médico sentenciava: “Continua vivo. E vai
sobreviver!”.
Tommaso Koch. “O Coringa completa 80 anos e na Espanha ganha duas HQs,
que inspiram debates filosdficos sobre a liberdade”. El Pais. Junho/2020.

As vírgulas em “E depois, o silêncio.” (L. 1) e em “Mas seu rosto
continua sorrindo, para sempre.” (L. 2-3) são usadas,
respectivamente, com a mesma finalidade que as vírgulas em`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `“Após a queda, tomaram mais cuidado.” e “Quanto mais
espaço, mais liberdade.”.` },
      { id: 'B', type: 'text', value: `“Aos estrangeiros, ofereceram iguarias.” e “Limpavam a
casa, e preparávamos as refeições.”.` },
      { id: 'C', type: 'text', value: `“Colheram trigo e nós, algodão.” e “Eles se encontraram nas
férias, mas não viajaram.”.` },
      { id: 'D', type: 'text', value: `“Para meus amigos, o melhor.” e “Organizava tudo,
cautelosamente.".` },
      { id: 'E', type: 'text', value: `“Viu o espetáculo, considerado o maior fenômeno de
bilheteria.” e “‘Conheço muito bem’, afirmou o rapaz.”.` },
    ],
    correct: 'D',
    explanation: `Em “E depois, o silêncio”, a vírgula marca uma elipse verbal, como em “Para meus amigos, o melhor”. Em “sorrindo, para sempre”, destaca-se uma circunstância adverbial, como em “Organizava tudo, cautelosamente”.`,
    subject: ['por'],
    topics: ['Gramática', 'Questões aleatórias'],
  },
  {
    id: 65,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Uma última gargalhada estrondosa. E depois, o silêncio. O palhaço
jazia imóvel no chão. Mas seu rosto continua sorrindo, para
sempre. Porque a carreira original do Coringa era para durar
apenas 30 páginas. O tempo de envenenar Gotham, sequestrar
Robin, enfiar um par de sopapos no Homem-Morcego e disparar
o primeiro “vou te matar” da sua relação. Na briga final do
Batman nO 1, o “horripilante bufão” sofria um final digno de sua
desumana ironia: ao tropeçar, cravava sua própria adaga no
peito. Assim decidiram e desenharam seus pais, os artistas Bill
Finger, Bob Kane e Jerry Robinson. Entretanto, o criminoso
mostrou, já em sua primeira aventura, um enorme talento para
se rebelar contra a ordem estabelecida. Seu carisma seduziu a
editora DC Comics, que impôs o acréscimo de um quadrinho. Já
dentro da ambulância, vinha a tona “um dado desconcertante”.
E então um médico sentenciava: “Continua vivo. E vai
sobreviver!”.
Tommaso Koch. “O Coringa completa 80 anos e na Espanha ganha duas HQs,
que inspiram debates filosdficos sobre a liberdade”. El Pais. Junho/2020.

Em “Seu carisma seduziu a editora DC Comics, que impôs o
acréscimo de um quadrinho.” (L. 12-13), o vocábulo “que”
possui a mesma função sintática desempenhada no texto por`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `“imóvel” (L. 2).` },
      { id: 'B', type: 'text', value: `“Robin” (L. 5).` },
      { id: 'C', type: 'text', value: `“seus pais” (L. 9).` },
      { id: 'D', type: 'text', value: `“se” (L. 12).` },
      { id: 'E', type: 'text', value: `“vivo” (L. 15).` },
    ],
    correct: 'C',
    explanation: `O pronome relativo que retoma “a editora DC Comics” e exerce a função de sujeito de “impôs”. No texto, “seus pais” também é sujeito, de “decidiram e desenharam”.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 66,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `— Posso furar os olhos do povo?
Esta frase besta foi repetida muitas vezes e, em falta de coisa
melhor, aceitei-a. Sem dúvida. As mulheres hoje não vivem
como antigamente, escondidas, evitando os homens. Tudo é
descoberto, cara a cara. Uma pessoa topa outra. Se gostou,
gostou; se não gostou, até logo. E eu de fato não tinha visto
nada. As aparências mentem. A terra não é redonda? Esta
prova da inocência de Marina me pareceu considerável. Tantos
indivíduos condenados injustamente neste mundo ruim! O
retirante que fora encontrado violando a filha de quatro anos —
estava aí um exemplo. As vizinhas tinham visto o homem
afastando as pernas da menina, todo o mundo pensava que ele
era um monstro. Engano. Quem pode lá jurar que isto é assim
ou assado? Procurei mesmo capacitar-me de que Julião Tavares
não existia. Julião Tavares era uma sensação. Uma sensação
desagradável, que eu pretendia afastar de minha casa quando
me juntasse aquela sensação agradável que ali estava a
choramingar.
Graciliano Ramos, Angustia.
Em termos críticos, esse fragmento permite observar que, no
plano maior do romance Angústia, o ponto de vista`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `se acomoda nos limites da vulgaridade.` },
      { id: 'B', type: 'text', value: `tenta imitar a retórica dos dominantes.` },
      { id: 'C', type: 'text', value: `reproduz a lógica do determinismo social.` },
      { id: 'D', type: 'text', value: `atinge a neutralidade do espírito maduro.` },
      { id: 'E', type: 'text', value: `revira os lados contrários da opinião.` },
    ],
    correct: 'E',
    explanation: `O narrador passa de uma suspeita a sua negação e reúne argumentos contraditórios para justificar Marina e afastar Julião Tavares. Esse movimento instável revira os lados contrários da opinião e caracteriza a perspectiva de Angústia.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 67,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Terça é dia de Veneza revelar as atrações de seu festival anual,
cuja 77ª edição começa no dia 2 de setembro, com a dramédia
“Lacci”, do romano Daniele Luchetti, seguindo até 12/9, com 50
produções internacionais e uma expectativa (extraoficial) de
colocar “West Side Story”, de Steven Spielberg, na ribalta.
Rodrigo Fonseca. “A espera dos rugidos de Veneza”. O Estado de S. Paulo.
Julho/2020. Adaptado.
Um processo de formação de palavras em língua portuguesa é
o cruzamento vocabular, em que são misturadas pelo menos
duas palavras na formação de uma terceira. A força expressiva
dessa nova palavra resulta da síntese de significados e do
inesperado da combinação, como é o caso de “dramédia” no
texto. Ocorre esse mesmo tipo de formação em`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `“deleitura” e “namorido”.` },
      { id: 'B', type: 'text', value: `“passatempo” e “microvestido”.` },
      { id: 'C', type: 'text', value: `“hidrelétrica” e “sabiamente”.` },
      { id: 'D', type: 'text', value: `“arenista” e “girassol”.` },
      { id: 'E', type: 'text', value: `“planalto” e “multicor”.` },
    ],
    correct: 'A',
    explanation: `Deleitura combina deleite e leitura; namorido combina namorado e marido. Como dramédia, formada de drama e comédia, são cruzamentos vocabulares que fundem partes e sentidos de palavras.`,
    subject: ['por'],
    topics: ['Gramática', 'Questões aleatórias'],
  },
  {
    id: 68,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Romance LIII ou Das Palavras Aéreas
Ai, palavras, ai, palavras,
que estranha potência, a vossa!
Ai, palavras, ai, palavras,
sois de vento, ides no vento,
no vento que não retorna,
e, em tão rápida existência,
tudo se forma e transforma!
Sois de vento, ides no vento,
e quedais, com sorte nova! (...)
Ai, palavras, ai, palavras,
que estranha potência, a vossa!
Perdão podíeis ter sido!
— sois madeira que se corta,
— sois vinte degraus de escada,
— sois um pedaço de corda...
— sois povo pelas janelas,
cortejo, bandeiras, tropa...
Ai, palavras, ai, palavras,
que estranha potência, a vossa!
Ereis um sopro na aragem...
— sois um homem que se enforca!
Cecília Meireles, Romanceiro da Inconfidéncia.

Ao substituir a pessoa verbal utilizada para se referir ao
substantivo "palavras" pela 3ª pessoa do plural, os verbos dos
versos “sois de vento, ides no vento,” (v. 4) / “Perdão podieis
ter sido!” (v. 12) / “Ereis um sopro na aragem...” (v. 20) seriam
conjugados conforme apresentado na alternativa:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `são, vão, podiam, eram.` },
      { id: 'B', type: 'text', value: `seriam, iriam, podiam, serão.` },
      { id: 'C', type: 'text', value: `eram, foram, poderiam, seriam.` },
      { id: 'D', type: 'text', value: `são, vão, poderiam, eram.` },
      { id: 'E', type: 'text', value: `eram, iriam, podiam, seriam.` },
    ],
    correct: 'A',
    explanation: `Na terceira pessoa do plural, sois passa a são; ides, a vão; podíeis, a podiam; e éreis, a eram. Preservam-se os tempos e modos verbais.`,
    subject: ['por'],
    topics: ['Gramática', 'Questões aleatórias'],
  },
  {
    id: 69,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Romance LIII ou Das Palavras Aéreas
Ai, palavras, ai, palavras,
que estranha potência, a vossa!
Ai, palavras, ai, palavras,
sois de vento, ides no vento,
no vento que não retorna,
e, em tão rápida existência,
tudo se forma e transforma!
Sois de vento, ides no vento,
e quedais, com sorte nova! (...)
Ai, palavras, ai, palavras,
que estranha potência, a vossa!
Perdão podíeis ter sido!
— sois madeira que se corta,
— sois vinte degraus de escada,
— sois um pedaço de corda...
— sois povo pelas janelas,
cortejo, bandeiras, tropa...
Ai, palavras, ai, palavras,
que estranha potência, a vossa!
Ereis um sopro na aragem...
— sois um homem que se enforca!
Cecília Meireles, Romanceiro da Inconfidéncia.

A “estranha potência” que a voz lírica ressalta nas palavras
decorre de uma combinação entre`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `fluidez nos ventos do presente e conteúdo fixo no passado.` },
      { id: 'B', type: 'text', value: `forma abstrata no espaço e presença concreta na história.` },
      { id: 'C', type: 'text', value: `leveza impalpável na arte e vigor nos documentos antigos.` },
      { id: 'D', type: 'text', value: `sonoridade ruidosa nos ares e significado estável no papel.` },
      { id: 'E', type: 'text', value: `lirismo irrefletido da poesia e peso justo dos acontecimentos.` },
    ],
    correct: 'B',
    explanation: `As palavras são imateriais como vento, mas podem determinar ações e consequências históricas concretas, inclusive o enforcamento. A potência ressaltada combina forma abstrata e atuação concreta na história.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 70,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Alferes, Ouro Preto em sombras
Espera pelo batizado,
Ainda que tarde sobre a morte do sonhador
Ainda que tarde sobre as bocas do traidor.
Raios de sol brilharão nos sinos:
Dez vias dar.
Ai Marília, as liras e o amor
Não posso mais sufocar
E a minha voz irá
Pra muito além do desterro e do sal,
Maior que a voz do rei.
Aldir Blanc e João Bosco, trecho da canção “Alferes”, de 1973.
A imagem de Tiradentes — a quem Cecília Meireles qualificou “o
Alferes imortal, radiosa expressão dos mais altos sonhos desta
cidade, do Brasil e do próprio mundo”, em palestra feita em
Ouro Preto — torna a aparecer como símbolo da luta pela
liberdade em vários momentos da cultura nacional. Os versos
do letrista Aldir Blanc evocam, em novo contexto, o mártir
sonhador para resistir ao discurso`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `da doutrina revolucionária de ligas politicamente engajadas.` },
      { id: 'B', type: 'text', value: `da historiografia, que minimizou a importância de Tiradentes.` },
      { id: 'C', type: 'text', value: `de autoritarismo e opressão, próprio da ditadura militar.` },
      { id: 'D', type: 'text', value: `dos poetas árcades, que se dedicavam as suas liras amorosas.` },
      { id: 'E', type: 'text', value: `da tirania portuguesa sobre os mineradores no ciclo do ouro.` },
    ],
    correct: 'C',
    explanation: `A canção de 1973 retoma Tiradentes como símbolo de luta pela liberdade no contexto da ditadura militar. Sua evocação resiste ao autoritarismo e à opressão daquele período.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 71,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `I
— Traíste-me, Sem Medo. Tu traíste-me.
(...)
Sabes o que tu és afinal, Sem Medo? Es um ciumento. Chego a
pensar se não és homossexual. Tu querias-me só, como tu. Um
solitário do Mayombe. (...) Desprezo-te. (...) Nunca me verás atrás
de uma garrafa vazia. (...) Cada sucesso que eu tiver, será a paga
da tua bofetada, pois não serei um falhado como tu.
Pepetela, Mayombe. Adaptado.
II
— Peço-te perdão, Sem Medo. Não te compreendi, fui um
imbecil. E quis igualar o inigualável.
Pepetela, Mayombe.
Esses excertos de Mayombe referem-se a conversas entre as
personagens Comissário e Sem Medo em momentos distintos
do romance. Em I e II, as falas do Comissário revelam,
respectivamente,`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `incompatibilidade étnica entre ele e Sem Medo, por
pertencerem a linhagens diferentes, e superação de sua
hostilidade tribal.` },
      { id: 'B', type: 'text', value: `decepção, por Sem Medo não ter intercedido a seu favor na
conversa com Ondina, e desespero diante do companheiro
baleado.` },
      { id: 'C', type: 'text', value: `suspeita de traição de Ondina e tomada de consciência de
que isso não passara de uma crise de ciúme dele.` },
      { id: 'D', type: 'text', value: `forte tensão homoafetiva entre ele e Sem Medo, e
aceitação da verdadeira orientação sexual do companheiro.` },
      { id: 'E', type: 'text', value: `ira, diante do anticatolicismo de Sem Medo, e culpa que o
atinge ao perceber que sua demonstração de coragem
colocara o companheiro em risco.` },
    ],
    correct: 'B',
    explanation: `Na primeira passagem, o Comissário se decepciona porque esperava a intervenção de Sem Medo em sua relação com Ondina. Na segunda, diante do companheiro ferido, pede perdão e manifesta desespero e reconhecimento de seu erro.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 72,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Leusipo perguntou o que eu tinha ido fazer na aldeia. Preferi
achar que o tom era amistoso e, no meu paternalismo ingênuo,
comecei a lhe explicar o que era um romance. Eu tentava
convencê-lo de que não havia motivo para preocupação. Tudo
o que eu queria saber já era conhecido. E ele me perguntava:
“Então, por que você quer saber, se já sabe?” Tentei lhe explicar
que pretendia escrever um livro e mais uma vez o que era um
romance, o que era um livro de ficção (e mostrava o que tinha
nas mãos), que seria tudo historinha, sem nenhuma
consequência na realidade. Ele seguia incrédulo. Fazia-se de
desentendido, mas na verdade só queria me intimidar. As
minhas explicações sobre o romance eram inúteis. Eu tentava
dizer que, para os brancos que não acreditam em deuses, a
ficção servia de mitologia, era o equivalente dos mitos dos
índios, e antes mesmo de terminar a frase, já não sabia se o
idiota era ele ou eu. Ele não dizia nada a não ser: “O que você
quer com o passado?”. Repetia. E, diante da sua insistência
bovina, tive de me render a evidência de que eu não sabia
responder a sua pergunta.
Bernardo Carvalho, Nove noites. Adaptado.

Sem prejuízo de sentido e fazendo as adaptações necessárias,
é possível substituir as expressões em destaque no texto,
respectivamente, por`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `incompreensão; armação; inofensivo; irredutível.` },
      { id: 'B', type: 'text', value: `altivez; brincadeira; ofendido; mansa.` },
      { id: 'C', type: 'text', value: `ignorância; mentira; prejudicado; alienada.` },
      { id: 'D', type: 'text', value: `complacência; invenção; bobo; cega.` },
      { id: 'E', type: 'text', value: `arrogância; entretenimento; incapaz; animalesca.` },
    ],
    correct: 'D',
    explanation: `No contexto, paternalismo corresponde a complacência; ficção, a invenção; idiota, a bobo; e bovina, a cega, indicando insistência obstinada. A sequência preserva o sentido das expressões destacadas.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 73,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Leusipo perguntou o que eu tinha ido fazer na aldeia. Preferi
achar que o tom era amistoso e, no meu paternalismo ingênuo,
comecei a lhe explicar o que era um romance. Eu tentava
convencê-lo de que não havia motivo para preocupação. Tudo
o que eu queria saber já era conhecido. E ele me perguntava:
“Então, por que você quer saber, se já sabe?” Tentei lhe explicar
que pretendia escrever um livro e mais uma vez o que era um
romance, o que era um livro de ficção (e mostrava o que tinha
nas mãos), que seria tudo historinha, sem nenhuma
consequência na realidade. Ele seguia incrédulo. Fazia-se de
desentendido, mas na verdade só queria me intimidar. As
minhas explicações sobre o romance eram inúteis. Eu tentava
dizer que, para os brancos que não acreditam em deuses, a
ficção servia de mitologia, era o equivalente dos mitos dos
índios, e antes mesmo de terminar a frase, já não sabia se o
idiota era ele ou eu. Ele não dizia nada a não ser: “O que você
quer com o passado?”. Repetia. E, diante da sua insistência
bovina, tive de me render a evidência de que eu não sabia
responder a sua pergunta.
Bernardo Carvalho, Nove noites. Adaptado.

As respostas do narrador as perguntas de Leusipo são uma
tentativa de disfarçar o caráter`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `fabular do romance, inspirado nas lendas e tradições
dos Krahô.` },
      { id: 'B', type: 'text', value: `investigativo do romance, embasado em testemunhos
dos Krahô.` },
      { id: 'C', type: 'text', value: `político do romance, a respeito das condições de vida dos
Krahô.` },
      { id: 'D', type: 'text', value: `etnográfico do romance, através do registro da cultura dos
Krahô.` },
      { id: 'E', type: 'text', value: `biográfico do romance, relatando sua vivência junto aos
Krahô.` },
    ],
    correct: 'B',
    explanation: `O narrador insiste em definir o livro como ficção sem consequências, mas sua presença busca informações sobre o passado e testemunhos dos Krahô. Suas respostas tentam disfarçar esse caráter investigativo.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 74,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Leusipo perguntou o que eu tinha ido fazer na aldeia. Preferi
achar que o tom era amistoso e, no meu paternalismo ingênuo,
comecei a lhe explicar o que era um romance. Eu tentava
convencê-lo de que não havia motivo para preocupação. Tudo
o que eu queria saber já era conhecido. E ele me perguntava:
“Então, por que você quer saber, se já sabe?” Tentei lhe explicar
que pretendia escrever um livro e mais uma vez o que era um
romance, o que era um livro de ficção (e mostrava o que tinha
nas mãos), que seria tudo historinha, sem nenhuma
consequência na realidade. Ele seguia incrédulo. Fazia-se de
desentendido, mas na verdade só queria me intimidar. As
minhas explicações sobre o romance eram inúteis. Eu tentava
dizer que, para os brancos que não acreditam em deuses, a
ficção servia de mitologia, era o equivalente dos mitos dos
índios, e antes mesmo de terminar a frase, já não sabia se o
idiota era ele ou eu. Ele não dizia nada a não ser: “O que você
quer com o passado?”. Repetia. E, diante da sua insistência
bovina, tive de me render a evidência de que eu não sabia
responder a sua pergunta.
Bernardo Carvalho, Nove noites. Adaptado.

Na cena apresentada, que explora o desconforto gerado pela
difícil interlocução com o indígena, o narrador`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `abandona a ideia de investigar o passado, ao se ver
encurralado por Leusipo.` },
      { id: 'B', type: 'text', value: `explora a sua posição ameaçadora de homem branco, ao
insistir em permanecer na aldeia.` },
      { id: 'C', type: 'text', value: `age com ousadia, ao procurar subjugar Leusipo a contribuir
com o seu projeto.` },
      { id: 'D', type: 'text', value: `identifica-se com a sabedoria de Leusipo, ao preterir do
papel interrogativo e se deixar questionar.` },
      { id: 'E', type: 'text', value: `sente-se frustrado com a reação de Leusipo, que não se
deixa levar por sua diplomacia.` },
    ],
    correct: 'E',
    explanation: `O narrador tenta tranquilizar e convencer Leusipo, mas suas explicações não vencem a desconfiança. A insistência do interlocutor o deixa frustrado e revela os limites de sua diplomacia paternalista.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 75,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Rubião fitava a enseada, — eram oito horas da manhã. Quem o
visse, com os polegares metidos no cordão do chambre, a janela de
uma grande casa de Botafogo, cuidaria que ele admirava aquele
pedaço de água quieta; mas em verdade vos digo que pensava em
outra coisa. Cotejava o passado com o presente. Que era, há um
ano? Professor. Que é agora! Capitalista. Olha para si, para as
chinelas (umas chinelas de Túnis, que lhe deu recente amigo,
Cristiano Palha), para a casa, para o jardim, para a enseada, para
os morros e para o céu; e tudo, desde as chinelas até o céu, tudo
entra na mesma sensação de propriedade.
— Vejam como Deus escreve direito por linhas tortas, pensa ele. Se
mana Piedade tem casado com Quincas Borba, apenas me daria
uma esperança colateral. Não casou; ambos morreram, e aqui está
tudo comigo; de modo que o que parecia uma desgraça...
Machado de Assis, Quincas Borba.
O primeiro capítulo de Quincas Borba já apresenta ao leitor um
elemento que será fundamental na construção do romance:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `a contemplação das paisagens naturais, como se lê em “ele
admirava aquele pedaço de água quieta”.` },
      { id: 'B', type: 'text', value: `a presença de um narrador-personagem, como se lê em “em
verdade vos digo que pensava em outra coisa”.` },
      { id: 'C', type: 'text', value: `a sobriedade do protagonista ao avaliar o seu percurso,
como se lê em “Cotejava o passado com o presente”.` },
      { id: 'D', type: 'text', value: `o sentido místico e fatalista que rege os destinos, como se
lê em “Deus escreve direito por linhas tortas”.` },
      { id: 'E', type: 'text', value: `a reversibilidade entre o cômico e o trágico, como se lê em
“de modo que o que parecia uma desgraça...”.` },
    ],
    correct: 'E',
    explanation: `A morte da irmã e de Quincas Borba representa uma desgraça que, para Rubião, se converte em fortuna. Essa reversibilidade entre sofrimento e vantagem, trágico e cômico, é central à construção irônica do romance.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 76,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Remissão
Tua memória, pasto de poesia,
tua poesia, pasto dos vulgares,
vão se engastando numa coisa fria
a que tu chamas: vida, e seus pesares.
Mas, pesares de quê? perguntaria,
se esse travo de angústia nos cantares,
se o que dorme na base da elegia
vai correndo e secando pelos ares,
e nada resta, mesmo, do que escreves
e te forçou ao exílio das palavras,
senão contentamento de escrever,
enquanto o tempo, e suas formas breves
ou longas, que sutil interpretavas,
se evapora no fundo do teu ser?
Carlos Drummond de Andrade, Claro enigma.
Claro enigma apresenta, por meio do lirismo reflexivo, o
posicionamento do escritor perante a sua condição no mundo.
Considerando-o como representativo desse seu aspecto, o
poema “Remissão”`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `traduz a melancolia e o recolhimento do eu lírico em face
da sensação de incomunicabilidade com uma realidade
indiferente a sua poesia.` },
      { id: 'B', type: 'text', value: `revela uma perspectiva inconformada, mesclando-a, livre da
indulgência dos anos anteriores, a um novo formalismo
estético.` },
      { id: 'C', type: 'text', value: `propõe, como reação do poeta a vulgaridade do mundo,
uma poética capaz de interferir na realidade pelo viés
nostálgico.` },
      { id: 'D', type: 'text', value: `reflete a visão idealizada do trabalho do poeta e a
consciência da perenidade da poesia, resistente a passagem
do tempo.` },
      { id: 'E', type: 'text', value: `realiza a transição do lirismo social para o lirismo metafísico,
caracterizado pela adesão ao conforto espiritual e ao
escapismo imaginativo.` },
    ],
    correct: 'A',
    explanation: `O poema questiona a permanência da escrita e sua capacidade de comunicação com o mundo. A sensação de esvaziamento e de indiferença produz uma atitude melancólica e recolhida, própria do lirismo reflexivo de Claro enigma.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 77,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Mafalda, Quino.
O efeito de humor presente nas falas das personagens decorre`,
    images: [{"src":"/fuvest/2021/images/q77_mafalda.jpg","width":388,"height":305}],
    alternatives: [
      { id: 'A', type: 'text', value: `da quebra de expectativa gerada pela polissemia.` },
      { id: 'B', type: 'text', value: `da ambiguidade causada pela antonímia.` },
      { id: 'C', type: 'text', value: `do contraste provocado pela fonética.` },
      { id: 'D', type: 'text', value: `do contraste introduzido pela neologia.` },
      { id: 'E', type: 'text', value: `do estranhamento devido a morfologia.` },
    ],
    correct: 'A',
    explanation: `A fala final desloca o sentido esperado de uma palavra para outro possível, aproveitando sua polissemia. Essa mudança de interpretação quebra a expectativa e produz o humor.`,
    subject: ['por'],
    topics: ['Gramática', 'Questões aleatórias'],
  },
  {
    id: 78,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Psicanálise do açúcar
O açúcar cristal, ou açúcar de usina,
mostra a mais instável das brancuras:
quem do Recife sabe direito o quanto,
e o pouco desse quanto, que ela dura.
Sabe o mínimo do pouco que o cristal
se estabiliza cristal sobre o açúcar,
por cima do fundo antigo, de mascavo,
do mascavo barrento que se incuba;
e sabe que tudo pode romper o mínimo
em que o cristal é capaz de censura:
pois o tal fundo mascavo logo aflora
quer inverno ou verão mele o açúcar.
Só os banguês* que-ainda purgam ainda
o açúcar bruto com barro, de mistura;
a usina já não o purga: da infÂncia,
não de depois de adulto, ela o educa;
em enfermarias, com vácuos e turbinas,
em mãos de metal de gente indústria,
a usina o leva a sublimar em cristal
o pardo do xarope: não o purga, cura.
Mas como a cana se cria ainda hoje,
em mãos de barro de gente agricultura,
o barrento da pré-infÂncia logo aflora
quer inverno ou verão mele o açúcar.
Jodo Cabral de Melo Neto, A Educação pela Pedra.
*bangué: engenho de açucar primitivo movido a força animal.

Os últimos quatro versos do poema rompem com a série de
contrapontos entre a usina e o banguê, pois`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `negam haver diferença química entre o açúcar cristal e o
açúcar mascavo.` },
      { id: 'B', type: 'text', value: `esclarecem que a aparência do açúcar varia com a espécie
de cana cultivada.` },
      { id: 'C', type: 'text', value: `revelam que na base de toda empresa açucareira está o
trabalhador rural.` },
      { id: 'D', type: 'text', value: `denunciam a exploração do trabalho infantil nos canaviais
nordestinos.` },
      { id: 'E', type: 'text', value: `explicam que a estação do ano define em qualquer processo
o tipo de açúcar.` },
    ],
    correct: 'C',
    explanation: `Os versos finais mostram que, apesar das diferenças tecnológicas entre usina e banguê, a cana continua sendo produzida por trabalhadores rurais. A base agrícola e humana é comum aos dois processos.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 79,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Psicanálise do açúcar
O açúcar cristal, ou açúcar de usina,
mostra a mais instável das brancuras:
quem do Recife sabe direito o quanto,
e o pouco desse quanto, que ela dura.
Sabe o mínimo do pouco que o cristal
se estabiliza cristal sobre o açúcar,
por cima do fundo antigo, de mascavo,
do mascavo barrento que se incuba;
e sabe que tudo pode romper o mínimo
em que o cristal é capaz de censura:
pois o tal fundo mascavo logo aflora
quer inverno ou verão mele o açúcar.
Só os banguês* que-ainda purgam ainda
o açúcar bruto com barro, de mistura;
a usina já não o purga: da infÂncia,
não de depois de adulto, ela o educa;
em enfermarias, com vácuos e turbinas,
em mãos de metal de gente indústria,
a usina o leva a sublimar em cristal
o pardo do xarope: não o purga, cura.
Mas como a cana se cria ainda hoje,
em mãos de barro de gente agricultura,
o barrento da pré-infÂncia logo aflora
quer inverno ou verão mele o açúcar.
Jodo Cabral de Melo Neto, A Educação pela Pedra.
*bangué: engenho de açucar primitivo movido a força animal.

Na oração “que ela dura” (v. 4), o pronome sublinhado`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `não tem referente.` },
      { id: 'B', type: 'text', value: `retoma a palavra |usina| (v. 1).` },
      { id: 'C', type: 'text', value: `pode ser substituído por “ele”, referindo-se a “açúcar” (v. 1).` },
      { id: 'D', type: 'text', value: `refere-se a |mais instável das brancuras| (v. 2).` },
      { id: 'E', type: 'text', value: `equivale a palavra |censura| (v. 10).` },
    ],
    correct: 'D',
    explanation: `O pronome ela retoma a brancura do açúcar, apresentada como instável. O verso discute quanto tempo dura essa brancura, não a usina nem o próprio açúcar.`,
    subject: ['por'],
    topics: ['Gramática', 'Questões aleatórias'],
  },
  {
    id: 80,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Psicanálise do açúcar
O açúcar cristal, ou açúcar de usina,
mostra a mais instável das brancuras:
quem do Recife sabe direito o quanto,
e o pouco desse quanto, que ela dura.
Sabe o mínimo do pouco que o cristal
se estabiliza cristal sobre o açúcar,
por cima do fundo antigo, de mascavo,
do mascavo barrento que se incuba;
e sabe que tudo pode romper o mínimo
em que o cristal é capaz de censura:
pois o tal fundo mascavo logo aflora
quer inverno ou verão mele o açúcar.
Só os banguês* que-ainda purgam ainda
o açúcar bruto com barro, de mistura;
a usina já não o purga: da infÂncia,
não de depois de adulto, ela o educa;
em enfermarias, com vácuos e turbinas,
em mãos de metal de gente indústria,
a usina o leva a sublimar em cristal
o pardo do xarope: não o purga, cura.
Mas como a cana se cria ainda hoje,
em mãos de barro de gente agricultura,
o barrento da pré-infÂncia logo aflora
quer inverno ou verão mele o açúcar.
Jodo Cabral de Melo Neto, A Educação pela Pedra.
*bangué: engenho de açucar primitivo movido a força animal.

Observe o diagrama que mostra, de forma simplificada, o
processo de fabricação do açúcar.
Disponível em https://sistemas.eel.usp.br/. Adaptado.
Considerando essas informações e seu conhecimento sobre
separação de misturas e transformações químicas e físicas, no
trecho grifado no poema, o termo sublimar é usado`,
    images: [{"src":"/fuvest/2021/images/q80_sugar.jpg","width":618,"height":158}],
    alternatives: [
      { id: 'A', type: 'text', value: `corretamente para mostrar como do líquido (xarope) é
extraído o cristal de açúcar através do processo de
evaporação do sólido e secagem.` },
      { id: 'B', type: 'text', value: `em um sentido amplo do processo, já que não corresponde
ao que ocorre com o cristal de açúcar, e sim com o melaço,
que se separa do xarope.` },
      { id: 'C', type: 'text', value: `metaforicamente, já que ocorre a precipitação do açúcar
com o cozimento do xarope, que é separado por
centrifugação.` },
      { id: 'D', type: 'text', value: `incorretamente, já que a obtenção do açúcar a partir do
xarope é uma reação química direta que não necessita de
processo de separação.` },
      { id: 'E', type: 'text', value: `em seu sentido literal, já que o açúcar está na fase sólida,
no xarope, e passa a fase vapor com o cozimento, formando
então cristais de açúcar puro.` },
    ],
    correct: 'C',
    explanation: `O açúcar cristaliza a partir do xarope concentrado e é separado por centrifugação. Não ocorre passagem direta de sólido a vapor; sublimar é empregado metaforicamente, conforme C.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 81,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `O meme ao lado brinca
com conceitos de química
em um jogo popular, cujo
objetivo é que os jogadores descubram o impostor entre os tripulantes
de naves e estações
espaciais. Nele um dos
elementos é considerado o
impostor por sua característica química diferente.
Disponível em:
https://twitter.com/DoutorQuimica/.
Nesse contexto, é correto afirmar que o impostor seria o
elemento:`,
    images: [{"src":"/fuvest/2021/images/q81_periodic.jpg","width":318,"height":320}],
    alternatives: [
      { id: 'A', type: 'text', value: `H, por ser um elemento com grande tendência a fazer
ligação covalente em uma família com tendência a fazer
ligação iônica.` },
      { id: 'B', type: 'text', value: `Na, por ser o único que pode ser obtido em sua forma
metálica, ao contrário dos demais membros da família, que
formam apenas óxidos.` },
      { id: 'C', type: 'text', value: `K, por ter raio atômico atipicamente grande, sendo maior
do que os elementos abaixo dele na tabela periódica.` },
      { id: 'D', type: 'text', value: `Cs, por pertencer a família 2 da tabela periódica, enquanto
os demais pertencem a 1, formando cátions +2.` },
      { id: 'E', type: 'text', value: `Fr, por reagir violentamente com a água, devido ao seu
pequeno raio atômico, liberando muito calor, diferentemente dos demais elementos da família.` },
    ],
    correct: 'A',
    explanation: `O hidrogênio, embora colocado no grupo 1, é um não metal e forma predominantemente ligações covalentes. Os demais elementos apresentados são metais alcalinos, associados à formação de cátions e compostos iônicos. Essa diferença faz de H o impostor.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 82,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Um experimento expôs uma barra de titânio (Ti) pura e ligas
desse material com 0,01% de diferentes metais nobres a
soluções de ácido sulfúrico em ebulição para entender o efeito
anticorrosivo desses metais no titânio. O resultado é mostrado
na tabela a seguir:
Metal (0,01%) | Taxa em H₂SO₄ 1% | Taxa em H₂SO₄ 10%
Pd | < 2 | 26
Rh | < 2 | 145
Pt | < 2 | 166
Ru | < 2 | 187
Ir | < 2 | 359
Os | 5 | 480
Re | 235 | *
Cu | 470 | *
Au | 1050 | *
Ti puro | 460 | 3950
* Não foi possível medir.

Com base nessas informações, é correto afirmar:`,
    images: [{"src":"/fuvest/2021/images/q82_table.jpg","width":611,"height":193},{"src":"/fuvest/2021/images/q82_source_2.jpg","width":611,"height":65}],
    alternatives: [
      { id: 'A', type: 'text', value: `O aumento na concentração de ácido sulfúrico nos
experimentos fez com que o titânio puro fosse mais
corroído e o titânio com Pd, Rh e Pt fosse menos corroído.` },
      { id: 'B', type: 'text', value: `Para Re, Cu e Au, espera-se que a reação com ácido sulfúrico mais
concentrado demore muito para acontecer e, por isso, não foi
possível medir.` },
      { id: 'C', type: 'text', value: `A escala de potencial anticorrosivo, segundo esse
experimento, é dada por Au > Cu > Re > Os > Ir > Ru > Pt >
Pd > Rh.` },
      { id: 'D', type: 'text', value: `Pd, Rh, Pt e Ru apresentaram os melhores resultados
como anticorrosivos, enquanto Cu e Au apresentaram os
piores.` },
      { id: 'E', type: 'text', value: `O titânio puro é muito resistente ao ácido, e a adição de
outros metais não faz nenhuma diferença para a taxa de
corrosão.` },
    ],
    correct: 'D',
    explanation: `Menor taxa de corrosão significa maior proteção. Pd, Rh, Pt e Ru apresentam as menores taxas, especialmente no ácido mais concentrado; Cu e Au estão entre os resultados menos protetores. A comparação confirma D.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 83,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Um dos indicadores de qualidade de mel é a presença do
composto orgânico hidroximetilfurfural (HMF), formado a
partir de certos açúcares, como a frutose (C₆H₁₂O₆). A tabela
resume os teores de HMF permitidos de acordo com a
legislação brasileira e recomendações internacionais.
Legislação brasileira (Portaria nº 6 do Ministério da Agricultura de 1985): até 40 mg/kg — mel de mesa para consumo humano direto; até 60 mg/kg — mel industrial e/ou subprodutos.
Recomendação internacional do Codex Alimentarius (FAO): até 80 mg/kg para utilização de mel produzido em países com clima tropical.

Uma das possíveis rotas para a formação do HMF a partir da
frutose é mostrada, de forma simplificada, no esquema:
Nas setas, são mostradas as perdas de moléculas ou grupos
químicos em cada etapa. Por exemplo, entre as espécies 1 e 2,
ocorrem a saída de uma molécula de água e a formação de uma
ligação dupla entre carbonos.

De acordo com o esquema mostrado, as perdas indicadas como
I e II correspondem a:`,
    images: [{"src":"/fuvest/2021/images/q83_hmf_table.jpg","width":577,"height":285},{"src":"/fuvest/2021/images/q83_scheme.jpg","width":577,"height":143}],
    alternatives: [
      { id: 'A', type: 'text', value: `1 × H₂O e 1 × –CH₂` },
      { id: 'B', type: 'text', value: `2 × OH⁻` },
      { id: 'C', type: 'text', value: `2 × H₂O` },
      { id: 'D', type: 'text', value: `1 × –CH₂ e 1 × OH⁻` },
      { id: 'E', type: 'text', value: `1 × H₂O e 1 × OH⁻` },
    ],
    correct: 'C',
    explanation: `Comparando as estruturas e contabilizando os átomos perdidos nas etapas I e II, cada uma corresponde à eliminação de uma molécula de água. Assim, as duas perdas são 2 × H₂O.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 84,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Um dos indicadores de qualidade de mel é a presença do
composto orgânico hidroximetilfurfural (HMF), formado a
partir de certos açúcares, como a frutose (C₆H₁₂O₆). A tabela
resume os teores de HMF permitidos de acordo com a
legislação brasileira e recomendações internacionais.
Legislação brasileira (Portaria nº 6 do Ministério da Agricultura de 1985): até 40 mg/kg — mel de mesa para consumo humano direto; até 60 mg/kg — mel industrial e/ou subprodutos.
Recomendação internacional do Codex Alimentarius (FAO): até 80 mg/kg para utilização de mel produzido em países com clima tropical.

Uma das possíveis rotas para a formação do HMF a partir da
frutose é mostrada, de forma simplificada, no esquema:
Nas setas, são mostradas as perdas de moléculas ou grupos
químicos em cada etapa. Por exemplo, entre as espécies 1 e 2,
ocorrem a saída de uma molécula de água e a formação de uma
ligação dupla entre carbonos.

Um frasco contendo 500 g de mel produzido no Brasil foi
analisado e concluiu-se que 0,2 milimol de frutose foi
convertido em HMF. Considerando apenas esse parâmetro de
qualidade e tendo como referência os teores recomendados
por órgãos nacionais e internacionais, mostrados na tabela, é
correto afirmar que esse mel

Note e adote: Massa molar do HMF = 126 g/mol. Desconsidere qualquer possibilidade de contaminação do mel por fonte externa de HMF.`,
    images: [{"src":"/fuvest/2021/images/q83_hmf_table.jpg","width":577,"height":285},{"src":"/fuvest/2021/images/q83_scheme.jpg","width":577,"height":143}],
    alternatives: [
      { id: 'A', type: 'text', value: `é recomendado como mel de mesa, assim como para outros
usos que se façam necessários, segundo a legislação
brasileira.` },
      { id: 'B', type: 'text', value: `não pode ser usado como mel de mesa, mas pode ser usado
para fins industriais, segundo a legislação brasileira.` },
      { id: 'C', type: 'text', value: `pode ser usado para fins industriais, segundo a legislação
brasileira, mas não deveria ser usado para nenhum fim,
segundo a recomendação internacional.` },
      { id: 'D', type: 'text', value: `não pode ser usado nem como mel de mesa nem para fins
industriais, segundo a legislação brasileira, mas poderia ser
utilizado segundo a recomendação internacional.` },
      { id: 'E', type: 'text', value: `não pode ser usado para qualquer aplicação, tanto segundo
a legislação brasileira quanto segundo a recomendação
internacional.` },
    ],
    correct: 'B',
    explanation: `A formação de HMF é de 0,2 mmol, correspondendo a 0,0002 × 126 = 0,0252 g = 25,2 mg em 0,5 kg de mel. O teor é 50,4 mg/kg: supera o limite brasileiro de 40 para mel de mesa, mas é inferior a 60 para uso industrial.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 85,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Observe a representação a seguir, em que os círculos brancos
representam uma espécie química (molécula ou íon molecular) e
os círculos coloridos, outra.
Essa representação pode ser corretamente associada a`,
    images: [{"src":"/fuvest/2021/images/q85_figure.jpg","width":478,"height":426}],
    alternatives: [
      { id: 'A', type: 'text', value: `combustão de um hidrocarboneto com oxigênio em fase
gasosa.` },
      { id: 'B', type: 'text', value: `formação de um polímero a partir de duas espécies de
monômeros.` },
      { id: 'C', type: 'text', value: `fusão de uma mistura de dois sais com aumento da temperatura.` },
      { id: 'D', type: 'text', value: `solidificação da água pura com diminuição da temperatura.` },
      { id: 'E', type: 'text', value: `produção de anéis aromáticos em solvente orgânico.` },
    ],
    correct: 'B',
    explanation: `O esquema mostra espécies inicialmente separadas que se unem em uma cadeia com unidades repetidas. Isso representa a formação de um polímero a partir de dois tipos de monômeros, sem corresponder a uma simples mudança de estado.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 86,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `No fragmento a seguir, o autor explora conceitos químicos na
forma de poesia:
Wilmo Ernesto Francisco Junior, Ciência em prosa e verso - Acepipes para
quem ousa gostar (ou ensinar), 2018 (adaptado), apud Lopes, M.J.M.
Dissertação de Mestrado, 2019. Disponível em
http://www.repositorio.ufal.br/.
Sobre os conceitos mencionados, foram feitas as seguintes
afirmações:
I. A equação química mostrada na linha 2 pode ser associada a
liberação de energia, pois corresponde a reação de
fotossíntese com consumo de gás carbônico.
II. A equação química apresentada na linha 6 representa uma
reação na qual o número de oxidação das espécies é alterado,
sendo associada a corrosão.
III. O modelo incompleto referido na linha 7 refere-se ao
proposto por Thomson, que identificava a presença de
partículas com carga negativa dentro de uma esfera.
Está correto o que se afirma no(s) item(ns):`,
    images: [{"src":"/fuvest/2021/images/q86_poem.jpg","width":607,"height":234},{"src":"/fuvest/2021/images/q86_source_2.jpg","width":607,"height":59},{"src":"/fuvest/2021/images/q86_source_3.jpg","width":607,"height":59},{"src":"/fuvest/2021/images/q87_table.jpg","width":607,"height":233},{"src":"/fuvest/2021/images/q86_source_5.jpg","width":607,"height":58}],
    alternatives: [
      { id: 'A', type: 'text', value: `I, apenas.` },
      { id: 'B', type: 'text', value: `II, apenas.` },
      { id: 'C', type: 'text', value: `I e III, apenas.` },
      { id: 'D', type: 'text', value: `II e III, apenas.` },
      { id: 'E', type: 'text', value: `I, II e III.` },
    ],
    correct: 'B',
    explanation: `I é falsa porque a fotossíntese consome energia. II é verdadeira: a corrosão envolve oxidação e redução, com alteração dos números de oxidação. III é falsa porque o modelo mencionado no poema apresenta elétrons em órbitas ao redor do núcleo, em vez de uma esfera positiva com cargas negativas incrustadas, como propunha Thomson. Apenas II é correta.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 87,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Para estudar equilíbrio químico de íons Co²⁺ em solução, uma turma de estudantes realizou uma série de experimentos explorando a seguinte reação:

[Co(H₂O)₆]²⁺(aq) + 4Cl⁻(aq) ⇌ [CoCl₄]²⁻(aq) + 6H₂O(l)
Vermelho → Azul

Nesse equilíbrio, o composto de cobalto com água, [Co(H₂O)₆]²⁺(aq), apresenta coloração vermelha, enquanto o composto com cloretos, [CoCl₄]²⁻(aq), possui coloração azul.
Para verificar o efeito de ânions de diferentes sais nessa mudança de cor, 7 ensaios diferentes foram realizados. Aos tubos contendo apenas alguns mL de uma solução de nitrato de cobalto II, de coloração vermelha, foram adicionadas pequenas quantidades de diferentes sais em cada tubo, como apresentado na tabela, com exceção do ensaio 1, no qual nenhum sal foi adicionado.
Após agitação, os tubos foram deixados em repouso por um tempo, e a cor final foi observada.

Ensaio | Sal adicionado | Cor inicial | Cor final
1 | Nenhum | Vermelha | Vermelha
2 | KCl | Vermelha | Azul
3 | Na₂SO₄ | Vermelha | Vermelha
4 | CuCl | Vermelha | Vermelha
5 | K₂SO₄ | Vermelha | ?
6 | AgCl | Vermelha | ?
7 | NaCl | Vermelha | ?

A alternativa que representa a cor final observada nos ensaios 5, 6 e 7, respectivamente, é:

Note e adote: Solubilidade dos sais em g/100 mL de água a 20 °C: AgCl = 1,9 × 10⁻⁴; CuCl = 9,9 × 10⁻³; KCl = 34,2; NaCl = 35,9; Na₂SO₄ = 13,9; K₂SO₄ = 11,1.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Azul; Azul; Vermelha.` },
      { id: 'B', type: 'text', value: `Azul; Vermelha; Azul.` },
      { id: 'C', type: 'text', value: `Vermelha; Azul; Azul.` },
      { id: 'D', type: 'text', value: `Vermelha; Vermelha; Azul.` },
      { id: 'E', type: 'text', value: `Vermelha; Azul; Vermelha.` },
    ],
    correct: 'D',
    explanation: `K₂SO₄ não fornece cloreto e mantém a solução vermelha. AgCl é muito pouco solúvel, liberando pouco Cl⁻ e também mantendo a cor vermelha. NaCl é solúvel e aumenta a concentração de Cl⁻, deslocando o equilíbrio para o complexo azul. A sequência é vermelha, vermelha, azul.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 88,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `A reação de Maillard, que ocorre entre aminoácidos e
carboidratos redutores, é a responsável por formar espécies
que geram compostos coloridos que conferem o sabor
característico de diversos alimentos assados. Um exemplo é a
reação entre a glicina e um carboidrato redutor mostrada na
equação em que R representa uma cadeia genérica:
Um aminoácido específico (Composto 1), ao reagir com o
carboidrato redutor, pode gerar o Composto 2, levando a
formação de acrilamida, uma espécie potencialmente
carcinogênica, conforme mostrado na equação:
A estrutura do aminoácido marcado como Composto 1 e que é
capaz de gerar esse intermediário de espécies carcinogênicas é:`,
    images: [{"src":"/fuvest/2021/images/q88_maillard.jpg","width":628,"height":158},{"src":"/fuvest/2021/images/q88_compound.jpg","width":613,"height":138},{"src":"/fuvest/2021/images/q88_alts.jpg","width":640,"height":513}],
    alternatives: [
      { id: 'A', type: 'text', value: `Alternativa A da figura.` },
      { id: 'B', type: 'text', value: `Alternativa B da figura.` },
      { id: 'C', type: 'text', value: `Alternativa C da figura.` },
      { id: 'D', type: 'text', value: `Alternativa D da figura.` },
      { id: 'E', type: 'text', value: `Alternativa E da figura.` },
    ],
    correct: 'E',
    explanation: `O intermediário conserva a cadeia lateral amida do aminoácido e perde o grupo carboxila como CO₂ na reação indicada. A estrutura necessária é a asparagina, HOOC–CH(NH₂)–CH₂–CONH₂, representada em E.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 89,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `Em aquários de água
marinha, é comum o uso
do equipamento chamado “Skimmer”, aparato
em que a água recebe
uma torrente de bolhas
de ar, como representado
na figura, levando a
matéria orgânica até a
superfície, onde pode ser
removida. Essa matéria
orgânica eliminada é
composta por moléculas
orgânicas com parte
apolar e parte polar,
Disponível em
enquanto as bolhas https://blog.marinedepot.com/. Adaptado.
formadas têm caráter apolar. Esse aparelho, no entanto, tem rendimento muito menor
em aquários de água doce (retira menos quantidade de
material orgânico por período de uso).
Considerando que todas as outras condições são mantidas, o
menor rendimento desse aparato em água doce do que em
água salgada pode ser explicado porque`,
    images: [{"src":"/fuvest/2021/images/q89_skimmer.jpg","width":334,"height":356},{"src":"/fuvest/2021/images/q89_source_1.jpg","width":334,"height":72}],
    alternatives: [
      { id: 'A', type: 'text', value: `a polaridade da molécula de água na água doce é maior do
que na água salgada, tornando as partes apolares das
moléculas orgânicas mais solúveis.` },
      { id: 'B', type: 'text', value: `a menor concentração de sais na água doce torna as regiões
apolares das moléculas orgânicas mais solúveis do que na
água salgada, prejudicando a interação com as bolhas de ar.` },
      { id: 'C', type: 'text', value: `a água doce é mais polar do que água salgada por ser mais
concentrada em moléculas polares como a do açúcar,
levando as partes polares das moléculas orgânicas a
interagir mais com a água doce.` },
      { id: 'D', type: 'text', value: `a reatividade de matéria orgânica em água salgada é maior
do que em água doce, fazendo com que exista uma menor
quantidade de material dissolvido para interação com as
bolhas de ar.` },
      { id: 'E', type: 'text', value: `a concentração de sais na água marinha é maior, o que torna
as partes apolares das moléculas orgânicas mais propensas
a interagir com os sais dissolvidos, promovendo menor
interação com as bolhas de ar.` },
    ],
    correct: 'B',
    explanation: `Em água doce, a menor concentração de sais favorece a solubilidade das partes apolares das moléculas orgânicas relativamente à água salgada. Elas interagem menos com as bolhas de ar e são removidas com menor eficiência, conforme B.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 90,
    exam: 'fuvest',
    year: 2021,
    phase: 1,
    text: `A destilação é um processo utilizado para separar compostos
presentes em uma mistura com base nas suas propriedades físicas
como, por exemplo, a diferença de temperatura de ebulição, a
uma dada pressão, entre os componentes da mistura.
Recentemente esse termo passou a figurar em estudos de
poluição ambiental, nos quais o termo “destilação global” é
utilizado para explicar a presença de compostos voláteis, como
os pesticidas organoclorados, em águas e gelos de regiões
polares, ainda que estes compostos nunca tenham sido
produzidos ou utilizados nessas regiões. Com base no princípio
da técnica da destilação, como pode ser explicada a presença
desses pesticidas na Antártica e no Ártico?`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Eles são destilados nas águas aquecidas dos oceanos e
levados pelas correntes marinhas para as regiões polares,
onde se precipitam devido as águas frias dessas regiões.` },
      { id: 'B', type: 'text', value: `Eles evaporam nas regiões mais quentes e são levados pelas
correntes atmosféricas para regiões mais frias como os
polos, onde se condensam e voltam para a superfície.` },
      { id: 'C', type: 'text', value: `Após destilados, eles se tornam resistentes a degradação,
de forma que alcançam todo o planeta, pela ação de
correntes marinhas, inclusive as regiões polares.` },
      { id: 'D', type: 'text', value: `Os pesticidas organoclorados destilados, por conta da
eletronegatividade dos átomos de cloro, têm afinidade com
o gelo, o que faz com que eles se acumulem na Antártica ou
no Ártico.` },
      { id: 'E', type: 'text', value: `Por serem hidrofílicos, eles são condensados juntamente
com a água nas regiões quentes do planeta e se precipitam
nos polos juntamente com o gelo.` },
    ],
    correct: 'B',
    explanation: `Os pesticidas voláteis evaporam em regiões quentes, são transportados por correntes atmosféricas e condensam em regiões frias. A repetição desse transporte favorece sua acumulação nos polos, mesmo sem uso local.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
];

export default fuvest_2021_f1;
